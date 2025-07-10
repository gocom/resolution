[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / parse

# Function: parse()

> **parse**(`dimensions`): `undefined` \| [`Resolution`](../interfaces/Resolution.md)

Defined in: [library/Parser.ts:51](https://github.com/gocom/resolution/blob/3830240e7905e88d58561fac6c8329716b6bbabd/src/library/Parser.ts#L51)

Parses the given dimensions string.

## Parameters

### dimensions

`string`

Dimensions string, two positive integers separated from each other with `x`.

## Returns

`undefined` \| [`Resolution`](../interfaces/Resolution.md)

Returns the results as [Resolution](../interfaces/Resolution.md) object, or undefined if the given dimensions
string could not be parsed.

## Example

Parse the given `1920x1080` resolution string, and returns results as [Resolution](../interfaces/Resolution.md) object:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('1920x1080');
```
If the dimensions string is not a supported dimension string, the function returns `undefined`:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('');
```
