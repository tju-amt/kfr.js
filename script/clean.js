'use strict';

const fs = require('fs');
const path = require('path');

fs.rm(path.join(__dirname, '../kfr'), {
	recursive: true,
	force: true
}, () => {});