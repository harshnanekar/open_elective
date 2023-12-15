let query = require("../queries/user.js");
let argon = require("argon2");

module.exports = {
  loginPage: function (req, res) {
    res.render("login");
  },

  login: async function (req, res) {
    console.log("Controller>>>>>>>>>>");

    let username = req.body.username;
    let password = req.body.password;

    console.log("request data " + username + " " + password);

    try {
      let querydata = await query.authenticateLogin(username);
      console.log("Query Data:", querydata);

      if (querydata && querydata.length > 0) {
        let pass = querydata[0].password;
        console.log("password----" + pass);

        let passwordVal = await argon.verify(pass, password);
        console.log(passwordVal);

        if (passwordVal) {
          console.log("Authenticated Successfully");
          return res.status(200).json({auth:'success'});
        } else {
          console.log("Unauthenticated");
          return res.status(303).json({auth:'unauthenticated'});
        }
      } else {
        console.log("Invalid username");
        return res.status("login");
      }
    } catch (err) {
      console.error("Error:", err);
      return res.render("500");
    }
  },
  dashboard: function (req, res) {
    res.render("dashboard");
  },
};