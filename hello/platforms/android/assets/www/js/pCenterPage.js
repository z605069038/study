window.onload = function(){

    (function(){

        $(document).on('pageInit', '#pCenterPage', function (e, id , page) {

            var $content = $(page).find('.content');

            //ajax请求
            $content.on('click','#quitBtn', function () {
                $.confirm('是否确定退出', function () {
                    /* 清除数据 */
                    window.location.href = '../login.html';
                });
            });
        })

        $.init();
    })();
};