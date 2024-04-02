import { Collection, Db } from 'mongodb';
import { IJobDocument } from '../documents/interfaces/IJobDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class JobRepository extends BaseRepository<IJobDocument> {
    public moduleName: string = 'JobRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IJobDocument> {
        return this._db.collection('jobs');
    }
}
