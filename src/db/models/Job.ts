import { IJobDocument } from '../documents/interfaces/IJobDocument.js';
import { BaseModel } from './BaseModel.js';

export class Job extends BaseModel {
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
