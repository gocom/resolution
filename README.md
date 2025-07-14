Resolution
=====

[![npm](https://img.shields.io/npm/v/%40gocom%2Fresolution)](https://www.npmjs.com/package/@gocom/resolution) ![MIT](https://img.shields.io/badge/license-MIT-green) ![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)

Identify pixel resolutions, dimension strings and aspect ratios. Offers a library for parsing given pixel resolution
values and returning  resulting aspect ratios, or human-readable short name identifiers. The main use-case for
the library would be to convert raw resolution dimensions to 1080p, 4K and 8K, and other identifiers. Written in
TypeScript, and supports both client-side browser and Node.js backend contexts.

⚡ Install
-----

Using npm:

```shell
$ npm install @gocom/resolution
```

📖 Documentation
-----

See [API Docs](https://github.com/gocom/resolution/blob/docs/master/Public/API.md).

📝 Example Usage
----

### Parsing resolution dimensions string

The following would parse the given `7680x4320` resolution string, and returns the results as an object:

```typescript
import {parse} from '@gocom/resolution';

const resolution = parse('7680x4320');

console.log(
  resolution?.name, // 8K UHD
  resolution?.group, // 8K
  resolution?.width, // 7680
  resolution?.height, // 4320
  resolution?.aspectRatio, // 16:9
  resolution?.dimensionRatio, // 1.78
);
```

For more see [API documentation](https://github.com/gocom/resolution/blob/docs/master/Public/API.md).

🛠️ Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/resolution/blob/master/CONTRIBUTING.md).
