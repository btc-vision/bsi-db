import { TypeConverter } from '@btc-vision/motoswapcommon';
import { ObjectId } from 'mongodb';
import {
    ICBRCDistributionDocument,
    ICBRCDistributionDocumentBox,
} from '../documents/interfaces/ICBRCDistributionDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class CBRCDistributionBox {
    public ticker: string;
    public amount: bigint;

    constructor(readonly cbrcDistributionBox: ICBRCDistributionDocumentBox) {
        this.ticker = cbrcDistributionBox.ticker;
        this.amount = TypeConverter.decimal128ToBigint(cbrcDistributionBox.amount);
    }
}

export class CBRCDistribution extends BaseModelWithId {
    public previouDistribution: ObjectId;
    public poolId: string;
    public box: CBRCDistributionBox[];
    public baseBlock: number;
    public distBlock: number;
    public xin: ObjectId[];
    public xout: ObjectId[];
    public complete: bigint;

    constructor(readonly cbrcDistributionDocument: ICBRCDistributionDocument) {
        super(cbrcDistributionDocument._id, cbrcDistributionDocument.version);
        this.previouDistribution = cbrcDistributionDocument.previouDistribution;
        this.poolId = cbrcDistributionDocument.poolId;
        this.box = cbrcDistributionDocument.box.map((item) => new CBRCDistributionBox(item));
        this.baseBlock = cbrcDistributionDocument.baseBlock;
        this.distBlock = cbrcDistributionDocument.distBlock;
        this.xin = cbrcDistributionDocument.xin;
        this.xout = cbrcDistributionDocument.xout;
        this.complete = TypeConverter.decimal128ToBigint(cbrcDistributionDocument.complete);
    }

    public override toDocument(): Readonly<ICBRCDistributionDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<ICBRCDistributionDocument> {
        const document: ICBRCDistributionDocument = {
            previouDistribution: this.previouDistribution,
            poolId: this.poolId,
            box: this.box.map((item) => ({
                ticker: item.ticker,
                amount: TypeConverter.bigintToDecimal128(item.amount),
            })),
            baseBlock: this.baseBlock,
            distBlock: this.distBlock,
            xin: this.xin,
            xout: this.xout,
            complete: TypeConverter.bigintToDecimal128(this.complete),
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
