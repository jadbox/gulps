import pkg from '../package.json';

export default [
    pkg.name,
    '@version v' + pkg.version,
    '@license ' + pkg.license,
  ].join('\n');