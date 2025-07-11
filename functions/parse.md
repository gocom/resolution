[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / parse

# Function: parse()

> **parse**(`dimensions`, `options?`): `undefined` \| [`Resolution`](../interfaces/Resolution.md)

Defined in: [library/Parser.ts:54](https://github.com/gocom/resolution/blob/b09f35c6aa6800002fde265332915d006dbdfd41/src/library/Parser.ts#L54)

Parses the given dimensions string.

## Parameters

### dimensions

`string`

Dimensions string, two numbers separated from each other with `x`. For example
`1920x1080`, `6144x3072` and so-on.

### options?

[`ParserOptions`](../interfaces/ParserOptions.md)

Optional additional options.

## Returns

`undefined` \| [`Resolution`](../interfaces/Resolution.md)

Returns the results as [Resolution](../interfaces/Resolution.md) object, or undefined if the given dimensions
string could not be parsed.

## Example

The following parses the given `1920x1080` resolution string, and returns results as [Resolution](../interfaces/Resolution.md) object:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('1920x1080');
```
If the given dimensions parameter is not a supported dimension string, the function returns `undefined`:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('');
```
