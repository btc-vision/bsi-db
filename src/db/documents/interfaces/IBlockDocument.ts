import { IBaseDocumentWithId } from '@btc-vision/motoswapcommon';

export interface IBlockDocument extends IBaseDocumentWithId {
    readonly height: number;
    readonly hash: string;
    readonly ntx: number;
    readonly ntr: number;
    readonly nops: number;
    readonly nopserr: number;
    readonly miner: [string];
    readonly time: number;
}
