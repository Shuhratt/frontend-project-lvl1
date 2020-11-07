#!/usr/bin/env node

import { coreGames } from '../src/index.js';
import {conditionGamesProgress} from "../games/progression.js";

coreGames('What number is missing in the progression?', conditionGamesProgress);
