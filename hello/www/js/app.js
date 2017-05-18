window.onload = function(){
    (function(){
        /* 服务中心模块初始化 */
        $(document).on('pageInit', '#homePage', function (e, pageId , pageObj) {

            console.log(pageId);
        });

        /* 个人进度模块初始化 */
        $(document).on('pageInit', '#personalProgress', function (e, pageId , pageObj) {
                $("#scroll-detail").scroller({
                    type: 'js'
                });
        });

        /* 待办事项模块初始化 */
        $(document).on('pageInit', '#toDonePage', function (e, pageId , pageObj) {
            // 添加'refresh'监听器
            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                // 模拟2s的加载过程
                setTimeout(function() {
                    var cardHTML = '<li class="item-content self-content">' +
                        '<div class="item-inner self-item-inner">' +
                        '<div class="item-title-row">' +
                        '<div class="item-title self-title">' +
                        '省学位办反馈张华等20位同学学位报送信息' +
                        '</div>' +
                        '</div>' +
                        '<div class="item-subtitle self-item-subtitle">' +
                        '2017-04-06 12:00:00' +
                        '</div>' +
                        '<div class="item-text self-item-text">' +
                        '<div class="item-title">' +
                        '<span>反馈数量：20</span> |' +
                        '<span>解决数量：10</span>' +
                        '<span class="pull-right wait-status-ok">已完成</span>' +
                        '</div></div></div> </li>';

                    $(e.target).find('.list-UL').prepend(cardHTML);
                    // 加载完毕需要重置
                    $.pullToRefreshDone('.pull-to-refresh-content');
                }, 2000);
            });
        });

        /* 个人中心模块初始化 */
        $(document).on('pageInit', '#pCenterPage', function (e, id , page) {

            var $content = $(page).find('.content');

            //ajax请求
            $content.on('click','#quitBtn', function () {
                $.confirm('是否确定退出', function () {
                    /* 清除数据 */
                    window.location.href = '../login.html';
                });
            });
        });

        $.init();

    })();
};