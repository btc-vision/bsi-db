import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface ICBRCDistributionDocumentBox {
    ticker: string;
    amount: Decimal128;
}

export interface ICBRCDistributionDocument extends IBaseDocumentWithId {
    readonly previouDistribution: ObjectId;
    readonly poolId: string;
    readonly box: ICBRCDistributionDocumentBox[];
    readonly baseBlock: number;
    readonly distBlock: number;
    readonly xin: ObjectId[];
    readonly xout: ObjectId[];
    readonly complete: Decimal128;
}
