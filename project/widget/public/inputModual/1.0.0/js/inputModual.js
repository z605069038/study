/**
 * @release true

 * @author zy
 * @date 2017-03-01
 * @description input组件

 * @实例化：直接在input上调用class即可

 *
 * @example
 html:
 <div class="js-inputModual" style="margin-top:30px;padding-bottom:20px;padding-left:20px;background:#fff">
     <div style="margin:20px 0px;width:70%">
        <h2>输入框</h2>
        <div style="margin:10px 0px" >默认输入框<input class="form-control" placeholder="这是默认输入框"/></div>
        <div style="margin:10px 0px">小号输入框<input class="form-control input-sm" placeholder="这是小号输入框"/></div>
        <div style="margin:10px 0px">普通输入框<input class="form-control" placeholder="这是中号输入框"/></div>
        <div style="margin:10px 0px">大号输入框<input class="form-control input-lg" placeholder="这是大号输入框"/></div>
    </div>

    <div style="margin:20px 0px;width:70%">
        <h2>复合型输入框</h2>
        <div style="margin:10px 0px">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">http://</div>
                    <input type="text" class="form-control" placeholder="web">
                    <div class="input-group-addon">.com</div>
                </div>
            </div>
        </div>

        <div style="margin:10px 0px;">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">http://</div>
                    <input type="text" class="form-control input-lg" placeholder="web">
                    <div class="input-group-addon">
                        <select>
                            <option>.com</option>
                            <option>.cn</option>
                            <option>.net</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin:10px 0px">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">
                        <select>
                            <option>www.</option>
                            <option>jp.</option>
                            <option>kr.</option>
                        </select>
                    </div>
                    <input type="text" class="form-control input-sm" placeholder="web">
                    <div class="input-group-addon">
                        <select>
                            <option>.com</option>
                            <option>.cn</option>
                            <option>.net</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
     </div>

    <div style="margin:20px 0px;width:50%">
        <h2>带Icon的输入框:</h2>
        <div class="form-group has-feedback">
            <input type="text" class="form-control" placeholder="web">
            <span class="form-control-feedback fa fa-search" style="cursor: pointer;font-size: 16px;pointer-events: inherit;line-height:34px"></span>
        </div>
        <div class="form-group has-feedback">
            <input type="text" class="form-control input-lg" placeholder="web">
            <span class="form-control-feedback fa fa-search" style="cursor: pointer;font-size: 16px;pointer-events: inherit;"></span>
        </div>
        <div class="form-group has-feedback">
            <input type="text" class="form-control input-sm" placeholder="web">
            <span class="form-control-feedback fa fa-search" style="cursor: pointer;font-size: 16px;pointer-events: inherit;"></span>
        </div>
    </div>

    <div style="margin:20px 0px;width:50%">
        <h2>textarea文本框:</h2>
        <div>
            <textarea class="form-control" rows="3"></textarea>
        </div>
    </div>
 </div>

 js:
 var inputModual = require('widget/public/inputModual/1.0.0/js/inputModual');

 @example end


 *
 */

/*
 * @require '../css/inputModual.less';
 * @require '../css/font-awesome.css';
 */

var tpl_inputModual = require('../inputModual.tpl');

function inputModual() {

};


return inputModual