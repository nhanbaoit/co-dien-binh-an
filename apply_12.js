const fs = require('fs');

const grid12 = fs.readFileSync('grid_12_exact.html', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const startMarker = '<div class="row g-3 mb-5" id="productGrid">';
const endMarker = '<!-- Pagination Indicators -->';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error('Cannot find markers in index.html');
  process.exit(1);
}

html = html.substring(0, startIndex) + grid12 + html.substring(endIndex);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html with exact 12 products grid!');

let js = fs.readFileSync('js/main.js', 'utf8');
js = js.replace(/const maxVisibleProducts\s*=\s*\d+;/, 'const maxVisibleProducts = 12;');
fs.writeFileSync('js/main.js', js, 'utf8');
console.log('Updated maxVisibleProducts = 12 in js/main.js!');

