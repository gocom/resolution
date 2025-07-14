[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [Private](../Internal/Private.md) / ResolutionDefinition

# Interface: ResolutionDefinition

Defined in: [types/ResolutionDefinition.ts:35](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L35)

Resolution definition.

## Extended by

- [`Resolution`](API.Resolution.md)

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/ResolutionDefinition.ts:73](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L73)

Defined aspect ratio in string presentation.

Resolutions definition's aspect ratio.

Returns the aspect ratio as a string consisting of two numbers separated
from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
so-on.

***

### dimensionRatio?

> `optional` **dimensionRatio**: `number`

Defined in: [types/ResolutionDefinition.ts:82](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L82)

Defined ratio between dimensions.

Resolutions definition's aspect ratio as a number.

Returns the aspect ratio as a number ratio, for example `1.85`, `1.33`, `1.78` and so-on.

***

### group

> **group**: `string`

Defined in: [types/ResolutionDefinition.ts:48](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L48)

Simplified grouped resolution name.

For instance, if the [ResolutionDefinition.name](API.Resolution.md#name) is `8K UHD`, this will be `8K`.

***

### height

> **height**: `number`

Defined in: [types/ResolutionDefinition.ts:62](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L62)

Defined pixel height.

Resolutions definition's pixel height threshold.

***

### name

> **name**: `string`

Defined in: [types/ResolutionDefinition.ts:41](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L41)

Human-readable name identification of the resolution.

For example, `8K UHD`, `8K`, `4K`, `1080p`, `480p` and so-on.

***

### width

> **width**: `number`

Defined in: [types/ResolutionDefinition.ts:55](https://github.com/gocom/resolution/blob/249fdde0f2e9f5ebe9b58b9aba024524dfe024cb/src/types/ResolutionDefinition.ts#L55)

Defined pixel width.

Resolutions definition's pixel width threshold.
