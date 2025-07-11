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

import type {Resolution} from '../types/Resolution';
import {getResolution} from './Resolution';
import type {Dimensions, ParserOptions} from '../types/Parser';

/**
 * Parses the given dimensions string.
 *
 * @param {Dimensions} dimensions Dimensions string, two numbers separated from each other with `x`. For example
 * `1920x1080`, `6144x3072` and so-on.
 * @param {ParserOptions} [options] Optional additional options.
 * @return {Resolution|undefined} Returns the results as {@link Resolution} object, or undefined if the given dimensions
 * string could not be parsed.
 * @group Library
 * @category API
 * @example
 * The following parses the given `1920x1080` resolution string, and returns results as {@link Resolution} object:
 * ```ts
 * import {parse} from '@gocom/resolution';
 *
 * const resolution = parse('1920x1080');
 * ```
 * If the given dimensions parameter is not a supported dimension string, the function returns `undefined`:
 * ```ts
 * import {parse} from '@gocom/resolution';
 *
 * const resolution = parse('');
 * ```
 */
export const parse = (
  dimensions: Dimensions,
  options?: ParserOptions
): Resolution|undefined => {
  if (dimensions) {
    const [width, height] = dimensions.split(/[^0-9.,]+/);

    if (width && height) {
      return getResolution({
        width: asNumber(width),
        height: asNumber(height),
        aspectRatio: options?.aspectRatio,
      });
    }
  }

  return undefined;
};

/**
 * Converts the given string to a number.
 *
 * Strips away non-numbers from the string and then casts the string to a
 * number.
 *
 * @return {number} Returns `0` if the given input can not be converted to a number.
 */
const asNumber = (input: string) => {
  return Number(input.replace(/[^0-9]/g, '')) || 0;
};
