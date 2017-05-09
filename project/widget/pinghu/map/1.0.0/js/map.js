/**
 * @release true
 
 * @author zy
 * @date 2017-03-15
 
 * @description 平湖项目数据统计模块地图组件。

 * @example 实例化：map = new Map(dom);
 * @param dom {Dom} 为顶部组件父级节点，将根据情况append模版，生成分页节点；；
 * @param data为一系列展示数据
 * @param url 地图图片路径
 * @description 头部map，依赖模版 map.tpl

 * @example
    html:
    <div class="zone-map"></div>
    
    js:
    var Map = require('widget/pinghu/map/1.0.0/js/map'),
        map = new Map($('.zone-map'));
    var data = [{
            px:'180',//left
            py:'110',//top
            street:'新埭',//名称
            total:'1'//数据上传量
        },{px:'208',py:'325',street:'林埭',total:'2'
        },{px:'80',py:'210',street:'钟埭',total:'3'
        },{px:'355',py:'350',street:'独山港',total:'4'
        },{px:'236',py:'210',street:'广陈',total:'5'
        },{px:'380',py:'220',street:'新仓',total:'6'
        },{px:'120',py:'335',street:'当湖',total:'7'
        },{px:'210',py:'460',street:'乍浦',total:'8'
        },{px:'30',py:'355',street:'曹桥',total:'9'
        },{px:'0',py:'0',street:'区本级',total:'1212'
        }]
    var url = 'img/pinghu-map.png';
    map.init(url,data);

    @example end  
 */

/*
 * @require '../css/map.less';
*/


var tpl_map = require('../map.tpl');

var ctrl = function(container){

    this.$container = (container instanceof $) ? container : $(container);

}

ctrl.prototype.init = function(data){
    var _this = this;

    _this.$container.html(tpl_map(data));
};
return ctrl;
