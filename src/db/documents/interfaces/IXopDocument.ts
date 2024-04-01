import { IBaseDocument } from './IBaseDocument.js';

export interface IXTargetObject {
    // node or address
    readonly type: string;

    // a destination point (node or address, eg: X:BURN or tb1q9z...)
    readonly source: string;
}

export interface IXParamsObject {
    [key: string]: string;
}

export interface IMoveObject {
    // block height of the move
    readonly height: number;

    // receiver address
    readonly toAccount: string;
}

export interface IXopDocument extends IBaseDocument {
    /**
     * Inscription id
     */
    readonly inscriptionId: string;

    /**
     * Inscription XORD sequence number
     * The sequence number is a unique number that is assigned to each inscription
     * based on the xop --metaprotocol-filter[] option
     * @previously "n"
     */
    readonly offset: number;

    /**
     * Inscription genesis block height
     * @previously "h"
     */
    readonly height: number;

    /**
     * Address of the inscription issuer
     * @previously "acc"
     */
    readonly account: string;

    /**
     * Fees paid for the inscription
     * @previously "fm"
     */
    readonly minerFees: number;

    /**
     * Padding of the inscription
     * @previously "fa"
     */
    readonly padding: number;

    /**
     * Addressed xop
     * An addressed xop is a xop that is sent to a specific virtual point
     * Eg:
     * @X:BURN::cbrc-20:XMAIL:MOTO=1?Subject=Hello&Body=World
     * @tb1q9z...::cbrc-20:XMAIL:MOTO=1?Subject=Hello&Body=World
     */
    readonly isx: boolean;

    /**
     * Meta protocol "opcode"
     * @previously "op"
     * @example
     * CBRC-20:XMAIL:MOTO=1?Subject=Hello&Body=World
     * opcode = XMAIL
     * @note
     * SHOULD BE UPPER CASE
     */
    readonly opCode: string;

    /**
     * Meta protocol "opkey"
     * @previously "k"
     * @example
     * CBRC-20:XMAIL:MOTO=1?Subject=Hello&Body=World
     * opkey = MOTO
     * @note
     * SHOULD BE UPPER CASE
     */
    readonly opKey: string;

    /**
     * Meta protocol "opvalue"
     * @previously "v"
     * @example
     * CBRC-20:XMAIL:MOTO=1?Subject=Hello&Body=World
     * opvalue = 1
     * @note
     * SHOULD BE UPPER CASE
     */
    readonly opValue: string;

    readonly xparams: IXParamsObject;

    readonly xtarget: IXTargetObject;

    // status of the interpretation
    readonly success: boolean;

    // if status is false, an error code
    readonly errCode: string;

    // if true, the inscription has been transfered (see "move" object)
    readonly hasMoved: boolean;

    readonly move: IMoveObject;

    // if true, the inscription has been burned (sent to a miner)
    readonly hasBurned: boolean;
}
