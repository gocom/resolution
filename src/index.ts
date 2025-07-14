/*!
 * Resolution
 * https://github.com/gocom/resolution
 *
 * Copyright (C) 2025 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Convert raw resolutions to human-readable 1080p, 4K and 8K, and other identifiers, and calculate aspect ratios.
 * Written in TypeScript, and supports both client-side web browser and Node.js backend usage.
 *
 * @module API
 * @group Library
 * @category Public
 * @see [GitHub](https://github.com/gocom/resolution)
 * @see [Package in npm registry](https://www.npmjs.com/package/@gocom/resolution)
 * @see [Releases](https://github.com/gocom/resolution/releases)
 */

export {
  getAspectRatio,
} from './library/AspectRatio';

export {
  getDimensionRatio,
} from './library/DimensionRatio';

export {
  parse,
} from './library/Parser';

export {
  getResolution,
} from './library/Resolution';

export type {
  AspectRatio,
  GetAspectRatioOptions,
} from './types/AspectRatio';

export type {
  DimensionRatio,
  GetDimensionRatioOptions,
} from './types/DimensionRatio';

export type {
  Dimensions,
  ParserOptions,
} from './types/Parser';

export type {
  GetResolutionOptions,
  Resolution,
} from './types/Resolution';
