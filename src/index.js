const express = require("express");
const app = express();
const port = 3000;

const tasksRouter = require("./routes/tasks");

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

// ✅ Health Route
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
  });
});

// ✅ Use Routers
app.use("/tasks", tasksRouter); 
app.use("/task", tasksRouter);

// ✅ Start Server
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
