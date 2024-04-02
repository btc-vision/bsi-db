import { ConfigBase, IConfig, IConfigBase } from '@btc-vision/motoswapcommon';

export class TestConfig extends ConfigBase<IConfigBase> {
    constructor(config: IConfig<IConfigBase>) {
        super(config);
    }
}
