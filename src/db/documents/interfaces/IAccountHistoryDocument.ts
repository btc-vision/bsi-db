import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface IAccountHistoryDocument extends IBaseDocument {
    readonly xop: ObjectId;
    readonly account: ObjectId;
    readonly source: string;
    readonly amount: Decimal128;
}
