import {
    IMoveObject,
    IXopDocument,
    IXParamsObject,
    IXTargetObject,
} from '../documents/interfaces/IXopDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class XTargetObject {
    public type: string;
    public source: string;

    constructor(readonly xtargetObjectDocument: IXTargetObject) {
        this.type = xtargetObjectDocument.type;
        this.source = xtargetObjectDocument.source;
    }
}

export type XParamsObject = Map<string, string>;

export class MoveObject {
    public height: number;
    public toAccount: string;

    constructor(readonly moveObjectDocument: IMoveObject) {
        this.height = moveObjectDocument.height;
        this.toAccount = moveObjectDocument.toAccount;
    }
}

export class Xop extends BaseModelWithId {
    public inscriptionId: string;
    public offset: number;
    public height: number;
    public account: string;
    public minerFees: number;
    public padding: number;
    public isx: boolean;
    public opCode: string;
    public opKey: string;
    public opValue: string;
    public xparams: XParamsObject = new Map();
    public xtarget: XTargetObject;
    public success: boolean;
    public errCode: string;
    public hasMoved: boolean;
    public move: MoveObject;
    public hasBurned: boolean;

    constructor(readonly xopDocument: IXopDocument) {
        super(xopDocument._id, xopDocument.version);

        this.inscriptionId = xopDocument.inscriptionId;
        this.offset = xopDocument.offset;
        this.height = xopDocument.height;
        this.account = xopDocument.account;
        this.minerFees = xopDocument.minerFees;
        this.padding = xopDocument.padding;
        this.isx = xopDocument.isx;
        this.opCode = xopDocument.opCode;
        this.opKey = xopDocument.opKey;
        this.opValue = xopDocument.opValue;

        for (const key in xopDocument.xparams) {
            const value = xopDocument.xparams[key];

            this.xparams.set(key, value);
        }

        this.xtarget = new XTargetObject(xopDocument.xtarget);
        this.success = xopDocument.success;
        this.errCode = xopDocument.errCode;
        this.hasMoved = xopDocument.hasMoved;
        this.move = new MoveObject(xopDocument.move);
        this.hasBurned = xopDocument.hasBurned;
    }

    public override toDocument(): Readonly<IXopDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<IXopDocument> {
        const params: IXParamsObject = {};

        this.xparams.forEach((key: string, value: string) => {
            params[key] = value;
        });

        const document: IXopDocument = {
            inscriptionId: this.inscriptionId,
            offset: this.offset,
            height: this.height,
            account: this.account,
            minerFees: this.minerFees,
            padding: this.padding,
            isx: this.isx,
            opCode: this.opCode,
            opKey: this.opKey,
            opValue: this.opValue,
            xparams: params,
            xtarget: this.xtarget,
            success: this.success,
            errCode: this.errCode,
            hasMoved: this.hasMoved,
            move: this.move,
            hasBurned: this.hasBurned,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
