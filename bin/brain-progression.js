#!/usr/bin/env node

import coreGames from '../src/index.js';
import playGameProgression from '../src/games/progression.js';

coreGames('What number is missing in the progression?', playGameProgression);
