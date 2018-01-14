/**
 * @license
 * Copyright (C) 2017 tatt61880
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
 * Registers a language handler for Kuin languages.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-kuin">(my Kuin code)</pre>
 *
 * @author tatt61880
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         ['opn',            /^\(+/, null, '('],
         ['clo',            /^\)+/, null, ')'],
         ['opn',            /^\[+/, null, '['],
         ['clo',            /^\]+/, null, ']'],
         [PR['PR_COMMENT'], /{(?:[^{}"]*|(?:{[^}]*(?:}|$))*|("(?:\\\\|\\"|[^"])*(?:"|$)))*(?:}|$)/, null, '{'],
         [PR['PR_STRING'],  /^"(?:[^"\\]|\\.)*"/, null, '"'],
         [PR['PR_STRING'],  /^'(?:[^'\\]|\\.)*'/, null, '\''],
        ],
        [
         [PR['PR_COMMENT'], /^\s*;.*/, null],
         [PR['PR_TYPE'],    /^(?:int|float|char|bool|bit8|bit16|bit32|bit64|list|stack|queue|dict)\b/, null],
         [PR['PR_KEYWORD'], /^(?:func|var|const|class|enum)\b/, null],
         [PR['PR_KEYWORD'], /^(?:if|elif|else|switch|case|default|while|for|try|catch|finally|block)\b/, null],
         [PR['PR_KEYWORD'], /^(?:do|break|skip|ret|assert|throw)\b/, null],
         [PR['PR_KEYWORD'], /^(?:end|to|me|alias|include)\b/, null],
         [PR['PR_LITERAL'], /^(?:true|false|null|inf|dbg)\b/, null],
         [PR['PR_LITERAL'], /^\d+\.\d+(:?e[\+-]\d+)?\b/, null],
         [PR['PR_LITERAL'], /^2#[0-1]+(?=(?:b(?:8|16|32|64)|)\b)/, null, '2'],
         [PR['PR_LITERAL'], /^8#[0-7]+(?=(?:b(?:8|16|32|64)|)\b)/, null, '8'],
         [PR['PR_LITERAL'], /^16#[0-9A-F]+(?=(?:b(?:8|16|32|64)|)\b)/, null, '1'],
         [PR['PR_LITERAL'], /^\d+(?=(?:b(?:8|16|32|64)|)\b)/, null],
         ['global', /^(?:[A-Za-z_][0-9A-Za-z_]*)?@[A-Za-z_][0-9A-Za-z_]*/, null],
         [PR['PR_PLAIN'],   /^[A-Za-z_][0-9A-Za-z_@]*/, null],
         [PR['PR_PUNCTUATION'], /^(?:,|\.|\$(?:>|<)?|\^|\+|-|!|##?|\*|\/|%|~|(?:=|<>)(?:&|\$)?|<=?|>=?|&|\||\?|:(?::|\+|-|\*|\/|%|\^|~)?)$/, null],
        ]),
    ['kuin']);
