var fs = require('fs');
var path = require('path');
var excelPort = require('excel-export');

var list = [];//用于存储中文字符
var objList = {};//用于判断中文字符是否重复
var sum = 0;//计算字数
var readFileNum = 0;//计算正在读取的文件

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('build/app');

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //文件后缀
                var extname=path.extname(filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            if((extname=='.html' || extname=='.js')){
                                readFileNum++;
                                fs.readFile(filedir,{encoding:'utf-8'},function(err,data){
                                    readFileNum--;
                                    var match = data.match(/[\u4e00-\u9faf]([\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5|\u4e00-\u9fa5]|[0-9]|[a-z]|[A-Z]|-)+[\u4e00-\u9faf]/g) || [];
                                    match.forEach(function(value){
                                        if(!objList[value]){
                                            objList[value]=1;
                                            list.push([value,'']);
                                            sum+= value.length;
                                        }
                                    })
                                    console.log(readFileNum);
                                    if(readFileNum==0){
                                        console.log(sum);
                                        var conf = {};
                                        var filename = 'excel';
                                        conf.cols = [
                                            {caption:'中文', type:'string', width:20},
                                            {caption:'英文', type:'string', width:40},
                                         ];
                                        conf.rows = list;
                                        var result = excelPort.execute(conf);

                                        var random = Math.floor(Math.random()*10000+0);

                                        var uploadDir = path.resolve('C:/Users/wb.zhangyao02/Desktop');
                                        var excelPath = uploadDir + '/' + filename + random + ".xlsx";
                                         console.log(excelPath);
                                        fs.writeFile(excelPath, result, 'binary',function(err){
                                            if(err){
                                                console.log(err);
                                            }
                                        });
                                    }
                                })
                            }
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}