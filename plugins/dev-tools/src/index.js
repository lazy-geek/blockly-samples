/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

import {DebugRenderer} from './debugRenderer';
import {generateFieldTestBlocks} from './generateFieldTestBlocks';
import {populateRandom} from './populateRandom';
import {downloadWorkspaceScreenshot} from './screenshot';
import {spaghetti} from './spaghetti';
import * as logger from './logger';
import * as testHelpers from './test_helpers.mocha';
import {toolboxTestBlocksInit, toolboxTestBlocks} from '@blockly/block-test';
import toolboxCategories from './toolboxCategories';
import toolboxSimple from './toolboxSimple';

let addGUIControls;
let addCodeEditor;
let createPlayground;
if (typeof window !== 'undefined') {
  addGUIControls = require('./playground/options').addGUIControls;
  addCodeEditor = require('./playground/monaco').addCodeEditor;
  createPlayground = require('./playground/').createPlayground;
}

// Export Blockly into the global namespace to make it easier to debug from the
// console.
if (Blockly.utils.global) {
  if (Blockly.utils.global.globalThis) {
    Blockly.utils.global.globalThis.Blockly = Blockly;
  } else {
    Blockly.utils.global.Blockly = Blockly;
  }
}

export {
  addCodeEditor,
  addGUIControls,
  createPlayground,
  DebugRenderer,
  downloadWorkspaceScreenshot,
  generateFieldTestBlocks,
  populateRandom,
  logger,
  spaghetti,
  testHelpers,
  toolboxCategories,
  toolboxSimple,
  toolboxTestBlocks,
  toolboxTestBlocksInit,
};
