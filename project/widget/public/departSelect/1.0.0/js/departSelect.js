/**
 * Created by zy on 2017/4/25.
 */
/**
 * @release true

 * @author zy
 * @date 2017-04-25

 * @description 禁毒一体化平台产品推养而生的顶部。

 * @example 实例化：depart = new Depart(dom);
 * @param dom {Dom} 为顶部组件父级节点，将根据情况append模版，
 *
 * @description 部门选择层级组件，依赖模版 departSelect.tpl

 * @example
 html:
 <div class="depart"></div>

 js:
 var Depart = require('widget/public/departSelect/1.0.0/js/departSelect'),
 depart = new Depart($('.depart'));
    $.getJSON('json/data.json',function(data){
         depart.init(data.RECORDS,fnConfirm,fnCancel);
    });

 @example end
 */

/*
 * @require '../css/departSelect.less';
 */


var tpl_depart = require('../departSelect.tpl');

var ctrl = function(container){

    this.$container = (container instanceof $) ? container : $(container);

}

ctrl.prototype.init = function(data){
    var _this = this;
    this.data = data;
    var array = new Array();
    for(var i in data){
        if(data[i].parentId == 0){
            var obj = new Object();
            obj.name = data[i].name;
            obj.id = data[i].id;
            obj.num = this.getLength(data,obj.id);
            array.push(obj);
        }
    }

    _this.$container.html(tpl_depart({
        data :array,
        title:'',
        str:'',
        flag :false
    }));

    _this.bindEvent();
};

ctrl.prototype.getLength = function(data,id){
    var index = 0;
    for(var i in data){
        if(data[i].parentId == id) index++;
    }
    return index;
}

ctrl.prototype.bindEvent = function(){
    var _this = this;
    //选项内容
    _this.$container.on('click','.item',function(){
        var parentId = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        var num = $(this).attr('data-num');
        if(num>0 &&(!$(this).parent().find('input').is(':checked')))_this.reset(_this.data,parentId,name,true);
        else $(this).prev().click();
    });

    //标题
    _this.$container.on('click','.title-item',function(){
        var parentId = $(this).attr('data-id');
        var name = $(this).text();
        _this.reset(_this.data,parentId,name,false);
    });

    //全选
    _this.$container.on('click','.select-all label input',function(){
        var $this = $(this);
        var $ul = $('.select-text').find('ul');
        if($this.is(':checked')){
            _this.$container.find('.select-content-ul input').each(function(){
                $(this).prop('checked',true);
                if(!$('.select-text ul li[data-id="'+$(this).next().attr("data-id")+'"]').length>0)
                    $ul.append('<li title="'+$(this).next().attr("data-name")+'" data-id="'+$(this).next().attr("data-id")+'">'+$(this).next().attr("data-name")+'<em>×</em></li>')
            });
        }else{
            _this.$container.find('.select-content-ul input').each(function(){
                $(this).prop('checked',false);
                $ul.find('li[data-id="'+$(this).next().attr("data-id")+'"]').remove();
            });
        }
    });

    //选项
    _this.$container.on('click','.select-content-ul li input',function(){
        var $this = $(this);
        var $ul = $('.select-text').find('ul');
        if($this.is(':checked')){
            $ul.append('<li title="'+$(this).next().attr("data-name")+'" data-id="'+$(this).next().attr("data-id")+'">'+$(this).next().attr("data-name")+'<em>×</em></li>')
        }else{
            $ul.find('li[data-id="'+$(this).next().attr("data-id")+'"]').remove();
        }
        _this.checkedAll();
    });

    //em
    _this.$container.on('click','.select-text ul li em',function(){
        var id = $(this).parent().attr('data-id');
        $('.select-content-ul').each(function(){
            $(this).find('li a[data-id="'+id+'"]').prev().prop('checked',false);
        });
        $(this).parent().remove();
        _this.checkedAll();
    });
}

//判断是否全选
ctrl.prototype.checkedAll = function(){
    var flag = true;//默认是全选
    $('.select-content-ul li input').each(function(){
        if(!$(this).is(':checked')){
            flag = false;
        }
    });
    if(flag) $('.select-all').find('input').prop('checked',true);
    else $('.select-all').find('input').prop('checked',false);
}

ctrl.prototype.reset = function(data,parentId,name,flag){//flag true:点击列表 flase：点击title
    var html = '';
    var str = $('.select-text ul').html();
    var checkFlag = true;
    var array = new Array();
    for(var i in data){
        if(data[i].parentId == parentId){
            var obj = new Object();
            obj.name = data[i].name;
            obj.id = data[i].id;
            obj.num = this.getLength(data,obj.id);
            if($('.select-text ul').find('li[data-id="'+obj.id+'"]').length>0)
                obj.checked = true;
            else{
                checkFlag = false;
                obj.checked = false;
            }
            array.push(obj);
        }
    }

    var children = this.$container.find('.select-title').children()
    if(flag){
        for(var i=0;i<children.length;i++){
            var text = children.eq(i).text();
            html +='<a href="javascript:void(0)" class="title-item" data-id="'+children.eq(i).attr("data-id")+'">'+text+'</a> &gt; ';
        }
        html += '<span data-id="'+parentId+'">'+name+'</span>';
    }else{
        for(var i=0;i<children.length;i++){
            var text = children.eq(i).text();
            if(children.eq(i).attr("data-id") == parentId){
                html += '<span data-id="'+parentId+'">'+name+'</span>';
                break;
            }
            else
                html +='<a href="javascript:void(0)" class="title-item" data-id="'+children.eq(i).attr("data-id")+'">'+text+'</a> &gt; ';
        }
    }

    this.$container.html(tpl_depart({
        data :array,
        title:html,
        str:str || '',
        flag :checkFlag
    }));
}

return ctrl;
