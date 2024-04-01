import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface ICBRCShareDocument extends IBaseDocument {
    readonly pool: ObjectId;
    readonly xid: string;
    readonly type: string;
    readonly ticks: string[];
    readonly account: string;
    readonly accops: ObjectId[];
    readonly accumulativeA: Decimal128[];
    readonly accumulativeB: Decimal128[];
    readonly accumulative: Decimal128[];
    readonly amount: Decimal128;
    readonly lockBlock: number;
}
