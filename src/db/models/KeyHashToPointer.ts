import { BaseModel } from './BaseModel.js';
import { IKeyHashToPointerDocument } from '../documents/interfaces/IKeyHashToPointerDocument.js'

export class KeyHashToPointer extends BaseModel {
    public keyHash: string;
    public pointer: string;

    constructor(readonly keyHashToPointerDocument: IKeyHashToPointerDocument) {
        super(keyHashToPointerDocument._id,
            keyHashToPointerDocument.version);

        this.keyHash = keyHashToPointerDocument.keyHash;
        this.pointer = keyHashToPointerDocument.pointer;
    }

    public override toDocument(): Readonly<IKeyHashToPointerDocument> {
        const document: IKeyHashToPointerDocument = {
            keyHash: this.keyHash,
            pointer: this.pointer,
            version: this.version,
            _id: this._id
        };

        return document;
    }
}
