//生产环境
fis.set('name', 'widget_preview');
fis.set('version', '1.0.0');

fis.hook('commonjs', {});

fis.match(/^\/common\/css\/(.*)$/i, {
    release : '/publish/common/css/${version}/$1'
});

fis.match(/^\/common\/dep\/(.*)$/i, {
    release : '/publish/common/dep/${version}/$1'
});

fis.match(/^\/common\/html\/(.*)$/i, {
    release : '/publish/common/html/${version}/$1'
});

fis.match(/^\/common\/js\/(.*)$/i, {
    release : '/publish/common/js/${version}/$1'
});

fis.match(/^\/widget\/(.*)\/img\/(.*)$/i, {
    release : '/publish/view/${version}/img/$2'
});


fis.match(/^\/widget\/(.*)\/json\/(.*)$/i, {
    release : '/publish/view/${version}/json/$2'
});

fis.match(/^\/widget\/(.*)\/css\/(.*)$/i, {
    packTo:'static/css/cominfo.css'
});

fis.match(/^\/widget\/(.*)\/fonts\/(.*)$/i, {
    release : '/publish/view/${version}/fonts/$2'
});

/*fis.match(/^\/widget\/(.*)\/js\/(.*)$/i, {
    packTo:'static/js/cominfo.js'
});*/
fis.match(/^\/widget\/(.*)\/js\/(.*)$/i, {
    release : '/publish/view/${version}/js/$2',
});

fis.match(/^\/static\/(.*)$/, {
    release : '/publish/view/${version}/$1'
});


fis.match('common/js/**.js', {
    isMod: true
}).match('widget/**/js/**.js', {
    isMod: true
}).match('common/js/common.js', {
    isMod: false
});


fis.match('server.js', {
    release: false
});

fis.match('**/{_*.scss,_*.less,*.md,build.*}', {
    release: false
}).match('**.less', {
    parser: fis.plugin('less2', {
        sourceMap: false
    }),
    rExt: '.css'
});


fis.match('*.css', {
    optimizer: fis.plugin('clean-css') // css 压缩
});

/*// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.{css,less}', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});*/

fis.match('*.{png}', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置 压缩图片大小
    optimizer: fis.plugin('png-compressor')
});

fis.match(/\/(.+)\/(.*\.tpl)$/, { // js 模版一律用 .tpl 作为后缀
    isMod: true,
    rExt: 'js',
    id: '$1.tpl',
    url: '/publish/view/${version}/tpl/$2.tpl',
    moduleId: '$1.tpl',
    parser: fis.plugin('imweb-tplv2'),
    packTo:'static/tpl/cominfo.tpl.js',
    //optimizer: fis.plugin('uglify-js')
});

//fis.match('*.js', {
//    optimizer: fis.plugin('uglify-js'),
//});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: false,
        resourceType: 'mod'
    })
});