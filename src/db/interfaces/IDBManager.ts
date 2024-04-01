import { IConfig, Logger, MONGO_CONNECTION_TYPE } from '@btc-vision/motoswapcommon';

export interface IDBManager {
    connect: () => Promise<void>;
    setup: (targetDatabase: string | MONGO_CONNECTION_TYPE) => Promise<boolean>;
    close: () => Promise<void>;
}

export abstract class InnerDBManager extends Logger implements IDBManager {
    protected config: IConfig;

    constructor(config: IConfig) {
        super();
        this.config = config;
    }

    public abstract connect(): Promise<void>;

    public abstract setup(targetDatabase: string | MONGO_CONNECTION_TYPE): Promise<boolean>;

    public abstract close(): Promise<void>;
}
