window.onload = function(){

    (function(){

        $(document).on('pageInit', '#homePage', function (e, id , page) {

            var sse = window.sessionStorage.getItem('asd');

            console.log(page);
        });

        $.init();
    })();
};