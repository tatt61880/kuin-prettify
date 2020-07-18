/**
 * @license
 * Copyright (C) 2016 tatt61880
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for normal-text.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-text">(my text)</pre>
 *
 * @author tatt61880
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         ['opn',            /^\(+/, null, '('],
         ['clo',            /^\)+/, null, ')'],
        ],
        [
        ]),
    ['text']);
