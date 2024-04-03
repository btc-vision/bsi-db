import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface IAccountHistoryDocument extends IBaseDocumentWithId {
    readonly xop: ObjectId;
    readonly account: ObjectId;
    readonly source: string;
    readonly amount: Decimal128;
}
