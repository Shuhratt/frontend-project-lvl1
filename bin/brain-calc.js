#!/usr/bin/env node

import coreGames from '../src/index.js';
import conditionGamesCalc from '../games/calc.js';

coreGames('What is the result of the expression?', conditionGamesCalc);
