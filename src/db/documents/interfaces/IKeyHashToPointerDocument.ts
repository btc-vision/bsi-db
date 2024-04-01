import { IBaseDocument } from './IBaseDocument.js';

export interface IKeyHashToPointerDocument extends IBaseDocument {
    readonly keyHash: string;
    readonly pointer: string;
}
