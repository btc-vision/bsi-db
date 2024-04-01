import { Decimal128, ObjectId } from 'mongodb';
import { BaseModel } from './BaseModel.js';
import { ICBRCTransferDocument } from '../documents/interfaces/ICBRCTransferDocument.js';
import { TypeConverter } from '@btc-vision/motoswapcommon'

export class CBRCTransfer extends BaseModel {
    public xop: ObjectId;
    public txid: string;
    public ticker: string;
    public amount: bigint;
    public account: string;
    public to: string;
    public output: number;
    public transfered: boolean;

    constructor(readonly cbrcTransferDocument: ICBRCTransferDocument) {
        super(cbrcTransferDocument._id, cbrcTransferDocument.version);

        this.xop = cbrcTransferDocument.xop;
        this.txid = cbrcTransferDocument.txid;
        this.ticker = cbrcTransferDocument.ticker;
        this.amount = TypeConverter.decimal128ToBigint(cbrcTransferDocument.amount);
        this.account = cbrcTransferDocument.account;
        this.to = cbrcTransferDocument.to;
        this.transfered = cbrcTransferDocument.transfered;
        this.output= cbrcTransferDocument.output;
    }

    public override toDocument(): Readonly<ICBRCTransferDocument> {
        const document: ICBRCTransferDocument = {
            xop: this.xop,
            txid: this.txid,
            ticker: this.ticker,
            amount: TypeConverter.bigintToDecimal128(this.amount),
            account: this.account,
            to: this.to,
            transfered: this.transfered,
            output: this.output,
            version: this.version,
            _id: this._id
        };

        return document;
    }
}
