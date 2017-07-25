var express = require('express');
var fs = require('fs');

const app = express();

const robotsFile = './robots.json';
const extinguishFile = './extinguish.json';
const recycleFile = './recycle.json';
const shipmentFile = './shipment.json';

app.use(express.static('build'));

// to enable CORS on Express
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// does nothing, is initial
app.get('/', (req, res) => {
  res.send('Check out the batch APIs');
});

// fetch batch of robots to work with
app.get('/api/robots', (req, res) => {
  fs.readFile(robotsFile, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

// post id of robot to entignuish
app.post('/api/robots/extinguish/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  // if file doesnt exist, simple create file and dump data
  if (!fs.existsSync(extinguishFile)) {
    let data = {
      extinguishRobots: []
    };
    data.extinguishRobots.push(id);
    fs.writeFile(extinguishFile, JSON.stringify(data), (err, result) => {
      if (err) {
        throw err;
      }
      res.send(`ID ${id} added to extinguish list.`);
    });
  } else {
    let alreadyAddedIds;
    fs.readFile(extinguishFile, 'utf8', (err, result) => {
      if (err) {
        throw err
      };

      alreadyAddedIds = JSON.parse(result);
      alreadyAddedIds.extinguishRobots.push(id);

      fs.writeFile(extinguishFile, JSON.stringify(alreadyAddedIds), 'utf8', (err, res) => {
        if (err) {
          throw err;
        }
        console.log('Re-written extinguish file with new data');
      });
      res.send(`ID ${id} added to extinguish list.`);
    });
  }
});

// post list of robots to sent to recycle
app.post('/api/robots/recycle/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  // if file doesnt exist, simple create file and dump data
  if (!fs.existsSync(recycleFile)) {
    let data = {
      recycleRobots: []
    };
    data.recycleRobots.push(id);
    fs.writeFile(recycleFile, JSON.stringify(data), (err, result) => {
      if (err) {
        throw err;
      }
      res.send(`ID ${id} added to recycle list.`);
    });
  } else {
    let alreadyAddedIds;
    fs.readFile(recycleFile, 'utf8', (err, result) => {
      if (err) {
        throw err
      };

      alreadyAddedIds = JSON.parse(result);
      alreadyAddedIds.recycleRobots.push(id);

      fs.writeFile(recycleFile, JSON.stringify(alreadyAddedIds), 'utf8', (err, res) => {
        if (err) {
          throw err;
        }
        console.log('Re-written recycle file with new data');
      });
      res.send(`ID ${id} added to recycle list.`);
    });
  }
});

// post to create shipment list
app.post('/api/shipment/create', (req, res) => {
  const shipmentRobotIds = req.query.array;
  fs.writeFile(shipmentFile, shipmentRobotIds, 'utf8', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`IDs ${JSON.stringify(shipmentRobotIds)} added to shipment list.`);
  });
});

app.listen(8080, () => {
  console.log('Started port on :8080');
});
