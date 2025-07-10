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

import {getResolution} from '../../index';
import type {Resolution} from '../../index';

test('Parse 1920x1080', () => {
  const actual = getResolution(1920, 1080);

  const expected: Resolution = {
    name: '1080p',
    group: '1080p',
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
    actualWidth: 1920,
    actualHeight: 1080,
    actualAspectRatio: undefined,
  };

  expect(actual).toEqual(expected);
});

test('Parse 1x1', () => {
  const actual = getResolution(1, 1);

  expect(actual).toBeUndefined();
});

test('Parse 1920x920', () => {
  const actual = getResolution(1920, 920);

  const expected: Resolution = {
    name: '1080p',
    group: '1080p',
    width: 1920,
    height: 816,
    aspectRatio: '2.35:1',
    actualWidth: 1920,
    actualHeight: 920,
    actualAspectRatio: undefined,
  };

  expect(actual).toEqual(expected);
});

test('Given zero height', () => {
  const actual = getResolution(1920, 0);

  expect(actual).toBeUndefined();
});

test('Given negative height', () => {
  const actual = getResolution(1920, -5);

  expect(actual).toBeUndefined();
});

test('Given zero width', () => {
  const actual = getResolution(0, 1080);

  expect(actual).toBeUndefined();
});

test('Given negative width', () => {
  const actual = getResolution(-5, 1080);

  expect(actual).toBeUndefined();
});

test('Given zero width and height', () => {
  const actual = getResolution(0, 0);

  expect(actual).toBeUndefined();
});

test('Given negative width and height', () => {
  const actual = getResolution(-5, -5);

  expect(actual).toBeUndefined();
});
