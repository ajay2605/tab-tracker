/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// eslint-disable-next-line no-undef
const morgan = require("morgan");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
	res.send({
		message: "hello world",
	});
});
// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 8081);
