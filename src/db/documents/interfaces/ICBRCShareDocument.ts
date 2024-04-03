import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface ICBRCShareDocument extends IBaseDocumentWithId {
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
