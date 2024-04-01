import { Decimal128 } from 'mongodb';
import { IBaseDocument } from './IBaseDocument.js';

export interface IAccountDocument extends IBaseDocument {
    /**
     * Account ID
     * Can be:
     *   [@address:] physical address (any ProbablyValid bitcoin address)
     *   @X: node ID ("@X:" + UPPERCASED 128-max characters STRING)
     *     - WE SUPPORT ONLY BurnEndpoint (X:BURN)
     */
    readonly account: string;
    /**
     * Ticker
     * UPPERCASED 3-32 characters STRING
     */
    readonly ticker: string;
    readonly amount: Decimal128;
    readonly lock: Decimal128;
    readonly mint: Decimal128;
    readonly stake: Decimal128;
}
