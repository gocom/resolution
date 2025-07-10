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

import {calculateGreatestCommonDivisor} from './Divisor';
import type {AspectRatio, GetAspectRatioOptions} from '../types/AspectRatio';

/**
 * Calculates aspect ratio string from the given width and height.
 *
 * Returns the aspect ratio as a string consisting of two numbers separated
 * from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
 * so-on.
 *
 * @param {GetAspectRatioOptions} options Options
 * @return {AspectRatio|undefined} Either aspect ratio string, or `undefined` if calculating aspect ratio failed for
 * the given options.
 * @group Resolution
 * @category API
 * @example
 * Give the function {@link GetAspectRatioOptions.width} and {@link GetAspectRatioOptions.height}:
 * ```ts
 * import {getAspectRatio} from '@gocom/resolution';
 *
 * const aspectRatio = getAspectRatio({
 *   width: 3072,
 *   height: 1536,
 * });
 * ```
 * In the above, the `aspectRatio` variable would contain `2:1`. If the given options are invalid, the function
 * returns `undefined`:
 * ```ts
 * import {getAspectRatio} from '@gocom/resolution';
 *
 * const aspectRatio = getAspectRatio({
 *   width: 0,
 *   height: 0,
 * });
 * ```
 */
export const getAspectRatio = (options: GetAspectRatioOptions): AspectRatio|undefined => {
  const {
    width,
    height,
  } = options;

  const gcd = calculateGreatestCommonDivisor(width, height);

  if (gcd) {
    const widthRatio = width / gcd;
    const heightRatio = height / gcd;

    return `${widthRatio}:${heightRatio}`;
  }

  return undefined;
};
