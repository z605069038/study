/**
 * @release true

 * @author zy
 * @date 2017-03-10

 * @description 评分组件

 * @example
 html:
 <div class="sort-page js-scoreCtrl">
    <div class="container">
        <form>
            <h2>从大到小排列</h2>
            <input id="input-1a" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xl" data-default-caption="{rating}星级" data-star-captions="{}"><br>
            <input id="input-1b" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="lg" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-1c" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="md" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-1d" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="sm" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-1e" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <br/><br/>
            <h3>不同形状 及自定义后缀名 见字体库glyphicons-halflings-regular</h3>
            <span id="glyphicons-pic" ></span>
            <input id="input-2a" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-2b" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-symbol="&#xe005;" data-default-caption="{rating} 颗心" data-star-captions="{}"><br>
            <input id="input-2c" value="3" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-symbol="&#xe008;" data-default-caption="{rating} 个人" data-star-captions="{}"><br>
            <input id="input-2d" value="3" type="number" class="rating" min=0 max=5 step=0.2 data-size="xs" data-symbol="&#xe001;" data-default-caption="{rating} 杯酒" data-star-captions="{}"><br>

            <h3>disabled状态</h3>
            <input id="input-3a" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}" disabled="disabled"><br>
            <input id="input-3b" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}" disabled="disabled"><br>

            <h3>readOnly状态</h3>
            <input id="input-4a" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}" readOnly="readOnly"><br>
            <input id="input-4b" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}" readOnly="readOnly"><br>

            <h3>step情况(0.1;0.2;0.5;1)</h3>
            <input id="input-5a" value="3" type="number" class="rating" min=0 max=5 step=0.1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-5b" value="3" type="number" class="rating" min=0 max=5 step=0.2 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-5c" value="3" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-5d" value="3" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>

            <h3>初始值(0;1;2;3;4;5)</h3>
            <input id="input-6a" value="0" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-6b" value="1" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-6c" value="2" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-6d" value="3" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-6e" value="4" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-6f" value="5" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-default-caption="{rating} 星级" data-star-captions="{}"><br>

            <h3>星星数量</h3>
            <input id="input-7a" value="0" type="number" class="rating" min=0 max=5 step=1 data-size="xs" data-stars="5" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-7b" value="0" type="number" class="rating" min=0 max=8 step=1 data-size="xs" data-stars="8" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-7c" value="0" type="number" class="rating" min=0 max=10 step=1 data-size="xs" data-stars="10" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
            <input id="input-7d" value="0" type="number" class="rating" min=0 max=20 step=1 data-size="xs" data-stars="20" data-default-caption="{rating} 星级" data-star-captions="{}"><br>
        </form><br>
    </div>
 </div>


 js:
 var scoreCtrl = require('widget/shuyin/scoreCtrl/1.0.0/js/scoreCtrl')
 var $input = $('input.rating');
 var count = Object.keys($input).length;
 if (count > 0) {
    $input.rating();
 }

 @example end


 */

/*
 * @require '../css/scoreCtrl.css';
 * @require '../css/glyphicons.less';
 */


var scoreCtrl_page = require('../scoreCtrl.tpl');


var DEFAULT_MIN = 0;
var DEFAULT_MAX = 5;
var DEFAULT_STEP = 0.5;

var isEmpty = function (value, trim) {
    return typeof value === 'undefined' || value === null || value === undefined || value == []
        || value === '' || trim && $.trim(value) === '';
};

var validateAttr = function ($input, vattr, options) {
    var chk = isEmpty($input.data(vattr)) ? $input.attr(vattr) : $input.data(vattr);
    if (chk) {
        return chk;
    }
    return options[vattr];
};

var getDecimalPlaces = function (num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
};

var applyPrecision = function (val, precision) {
    return parseFloat(val.toFixed(precision));
};

// Rating public class definition
var Rating = function (element, options) {
    this.$element = $(element);
    this.init(options);
};

Rating.prototype = {
    constructor: Rating,
    _parseAttr: function (vattr, options) {
        var self = this, $input = self.$element;
        if ($input.attr('type') === 'range' || $input.attr('type') === 'number') {
            var val = validateAttr($input, vattr, options);
            var chk = DEFAULT_STEP;
            if (vattr === 'min') {
                chk = DEFAULT_MIN;
            }
            else if (vattr === 'max') {
                chk = DEFAULT_MAX;
            }
            else if (vattr === 'step') {
                chk = DEFAULT_STEP;
            }
            var final = isEmpty(val) ? chk : val;
            return parseFloat(final);
        }
        return parseFloat(options[vattr]);
    },
    /**
     * Listens to events
     */
    listen: function () {
        var self = this;
        self.$rating.on("click", function (e) {
            if (!self.inactive) {
                w = e.pageX - self.$rating.offset().left;
                self.setStars(w);
                self.$element.trigger('change');
                self.$element.trigger('rating.change', [self.$element.val(), self.$caption.html()]);
            }
        });
        self.$clear.on("click", function (e) {
            if (!self.inactive) {
                self.clear();
            }
        });
        $(self.$element[0].form).on("reset", function (e) {
            if (!self.inactive) {
                self.reset();
            }
        });
    },
    initSlider: function (options) {
        var self = this;
        if (isEmpty(self.$element.val())) {
            self.$element.val(0);
        }
        self.initialValue = self.$element.val();
        self.min = (typeof options.min !== 'undefined') ? options.min : self._parseAttr('min', options);
        self.max = (typeof options.max !== 'undefined') ? options.max : self._parseAttr('max', options);
        self.step = (typeof options.step !== 'undefined') ? options.step : self._parseAttr('step', options);
        if (isNaN(self.min) || isEmpty(self.min)) {
            self.min = DEFAULT_MIN;
        }
        if (isNaN(self.max) || isEmpty(self.max)) {
            self.max = DEFAULT_MAX;
        }
        if (isNaN(self.step) || isEmpty(self.step) || self.step == 0) {
            self.step = DEFAULT_STEP;
        }
        self.diff = self.max - self.min;
    },
    /**
     * Initializes the plugin
     */
    init: function (options) {
        var self = this;
        self.options = options;
        self.initSlider(options);
        self.checkDisabled();
        $element = self.$element;
        self.containerClass = options.containerClass;
        self.glyphicon = options.glyphicon;
        var defaultStar = (self.glyphicon) ? '\ue006' : '\u2605';
        self.symbol = isEmpty(options.symbol) ? defaultStar : options.symbol;
        self.rtl = options.rtl || self.$element.attr('dir');
        if (self.rtl) {
            self.$element.attr('dir', 'rtl');
        }
        self.showClear = options.showClear;
        self.showCaption = options.showCaption;
        self.size = options.size;
        self.stars = options.stars;
        self.defaultCaption = options.defaultCaption;
        self.starCaptions = options.starCaptions;
        self.starCaptionClasses = options.starCaptionClasses;
        self.clearButton = options.clearButton;
        self.clearButtonTitle = options.clearButtonTitle;
        self.clearButtonBaseClass = !isEmpty(options.clearButtonBaseClass) ? options.clearButtonBaseClass : 'clear-rating';
        self.clearButtonActiveClass = !isEmpty(options.clearButtonActiveClass) ? options.clearButtonActiveClass : 'clear-rating-active';
        self.clearCaption = options.clearCaption;
        self.clearCaptionClass = options.clearCaptionClass;
        self.clearValue = options.clearValue;
        self.$element.removeClass('form-control').addClass('form-control');
        self.$clearElement = isEmpty(options.clearElement) ? null : $(options.clearElement);
        self.$captionElement = isEmpty(options.captionElement) ? null : $(options.captionElement);
        if (typeof self.$rating == 'undefined' && typeof self.$container == 'undefined') {
            self.$rating = $(document.createElement("div")).html('<div class="rating-stars"></div>');
            self.$container = $(document.createElement("div"));
            self.$container.before(self.$rating);
            self.$container.append(self.$rating);
            self.$element.before(self.$container).appendTo(self.$rating);
        }
        self.$stars = self.$rating.find('.rating-stars');
        self.generateRating();
        self.$clear = !isEmpty(self.$clearElement) ? self.$clearElement : self.$container.find('.' + self.clearButtonBaseClass);
        self.$caption = !isEmpty(self.$captionElement) ? self.$captionElement : self.$container.find(".caption");
        self.setStars();
        self.$element.hide();
        self.listen();
        if (self.showClear) {
            self.$clear.attr({"class": self.getClearClass()});
        }
    },
    checkDisabled: function () {
        var self = this;
        self.disabled = validateAttr(self.$element, 'disabled', self.options);
        self.readonly = validateAttr(self.$element, 'readonly', self.options);
        self.inactive = (self.disabled || self.readonly);
    },
    getClearClass: function () {
        return this.clearButtonBaseClass + ' ' + ((this.inactive) ? '' : this.clearButtonActiveClass);
    },
    generateRating: function () {
        var self = this, clear = self.renderClear(), caption = self.renderCaption(),
            css = (self.rtl) ? 'rating-container-rtl' : 'rating-container',
            stars = self.getStars();
        css += (self.glyphicon) ? ((self.symbol == '\ue006') ? ' rating-gly-star' : ' rating-gly') : ' rating-uni';
        self.$rating.attr('class', css);
        self.$rating.attr('data-content', stars);
        self.$stars.attr('data-content', stars);
        var css = self.rtl ? 'star-rating-rtl' : 'star-rating';
        self.$container.attr('class', css + ' rating-' + self.size);

        if (self.inactive) {
            self.$container.removeClass('rating-active').addClass('rating-disabled');
        }
        else {
            self.$container.removeClass('rating-disabled').addClass('rating-active');
        }

        if (typeof self.$caption == 'undefined' && typeof self.$clear == 'undefined') {
            if (self.rtl) {
                self.$container.prepend(caption).append(clear);
            }
            else {
                self.$container.prepend(clear).append(caption);
            }
        }
        if (!isEmpty(self.containerClass)) {
            self.$container.removeClass(self.containerClass).addClass(self.containerClass);
        }
    },
    getStars: function () {
        var self = this, numStars = self.stars, stars = '';
        for (var i = 1; i <= numStars; i++) {
            stars += self.symbol;
        }
        return stars;
    },
    renderClear: function () {
        var self = this;
        if (!self.showClear) {
            return '';
        }
        var css = self.getClearClass();
        if (!isEmpty(self.$clearElement)) {
            self.$clearElement.removeClass(css).addClass(css).attr({"title": self.clearButtonTitle});
            self.$clearElement.html(self.clearButton);
            return '';
        }
        return '<div class="' + css + '" title="' + self.clearButtonTitle + '">' + self.clearButton + '</div>';
    },
    renderCaption: function () {
        var self = this, val = self.$element.val();
        if (!self.showCaption) {
            return '';
        }
        var html = self.fetchCaption(val);
        if (!isEmpty(self.$captionElement)) {
            self.$captionElement.removeClass('caption').addClass('caption').attr({"title": self.clearCaption});
            self.$captionElement.html(html);
            return '';
        }
        return '<div class="caption">' + html + '</div>';
    },
    fetchCaption: function (rating) {
        var self = this;
        var val = parseFloat(rating);
        var css = isEmpty(self.starCaptionClasses[val]) ? self.clearCaptionClass : self.starCaptionClasses[val];
        var cap = !isEmpty(self.starCaptions[val]) ? self.starCaptions[val] : self.defaultCaption.replace(/\{rating\}/g, val);
        var caption = (val == self.clearValue) ? self.clearCaption : cap;
        return '<span class="' + css + '">' + caption + '</span>';
    },
    getValueFromPosition: function (pos) {
        var self = this, precision = getDecimalPlaces(self.step),
            percentage, val, maxWidth = self.$rating.width();
        percentage = (pos / maxWidth);
        val = (self.min + Math.ceil(self.diff * percentage / self.step) * self.step);
        if(self.step == 0.5 && val <= 1){
            if(val <= 0.5){
                if(this.$element.val() == 0.5){
                    val = 0;
                }
            }else{
                if(this.$element.val() == 1){
                    val = 0;
                }
            }
        }
        if (val < self.min) {
            val = self.min;
        }
        else if (val > self.max) {
            val = self.max;
        }
        val = applyPrecision(parseFloat(val), precision);
        if (self.rtl) {
            val = self.max - val;
        }
        return val;
    },
    setStars: function (pos) {
        var self = this, min = self.min, max = self.max, step = self.step,
            val = arguments.length ? self.getValueFromPosition(pos) : (isEmpty(self.$element.val()) ? 0 : self.$element.val()),
            width = 0, maxWidth = self.$rating.width(), caption = self.fetchCaption(val);
        width = (val - min) / max * 100;
        if (self.rtl) {
            width = 100 - width;
        }
        self.$element.val(val);
        width += '%';
        self.$stars.css('width', width);
        self.$caption.html(caption);
    },
    clear: function () {
        var self = this;
        var title = '<span class="' + self.clearCaptionClass + '">' + self.clearCaption + '</span>';
        self.$stars.removeClass('rated');
        if (!self.inactive) {
            self.$caption.html(title);
        }
        self.$element.val(self.clearValue);
        self.setStars();
        self.$element.trigger('rating.clear');
    },
    reset: function () {
        var self = this;
        self.$element.val(self.initialValue);
        self.setStars();
        self.$element.trigger('rating.reset');
    },
    update: function (val) {
        if (arguments.length > 0) {
            var self = this;
            self.$element.val(val);
            self.setStars();
        }
    },
    refresh: function (options) {
        var self = this;
        if (arguments.length) {
            var cap = '';
            self.init($.extend(self.options, options));
            if (self.showClear) {
                self.$clear.show();
            }
            else {
                self.$clear.hide();
            }
            if (self.showCaption) {
                self.$caption.show();
            }
            else {
                self.$caption.hide();
            }
        }
    }
};

//Star rating plugin definition
$.fn.rating = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function () {
        var $this = $(this),
            data = $this.data('rating'),
            options = typeof option === 'object' && option;

        if (!data) {
            $this.data('rating', (data = new Rating(this, $.extend({}, $.fn.rating.defaults, options, $(this).data()))));
        }

        if (typeof option === 'string') {
            data[option].apply(data, args);
        }
    });
};

$.fn.rating.defaults = {
    stars: 5,
    glyphicon: true,
    symbol: null,
    disabled: false,
    readonly: false,
    rtl: false,
    size: 'md',
    showClear: true,
    showCaption: true,
    defaultCaption: '{rating} 星级',
    starCaptions: {
        0.5: '半星',
        1: '一星',
        1.5: '一星半',
        2: '两星',
        2.5: '两星半',
        3: '三星',
        3.5: '三星半',
        4: '四星',
        4.5: '四星半',
        5: '五星'
    },
    starCaptionClasses: {
        0.5: 'label label-danger',
        1: 'label label-danger',
        1.5: 'label label-warning',
        2: 'label label-warning',
        2.5: 'label label-info',
        3: 'label label-info',
        3.5: 'label label-primary',
        4: 'label label-primary',
        4.5: 'label label-success',
        5: 'label label-success'
    },
    clearButton: '',
    clearButtonTitle: 'Clear',
    clearButtonBaseClass: 'clear-rating',
    clearButtonActiveClass: 'clear-rating-active',
    clearCaption: '',
    clearCaptionClass: 'label label-default',
    clearValue: 0,
    captionElement: null,
    clearElement: null,
    containerClass: null
};

/**
 * Convert automatically number inputs with class 'rating'
 * into the star rating control.
 */

return Rating;