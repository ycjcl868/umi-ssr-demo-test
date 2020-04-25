const render = require('./dist/umi.server');
const path = require('path');
const fs = require('fs');

(async () => {
  const { html } = await render({
    path: '/',
    // 编译时 __dirname
    // htmlTemplate: fs.readFileSync(path.join(__dirname, './dist/index.html'), 'utf-8'),
  });
  console.log('html', html);
})();
