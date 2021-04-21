const DashboardContronller = require('../controllers/DashboardContronller')
module.exports.HOME = function (app) {
    app.route('/home')
        .post(DashboardContronller.dashboard);
    app.route('/home')
        .get(DashboardContronller.dashboard);
}
