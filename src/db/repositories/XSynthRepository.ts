import { Collection, Db } from 'mongodb';
import { IXSynthDocument } from '../documents/interfaces/IXSynthDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class XSynthRepository extends BaseRepository<IXSynthDocument> {
    public moduleName: string = 'XSynthRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXSynthDocument> {
        return this._db.collection('xsynths');
    }
}
