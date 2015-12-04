import path from 'path';

// Filters out non .js files. Prevents accidental inclusion of possible hidden files
function filter(name) {
    return /(\.(js)$)/i.test(path.extname(name));
}
export default filter;