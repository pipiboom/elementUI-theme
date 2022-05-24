var et = require('element-themex')

et.run({
    "browsers": ["ie > 9", "last 2 versions"],
    "out": "./theme",
    "config": "./element-variables.scss",
    "minimize": true
})