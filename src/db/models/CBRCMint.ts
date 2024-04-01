import { ObjectId } from 'mongodb';
import { BaseModel } from './BaseModel.js';
import { TypeConverter } from '@btc-vision/motoswapcommon'
import { ICBRCMintDocument } from '../documents/interfaces/ICBRCMintDocument.js';

export class CBRCMint extends BaseModel {
    public xop: ObjectId;
    public ticker: string;
    public amount: bigint;
    public last: boolean;

    constructor(readonly cbrcMintDocument: ICBRCMintDocument) {
        super(cbrcMintDocument._id,
            cbrcMintDocument.version);
        this.xop = cbrcMintDocument.xop;
        this.ticker = cbrcMintDocument.ticker;
        this.amount = TypeConverter.decimal128ToBigint(cbrcMintDocument.amount);
        this.last = cbrcMintDocument.last;
    }

    public override toDocument(): Readonly<ICBRCMintDocument> {
        const document: ICBRCMintDocument = {
            xop: this.xop,
            ticker:this.ticker,
            amount: TypeConverter.bigintToDecimal128(this.amount),
            last: this.last,
            version: this.version,
            _id: this._id
        };

        return document;
    }
}




