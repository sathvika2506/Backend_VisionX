const app = require("./app");
const connectDB = require("./config/db");
const { port } = require("./config/env");

// Connect DB (currently placeholder)
connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
