[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / getDimensionRatio

# Function: getDimensionRatio()

> **getDimensionRatio**(`options`): `undefined` \| `number`

Defined in: [library/DimensionRatio.ts:60](https://github.com/gocom/resolution/blob/2677527602266ff0c486b76e0da6e91e4207bd49/src/library/DimensionRatio.ts#L60)

Calculates dimension ratio number from the given width and height.

Returns the aspect ratio as a number with rounded decimals, for example, `1.78`, `1.33`, `1.00` and
so-on.

## Parameters

### options

[`GetDimensionRatioOptions`](../Options/API.GetDimensionRatioOptions.md)

Options.

## Returns

`undefined` \| `number`

Either [DimensionRatio](../Types/API.DimensionRatio.md), or `undefined` if calculating dimension ratio
failed for the given options.

## Example

Give the function [GetDimensionRatioOptions.width](../Options/API.GetDimensionRatioOptions.md#width) and [GetDimensionRatioOptions.height](../Options/API.GetDimensionRatioOptions.md#height):
```ts
import {getDimensionRatio} from '@gocom/resolution';

const ratio = getDimensionRatio({
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
