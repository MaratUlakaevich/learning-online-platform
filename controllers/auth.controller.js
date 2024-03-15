const authService = require('../services/auth.service');


class authController {
  register(req, res, next){
    const response = authService.register(req, res, next);
    return 1;
  }

  login(req, res, next) {
    const response = authService.login(req, res, next);
    return 1;
  }

  logout(req, res, next) {
    const response = authService.logout(req, res, next);
    return 1;
  }
}

module.exports = authController;