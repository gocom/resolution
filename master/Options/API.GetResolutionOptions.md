[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / GetResolutionOptions

# Interface: GetResolutionOptions

Defined in: [types/Resolution.ts:73](https://github.com/gocom/resolution/blob/99e3c8c299b03ebf363d8cf3280fd2d09b920aaf/src/types/Resolution.ts#L73)

Get resolution options.

Available options for [getResolution](../API/API.getResolution.md).

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/Resolution.ts:102](https://github.com/gocom/resolution/blob/99e3c8c299b03ebf363d8cf3280fd2d09b920aaf/src/types/Resolution.ts#L102)

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

Defined in: [types/Resolution.ts:86](https://github.com/gocom/resolution/blob/99e3c8c299b03ebf363d8cf3280fd2d09b920aaf/src/types/Resolution.ts#L86)

Pixel height.

A matching named resolution definition is looked up by the given height.

***

### width

> **width**: `number`

Defined in: [types/Resolution.ts:79](https://github.com/gocom/resolution/blob/99e3c8c299b03ebf363d8cf3280fd2d09b920aaf/src/types/Resolution.ts#L79)

Pixel width.

A matching named resolution definition is looked up by the given width.
