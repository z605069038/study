/**
 * @description setInterval 修正版，每隔一个 interval 运行一次
 * @author 许传宝
 * @date "2017-01-10"
 *
 * @example 
 *     var timeId = acInterval(function() {
 *         ...
 *     }, 1000);
 *
 *     clearAcInterval(timeId);
 */
function acInterval(callback, interval) {
    var now = +new Date(),
        timeIds = [];

    timeIds.push(setTimeout(function run() {
        now += interval;
        var fix = now - (+new Date());

        timeIds.push(setTimeout(run, interval + fix));

        callback();
    }, interval));

    return timeIds;
}

function clearAcInterval(timeIds) {
    clearTimeout(timeIds[timeIds.length - 1]);
    timeIds = [];
}

return {
    acInterval: acInterval,
    clearAcInterval: clearAcInterval
};