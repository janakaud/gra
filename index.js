// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.function = require("./function.js").handler;
exports.innin = require("./inn/in.js").handler;