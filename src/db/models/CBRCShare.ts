import { TypeConverter } from '@btc-vision/motoswapcommon';
import { ObjectId } from 'mongodb';
import { ICBRCShareDocument } from '../documents/interfaces/ICBRCShareDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class CBRCShare extends BaseModelWithId {
    public pool: ObjectId;
    public xid: string;
    public type: string;
    public ticks: string[];
    public account: string;
    public accops: ObjectId[];
    public accumulativeA: bigint[];
    public accumulativeB: bigint[];
    public accumulative: bigint[];
    public amount: bigint;
    public lockBlock: number;

    constructor(public cbrcShareDocument: ICBRCShareDocument) {
        super(cbrcShareDocument._id, cbrcShareDocument.version);
        this.pool = cbrcShareDocument.pool;
        this.xid = cbrcShareDocument.xid;
        this.type = cbrcShareDocument.type;
        this.ticks = cbrcShareDocument.ticks;
        this.account = cbrcShareDocument.account;
        this.accops = cbrcShareDocument.accops;
        this.accumulativeA = TypeConverter.decimal128ToBigintArray(cbrcShareDocument.accumulativeA);
        this.accumulativeB = TypeConverter.decimal128ToBigintArray(cbrcShareDocument.accumulativeB);
        this.accumulative = TypeConverter.decimal128ToBigintArray(cbrcShareDocument.accumulative);
        this.amount = TypeConverter.decimal128ToBigint(cbrcShareDocument.amount);
        this.lockBlock = cbrcShareDocument.lockBlock;
    }

    public override toDocument(): Readonly<ICBRCShareDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<ICBRCShareDocument> {
        const document: ICBRCShareDocument = {
            pool: this.pool,
            xid: this.xid,
            type: this.type,
            ticks: this.ticks,
            account: this.account,
            accops: this.accops,
            accumulativeA: TypeConverter.bigintToDecimal128Array(this.accumulativeA),
            accumulativeB: TypeConverter.bigintToDecimal128Array(this.accumulativeB),
            accumulative: TypeConverter.bigintToDecimal128Array(this.accumulative),
            amount: TypeConverter.bigintToDecimal128(this.amount),
            lockBlock: this.lockBlock,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
