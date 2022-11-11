#!/usr/bin/env node

import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));
const sides_arg = args.sides || 6
const dice_arg = args.sides || 2
const rolls_arg = args.rolls || 1

console.log(roll(sides_arg, dice_arg, rolls_arg));