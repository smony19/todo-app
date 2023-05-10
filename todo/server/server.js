const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

/*TODO: Authenticate using Sequelize */


const port = 8080;

app.listen(port, async () => {
	try {
		await sequelize.authenticate();
		console.log(`API is running on http://localhost:${port}/login`);
	} catch (err) {
		console.error(err);
	}
});
