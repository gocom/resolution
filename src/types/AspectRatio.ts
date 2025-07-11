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
 * Aspect ratio.
 *
 * Aspect ratio in a string presentation, consisting of two numbers separated
 * from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2`, `1.90:1` and
 * so-on.
 *
 * @group Library
 * @category Types
 */
export type AspectRatio = `${number}:${number}` | string;

/**
 * Get aspect ratio options.
 *
 * Available options for {@link getAspectRatio}.
 *
 * @group Library
 * @category Options
 */
export interface GetAspectRatioOptions {
  /**
   * Pixel width.
   *
   * A width from which the aspect ratio string is calculated from.
   */
  width: number

  /**
   * Pixel height.
   *
   * A height from which the aspect ratio string is calculated from.
   */
  height: number
}
