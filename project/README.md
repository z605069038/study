# widget_preview  组件可视化

依赖fis插件 查看fis-conf.js 也可直接运行fis3 release 会有对应的提示。对于缺失的插件使用 npm install -g xxx

build文件夹是组件可视化编译文件夹。里面的文件说明详细如下

build.js为执行文件，使用命令行直接定位到build文件夹，执行：node build 

widget.html为编译生成的文件。最终在浏览器中打开该文件即可看到组件化效果

build.html是用来包裹组件可视化代码的。需要的js、css需要自己去配置 widget/widget.css widget.js

注意：

该程序会自动读取组件widget文件夹下的js文件的注释生成widget.html。所以模块js文件的文件注释必须满足以下条件

1.有且只有一个文件注释：使用"/**"开头，以"*/"结尾

2.注释中"@example"和"@example end"之间的字符串被认为是代码段：

	1）不要出现不符合代码格式的字符
	
	2)"html:"、"js:"分别为html代码段和js代码段开始的标志。其后的代码分别要严格按照html和js的格式要求书写
	
3.包裹组件可视化代码的build.html需要自己配置

4.在fis编译之前先运行node build文件，生成最新的widget.html然后再fis编译打包，即可通过url访问

5.注意@release true 代表发布该组件 ; @release false 则反之不发布。


样例：

1、进入build目录，执行node build；

2、返回主目录，执行fis3 release

3、执行fis3 server start   然后访问http://127.0.0.1:8080/publish/view/1.0.0/widget.html即可
