import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IJobDocument } from '../documents/interfaces/IJobDocument.js';

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
