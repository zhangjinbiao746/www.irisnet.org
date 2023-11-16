let fs = require('fs');
let program = require('commander');

function list(val) {
    return val.split(',');
}
program.option('-p, --params <items>', 'config list', list).parse(process.argv);

replaceEnv(['docs/.vuepress/config.json'], {
    googleSiteKey: program.params[0],
});

function replaceEnv(files, params) {
    files.forEach(function (file, index) {
        let result = fs.readFileSync(file).toString();
        for (let key in params) {
            let r = '\\${' + key + '}';
            result = result.replace(new RegExp(r, 'g'), params[key]);
        }
        fs.writeFileSync(file, result);
    });
}
