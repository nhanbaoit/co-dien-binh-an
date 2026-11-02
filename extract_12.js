const { execSync } = require('child_process');
const fs = require('fs');

const content = execSync('git show 081da73:index.html', { maxBuffer: 10*1024*1024 }).toString();
const startMarker = '<div class="row g-3 mb-5" id="productGrid">';
const endMarker = '<!-- Pagination Indicators -->';
const grid = content.substring(content.indexOf(startMarker), content.indexOf(endMarker));
fs.writeFileSync('grid_12_exact.html', grid, 'utf8');
console.log('Saved grid_12_exact.html, length: ' + grid.length);

