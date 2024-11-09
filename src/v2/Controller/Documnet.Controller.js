const { DocuploadService,ShowDocService } = require("../Services");

class DocumentController {

  async uploaddocumnet(req, res, next) {
    try {
      const AuthResponse = await DocuploadService.Uploaddoc(req, res, next);
      next();
      return AuthResponse;
    } catch (err) {
      console.log(err);
      return res.status(400).json({ errMsg: "error", response: err });
    }
  }
  async showreport(req, res, next) {
    try {
      console.log("in controller");
      const AuthResponse = await ShowDocService.ShowReport(req, res, next);
      next();
      return AuthResponse;
    } catch (err) {
      console.log(err);
      return res.status(400).json({ errMsg: "error", response: err });
    }
  }

}
module.exports = new DocumentController();
