import { DataAccessError, DataAccessErrorType, Logger } from '@btc-vision/motoswapcommon';
import {
    ClientSession,
    Collection,
    CountDocumentsOptions,
    Db,
    DeleteOptions,
    Filter,
    FindOptions,
    InsertOneOptions,
    ObjectId,
    OperationOptions,
    OptionalUnlessRequiredId,
    Sort,
    UpdateOptions,
} from 'mongodb';
import { DBConstants } from '../DBConstants.js';
import { IBaseDocument } from '../documents/interfaces/IBaseDocument.js';
import { PagingQueryInfo, PagingQueryResult } from './PagingQuery.js';

export abstract class BaseRepository<TDocument extends IBaseDocument> extends Logger {
    protected _db: Db;

    protected constructor(db: Db) {
        super();
        this._db = db;
    }

    public async deleteById(id: ObjectId, currentSession?: ClientSession): Promise<boolean> {
        try {
            const collection = this.getCollection();
            const filter: Partial<Filter<TDocument>> = {
                _id: id,
            } as Partial<Filter<TDocument>>;

            const options: DeleteOptions = this.getOptions(currentSession);

            const result = await collection.deleteOne(filter, options);

            return result.deletedCount === 1;
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(
                    error.message,
                    DataAccessErrorType.Unknown,
                    `id: ${id.toString()}`,
                );
            } else {
                throw error;
            }
        }
    }

    public async delete(document: TDocument, session?: ClientSession): Promise<boolean> {
        return await this.deleteById(document._id, session);
    }

    public async getAll(
        criteria?: Partial<Filter<TDocument>>,
        currentSession?: ClientSession,
    ): Promise<TDocument[]> {
        try {
            const collection = this.getCollection();
            const query = criteria || {};
            const options: FindOptions = this.getOptions(currentSession);

            return (await collection.find(query, options).toArray()) as TDocument[];
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async getById(id: ObjectId, currentSession?: ClientSession): Promise<TDocument | null> {
        try {
            const collection = this.getCollection();
            const filter: Partial<Filter<TDocument>> = {
                _id: id,
            } as Partial<Filter<TDocument>>;

            const options: FindOptions = this.getOptions(currentSession);

            return (await collection.findOne(filter, options)) as TDocument | null;
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(
                    error.message,
                    DataAccessErrorType.Unknown,
                    `id: ${id.toString()}`,
                );
            } else {
                throw error;
            }
        }
    }

    public async getCount(
        criteria?: Partial<Filter<TDocument>>,
        currentSession?: ClientSession,
    ): Promise<number> {
        try {
            const collection = this.getCollection();
            const query = criteria || {};
            const options: CountDocumentsOptions = this.getOptions(currentSession);

            return await collection.countDocuments(query, options);
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async queryOne(
        criteria: Partial<Filter<TDocument>>,
        currentSession?: ClientSession,
    ): Promise<TDocument | null> {
        try {
            const collection = this.getCollection();
            const options: FindOptions = this.getOptions(currentSession);

            return (await collection.findOne(criteria, options)) as TDocument;
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async queryMany(
        criteria: Partial<Filter<TDocument>>,
        currentSession?: ClientSession,
    ): Promise<TDocument[]> {
        try {
            const collection = this.getCollection();
            const options: FindOptions = this.getOptions(currentSession);

            return (await collection.find(criteria, options).toArray()) as TDocument[];
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async queryManyAndSortPaged(
        criteria: Partial<Filter<TDocument>>,
        sort: Sort,
        pagingQueryInfo: PagingQueryInfo,
        currentSession?: ClientSession,
    ): Promise<PagingQueryResult<TDocument>> {
        try {
            const collection = this.getCollection();
            const skips = pagingQueryInfo.pageSize * (pagingQueryInfo.pageNumber - 1);
            let count: number = await this.getCount(criteria);
            const options: FindOptions = this.getOptions(currentSession);

            const documents = await collection
                .find(criteria, options)
                .sort(sort)
                .skip(skips)
                .limit(pagingQueryInfo.pageSize)
                .toArray();

            return new PagingQueryResult<TDocument>(
                pagingQueryInfo.pageSize,
                pagingQueryInfo.pageNumber,
                count,
                pagingQueryInfo.pageNumber * pagingQueryInfo.pageSize < count,
                documents as TDocument[],
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async queryManyAndSort(
        criteria: Partial<Filter<TDocument>>,
        sort: Sort,
        currentSession?: ClientSession,
    ): Promise<TDocument[]> {
        try {
            const collection = this.getCollection();
            const options: FindOptions = this.getOptions(currentSession);

            return (await collection.find(criteria, options).sort(sort).toArray()) as TDocument[];
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async save(document: TDocument, currentSession?: ClientSession): Promise<void> {
        try {
            const collection = this.getCollection();
            const currentVersion = document.version;
            document.version = document.version + 1;

            const filter: Partial<Filter<TDocument>> = {
                _id: document._id,
                version: currentVersion,
            } as Partial<Filter<TDocument>>;

            const { _id, ...updateData } = document;

            if (_id.toString() !== DBConstants.NULL_OBJECT_ID) {
                const options: UpdateOptions = this.getOptions(currentSession);

                const result = await collection.updateOne(
                    filter,
                    { $set: updateData as Partial<TDocument> },
                    options,
                );

                if (result.modifiedCount === 0) {
                    throw new DataAccessError(
                        'Concurency error while updating.',
                        DataAccessErrorType.Concurency,
                        `id ${document._id}, version: ${currentVersion}`,
                    );
                }
            } else {
                const options: InsertOneOptions = this.getOptions(currentSession);

                document._id = new ObjectId();
                await collection.insertOne(
                    document as OptionalUnlessRequiredId<TDocument>,
                    options,
                );
            }
        } catch (error) {
            if (error instanceof DataAccessError) {
                throw error;
            } else if (error instanceof Error) {
                throw new DataAccessError(error.message);
            } else {
                throw error;
            }
        }
    }

    public async updatePartial(
        id: ObjectId,
        version: number,
        document: Partial<TDocument>,
        currentSession?: ClientSession,
    ): Promise<void> {
        try {
            const collection = this.getCollection();
            document.version = version + 1;

            const filter: Partial<Filter<TDocument>> = {
                _id: id,
                version: version,
            } as Partial<Filter<TDocument>>;

            const options: UpdateOptions = this.getOptions(currentSession);

            const updateResult = await collection.updateOne(filter, { $set: document }, options);

            if (updateResult.modifiedCount !== 1) {
                throw new DataAccessError(
                    'Concurency error while updating.',
                    DataAccessErrorType.Concurency,
                    `id ${id}, version: ${version}`,
                );
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new DataAccessError(
                    error.message,
                    DataAccessErrorType.Unknown,
                    `id: ${id.toString()}`,
                );
            } else {
                throw error;
            }
        }
    }

    protected abstract getCollection(): Collection<TDocument>;

    private getOptions(currentSession?: ClientSession): OperationOptions {
        const options: OperationOptions = {};

        if (currentSession) {
            options.session = currentSession;
        }

        return options;
    }
}
