[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / getResolution

# Function: getResolution()

> **getResolution**(`options`): `undefined` \| [`Resolution`](../Types/Resolution.md)

Defined in: [library/Resolution.ts:57](https://github.com/gocom/resolution/blob/dfb8955dcfd50b34a77cb02765f6fdabc142e7b5/src/library/Resolution.ts#L57)

Gets resolution definition for the given width and height.

Identifies the given resolution based on the given options, returning matching [Resolution](../Types/Resolution.md)
definition.

## Parameters

### options

[`GetResolutionOptions`](../Options/GetResolutionOptions.md)

Options

## Returns

`undefined` \| [`Resolution`](../Types/Resolution.md)

Returns either [Resolution](../Types/Resolution.md) object, or undefined if the resolution could not
be recognized.

## Example

The following would detect `3072x1536` resolution, and returns results as [Resolution](../Types/Resolution.md) object:
```ts
import {getResolution} from '@gocom/resolution';

const resolution = getResolution({
  width: 3072,
  height: 1536,
});

console.log(resolution?.name, resolution?.group);
```
The [Resolution.name](../Types/Resolution.md#name) and [Resolution.group](../Types/Resolution.md#group) can be used to display the resolutions human-readable
name.
