[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / getDimensionRatio

# Function: getDimensionRatio()

> **getDimensionRatio**(`options`): `undefined` \| `number`

Defined in: [library/DimensionRatio.ts:61](https://github.com/gocom/resolution/blob/b09f35c6aa6800002fde265332915d006dbdfd41/src/library/DimensionRatio.ts#L61)

Calculates aspect ratio string from the given width and height.

Returns the aspect ratio as a string consisting of two numbers separated
from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
so-on.

## Parameters

### options

[`GetDimensionRatioOptions`](../interfaces/GetDimensionRatioOptions.md)

Options

## Returns

`undefined` \| `number`

Either dimension ratio string, or `undefined` if calculating aspect ratio failed
for the given options.

## Example

Give the function [GetDimensionRatioOptions.width](../interfaces/GetDimensionRatioOptions.md#width) and [GetDimensionRatioOptions.height](../interfaces/GetDimensionRatioOptions.md#height):
```ts
import {getDimensionRatio} from '@gocom/resolution';

const ratio = getAspectRatio({
  width: 3072,
  height: 1536,
});
```
In the above, the `ratio` variable would contain `2.00`. If the given options are invalid, the function
returns `undefined`:
```ts
import {getDimensionRatio} from '@gocom/resolution';

const ratio = getDimensionRatio({
  width: 0,
  height: 0,
});
```
