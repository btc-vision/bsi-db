import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface ICBRCPoolDocument extends IBaseDocument {
    readonly xop: ObjectId;
    readonly type: string;
    readonly xid: string;
    readonly xtoken: ObjectId;
    readonly xamount: Decimal128;
    readonly tokenA: ObjectId;
    readonly tokenB: ObjectId;
    readonly supplyTokenA: Decimal128;
    readonly supplyTokenB: Decimal128;
    readonly totalShares: Decimal128;
}
