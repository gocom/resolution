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
import {resolutions} from './Registry';
import {getAspectRatio} from './AspectRatio';

/**
 * Gets resolution definition for the given width and height.
 *
 * @group Resolution
 * @category API
 */
export const getResolution = (
  width: number,
  height: number,
  aspectRatio?: string|undefined
): Resolution|undefined => {
  if (width <= 0 || height <= 0) {
    return undefined;
  }

  const triedAspectRatios: string[] = [];

  const tryAspectRatios = [
    () => aspectRatio,
    () => getAspectRatio(width, height),
  ];

  const additionResult= {
    actualWidth: width,
    actualHeight: height,
    actualAspectRatio: aspectRatio,
  };

  for (const tryAspectRatio of tryAspectRatios) {
    const ratio = tryAspectRatio();

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

  const result = (
    resolutions.find((resolution) => {
      return resolution.width === width && resolution.height === height;
    }) || resolutions.find((resolution) => {
      return width >= resolution.width && height >= resolution.height;
    })
  );

  if (result) {
    return {
      ...result,
      ...additionResult,
    };
  }

  return undefined;
};
