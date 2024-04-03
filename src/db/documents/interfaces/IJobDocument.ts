import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface IJobDocument extends IBaseDocumentWithId {
    readonly n: number; //!!! TODO: Junkfood rename field
    readonly work: boolean;
    readonly done: boolean;
}
