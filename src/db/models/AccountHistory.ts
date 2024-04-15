import { TypeConverter } from '@btc-vision/bsi-common';
import { ObjectId } from 'mongodb';
import { IAccountHistoryDocument } from '../documents/interfaces/IAccountHistoryDocument.js';
import { BaseModelWithId } from '@btc-vision/bsi-common';

export class AccountHistory extends BaseModelWithId {
    public xop: ObjectId;
    public account: ObjectId;
    public source: string;
    public amount: bigint;

    constructor(readonly accountHistoryDocument: IAccountHistoryDocument) {
        super(accountHistoryDocument._id, accountHistoryDocument.version);

        this.xop = accountHistoryDocument.xop;
        this.account = accountHistoryDocument.account;
        this.source = accountHistoryDocument.source;
        this.amount = TypeConverter.decimal128ToBigint(accountHistoryDocument.amount);
    }

    public override toDocument(): Readonly<IAccountHistoryDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<IAccountHistoryDocument> {
        const document: IAccountHistoryDocument = {
            account: this.account,
            amount: TypeConverter.bigintToDecimal128(this.amount),
            source: this.source,
            xop: this.xop,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
