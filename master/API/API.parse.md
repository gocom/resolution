[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`dimensions`, `options?`): `undefined` \| [`Resolution`](../Types/API.Resolution.md)

Defined in: [library/Parser.ts:59](https://github.com/gocom/resolution/blob/b75f0c62e61cace687e1c308138151b4331f75b0/src/library/Parser.ts#L59)

Parses the given dimensions string.

Identifies the given resolution based on the given resolution string, returning matching resolution
definition. The logic works identically to [getResolution](API.getResolution.md) function; see it for more information
about the underlying logic.

## Parameters

### dimensions

`string`

Dimensions string, two numbers separated from each other with `x`. For example
`1920x1080`, `6144x3072` and so-on.

### options?

[`ParserOptions`](../Options/API.ParserOptions.md)

Optional additional options. Given options will be passed down
to [getResolution](API.getResolution.md).

## Returns

`undefined` \| [`Resolution`](../Types/API.Resolution.md)

Returns the results as [Resolution](../Types/API.Resolution.md) object, or undefined if the given dimensions
string could not be parsed.

## Example

The following parses the given `1920x1080` resolution string, and returns results as [Resolution](../Types/API.Resolution.md) object:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('1920x1080');
```
If the given dimensions parameter is not a supported dimension string, the function returns `undefined`:
```ts
import {parse} from '@gocom/resolution';

const resolution = parse('');
```
