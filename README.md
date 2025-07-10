Resolution
=====

Identify pixel resolutions and dimension strings. Offers a library for parsing given pixel resolution values and
returning  resulting aspect ratios, or human-readable short name identifiers. The main use-case for the library would
be converting raw resolution  dimensions to 1080p, 4K and 8K, and so-on, identifiers. Written in JavaScript and supports
both client-side browser and Node.js backend contexts.

Install
-----

Using npm:

```shell
$ npm install @gocom/resolution
```

Documentation
-----

See [API Docs](https://github.com/gocom/resolution/blob/docs/README.md).

Example Usage
----

### Parsing resolution dimensions string

The following would parse the given resolution string, and returning results as an object:

```typescript
import {parse} from '@gocom/resolution';

const resolution = parse('7680x4320');

console.log(
  resolution?.name, // 8K UHD
  resolution?.group, // 8K
  resolution?.width, // 7680
  resolution?.height, // 4320
  resolution?.aspectRatio, // 16:9
);
```

Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/resolution/blob/master/CONTRIBUTING.md).
