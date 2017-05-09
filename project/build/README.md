config.json文件中modulePath配置模块的根路径，需要注意的是里面的配置需要严格的JSON格式，所有的字符需要用双引号包裹起来

index.js为执行文件，使用命令行直接定位到view-config文件夹，执行：node index.js

fis-demo.html为组件可视化生成的文件。最终在浏览器中打开该文件即可看到组件化效果

wrap.html是用来包裹组件可视化代码的。需要的js、css需要自己去配置

注意：
该程序会自动读取模块的js文件的注释生成fis-demo.html。所以模块js文件的文件注释必须满足以下条件
1.有且只有一个文件注释：使用"/**"开头，以"*/"结尾
2.注释中"@example"和"@example end"之间的字符串被认为是代码段：
	1）不要出现不符合代码格式的字符
	2)"html:"、"js:"分别为html代码段和js代码段开始的标志。其后的代码分别要严格按照html和js的格式要求书写
3.模块集所在文件夹需要在config.json中配置，按照严格JSON格式书写。包裹组件可视化代码的wrap.html需要自己配置
4.在fis编译之前先运行index.js文件，生成最新的fis-demo.html然后再fis编译打包，即可通过url访问
5.具体的例子可以参考topBar和financialsBar