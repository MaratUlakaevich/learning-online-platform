const authService = require("../services/auth.service");

class authController {
  register (req, res, next) {
    const response = authService.register(req, res, next);
    return response;
  }

  login (req, res, next) {
    const response = authService.login(req, res, next);
    return response;
  }

  logout (req, res, next) {
    const response = authService.logout(req, res, next);
    return response;
  }
}

module.exports = authController;
