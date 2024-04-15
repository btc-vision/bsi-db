import { IBlockDocument } from '../documents/interfaces/IBlockDocument.js';
import { BaseModelWithId } from '@btc-vision/bsi-common';

export class Block extends BaseModelWithId {
    public height: number;
    public hash: string;
    public ntx: number;
    public ntr: number;
    public nops: number;
    public nopserr: number;
    public miner: [string];
    public time: number;

    constructor(readonly blockDocument: IBlockDocument) {
        super(blockDocument._id, blockDocument.version);

        this.height = blockDocument.height;
        this.hash = blockDocument.hash;
        this.ntx = blockDocument.ntx;
        this.ntr = blockDocument.ntr;
        this.nops = blockDocument.nops;
        this.nopserr = blockDocument.nopserr;
        this.miner = blockDocument.miner;
        this.time = blockDocument.time;
    }

    public override toDocument(): Readonly<IBlockDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<IBlockDocument> {
        const document: IBlockDocument = {
            height: this.height,
            hash: this.hash,
            ntx: this.ntx,
            ntr: this.ntr,
            nops: this.nops,
            nopserr: this.nopserr,
            miner: this.miner,
            time: this.time,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
