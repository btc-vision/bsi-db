import { IBaseDocument } from './IBaseDocument.js';

export interface IJobDocument extends IBaseDocument {
    readonly n: number; //!!! TODO: Junkfood rename field
    readonly work: boolean;
    readonly done: boolean;
}
