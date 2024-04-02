import path from 'path';
import { TestConfig } from './TestConfig.js';
import { TestConfigLoader } from './TestConfigLoader.js';

const configPath = path.join(__dirname, '../../', 'tests/config/motoswap.unit.test.conf');

const configManager: TestConfigLoader = new TestConfigLoader(configPath);
const config: TestConfig = configManager.getConfigs();

export const Config: TestConfig = config;
