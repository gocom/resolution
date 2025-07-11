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

import type {GetResolutionOptions, Resolution} from '../types/Resolution';
import {resolutions} from './ResolutionDefinition';
import {getAspectRatio} from './AspectRatio';
import {getDimensionRatio} from './DimensionRatio';

/**
 * Gets resolution definition for the given width and height.
 *
 * Identifies the given resolution based on the given options, returning matching {@link Resolution}
 * definition. Recognized named resolutions are defined in {@link resolutions}.
 *
 * @param {GetResolutionOptions} options Options
 * @return {Resolution|undefined} Returns either {@link Resolution} object, or undefined if the resolution could not
 * be recognized.
 * @group Resolution
 * @category API
 * @example
 * The following would detect `3072x1536` resolution, and returns results as {@link Resolution} object:
 * ```ts
 * import {getResolution} from '@gocom/resolution';
 *
 * const resolution = getResolution({
 *   width: 3072,
 *   height: 1536,
 * });
 *
 * console.log(resolution?.name, resolution?.group);
 * ```
 * The {@link Resolution.name} and {@link Resolution.group} can be used to display the resolutions human-readable
 * name.
 */
export const getResolution = (options: GetResolutionOptions): Resolution|undefined => {
  const {
    width,
    height,
    aspectRatio
  } = options;

  if (!width || !height || width <= 0 || height <= 0) {
    return undefined;
  }

  const triedAspectRatios: string[] = [];
  const calculatedAspectRatio = getAspectRatio({width, height});
  const calculatedDimensionRatio = getDimensionRatio({width, height});

  const tryAspectRatios = [
    aspectRatio,
    calculatedAspectRatio,
  ];

  const additionResult= {
    actualWidth: width,
    actualHeight: height,
    actualAspectRatio: aspectRatio,
    calculatedAspectRatio,
    calculatedDimensionRatio,
  };

  for (const ratio of tryAspectRatios) {
    if (ratio && !triedAspectRatios.includes(ratio)) {
      const pixels = width * height;

      triedAspectRatios.push(ratio);

      const result = resolutions.find((resolution) => {
        return ratio === resolution.aspectRatio
          && pixels >= resolution.width * resolution.height;
      });

      if (result) {
        return {
          ...result,
          ...additionResult,
        };
      }
    }
  }

  const result = resolutions.find((resolution) => {
      return resolution.width === width && resolution.height === height;
    }) || resolutions.find((resolution) => {
      return width >= resolution.width && height >= resolution.height;
    });

  if (result) {
    return {
      ...result,
      ...additionResult,
    };
  }

  return undefined;
};
