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

import {getAspectRatio} from '../../index';

test('Parse 1920x1080', () => {
  const actual = getAspectRatio({
    width: 1920,
    height: 1080,
  });

  expect(actual).toEqual('16:9');
});

test('Parse 3072x1536', () => {
  const actual = getAspectRatio({
    width: 3072,
    height: 1536,
  });

  expect(actual).toEqual('2:1');
});

test('Parse 1920x1920', () => {
  const actual = getAspectRatio({
    width: 1920,
    height: 1920,
  });

  expect(actual).toEqual('1:1');
});

test('Parse 0x0', () => {
  const actual = getAspectRatio({
    width: 0,
    height: 0,
  });

  expect(actual).toBeUndefined();
});
