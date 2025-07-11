[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / getResolution

# Function: getResolution()

> **getResolution**(`options`): `undefined` \| [`Resolution`](../interfaces/Resolution.md)

Defined in: [library/Resolution.ts:57](https://github.com/gocom/resolution/blob/b09f35c6aa6800002fde265332915d006dbdfd41/src/library/Resolution.ts#L57)

Gets resolution definition for the given width and height.

Identifies the given resolution based on the given options, returning matching [Resolution](../interfaces/Resolution.md)
definition.

## Parameters

### options

[`GetResolutionOptions`](../interfaces/GetResolutionOptions.md)

Options

## Returns

`undefined` \| [`Resolution`](../interfaces/Resolution.md)

Returns either [Resolution](../interfaces/Resolution.md) object, or undefined if the resolution could not
be recognized.

## Example

The following would detect `3072x1536` resolution, and returns results as [Resolution](../interfaces/Resolution.md) object:
```ts
import {getResolution} from '@gocom/resolution';

const resolution = getResolution({
  width: 3072,
  height: 1536,
});

console.log(resolution?.name, resolution?.group);
```
The [Resolution.name](../interfaces/Resolution.md#name) and [Resolution.group](../interfaces/Resolution.md#group) can be used to display the resolutions human-readable
name.
