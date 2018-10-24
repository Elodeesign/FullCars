// Connexion Express
const express = require('express')
const app = express()
const cors = require('cors')

// Connexion mySql
const mysql = require('mysql')
const bodyParser = require('body-parser')
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '8889',
  database: 'FullCars',
  user: 'root',
  password: 'root'
})

connection.connect()

app.get('/', function(req, res) {
  res.send("Bienvenue dans l'API")
})

app.get('/cars-list', (req, res) => {
  connection.query('SELECT * FROM cars', function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/add-car', function(req, res) {
  const brand = req.body.brand
  const color = req.body.color
  const year = req.body.year
  const km = req.body.km
  const doors = req.body.doors
  const technical_control = req.body.technical_control
  const img = req.body.img
  const price = req.body.price
  const energy = req.body.energy

  sql = `INSERT INTO cars (id, brand, color, year, km, doors, technical_control, img, price, energy) VALUES (NULL, '${brand}' , '${color}', '${year}', '${km}', '${doors}', '${technical_control}', '${img}', '${price}', '${energy}' )`

  connection.query(sql),
    function(err, rows, fields) {
      if (err) throw err
    }
  //res.sendStatus(200)
})

app.delete('/cars-list/:id', function(req, res) {
  console.log('delete:', req.params.id)
  sql = `DELETE FROM cars WHERE cars.id = '${req.params.id}'`
  connection.query(sql),
    function(err, rows, fields) {
      if (err) throw err
      res.json(rows)
    }
  //res.sendStatus(200)
})

app.listen(3000, function() {
  console.log('Exemple app nodejs')
})
