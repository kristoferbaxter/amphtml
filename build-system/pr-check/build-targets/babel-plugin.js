/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
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

const {isOwnersFile} = require('./owners.js');

/**
 * Checks if the given file should be considered during PRs.
 *
 * @param {string} file
 * @return {boolean}
 */
function matchPredicate(file) {
  if (isOwnersFile(file)) {
    return false;
  }
  return (
    file == 'build-system/babel-plugins/log-module-metadata.js' ||
    file == 'build-system/babel-plugins/static-template-metadata.js' ||
    file == 'build-system/compile/internal-version.js' ||
    file == 'build-system/compile/log-messages.js' ||
    file == 'build-system/tasks/babel-plugin-tests.js' ||
    file == 'babel.config.js' ||
    file.startsWith('build-system/babel-plugins/') ||
    file.startsWith('build-system/babel-config/')
  );
}

module.exports = {
  name: 'BABEL_PLUGIN',
  matchPredicate,
};
