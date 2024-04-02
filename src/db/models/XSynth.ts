import { ObjectId } from 'mongodb';
import { IXSynthDocument } from '../documents/interfaces/IXSynthDocument.js';
import { BaseModel } from './BaseModel.js';

export class XSynth extends BaseModel {
    public xop: ObjectId;
    public h: number; // !!! TODO: Junkfood: rename fielld
    public n: number; // !!! TODO: Junkfood: rename fielld
    public xid: string;
    public xcom: string;
    public account: string;
    //public params: { type: Array, default: {} }, //!!!! TODO
    //public data: { type: Array, default: [] },//!!!! TODO
    public success: boolean;
    public errCode?: string;

    constructor(readonly xsynthDocument: IXSynthDocument) {
        super(xsynthDocument._id, xsynthDocument.version);

        this.xop = xsynthDocument.xop;
        this.h = xsynthDocument.h;
        this.n = xsynthDocument.n;
        this.xid = xsynthDocument.xid;
        this.xcom = xsynthDocument.xcom;
        this.account = xsynthDocument.account;
        //this.params = xsynthDocument. { type: Array, default: {} }, //!!!! TODO
        //this.data = xsynthDocument. { type: Array, default: [] },//!!!! TODO
        this.success = xsynthDocument.success;
        this.errCode = xsynthDocument.errCode;
    }

    public override toDocument(): Readonly<IXSynthDocument> {
        const document: IXSynthDocument = {
            xop: this.xop,
            h: this.h,
            n: this.n,
            xid: this.xid,
            xcom: this.xcom,
            account: this.account,
            //params: { type: Array, default: {} }, //!!!! TODO
            //data: { type: Array, default: [] },//!!!! TODO
            success: this.success,
            errCode: this.errCode,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
