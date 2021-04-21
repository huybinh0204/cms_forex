const LoginContronller = require('../controllers/LoginContronller')
module.exports.LOGIN = function (app) {
    app.route('/')
        .get(LoginContronller.login);
}
