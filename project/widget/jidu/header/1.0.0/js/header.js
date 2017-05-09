/**
 * @release true
 
 * @author zy
 * @date 2017-02-28
 
 * @description 禁毒一体化平台产品推养而生的顶部。

 * @example 实例化：header = new Header(dom);
 * @param dom {Dom} 为顶部组件父级节点，将根据情况append模版，生成分页节点；；
 *
 * @description 头部header，依赖模版 header.tpl

 * @example
    html:
    <div class="index-top"></div>
    
    js:
    var Header = require('widget/jidu/header/1.0.0/js/header'),
        header = new Header($('.index-top'));

    header.init();

    @example end  
 */

/*
 * @require '../css/header.less';
*/


var tpl_header = require('../header.tpl');

var ctrl = function(container){

    this.$container = (container instanceof $) ? container : $(container);

}

ctrl.prototype.init = function(opt){
    var _this = this;

    _this.$container.html(tpl_header);
};
return ctrl;
