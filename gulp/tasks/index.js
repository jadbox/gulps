/**
 * Load tasks and export globals
 */

import fs from 'fs';
//import gulp from 'gulp';

//global.gulp = gulp;

const tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach(function(task) {
  if (task !== 'index.js') {
    require(`./${task}`);
  }
});