/**
 * @release true
 
 * @author zy
 * @date 2017-03-06
 
 * @description 地图坐标转换功能。

 * @example 实例化：transform = new Transform(dom);
 * @param dom {Dom} 为样例展示，将根据情况append模版，生成分页节点；；
 * @description 坐标转换transform，样例依赖模版 transform.tpl

 * @example
    html:
    <div class="transform"></div>
    
    js:
    var Transform = require('widget/jidu/transform/1.0.0/js/transform'),
        transform = new Transform($('.transform'));

    transform.init();

    @example end  
 */



var tpl_transform = require('../transform.tpl');
var trans = require('trans.js');
var ctrl = function(container){

    this.$container = (container instanceof $) ? container : $(container);
}

ctrl.prototype.init = function(opt){
    var _this = this;

    _this.$container.html(tpl_transform);
    _this.bindEvent();
};

ctrl.prototype.bindEvent = function(){
    var _this = this;
    _this.$container.on('click','.transform-btn',function(){
        var text = $(this).prev('.coordinate').val().split(',');
        var lat = text[0];
        var lng = text[1];
        var coordinate = trans.wgs2gcj(parseFloat(lat),parseFloat(lng));
        $(this).parents('.transform').find('.transform-result').text(coordinate.lat+','+coordinate.lng);
        $(this).prev('.coordinate').val('');
    });
}
return ctrl;
