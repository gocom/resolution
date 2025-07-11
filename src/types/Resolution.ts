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

import type {ResolutionDefinition} from './ResolutionDefinition';
import type {AspectRatio} from './AspectRatio';
import type {DimensionRatio} from './DimensionRatio';

/**
 * Resolution result.
 *
 * @group Resolution
 * @category Types
 */
export interface Resolution extends ResolutionDefinition {
  /**
   * Actual given width.
   */
  actualWidth: number

  /**
   * Actual given height.
   */
  actualHeight: number

  /**
   * Actual given aspect ratio.
   *
   * Will be `undefined`, if no user-specified aspect ratio was given.
   */
  actualAspectRatio?: AspectRatio

  /**
   * Calculated aspect ratio.
   */
  calculatedAspectRatio?: AspectRatio

  /**
   * Calculated dimension ratio.
   */
  calculatedDimensionRatio?: DimensionRatio
}

/**
 * Get resolution options.
 *
 * @group Resolution
 * @category Types
 */
export interface GetResolutionOptions {
  /**
   * Pixel width.
   *
   * A matching named resolution definition is looked up by the given width.
   */
  width: number

  /**
   * Pixel height.
   *
   * A matching named resolution definition is looked up by the given height.
   */
  height: number

  /**
   * Optional aspect ratio.
   *
   * A matching named resolution definition is looked up by the aspect ratio string.
   * The aspect ratio is string consisting of two numbers separated by colon (`:`),
   * for example `16:9`.
   *
   * If an aspect ratio is given, a matching resolution definition is first looked from resolutions using
   * the same aspect ratio. If no match is found from the same aspect ratio, it looks up resolution definition
   * regardless of the aspect ratio.
   *
   * If no aspect ratio is provided, the looked up aspect ratio is calculated automatically
   * from the width and height.
   */
  aspectRatio?: AspectRatio
}
