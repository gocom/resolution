[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / parse

# Function: parse()

> **parse**(`dimensions`): `undefined` \| [`Resolution`](../interfaces/Resolution.md)

Defined in: [library/Parser.ts:52](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/library/Parser.ts#L52)

Parses the given dimensions string.

## Parameters

### dimensions

`string`

Dimensions string, two positive integers separated from each other with `x`. For example
`1920x1080`, `6144x3072` and so-on.

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
