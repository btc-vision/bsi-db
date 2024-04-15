import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/bsi-common';

export interface ICBRCMintDocument extends IBaseDocumentWithId {
    readonly xop: ObjectId;
    readonly ticker: string;
    readonly amount: Decimal128;
    readonly last: boolean;
}
