## Connect to Database From Bash
```
mongo "mongodb+srv://heroes-cluster.b2voe.mongodb.net/hero" --username xlavm
```

## Connect to Database From App of NodeJS
* cluester name: heroes-cluster
* database name: heroes
* collection name: hero
```
const mongoURI = 'mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority';

mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
```

## Deploy Angular App in Heroku

is necessary to modify the archive package.json
```
"start": "node server.js",
```

and you to create the file server.js with:

```Node
//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
```

Additional, copy the dependencies of `DevDependencies` and paste in `Dependencies`. all this into package.json

## For Local Work

>Note: To make it work locally, you have to change the address of the node api to "http://localhost:3000/hero" in the angular services and in the `package.json` put `"start": "ng serve",` into the scripts.

#### Requirements

* Install the Node.js
* Install the MongoDB
* Install Angular

#### Execution Instructions

* Clone the repo
```
git clone https://github.com/xlavm-MEAN/TourOfHero-Front-Back.git
```
* Install the npm packages for the back and front  
```
npm install
```
* Launch the server back and front 
```
npm start
```
* Execute the Mongo Daemon 
```
mongod
```
* Execute the database
```
mongo
use heroes
```
>The collections Name is: `hero` and Database Name is: `heroes` in MongoDB
