[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / GetResolutionOptions

# Interface: GetResolutionOptions

Defined in: [types/Resolution.ts:58](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L58)

Get resolution options.

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/Resolution.ts:83](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L83)

Optional aspect ratio.

A matching named resolution definition is looked up by the aspect ratio string.
The aspect ratio is string consisting of two integers separated by colon (`:`),
for example `16:9`.

If no aspect ratio is provided, the looked up aspect ratio is calculated automatically
from the width and height.

***

### height

> **height**: `number`

Defined in: [types/Resolution.ts:71](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L71)

Pixel height.

A matching named resolution definition is looked up by the given height.

***

### width

> **width**: `number`

Defined in: [types/Resolution.ts:64](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L64)

Pixel width.

A matching named resolution definition is looked up by the given width.
