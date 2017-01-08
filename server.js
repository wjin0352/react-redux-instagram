const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));
router.get('*',function(req, res) {
  res.sendFile(path.join(__dirname, './public/index'));
});

// included process.env PORT variable for herokus specific port needed to deploy
const PORT = process.env.PORT || 8000;

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 8000');
});
