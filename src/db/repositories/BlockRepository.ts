import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IBlockDocument } from '../documents/interfaces/IBlockDocument.js';

export class BlockRepository extends BaseRepository<IBlockDocument> {
    public moduleName: string = 'BlockRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IBlockDocument> {
        return this._db.collection('blocks');
    }
}
