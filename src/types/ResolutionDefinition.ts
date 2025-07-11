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
import type {DimensionRatio} from './DimensionRatio';

/**
 * Resolution definition.
 *
 * @group Resolution
 * @category Types
 */
export interface ResolutionDefinition {
  /**
   * Human-readable name identification of the resolution.
   *
   * For example, `8K UHD`, `8K`, `4K`, `1080p`, `480p` and so-on.
   */
  name: string

  /**
   * Simplified grouped resolution name.
   *
   * For instance, if the {@link ResolutionDefinition.name} is `8K UHD`, this will be `8K`.
   */
  group: string

  /**
   * Defined pixel width.
   *
   * Resolutions definition's pixel width threshold.
   */
  width: number

  /**
   * Defined pixel height.
   *
   * Resolutions definition's pixel height threshold.
   */
  height: number

  /**
   * Defined aspect ratio in string presentation.
   *
   * Resolutions definition's aspect ratio.
   *
   * Returns the aspect ratio as a string consisting of two numbers separated
   * from each other with a colon (`:`); For example, `16:9`, `4:3`, `2:2` and
   * so-on.
   */
  aspectRatio?: AspectRatio

  /**
   * Defined ratio between dimensions.
   *
   * Resolutions definition's aspect ratio as a number.
   *
   * Returns the aspect ratio as a number ratio, for example `1.85`, `1.33`, `1.78` and so-on.
   */
  dimensionRatio?: DimensionRatio
}
