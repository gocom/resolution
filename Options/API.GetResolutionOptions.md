[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / GetResolutionOptions

# Interface: GetResolutionOptions

Defined in: [types/Resolution.ts:71](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L71)

Get resolution options.

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/Resolution.ts:100](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L100)

Optional aspect ratio.

A matching named resolution definition is looked up by the aspect ratio string.
The aspect ratio is string consisting of two numbers separated by colon (`:`),
for example `16:9`.

If an aspect ratio is given, a matching resolution definition is first looked from resolutions using
the same aspect ratio. If no match is found from the same aspect ratio, it looks up resolution definition
regardless of the aspect ratio.

If no aspect ratio is provided, the looked up aspect ratio is calculated automatically
from the width and height.

***

### height

> **height**: `number`

Defined in: [types/Resolution.ts:84](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L84)

Pixel height.

A matching named resolution definition is looked up by the given height.

***

### width

> **width**: `number`

Defined in: [types/Resolution.ts:77](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L77)

Pixel width.

A matching named resolution definition is looked up by the given width.
