const { LoginService } = require("../Services");
const { UserRegService, Masterservice, Dataservice } = require("../Services");
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
  async UserEdit(req, res, next) {
    console.log("ok");
    try {
      await UserRegService.UserEdit(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
  async areaadd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.Areaadd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async cityadd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.Cityadd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async vendoradd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.Vendoradd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async stateadd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.Stateadd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
  async arealist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.AreaList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async vendorlist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.VendorList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async customeradd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.CustomerAdd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async countryadd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.CountryAdd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async zoneadd(req, res, next) {
    console.log("ok");
    try {
      await Masterservice.ZoneAdd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async countrylist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.CountryList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
  async citylist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.CityList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async statelist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.StateList(req, res, next);
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
      // return res.status(500).json({ errMsg: "error", response: err });
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
  async zonelist(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.zonelist(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
  async adminPanel(req, res, next) {
    console.log("ok");
    try {
      await Dataservice.AdminPanel(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
}
module.exports = new AuthController();
