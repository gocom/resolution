[**@gocom/resolution**](../README.md)

***

[@gocom/resolution](../README.md) / [API](../Public/API.md) / ParserOptions

# Interface: ParserOptions

Defined in: [types/Parser.ts:47](https://github.com/gocom/resolution/blob/1862825057d0bb9ab703d7c258946cef481eca14/src/types/Parser.ts#L47)

Parser options.

Available options for [parse](../API/API.parse.md).

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [types/Parser.ts:54](https://github.com/gocom/resolution/blob/1862825057d0bb9ab703d7c258946cef481eca14/src/types/Parser.ts#L54)

Optional aspect ratio.

If given, the aspect ratio is used for looking up the closest named resolution definition in together with
the given dimensions. Functions identically to the [GetResolutionOptions.aspectRatio](API.GetResolutionOptions.md#aspectratio).
