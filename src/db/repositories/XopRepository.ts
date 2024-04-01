import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IXopDocument } from '../documents/interfaces/IXopDocument.js';

export class XopRepository extends BaseRepository<IXopDocument> {
    public moduleName: string = 'XopRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXopDocument> {
        return this._db.collection('xops');
    }
}
