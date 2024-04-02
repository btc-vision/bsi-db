import { Decimal128, ObjectId } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export declare type ICBRCDeployDocumentMintOps = [number, number];

export interface ICBRCDeployDocument extends IBaseDocument {
    readonly xop: ObjectId;

    /**
     * Ticker of the token
     * Based on the regex : /^[A-Z0-9]{3,32}$/
     */
    readonly ticker: string;

    /**
     * Hexcode of the token
     * STR (uppercased) to hex of the ticker (uppercased)
     * @previously tickerHex
     * @code Buffer.from(ticker.toUpperCase(), 'utf8').toString('hex').toUpperCase();
     * @previously was murmurhash3 of TICKER (uppercased)
     */
    readonly hexcode: string;

    /**
     * Total supply of the token
     */
    readonly totalSupply: Decimal128;

    /**
     * Stake amount of the token
     */
    readonly stakeAmount: Decimal128;

    /**
     * Maximum amount of the token (defined during deploy operation)
     */
    readonly maximumAmount: Decimal128;

    /**
     * Limit per mint operation
     */
    readonly limitPerMint: Decimal128;

    /**
     * Decimal precision of the token
     * default: 8
     */
    readonly decimalPrecision: number;

    /**
     * Mintable flag
     */
    readonly isMintable: boolean;

    /**
     * Mint operations
     */
    readonly mintOperations: ICBRCDeployDocumentMintOps;
}
