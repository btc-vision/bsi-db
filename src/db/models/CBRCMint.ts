import { TypeConverter } from '@btc-vision/motoswapcommon';
import { ObjectId } from 'mongodb';
import { ICBRCMintDocument } from '../documents/interfaces/ICBRCMintDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class CBRCMint extends BaseModelWithId {
    public xop: ObjectId;
    public ticker: string;
    public amount: bigint;
    public last: boolean;

    constructor(readonly cbrcMintDocument: ICBRCMintDocument) {
        super(cbrcMintDocument._id, cbrcMintDocument.version);
        this.xop = cbrcMintDocument.xop;
        this.ticker = cbrcMintDocument.ticker;
        this.amount = TypeConverter.decimal128ToBigint(cbrcMintDocument.amount);
        this.last = cbrcMintDocument.last;
    }

    public override toDocument(): Readonly<ICBRCMintDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<ICBRCMintDocument> {
        const document: ICBRCMintDocument = {
            xop: this.xop,
            ticker: this.ticker,
            amount: TypeConverter.bigintToDecimal128(this.amount),
            last: this.last,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
