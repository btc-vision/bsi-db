import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface ICBRCDistributionDocumentBox {
    ticker: string;
    amount: Decimal128;
}

export interface ICBRCDistributionDocument extends IBaseDocument {
    readonly previouDistribution: ObjectId;
    readonly poolId: string;
    readonly box: ICBRCDistributionDocumentBox[];
    readonly baseBlock: number;
    readonly distBlock: number;
    readonly xin: ObjectId[];
    readonly xout: ObjectId[];
    readonly complete: Decimal128;
}