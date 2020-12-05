const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine','handlebars')
app.use(express.urlencoded({extended:false}));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "frozen_food",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  app.listen(3000, () => console.log("Server started . . ."))
});

app.get('/',(req, res) => {
  var sql = `SELECT products.id, products.name as productName, photos, distributors.name as distributorName FROM products
             JOIN distributors
             WHERE products.id_distributor = distributors.id;`
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.render('home', {products:result});
  });
});

app.get('/products/add', (req, res) => {
  var sql = `SELECT id, name FROM distributors;`
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.render('productAdd', {distributors:result});
  });
});

app.post('/products', (req, res) => {
  const {name,photos,description,nutrisi,serving_size,id_distributor} = req.body
  var sql = `INSERT INTO products
             value("NULL",?,?,?,?,?,?);`
  con.query(sql, [name,photos,description,nutrisi,serving_size,id_distributor], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.redirect('/')
  });         
});

app.get('/products/:id', (req,res) => {
  const { id } = req.params;
  var sql = `SELECT *, products.id as productID, products.name as productName, distributors.name as distributorName FROM products
             JOIN distributors
             WHERE products.id_distributor = distributors.id AND products.id = ?;`
  con.query(sql, [id], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.render('productDetails', {product: result})
  });   
});

app.get('/products/:id/edit', (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM products
             WHERE products.id = ?;`
  con.query(sql, [id], function (err1, result1) {
    if (err1) throw err1;
    //console.log(result)
    var sql = `SELECT id, name FROM distributors;`
    con.query(sql, function (err2, result2) {
      if (err2) throw err2;
      //console.log(result2)
      res.render('productUpdate', {product: result1, distributors: result2})
    });
  });   
});

app.post('/products/:id', (req, res) => {
  const { id } = req.params;
  if(req.body.delete){
    var sql = `DELETE FROM products
               WHERE products.id = ?;`
    con.query(sql, [id], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.redirect('/')
    });  
  } else if (req.body.edit){
    const {name,photos,description,nutrisi,serving_size,id_distributor} = req.body
    var sql = `UPDATE products
               SET name=?, photos=?, description=?, nutrisi=?, serving_size=?, id_distributor=?
               WHERE id = ?;`
    con.query(sql, [name,photos,description,nutrisi,serving_size,id_distributor,id], function (err, result) {
      if (err) throw err;
      //console.log(result)
      res.redirect('/')
    });  
  }
});

app.get('/distributors/add', (req, res) => {
  res.render('distributorAdd');
});

app.post('/distributors', (req, res) => {
  const {name,address} = req.body
  var sql = `INSERT INTO distributors
             value("NULL",?,?);`
  con.query(sql, [name,address], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.redirect('/')
  });         
});

app.get('/distributors/:id', (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM distributors
             WHERE id = ?;`
  con.query(sql, [id], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.render('distributorDetails', {distributor: result})
  });  
});

app.get('/distributors/:id/edit', (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM distributors
             WHERE distributors.id = ?;`
  con.query(sql, [id], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.render('distributorUpdate', {distributor: result})
  });   
});

app.post('/distributors/:id', (req, res) => {
  const { id } = req.params;
  if(req.body.delete){
    var sql = `DELETE FROM distributors
               WHERE distributors.id = ?;`
    con.query(sql, [id], function (err, result) {
    if (err) throw err;
    //console.log(result)
    res.redirect('/')
    });  
  } else if (req.body.edit){
    const {name,address} = req.body
    var sql = `UPDATE distributors
               SET name=?, address=?
               WHERE id = ?;`
    con.query(sql, [name,address,id], function (err, result) {
      if (err) throw err;
      //console.log(result)
      res.redirect('/')
    });  
  }
});