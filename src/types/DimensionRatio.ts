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
 * Dimension ratio.
 *
 * Ratio between resolution width and height as a number, for example
 * `1.85`, `1.33`, `1.78`, `1.00` and so-on.
 *
 * @group Resolution
 * @category Types
 */
export type DimensionRatio = number;

/**
 * Get dimension ratio options.
 *
 * @group Resolution
 * @category Types
 */
export interface GetDimensionRatioOptions {
  /**
   * Pixel width.
   *
   * A width from which the dimension ratio is calculated from.
   */
  width: number

  /**
   * Pixel height.
   *
   * A height from which the dimension ratio is calculated from.
   */
  height: number
}
