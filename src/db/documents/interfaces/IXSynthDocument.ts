import { ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface IXSynthDocument extends IBaseDocument {
    readonly xop: ObjectId;
    readonly h: number; // !!! TODO: Junkfood: rename fielld
    readonly n: number; // !!! TODO: Junkfood: rename fielld
    readonly xid: string;
    readonly xcom: string;
    readonly account: string;
    //readonly params: { type: Array, default: {} }, //!!!! TODO: Junkfood: what is the type of the array?
    //readonly data: { type: Array, default: [] },//!!!! TODO: Junkfood: what is the type of the array?
    readonly success: boolean;
    readonly errCode?: string;
}
