#!/usr/bin/env node

import coreGames from '../src/index.js';
import playGamePrime from '../src/games/prime.js';

coreGames('Answer "yes" if given number is prime. Otherwise answer "no".', playGamePrime);
