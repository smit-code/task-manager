const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("DB connected on 'testing_restapi'");
  })
  .catch((err) => {
    console.log(err);
  });
