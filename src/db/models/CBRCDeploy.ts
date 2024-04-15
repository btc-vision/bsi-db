import { TickerHelper } from '@btc-vision/bsi-common';
import { Decimal128, ObjectId } from 'mongodb';
import { ICBRCDeployDocument } from '../documents/interfaces/ICBRCDeployDocument.js';
import { BaseModelWithId } from '@btc-vision/bsi-common';

export declare type CBRCDeployMintOps = [number, number];

export class CBRCDeploy extends BaseModelWithId {
    public xop: ObjectId;
    public ticker: string;
    public hexcode: string;
    public totalSupply: Decimal128;
    public stakeAmount: Decimal128;
    public maximumAmount: Decimal128;
    public limitPerMint: Decimal128;
    public decimalPrecision: number;
    public isMintable: boolean;
    public mintOperations: CBRCDeployMintOps;

    constructor(readonly cbrcDeployDocument: ICBRCDeployDocument) {
        super(cbrcDeployDocument._id, cbrcDeployDocument.version);
        if (!TickerHelper.isValidTicker(cbrcDeployDocument.ticker)) {
            throw new Error('The ticker is invalid');
        }

        this.xop = cbrcDeployDocument.xop;
        this.ticker = cbrcDeployDocument.ticker;
        this.hexcode = cbrcDeployDocument.hexcode;
        this.totalSupply = cbrcDeployDocument.totalSupply;
        this.stakeAmount = cbrcDeployDocument.stakeAmount;
        this.maximumAmount = cbrcDeployDocument.maximumAmount;
        this.limitPerMint = cbrcDeployDocument.limitPerMint;
        this.decimalPrecision = cbrcDeployDocument.decimalPrecision;
        this.isMintable = cbrcDeployDocument.isMintable;
        this.mintOperations = cbrcDeployDocument.mintOperations;
    }

    public override toDocument(): Readonly<ICBRCDeployDocument> {
        throw new Error('Not implemented.');
    }

    public override toDocumentWithId(): Readonly<ICBRCDeployDocument> {
        const document: ICBRCDeployDocument = {
            xop: this.xop,
            ticker: this.ticker,
            hexcode: this.hexcode,
            totalSupply: this.totalSupply,
            stakeAmount: this.stakeAmount,
            maximumAmount: this.maximumAmount,
            limitPerMint: this.limitPerMint,
            decimalPrecision: this.decimalPrecision,
            isMintable: this.isMintable,
            mintOperations: this.mintOperations,
            version: this.version,
            _id: this._id,
        };

        return document;
    }
}
