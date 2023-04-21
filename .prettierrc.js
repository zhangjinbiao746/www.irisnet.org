module.exports = {
    // 一行最多 100 字符，默认 80
    printWidth: 100,
    // 不使用 Tab 缩进，使用空格，默认为 false
    useTabs: false,
    // 指定每个缩进级别的空格数，默认为 2
    tabWidth: 4,
    // 在语句的末尾打印分号，默认为 true
    semi: true,
    // 用单引号代替双引号，默认为 false
    singleQuote: true,
    // 对象的 key 仅在必要时用引号，默认为 as-needed
    quoteProps: 'as-needed',
    // 末尾不使用逗号，默认为 es5
    trailingComma: 'none',
    // 大括号内的首尾需要空格 { foo: bar }，默认为 true
    bracketSpacing: true,
    // 将多行HTML (HTML, JSX, Vue, Angular)元素的 > 单独放在下一行(不适用于自关闭元素)。
    bracketSameLine: false,
    // 函数中有一个参数时，也需要括号
    arrowParens: 'always',
    // 折行标准 如果散文超过宽度，则换行。
    proseWrap: 'always',
    // 空白敏感性 "strict"- 所有标签周围的空格（或缺少空格）被认为是重要的。
    htmlWhitespaceSensitivity: 'strict',
    // vue文件的script标签和Style标签下的内容需要缩进
    vueIndentScriptAndStyle: true,
    // 换行符，通过查看第一行之后使用的内容来规范化
    endOfLine: 'auto',
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 不需要写文件开头的 @prettier
    requirePragma: false
};
