#!/usr/bin/env node

var url = 'https://www.apple.com/macbook-air/';

if (process.platform == 'darwin') {
    console.log('You are already on a Mac :)');
    return;
}

var start = process.platform == 'win32' ? 'start' : 'xdg-open';
require('child_process').exec(start + ' ' + url);
