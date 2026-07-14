const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'videos');
const VIDEOS_TO_REGEN = ['seg-ficha-cliente'];

// Load the full generator to get the video definition and HTML generator
const generator = require('./generate-videos.js');