import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface ICBRCMintDocument extends IBaseDocumentWithId {
    readonly xop: ObjectId;
    readonly ticker: string;
    readonly amount: Decimal128;
    readonly last: boolean;
}
