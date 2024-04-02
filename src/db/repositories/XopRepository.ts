import { Collection, Db } from 'mongodb';
import { IXopDocument } from '../documents/interfaces/IXopDocument.js';
import { BaseRepository } from './BaseRepository.js';

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
