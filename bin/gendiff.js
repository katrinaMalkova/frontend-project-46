#!/usr/bin/env node

import { Command } from "commander";
import gendiff from "../index.js";

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format [type]' , 'output format' )
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
        console.log(gendiff(filepath1, filepath2));
    })

program.parse();

