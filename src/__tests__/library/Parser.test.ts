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

import {parse} from '../../index';
import type {Resolution} from '../../index';

test('Parse 1920x1080', () => {
  const actual = parse('1920x1080');

  const expected: Resolution = {
    name: '1080p',
    group: '1080p',
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    dimensionRatio: 1.78,
    actualWidth: 1920,
    actualHeight: 1080,
    actualAspectRatio: undefined,
    calculatedAspectRatio: '16:9',
    calculatedDimensionRatio: 1.78,
  };

  expect(actual).toEqual(expected);
});

test('Parse 1,920x1,080', () => {
  const actual = parse('1,920x1,080');

  const expected: Resolution = {
    name: '1080p',
    group: '1080p',
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    dimensionRatio: 1.78,
    actualWidth: 1920,
    actualHeight: 1080,
    actualAspectRatio: undefined,
    calculatedAspectRatio: '16:9',
    calculatedDimensionRatio: 1.78,
  };

  expect(actual).toEqual(expected);
});

test('Parse 1920x1080 with 16:9', () => {
  const actual = parse('1920x1080', {
    aspectRatio: '16:9',
  });

  const expected: Resolution = {
    name: '1080p',
    group: '1080p',
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    dimensionRatio: 1.78,
    actualWidth: 1920,
    actualHeight: 1080,
    actualAspectRatio: '16:9',
    calculatedAspectRatio: '16:9',
    calculatedDimensionRatio: 1.78,
  };

  expect(actual).toEqual(expected);
});

test('Parse 0x0', () => {
  const actual = parse('0x0');

  expect(actual).toBeUndefined();
});

test('Parse empty string', () => {
  const actual = parse('');

  expect(actual).toBeUndefined();
});

test('Parse 1920xinvalid', () => {
  const actual = parse('1920xinvalid');

  expect(actual).toBeUndefined();
});
