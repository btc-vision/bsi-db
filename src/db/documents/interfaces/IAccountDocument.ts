import { Decimal128 } from 'mongodb';
import { IBaseDocumentWithId } from '@btc-vision/bsi-common';

export interface IAccountDocument extends IBaseDocumentWithId {
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
