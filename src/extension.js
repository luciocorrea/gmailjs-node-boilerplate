"use strict";

console.log("Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;
const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail($);
window.gmail = gmail;

gmail.observe.on("compose", function(compose, type) {
  if (type == "reply"){
    console.log("Reply");
    compose.body('<h1>New Email!</h1>');    
  }
});
