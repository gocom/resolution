[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / getAspectRatio

# Function: getAspectRatio()

> **getAspectRatio**(`options`): `undefined` \| `string`

Defined in: [library/AspectRatio.ts:62](https://github.com/gocom/resolution/blob/ad32f4e0031824698c51cda6648f00ab2f07c05f/src/library/AspectRatio.ts#L62)

Calculates aspect ratio string from the given width and height.

Returns the aspect ratio as a string consisting of two numbers separated
from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
so-on.

## Parameters

### options

[`GetAspectRatioOptions`](../Options/API.GetAspectRatioOptions.md)

Options

## Returns

`undefined` \| `string`

Either aspect ratio string, or `undefined` if calculating aspect ratio failed for
the given options.

## Example

Give the function [GetAspectRatioOptions.width](../Options/API.GetAspectRatioOptions.md#width) and [GetAspectRatioOptions.height](../Options/API.GetAspectRatioOptions.md#height):
```ts
import {getAspectRatio} from '@gocom/resolution';

const aspectRatio = getAspectRatio({
  width: 3072,
  height: 1536,
});
```
In the above, the `aspectRatio` variable would contain `2:1`. If the given options are invalid, the function
returns `undefined`:
```ts
import {getAspectRatio} from '@gocom/resolution';

const aspectRatio = getAspectRatio({
  width: 0,
  height: 0,
});
```
