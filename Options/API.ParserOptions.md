[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / ParserOptions

# Interface: ParserOptions

Defined in: [types/Parser.ts:45](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Parser.ts#L45)

Parser options.

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/Parser.ts:52](https://github.com/gocom/resolution/blob/35516f4c70acda51ccc32c2c2e18319df7b05201/src/types/Parser.ts#L52)

Optional aspect ratio.

If given, the aspect ratio is used for looking up the closest named resolution definition in together with
the given dimensions. Functions identically to the [GetResolutionOptions.aspectRatio](API.GetResolutionOptions.md#aspectratio).
