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

import type {AspectRatio} from './AspectRatio';

/**
 * Resolution dimensions.
 *
 * Resolution dimensions as a string presentation, consisting of two numbers separated from each other with a `x`. For
 * example `1920x1080`, `6144x3072`, `1x1` and so-on.
 *
 * @group Resolution
 * @category Types
 */
export type Dimensions = `${number}x${number}` | string;

/**
 * Parser options.
 *
 * @group Resolution
 * @category Options
 */
export interface ParserOptions {
  /**
   * Optional aspect ratio.
   *
   * If given, the aspect ratio is used for looking up the closest named resolution definition in together with
   * the given dimensions. Functions identically to the {@link GetResolutionOptions.aspectRatio}.
   */
  aspectRatio?: AspectRatio
}
