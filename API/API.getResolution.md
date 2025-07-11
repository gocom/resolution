[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / getResolution

# Function: getResolution()

> **getResolution**(`options`): `undefined` \| [`Resolution`](../Types/API.Resolution.md)

Defined in: [library/Resolution.ts:57](https://github.com/gocom/resolution/blob/dc8a324ffbf191417b76e5dc1bd072842561b49b/src/library/Resolution.ts#L57)

Gets resolution definition for the given width and height.

Identifies the given resolution based on the given options, returning matching [Resolution](../Types/API.Resolution.md)
definition. Recognized named resolutions are defined in [resolutions](../Internal/Private.resolutions.md).

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
name.
