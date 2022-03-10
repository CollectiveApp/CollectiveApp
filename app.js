// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

//require for the protected routes
const {isAuthenticated} = require('./middleware/jwt')

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const adminRoutes = require('./routes/auth');
app.use('/api/auth', adminRoutes, isAuthenticated)

const projectRoute = require('./routes/projects');
app.use('/api/projects', projectRoute, isAuthenticated)

const eventsRoutes = require('./routes/events');
app.use('/api/event', eventsRoutes, isAuthenticated)

const volunteerRoutes = require('./routes/volunteers');
app.use('/api/volunteers', volunteerRoutes, isAuthenticated)

//this handles protected routes
const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

