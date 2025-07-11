[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / Resolution

# Interface: Resolution

Defined in: [types/Resolution.ts:36](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L36)

Resolution result.

## Extends

- [`ResolutionDefinition`](Private.ResolutionDefinition.md)

## Properties

### actualAspectRatio?

> `optional` **actualAspectRatio**: `string`

Defined in: [types/Resolution.ts:52](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L52)

Actual given aspect ratio.

Will be `undefined`, if no user-specified aspect ratio was given.

***

### actualHeight

> **actualHeight**: `number`

Defined in: [types/Resolution.ts:45](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L45)

Actual given height.

***

### actualWidth

> **actualWidth**: `number`

Defined in: [types/Resolution.ts:40](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L40)

Actual given width.

***

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/ResolutionDefinition.ts:73](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L73)

Defined aspect ratio in string presentation.

Resolutions definition's aspect ratio.

Returns the aspect ratio as a string consisting of two numbers separated
from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
so-on.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`aspectRatio`](Private.ResolutionDefinition.md#aspectratio)

***

### calculatedAspectRatio?

> `optional` **calculatedAspectRatio**: `string`

Defined in: [types/Resolution.ts:57](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L57)

Calculated aspect ratio.

***

### calculatedDimensionRatio?

> `optional` **calculatedDimensionRatio**: `number`

Defined in: [types/Resolution.ts:62](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Resolution.ts#L62)

Calculated dimension ratio.

***

### dimensionRatio?

> `optional` **dimensionRatio**: `number`

Defined in: [types/ResolutionDefinition.ts:82](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L82)

Defined ratio between dimensions.

Resolutions definition's aspect ratio as a number.

Returns the aspect ratio as a number ratio, for example `1.85`, `1.33`, `1.78` and so-on.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`dimensionRatio`](Private.ResolutionDefinition.md#dimensionratio)

***

### group

> **group**: `string`

Defined in: [types/ResolutionDefinition.ts:48](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L48)

Simplified grouped resolution name.

For instance, if the [ResolutionDefinition.name](#name) is `8K UHD`, this will be `8K`.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`group`](Private.ResolutionDefinition.md#group)

***

### height

> **height**: `number`

Defined in: [types/ResolutionDefinition.ts:62](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L62)

Defined pixel height.

Resolutions definition's pixel height threshold.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`height`](Private.ResolutionDefinition.md#height)

***

### name

> **name**: `string`

Defined in: [types/ResolutionDefinition.ts:41](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L41)

Human-readable name identification of the resolution.

For example, `8K UHD`, `8K`, `4K`, `1080p`, `480p` and so-on.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`name`](Private.ResolutionDefinition.md#name)

***

### width

> **width**: `number`

Defined in: [types/ResolutionDefinition.ts:55](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/ResolutionDefinition.ts#L55)

Defined pixel width.

Resolutions definition's pixel width threshold.

#### Inherited from

[`ResolutionDefinition`](Private.ResolutionDefinition.md).[`width`](Private.ResolutionDefinition.md#width)
