Resolution
=====

Identify pixel resolutions and dimension strings. Library for parsing given pixel resolution values and returning
resulting aspect ratios, or human-readable short name identifiers. Written in JavaScript and supports both client-side
browser and Node.js backend contexts.

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

const resolution = parse('1920x1080');

console.log(
  resolution.name,
  resolution.group,
  resolution.width,
  resolution.height,
  resolution.aspectRatio,
);
```

Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/resolution/blob/master/CONTRIBUTING.md).
