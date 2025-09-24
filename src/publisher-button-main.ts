/**
 * Copyright 2025 The Subscribe with Google Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * The entry point for Publisher Button (publisher-button.js).
 */

import {INTERNAL_RUNTIME_VERSION} from './constants';
import {log} from './utils/log';

/**
 * Template literal for CSS strings.
 */
const css = String.raw;

async function start() {
  log(`Publisher Button Version: ${INTERNAL_RUNTIME_VERSION}`);

  const style = css`
    [publisher-button] {
      background-color: #fff;
      border-radius: 100rem;
      border: 1px solid #ccc;
      color: #000;
      cursor: pointer;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    [publisher-button]::before {
      background-image: url('https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg');
      background-size: cover;
      content: '';
      display: inline-block;
      height: 24px;
      margin: 0 0.66rem 0 0;
      vertical-align: middle;
      width: 24px;
    }

    [publisher-button][theme='dark'] {
      background-color: #000;
      border: 1px solid #333;
      color: #fff;
    }

    [publisher-button][theme='dark']::before {
      background-image: url('https://fonts.gstatic.com/s/i/googlematerialicons/google/v13/white-24dp/2x/gm_google_white_24dp.png');
    }
  `;
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);

  const els = document.querySelectorAll('[publisher-button]')!;
  for (const el of Array.from(els)) {
    el.textContent = `Prefer us on Google`;

    el.addEventListener('click', (e) => {
      if (e.isTrusted === false) {
        return;
      }

      e.preventDefault();

      const origin = 'google.com';
      window.open(`https://www.google.com/preferences/source?q=${origin}`);
    });
  }
}

if (['complete', 'interactive'].includes(document.readyState)) {
  start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}
