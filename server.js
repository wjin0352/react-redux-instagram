const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));
router.get('*',function(req, res) {
  res.sendFile(path.join(__dirname, './public/index'));
});

app.listen(8000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 8000');
});
