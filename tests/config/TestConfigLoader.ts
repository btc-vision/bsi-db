import { ConfigManager, IConfigBase } from '@btc-vision/motoswapcommon';
import { TestConfig } from './TestConfig';

export class TestConfigLoader extends ConfigManager<IConfigBase> {
    constructor(fullFileName: string) {
        super(fullFileName);
    }

    public getConfigs(): TestConfig {
        return new TestConfig(this.config);
    }
}
