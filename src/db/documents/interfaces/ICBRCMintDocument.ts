import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface ICBRCMintDocument extends IBaseDocument {
    readonly xop: ObjectId;
    readonly ticker: string;
    readonly amount: Decimal128;
    readonly last: boolean;
}
