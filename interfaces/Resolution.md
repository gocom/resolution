[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / Resolution

# Interface: Resolution

Defined in: [types/Resolution.ts:35](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L35)

Resolution result.

## Extends

- `ResolutionDefinition`

## Properties

### actualAspectRatio?

> `optional` **actualAspectRatio**: `string`

Defined in: [types/Resolution.ts:49](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L49)

Actual given aspect ratio.

***

### actualHeight

> **actualHeight**: `number`

Defined in: [types/Resolution.ts:44](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L44)

Actual given height.

***

### actualWidth

> **actualWidth**: `number`

Defined in: [types/Resolution.ts:39](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/Resolution.ts#L39)

Actual given width.

***

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/ResolutionDefinition.ts:72](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/ResolutionDefinition.ts#L72)

Defined aspect ratio.

Resolutions definition's aspect ratio.

Returns the aspect ratio as a string consisting of two numbers separated
from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
so-on.

#### Inherited from

`ResolutionDefinition.aspectRatio`

***

### group

> **group**: `string`

Defined in: [types/ResolutionDefinition.ts:47](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/ResolutionDefinition.ts#L47)

Simplified grouped resolution name.

For instance, if the [ResolutionDefinition.name](#name) is `8K UHD`, this will be `8K`.

#### Inherited from

`ResolutionDefinition.group`

***

### height

> **height**: `number`

Defined in: [types/ResolutionDefinition.ts:61](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/ResolutionDefinition.ts#L61)

Defined pixel height.

Resolutions definition's pixel height threshold.

#### Inherited from

`ResolutionDefinition.height`

***

### name

> **name**: `string`

Defined in: [types/ResolutionDefinition.ts:40](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/ResolutionDefinition.ts#L40)

Human-readable name identification of the resolution.

For example, `8K UHD`, `8K`, `4K`, `1080p`, `480p` and so-on.

#### Inherited from

`ResolutionDefinition.name`

***

### width

> **width**: `number`

Defined in: [types/ResolutionDefinition.ts:54](https://github.com/gocom/resolution/blob/a0eb3233e4882006da98f3b482c89335042335df/src/types/ResolutionDefinition.ts#L54)

Defined pixel width.

Resolutions definition's pixel width threshold.

#### Inherited from

`ResolutionDefinition.width`
