const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var scrape = require('scrape-metadata');
const app = express();
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.post('/ping', function (req, res) {
  const { url } = req.body

  scrape(url, (err, metadata) => {
    if (err) {
      console.log('we have err', err)
      console.log('string is', err.toString())
      res.json(err.toString())
    }
    console.log(metadata)
    res.json(metadata)
  })
})

app.post('/csv', (req, res) => {

})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
