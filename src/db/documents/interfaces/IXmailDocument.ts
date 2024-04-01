import { ObjectId, Decimal128 } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface IXmailDocumentTargets {
    account: string;
    amount: Decimal128;
    value: string; // !!! TODO: Junkfood: what is value?
    success: boolean;
    errCode?: string;
}

export interface IXmailDocument extends IBaseDocument {
    xop: ObjectId;
    xcom: string;
    ticker: string;
    account: string;
    subject: string;
    body: string;
    value: Decimal128;
    sum: Decimal128;
    targets: IXmailDocumentTargets[];
    success: boolean;
    errCode?: string;
}
