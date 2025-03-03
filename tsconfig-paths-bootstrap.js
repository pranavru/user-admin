import { register as tsNodeRegister } from 'ts-node';
import { register as tsconfigPathsRegister } from 'tsconfig-paths';
import './src/app';

tsNodeRegister({
  project: 'tsconfig.json',
  transpileOnly: true,
});
tsconfigPathsRegister();