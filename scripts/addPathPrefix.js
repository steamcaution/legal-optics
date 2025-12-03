const fs = require('fs');
const path = require('path');

const outDir = './out';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

if (!prefix) process.exit(0);

function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/(["'])(\/(img|fonts|icon)\/[^"']*)\1/g, `$1${prefix}$2$1`);
      fs.writeFileSync(filePath, content);
    }
  });
}

processDir(outDir);
