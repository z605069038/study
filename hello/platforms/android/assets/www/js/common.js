/**
 * Created by 15069 on 2017/5/12 0012.
 */


var Common = function () {



    function getUrl(){
        return window.location.protocol + '//' + window.location.host;
    }

    return {

        getUrl: getUrl
    };
}();