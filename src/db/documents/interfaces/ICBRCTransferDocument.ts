import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface ICBRCTransferDocument extends IBaseDocument {
    readonly xop: ObjectId;
    readonly ticker: string;
    readonly txid: string;
    readonly account: string;
    readonly amount: Decimal128;
    readonly to: string;
    readonly output: number;
    readonly transfered: boolean;
}
