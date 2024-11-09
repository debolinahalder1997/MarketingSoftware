const { LoginService } = require("../Services");
const { UserRegService,Estimateservice,Dataservice } = require("../Services");
class AuthController {

  async securelogin(req, res, next) {
    try {
      const AuthResponse = await LoginService.getlogin(req, res, next);
      return AuthResponse;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async UserRegistration(req, res, next) {
    console.log("ok");
    try {
      await UserRegService.UserReg(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async estimateadd(req, res, next) {
    console.log("ok");
    try {
      await Estimateservice.Estimateadd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async itemlist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.ItemList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async stonelist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.StoneList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }


  async puritylist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.PurityList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }


  async stonesublist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.StoneSubList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async reporttypelist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.ReportTypeList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async customerlist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.CustomerList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async salesmanlist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.SalesmanList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async companylist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.CompanyList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }


}
module.exports = new AuthController();
