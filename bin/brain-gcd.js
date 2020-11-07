#!/usr/bin/env node

import { coreGames } from '../src/index.js';
import { conditionGamesGcd } from "../games/gcd.js";

coreGames('Find the greatest common divisor of given numbers.', conditionGamesGcd);
