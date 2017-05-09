/**
 * @release true
 
 * @author zy
 * @date 2017-03-01
 
 * @description 根据文档所写顶部。

 * @example 实例化：topmenu = new Topmenu(dom,opt);
 * @param dom {Dom} 为顶部组件父级节点，将根据情况append模版，生成分页节点；；
 * @param opt 其实theme为所选主题，主题不同，样式不同
 * @description 头部topmenu，依赖模版 header.tpl

 * @example
    html:
    <div class="topmenu"></div>
    
    js:
    var Topmenu = require('widget/jidu/topmenu/1.0.0/js/topmenu'),
        topmenu = new Topmenu($('.topmenu'));

    topmenu.init();

    @example end  
 */

/*
 * @require '../css/topmenu.less';
*/


var tpl_topmenu = require('../topmenu.tpl');

var ctrl = function(container){

    this.$container = (container instanceof $) ? container : $(container);
}

ctrl.prototype.init = function(opt){
    var _this = this;

    _this.$container.html(tpl_topmenu);
    if(opt)
        _this.$container.find('.theme').attr('class','theme '+opt.theme);
    _this.bindEvent();
};

ctrl.prototype.bindEvent = function(){
    var _this = this;
    _this.$container.on('click','.themeSelect label',function(){
        var value = $(this).text();
        _this.$container.find('.theme').attr('class','theme '+value);
    });

    _this.$container.on('click','.theme span',function(){
        var $this = $(this);
        if(!$this.hasClass('active'))
            $this.addClass('active').siblings().removeClass('active');
    });
}
return ctrl;
