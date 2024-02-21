const blankInput = require("../helper/blankInput");
const Text = require("../model/userModel");

let registrasionController = async (req, res) => {
  const { text: text } = req.body;

  if (blankInput(text)) {
    res.send({ error: "fill require" });
  } else {
    let newText = new Text({
      text: text,
    });

    newText.save();
    res.send(newText);
  }
};

module.exports = registrasionController;
