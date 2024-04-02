import { BaseModel } from './BaseModel.js';
import { IAccountDocument } from '../documents/interfaces/IAccountDocument.js';
import { TypeConverter } from '@btc-vision/motoswapcommon';

export class Account extends BaseModel {
    public account: string;
    public ticker: string;
    public amount: bigint;
    public lock: bigint;
    public mint: bigint;
    public stake: bigint;

    constructor(readonly accountDocument: IAccountDocument) {
        super(accountDocument._id,
            accountDocument.version);

        this.account = accountDocument.account;
        this.ticker = accountDocument.ticker;
        this.amount = TypeConverter.decimal128ToBigint(accountDocument.amount);
        this.lock = TypeConverter.decimal128ToBigint(accountDocument.lock);
        this.mint = TypeConverter.decimal128ToBigint(accountDocument.mint);
        this.stake = TypeConverter.decimal128ToBigint(accountDocument.stake);
    }

    public override toDocument(): Readonly<IAccountDocument> {
        const document: IAccountDocument = {
            account: this.account,
            ticker: this.ticker,
            amount: TypeConverter.bigintToDecimal128(this.amount),
            lock: TypeConverter.bigintToDecimal128(this.lock),
            mint: TypeConverter.bigintToDecimal128(this.mint),
            stake: TypeConverter.bigintToDecimal128(this.stake),
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
