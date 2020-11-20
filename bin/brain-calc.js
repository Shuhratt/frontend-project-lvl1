#!/usr/bin/env node

import coreGames from '../src/index.js';
import playGameCalc from '../src/games/calc.js';

coreGames('What is the result of the expression?', playGameCalc);
