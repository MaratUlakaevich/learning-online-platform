const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/auth.routes");
app.use("/api", routes);

async function main() {
  await app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();
