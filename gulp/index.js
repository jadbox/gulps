/**
 * Load tasks and export globals
 */

import fs from 'fs';
import onlyScripts from './util/scriptFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach((task) => {
  require('./tasks/' + task);
});