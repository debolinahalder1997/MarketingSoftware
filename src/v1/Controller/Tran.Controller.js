
const { Transservice } = require("../Services");
class TarnController {

  async feedbacktrans(req, res, next) {
    console.log("ok");
    try {
      await Transservice.FeedbackTrans(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async feedbacklist(req, res, next) {
    console.log("ok");
    try {
      await Transservice.FeedbackList(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }

  async trackadd(req, res, next) {
    console.log("ok");
    try {
      await Transservice.TrackAdd(req, res, next);
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errMsg: "error", response: err });
    }
  }
  
}
module.exports = new TarnController();