module.exports = function (app) {
    const login_pack = require('../packages/login_pack/routes/index');
    const home_pack = require('../packages/home_pack/routes/index');
    login_pack.LOGIN(app)
    home_pack.HOME(app)
}
