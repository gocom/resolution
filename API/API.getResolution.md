[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / getResolution

# Function: getResolution()

> **getResolution**(`options`): `undefined` \| [`Resolution`](../Types/API.Resolution.md)

Defined in: [library/Resolution.ts:67](https://github.com/gocom/resolution/blob/fe38df115b0206b77ced4aa3e6fe703da1f4cca1/src/library/Resolution.ts#L67)

Gets resolution definition for the given width and height.

Identifies the given resolution based on the given options, returning matching [Resolution](../Types/API.Resolution.md)
definition. Recognized named resolutions are defined in [resolutions](../Internal/Private.resolutions.md).

If [GetResolutionOptions.aspectRatio](../Options/API.GetResolutionOptions.md#aspectratio) is given, the function first goes through the resolutions
looking for a resolution definition that has the same aspect ratio, and whose total number of pixels is the same, or
greater than the given dimensions total pixel count. If no aspect ratio is given, the looked up aspect ratio is
calculated from the given [GetResolutionOptions.width](../Options/API.GetResolutionOptions.md#width) and [GetResolutionOptions.height](../Options/API.GetResolutionOptions.md#height) using the
same logic used by the [getAspectRatio](API.getAspectRatio.md) function.

If no match is found with the same aspect ratio, the function looks for an exact matching width and height
combination from the defined resolutions. If no exact match is found, it looks for the highest resolution, whose
both the width and the height is equal or higher than the given width and the height.

## Parameters

### options

[`GetResolutionOptions`](../Options/API.GetResolutionOptions.md)

Options

## Returns

`undefined` \| [`Resolution`](../Types/API.Resolution.md)

Returns either [Resolution](../Types/API.Resolution.md) object, or undefined if the resolution could not
be recognized.

## Example

The following would detect `3072x1536` resolution, and returns results as [Resolution](../Types/API.Resolution.md) object:
```ts
import {getResolution} from '@gocom/resolution';

const resolution = getResolution({
  width: 3072,
  height: 1536,
});

console.log(resolution?.name, resolution?.group);
```
The [Resolution.name](../Types/API.Resolution.md#name) and [Resolution.group](../Types/API.Resolution.md#group) can be used to display the resolutions human-readable
name, `3K`.
