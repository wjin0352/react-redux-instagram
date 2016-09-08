const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));
router.get('*',function(req, res) {
  res.sendFile(path.join(__dirname, './public/index'));
});

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 5000');
});

