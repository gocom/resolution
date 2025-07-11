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

import type {DimensionRatio, GetDimensionRatioOptions} from '../types/DimensionRatio';

/**
 * Calculates dimension ratio number from the given width and height.
 *
 * Returns the aspect ratio as a number with rounded decimals, for example, `1.78`, `1.33`, `1.00` and
 * so-on.
 *
 * @param {GetDimensionRatioOptions} options Options.
 * @return {DimensionRatio|undefined} Either {@link DimensionRatio}, or `undefined` if calculating dimension ratio
 * failed for the given options.
 * @group Resolution
 * @category API
 * @example
 * Give the function {@link GetDimensionRatioOptions.width} and {@link GetDimensionRatioOptions.height}:
 * ```ts
 * import {getDimensionRatio} from '@gocom/resolution';
 *
 * const ratio = getDimensionRatio({
 *   width: 3072,
 *   height: 1536,
 * });
 * ```
 * In the above, the `ratio` variable would contain `2.00`. If the given options are invalid, the function
 * returns `undefined`:
 * ```ts
 * import {getDimensionRatio} from '@gocom/resolution';
 *
 * const ratio = getDimensionRatio({
 *   width: 0,
 *   height: 0,
 * });
 * ```
 */
export const getDimensionRatio = (options: GetDimensionRatioOptions): DimensionRatio|undefined => {
  const {
    width,
    height,
  } = options;

  if (!width || !height || width <= 0 || height <= 0) {
    return undefined;
  }

  const ratio = width >= height
    ? width / height
    : height / width;

  return Number(ratio.toFixed(2));
};
