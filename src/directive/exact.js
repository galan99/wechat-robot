var message = require('../utils/message');

//精确匹配

module.exports = {
    '关闭': function (msgContent, casperIns) {
        message.send(casperIns, '[玫瑰]感谢您的使用[玫瑰]\n\r([闪电]大宝退下了！[闪电])');
        casperIns.echo('微信发出关闭口令，程序退出。')
        return casperIns.exit();
    },

    '报时': function (msgContent, casperIns) {
        message.send(casperIns, '服务器的时间是：' + new Date().toLocaleString());
    },
    '伊伊':function(msgContent, casperIns){
        message.send(casperIns, '管巧跟王晴的宝贝丫头，风一样的女子，静如处子，动若脱兔');
    },
}