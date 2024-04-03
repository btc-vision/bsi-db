import { TypeConverter } from '@btc-vision/motoswapcommon';
import { ObjectId } from 'mongodb';
import { IXmailDocument, IXmailDocumentTargets } from '../documents/interfaces/IXmailDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class XmailDocumentTargets {
    public account: string;
    public amount: bigint;
    public value: string; //!!! TODO:
    public success: boolean;
    public errCode?: string;

    constructor(readonly documentTargets: IXmailDocumentTargets) {
        this.account = documentTargets.account;
        this.amount = TypeConverter.decimal128ToBigint(documentTargets.amount);
        this.value = documentTargets.value;
        this.success = documentTargets.success;
        this.errCode = documentTargets.errCode;
    }
}

export class Xmail extends BaseModelWithId {
    public xop: ObjectId;
    public xcom: string;
    public ticker: string;
    public account: string;
    public subject: string;
    public body: string;
    public value: bigint;
    public sum: bigint;
    public targets: XmailDocumentTargets[];
    public success: boolean;
    public errCode?: string;

    constructor(readonly xmailDocument: IXmailDocument) {
        super(xmailDocument._id, xmailDocument.version);

        this.xop = xmailDocument.xop;
        this.xcom = xmailDocument.xcom;
        this.account = xmailDocument.account;
        this.ticker = xmailDocument.ticker;
        this.subject = xmailDocument.subject;
        this.body = xmailDocument.body;
        this.value = TypeConverter.decimal128ToBigint(xmailDocument.value);
        this.sum = TypeConverter.decimal128ToBigint(xmailDocument.sum);
        this.targets = xmailDocument.targets.map((item) => new XmailDocumentTargets(item));
        this.success = xmailDocument.success;
        this.errCode = xmailDocument.errCode;
    }

    public override toDocument(): Readonly<IXmailDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<IXmailDocument> {
        const document: IXmailDocument = {
            xop: this.xop,
            xcom: this.xcom,
            account: this.account,
            ticker: this.ticker,
            subject: this.subject,
            body: this.body,
            value: TypeConverter.bigintToDecimal128(this.value),
            sum: TypeConverter.bigintToDecimal128(this.sum),
            targets: this.targets.map((item) => ({
                account: item.account,
                amount: TypeConverter.bigintToDecimal128(item.amount),
                success: item.success,
                value: item.value,
                errCode: item.errCode,
            })),
            success: this.success,
            errCode: this.errCode,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
