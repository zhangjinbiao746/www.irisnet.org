let fs = require('fs');

const newCode = `
self.addEventListener("install", (event) => {
    self.skipWaiting()
});
  
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
`
fs.readFile('docs/.vuepress/dist/service-worker.js', 'utf8', (err, result) => {
    if(Boolean(err)) {
        console.log('读取文件失败！');
    } else if(result) {
        fs.appendFile('docs/.vuepress/dist/service-worker.js', newCode, (err, data) => {
            if(Boolean(err)) {
                console.log('写入文件失败！');
            }
        })
    }
})