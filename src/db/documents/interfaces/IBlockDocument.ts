import { Document } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface IBlockDocument extends IBaseDocument {
    readonly height: number,
    readonly hash: string,
    readonly ntx: number,
    readonly ntr: number,
    readonly nops: number,
    readonly nopserr: number,
    readonly miner: [string],
    readonly time: number
}
