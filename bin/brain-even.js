#!/usr/bin/env node

import coreGames from '../src/index.js';
import conditionGamesEven from '../src/games/even.js';

coreGames('Answer "yes" if the number is even, otherwise answer "no".', conditionGamesEven);
