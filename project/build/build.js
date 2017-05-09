var fs = require('fs');

var datas = '';//保存build.html文件内容
var writerStream = fs.createWriteStream('../static/widget.html');//输出widget.html文件路径

// //使用utf8编码写入数据
// writerStream.write(datas.join(''), 'UTF8');

// //标记文件结尾
// writerStream.end();

//处理流事件
writerStream.on('finish', function(){
	console.log('写入完成');
});
writerStream.on('error', function(err){
	console.log(err.stack);
})
var regs = {
	'release': /@\s*release\s*(.*?)(\r|\n)/,
	'wraphtml': /^([\s\S]*<(body)>[\s\S]*)(<\/\2>[\s\S]*)$/,
	'example': /\/\*\*([\s\S]*)@example[\s\S]*?html:([\s\S]*?)js:([\s\S]*?)@example end([\s|\S]*?)\*\//,
	'jsfile': /^\S+.js$/,
	'author': /@\s*author\s*(.*?)(\r|\n)/,
	'date': /@\s*date\s*(.*?)(\r|\n)/,
	'description': /@\s*description\s*(.*?)(\r|\n)/,
	'enter': /\s*(\r|\n)\s*/
};
var root = '../widget/';//模块文件所在目录
var unDomoduleLength = 0;//还没有处理的模块文件夹个数
var unDomoduleLength0 = 0;//还没有处理的模块文件夹个数
var innerLeftWrap = ['<div class="left-side">', '</div>'],
	innerRightWrap = ['<div class="right-side">', '</div>'],
	innerRightTWrap = ['<div class="right-side-top">', '</div>'],
	innerRightBWrap = ['<div class="right-side-bottom">', '</div>'],
	jsWrap = ['<script type="text/javascript">', '</script>'], 
	innerLeft = '',
	innerRightT = '',
	innerRightB = '',
	innerJs = '',
	count = 0;//统计所有模块数量

fs.readFile('build.html', function(err, data){						
	if (err) {
	   return console.error(err);
	}
	datas = data.toString();
	if(root){
		//console.log("build.html = " + datas);
		loopModule();
	}	
});
//遍历所有模块文件
function loopModule(){
	fs.readdir(root, function(err, files_0){
		if(err){
			return console.error(err);
		}
		unDomoduleLength0 = files_0.length;
		console.log('展示模块列表：');
		files_0.forEach(function(file_0){
			fs.readdir(root + file_0, function(err, files_1){
				if(err){
					return console.error(err);
				}
				unDomoduleLength += files_1.length;
				files_1.forEach(function(file_1){
					//获取加载模块的版本
					fs.readdir(root+ file_0 + '/' + file_1, function (err, files_2){
						files_2.forEach(function(file_2){
							console.log('模块归属：' + file_0);
							console.log('模块名称：' + file_1);
							console.log('模块版本：' + file_2);
							fs.readdir(root+ file_0+ '/' + file_1 + '/' + file_2 + '/js', function (err, files_3){
								if(err){
									return console.error(err);
								}
								//获取加载模块
								files_3.forEach(function(file_3){
									if(regs.jsfile.test(file_3)){
										var pa = root+ file_0+ '/' + file_1 + '/' + file_2 + '/js/' + file_3;
										console.log('模块配置js：' + pa);
										fs.readFile(pa, function(err, data){
											if (err) {
												return console.error(err);
											}
											var match;
											if(match = data.toString().match(regs.example)){
												var content = match[0].replace(regs.example,'$1$4')
													.replace(/((\r|\n)\s*)(\*)/g, '$1')
													.replace(regs.author, '\n')
													.replace(regs.date, '\n')
													.replace(regs.description, '\n')
													.replace(regs.enter, '\n');

												var replaceFlag = (regs.release.test(match[0])? match[0].match(regs.release)[1]: 'false');


												console.log('模块是否需要发布：' + replaceFlag);

												if(replaceFlag == "true"){
													innerLeft += '<div class="left-side-item' + (count == 0? ' visible': '') + '" data-mod="'+ file_3 +'">' + file_3 + '</div>';
													innerRightT += '<div class="right-side-top-item' + (count == 0? ' visible': '') + '" data-mod="'+ file_3 +'">' + match[2] + '</div>';
													innerRightB += '<div class="right-side-bottom-item' + (count == 0? ' visible': '') + '" data-mod="'+ file_3 +'">'
														+ '<div class="right-side-bottom-item-author">作者：' + (regs.author.test(match[0])? match[0].match(regs.author)[1]: '') + '</div>'
														+ '<div class="right-side-bottom-item-date">日期：' + (regs.date.test(match[0])? match[0].match(regs.date)[1]: '') + '</div>'
														+ '<div class="right-side-bottom-item-description">描述：' + (regs.description.test(match[0])? match[0].match(regs.description)[1]: '') + '</div>'
														+ '<div class="right-side-bottom-item-code">样例：<div>html:<br>' + transToHtml(match[2].replace(regs.enter, '\n')) + '<br>js:<br>' + transToHtml(match[3].replace(regs.enter, '\n')) + '</div></div>'
															//去掉代码用例区域，去掉每一行之前的*符号
														+ '<div class="right-side-bottom-item-content">其他：<div>' + transToHtml(content) + '</div></div></div>';
													innerJs += match[3] + ";";
													count++;
												}

												unDomoduleLength--;
												if(unDomoduleLength == 0 && unDomoduleLength0 == 0){
													var innerBody = warpText(innerLeftWrap, innerLeft)
														+ warpText(innerRightWrap, warpText(innerRightTWrap, innerRightT) + warpText(innerRightBWrap, innerRightB))
														+ warpText(jsWrap, innerJs);


													//使用utf8编码写入数据
													writerStream.write(datas.replace(regs.wraphtml, '$1' + innerBody + '$3'), 'UTF8');
													//标记文件结尾
													writerStream.end();
												}
											}
										});
									}
								});
							});
						});
					});
				});
			});
			unDomoduleLength0--;
		})
	})

}

//用数组wrapArr包裹inner并返回包裹结果
function warpText(wrapArr, inner){
	return '' + wrapArr[0] + inner + wrapArr[1];
}
//将str字符串转换成HTML格式
function transToHtml(str){
	var tran = [/&/g, />/g, /</g, /\n/g, / /g],//先要处理'&'才能处理其他标签，否则其他标签生成的‘&’会被处理
		to = ['&amp;', '&gt;', '&lt;', '<br>', '&nbsp;'];
	for(var i = 0; i < tran.length; i++){
		str = str.replace(tran[i], to[i]);
	}
	return str;
}