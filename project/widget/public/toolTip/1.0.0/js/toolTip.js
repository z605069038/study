/**
 * @release true

 * @author zy
 * @date 2017-02-28
 * @description toolTip工具

 * @实例化：toolTip = new toolTip(dom);
 * @param dom {Dom} 为需要有弹出框功能的节点；
 * @param 元素中  data-toggle="tooltip"  data-placement="right"  title="" 为必要属性  data-placement可以为['top','left','bottom','right','top-left','top-right','bottom-left','bottom-right']

 *
 * @example
 html:
 <div class="js-toolTip" style="margin-top:30px">
    <div>
        <h4>工具提示（Tooltip）插件 - 超链接</h4>
        这是一个 <a href="#" id='default' class="tooltip-test" data-toggle="tooltip" title="默认的 Tooltip">默认的 Tooltip</a>.
        这是一个 <a href="#" id='left' class="tooltip-test" data-toggle="tooltip" data-placement="left" title="左侧的 Tooltip">左侧的 Tooltip</a>.
        这是一个 <a href="#" id='top' data-toggle="tooltip" data-placement="top" title="顶部的 Tooltip">顶部的 Tooltip</a>.
        这是一个 <a href="#" id='bottom' data-toggle="tooltip" data-placement="bottom" title="底部的 Tooltip">底部的 Tooltip</a>.
        这是一个 <a href="#" id='right' data-toggle="tooltip" data-placement="right" title="右侧的 Tooltip">右侧的 Tooltip</a>
    </div>
    <div>
        <h4>工具提示 按钮</h4>
        <div style="width:600px;margin:0 auto">
            <div>
                <button id='top-left' data-toggle="tooltip" data-placement="top-left" title="top left侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">上左</button>
                <button id='top1' data-toggle="tooltip" data-placement="top" title="top 侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">上</button>
                <button id='top-right' data-toggle="tooltip" data-placement="top-right" title="top right侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">上右</button>
            </div>
            <div>
                <button id='left1' data-toggle="tooltip" data-placement="left" title="left侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">左</button>
                <button style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">空白</button>
                <button id='right1' data-toggle="tooltip" data-placement="right" title="right 侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">右</button>
            </div>
            <div>
                <button id='bottom-left' data-toggle="tooltip" data-placement="bottom-left" title="bottom-left侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">下左</button>
                <button id="bottom"  data-toggle="tooltip" data-placement="bottom"  title="bottom侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">下</button>
                <button id='bottom-right' data-toggle="tooltip" data-placement="bottom-right" title="bottom-right 侧的 Tooltip" style="background-color: #fff;padding: 4px 6px;border: 1px solid #ccc;border-radius: 4px;margin:  12px;width:50px">下右</button>
             </div>
        </div>
    </div>
 </div>


 js:
 var toolTip = require('widget/public/toolTip/1.0.0/js/toolTip');
 new toolTip($("[data-toggle='tooltip']"));

 @example end
 *
 */

/*
 * @require '../css/toolTip.less';
*/


var tpl_toolTip = require('../toolTip.tpl');

function toolTip(cont) {
    this.cont = $(cont);
    this.init();
};

toolTip.prototype.bindEvent = function() {
    var _this = this;
    this.cont.hover(
        function() {
            var title = $(this).attr("title");
            var placeMent = $(this).attr("data-placement") || 'top';
            var elementOutWidth = $(this).outerWidth(true);
            var elementOutHeight = $(this).outerHeight(true);
            var elementHeight = $(this).outerHeight();
            var top =  $(this).position().top;
            var left =  $(this).position().left;
            var ids = (new Date()).valueOf();
            $(this).attr("data-toolTipId",ids);
            var html = '<div id=toolTip-'+ids+' class="tooltip '+placeMent+'"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+title+'</div></div>';
            $(this).after(html);
            $(this).next('.tooltip').css("opacity",1);
            var toolTipOutWidth = $(this).next('.tooltip').outerWidth(true);
            var toolTipOutHeight =  $(this).next('.tooltip').outerHeight(true);
            var param = {
                placeMent:placeMent,
                top:top,
                left:left,
                elementOutWidth:elementOutWidth,
                elementOutHeight:elementOutHeight,
                elementHeight:elementHeight,
                toolTipOutWidth:toolTipOutWidth,
                toolTipOutHeight:toolTipOutHeight
            }
            var topAndLeft = _this.getTopAndLeft(param);

            $(this).next('.tooltip').css("top",topAndLeft.top).css('left',topAndLeft.left);
        },
        function(){
            var id = $(this).attr("data-toolTipId");
            $(this).next('#toolTip-'+id).remove();
        }
    )
    this.cont.on("click",function(){
        $(".tooltip").remove();
        var title = $(this).attr("title");
        var placeMent = $(this).attr("data-placement") || 'top';
        var elementOutWidth = $(this).outerWidth(true);
        var elementOutHeight = $(this).outerHeight(true);
        var elementHeight = $(this).outerHeight();
        var top =  $(this).position().top;
        var left =  $(this).position().left;
        var html = '<div class="tooltip clicked '+placeMent+'"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+title+'</div></div>';
        $(this).after(html);
        $(this).next('.tooltip').css("opacity",1);
        var toolTipOutWidth = $(this).next('.tooltip').outerWidth(true);
        var toolTipOutHeight =  $(this).next('.tooltip').outerHeight(true);
        var param = {
            placeMent:placeMent,
            top:top,
            left:left,
            elementOutWidth:elementOutWidth,
            elementOutHeight:elementOutHeight,
            elementHeight:elementHeight,
            toolTipOutWidth:toolTipOutWidth,
            toolTipOutHeight:toolTipOutHeight
        }
        var topAndLeft = _this.getTopAndLeft(param);
        $(this).next('.tooltip').css("top",topAndLeft.top).css('left',topAndLeft.left);
    })

};

toolTip.prototype.init = function() {
    this.bindEvent();
}

toolTip.prototype.getTopAndLeft = function(obj){
    var top,left;
    if(obj.placeMent == 'right'){
        top = obj.top - (obj.toolTipOutHeight-obj.elementOutHeight)/2;
        left = obj.left + obj.elementOutWidth;
    }else if(obj.placeMent == 'left'){
        top = obj.top - (obj.toolTipOutHeight-obj.elementOutHeight)/2;
        left = obj.left - obj.toolTipOutWidth;
    }else if(obj.placeMent == 'top'){
        top = obj.top - obj.toolTipOutHeight + (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left - (obj.toolTipOutWidth-obj.elementOutWidth)/2;
    }else if(obj.placeMent == 'bottom'){
        top = obj.top + obj.elementOutHeight - (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left - (obj.toolTipOutWidth-obj.elementOutWidth)/2;
    }else if(obj.placeMent == 'top-left'){
        top = obj.top - obj.toolTipOutHeight + (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left + obj.elementOutWidth/2 - 12;
    }else if(obj.placeMent == 'top-right'){
        top = obj.top - obj.toolTipOutHeight + (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left - obj.toolTipOutWidth+ obj.elementOutWidth/2 + 12;
    }else if(obj.placeMent == 'bottom-left'){
        top = obj.top + obj.elementOutHeight - (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left + obj.elementOutWidth/2 - 12;
    }else if(obj.placeMent == 'bottom-right'){
        top = obj.top + obj.elementOutHeight - (obj.elementOutHeight - obj.elementHeight)/2;
        left = obj.left - obj.toolTipOutWidth+ obj.elementOutWidth/2 + 12;
    }
    return {top:top,left:left};
}
return toolTip;