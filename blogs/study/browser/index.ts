module.exports = url => ({
    text: '浏览器',
    collapsible: true,
    children: [
        {
            text: '浏览器渲染原理',
            link: url + 'browser/浏览器渲染原理.md',
        },
        {
            text: '浏览器架构',
            link: url + 'browser/浏览器架构.md',
        },
        {
            text: '渲染进程里的多个线程',
            link: url + 'browser/渲染进程里的多个线程.md',
        },
    ],
});
