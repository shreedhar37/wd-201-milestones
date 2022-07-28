// use path to display HTML

const http = require("http");
const fs = require("fs");
const readline = require("readline");

let homeContent = "";
let projectContent = "";
let contactContent = "";
let maincssContent = "";
let mainjsContent = "";
let surveyFormContent = "";

fs.readFile("index.html", function (err, home) {
  if (err) throw err;
  homeContent = home;
  //   console.log(homeContent.toString());
});

fs.readFile("projects.html", function (err, projects) {
  if (err) throw err;
  projectContent = projects;
  //console.log(projectContent.toString());
});

fs.readFile("contact.html", function (err, contact) {
  if (err) throw err;
  contactContent = contact;
});

fs.readFile("main.css", function (err, maincss) {
  if (err) throw err;
  maincssContent = maincss;
});

fs.readFile("main.js", function (err, mainjs) {
  if (err) throw err;
  mainjsContent = mainjs;
});

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// take file path from user

lineDetail.question(`Provide file path for survey form - `, (path) => {
  fs.readFile(path, function (err, surveyForm) {
    if (err) throw err;
    surveyFormContent = surveyForm;
  });
  lineDetail.close();

  http
    .createServer(function (request, response) {
      let url = request.url;

      // used to stay of survey page after submitting survey form
      if (url.includes("/survey")) url = "/survey.html";

      response.writeHeader(200, { "Content-Type": "text/html" });
      switch (url) {
        case "/projects.html":
          response.write(projectContent);
          response.end();
          break;

        case "/contact.html":
          response.write(contactContent);
          response.end();
          break;

        case "/main.css":
          response.writeHeader(200, { "Content-Type": "text/css" });
          response.write(maincssContent);
          response.end();
          break;
        case "/main.js":
          response.writeHeader(200, { "Content-Type": "text/javascript" });
          response.write(mainjsContent);
          response.end();
          break;
        case "/survey.html":
          response.write(surveyFormContent);
          response.end();
          break;
        default:
          response.write(homeContent);
          response.end();
          break;
      }
    })
    .listen(3000, () => {
      console.log("Server is running on localhost:3000");
      console.log("Press ctrl + c to stop the server");
    });
});
