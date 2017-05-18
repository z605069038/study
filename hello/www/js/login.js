window.onload = function(){

    (function(){

        $(document).on('pageInit', '#login', function (e, pageId , pageObj) {
            var $content = $(pageObj).find('.content');

            //登录
            $content.on('touchend', '#loginBtn', function() {
                /* text值 */
                var
                    userName_Text = $.trim($('#loginUser').val()),

                    loginPass_Text = $.trim($('#loginPass').val()),

                    loginCode_Text = $.trim($('#loginCode').val());

                console.log(userName_Text);
                console.log(loginPass_Text);
                console.log(loginCode_Text);

                if (!userName_Text || !loginPass_Text || !loginCode_Text) {
                    return;
                }

                $.toast("登录成功", 1000);

                setTimeout(function () {
                    /*window.location.href = Common.getUrl() + '/enterpriseApp/src/html/home.html?uid=' + userName_Text;*/
                    window.location.href = './html/homespa.html';
                }, 1500);

                return false;
            });
        })

        $.init();
    })();
};