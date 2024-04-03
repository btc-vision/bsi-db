import { IJobDocument } from '../documents/interfaces/IJobDocument.js';
import { BaseModelWithId } from '@btc-vision/motoswapcommon';

export class Job extends BaseModelWithId {
    public n: number; // !!! TODO: Junkfood: rename fielld
    public work: boolean;
    public done: boolean;

    constructor(readonly jobDocument: IJobDocument) {
        super(jobDocument._id, jobDocument.version);

        this.n = jobDocument.n;
        this.work = jobDocument.txid;
        this.done = jobDocument.done;
    }

    public override toDocument(): Readonly<IJobDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<IJobDocument> {
        const document: IJobDocument = {
            n: this.n,
            work: this.work,
            done: this.done,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
