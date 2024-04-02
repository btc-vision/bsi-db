import { BaseModel } from './BaseModel.js';
import { IBlockDocument } from '../documents/interfaces/IBlockDocument.js';


export class Block extends BaseModel {
    public height: number;
    public hash: string;
    public ntx: number;
    public ntr: number;
    public nops: number;
    public nopserr: number;
    public miner: [string];
    public time: number;

    constructor(readonly blockDocument: IBlockDocument) {
        super(blockDocument._id,
            blockDocument.version);

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
