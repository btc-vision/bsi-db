import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/bsi-common';

export interface ICBRCTransferDocument extends IBaseDocumentWithId {
    readonly xop: ObjectId;
    readonly ticker: string;
    readonly txid: string;
    readonly account: string;
    readonly amount: Decimal128;
    readonly to: string;
    readonly output: number;
    readonly transfered: boolean;
}
