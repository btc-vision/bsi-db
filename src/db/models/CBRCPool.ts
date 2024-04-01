import { ObjectId } from 'mongodb';
import { BaseModel } from './BaseModel.js';
import { TypeConverter } from '@btc-vision/motoswapcommon'
import { ICBRCPoolDocument } from '../documents/interfaces/ICBRCPoolDocument.js';

export class CBRCPool extends BaseModel {
    public xop: ObjectId;
    public type: string;
    public xid: string;
    public xtoken: ObjectId;
    public xamount: bigint;
    public tokenA: ObjectId;
    public tokenB: ObjectId;
    public supplyTokenA: bigint;
    public supplyTokenB: bigint;
    public totalShares: bigint;

    constructor(public cbrcPoolDocument: ICBRCPoolDocument) {
        super(cbrcPoolDocument._id,
            cbrcPoolDocument.version);
        this.xop = cbrcPoolDocument.xop;
        this.type = cbrcPoolDocument.type;
        this.xid = cbrcPoolDocument.xid;
        this.xtoken = cbrcPoolDocument.xtoken;
        this.xamount = TypeConverter.decimal128ToBigint(cbrcPoolDocument.xamount);
        this.tokenA = cbrcPoolDocument.tokenA;
        this.tokenB = cbrcPoolDocument.tokenB;
        this.supplyTokenA = TypeConverter.decimal128ToBigint(cbrcPoolDocument.supplyTokenA);
        this.supplyTokenB = TypeConverter.decimal128ToBigint(cbrcPoolDocument.supplyTokenB);
        this.totalShares = TypeConverter.decimal128ToBigint(cbrcPoolDocument.totalShares);
    }

    public override toDocument(): Readonly<ICBRCPoolDocument> {
        const document: ICBRCPoolDocument = {
            xop: this.xop,
            type: this.type,
            xid: this.xid,
            xtoken: this.xtoken,
            xamount: TypeConverter.bigintToDecimal128(this.xamount),
            tokenA: this.tokenA,
            tokenB: this.tokenB,
            supplyTokenA: TypeConverter.bigintToDecimal128(this.supplyTokenA),
            supplyTokenB: TypeConverter.bigintToDecimal128(this.supplyTokenB),
            totalShares: TypeConverter.bigintToDecimal128(this.totalShares),
            version: this.version,
            _id: this._id
        };

        return document;
    }
}




