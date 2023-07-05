const BLOG_BASE = '/blogs/study/';
const javascript = require('./js');
const css = require('./css');
const es6 = require('./es6');
const vue = require('./vue');
const browser = require('./browser');
const algorithm = require('./algorithm');
const frontEnd = require('./front-end-engineering');

module.exports = {
    [BLOG_BASE]: [
        css(BLOG_BASE),
        javascript(BLOG_BASE),
        es6(BLOG_BASE),
        vue(BLOG_BASE),
        browser(BLOG_BASE),
        algorithm(BLOG_BASE),
        frontEnd(BLOG_BASE),
    ],
};
