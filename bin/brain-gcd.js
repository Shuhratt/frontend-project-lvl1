#!/usr/bin/env node

import coreGames from '../src/index.js';
import playGameGcd from '../src/games/gcd.js';

coreGames('Find the greatest common divisor of given numbers.', playGameGcd);
