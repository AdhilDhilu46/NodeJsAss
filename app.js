const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./Router/user');
const productRouter = require('./Router/product');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/product', productRouter);

// Product Routes

app.get('/products', (req, res) => {
    let filteredProducts = products;
    const { manufacturer, year, carName } = req.query;
  
    if (manufacturer) {
      filteredProducts = filteredProducts.filter(product => product.manufacturer === manufacturer);
    }
    if (year) {
      filteredProducts = filteredProducts.filter(product => product.year === year);
    }
    if (carName) {
      filteredProducts = filteredProducts.filter(product => product.carName === carName);
    }
  
    res.json(filteredProducts);
  });
  
  // GET /products/:id
  app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  });
  
  // POST /products
  app.post('/products', (req, res) => {
    const newProduct = req.body;
    if (!newProduct.id || !newProduct.carName || !newProduct.manufacturer || !newProduct.year) {
        return res.status(400).send('Missing required product fields');
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
  });
  
  // PUT /products/:id
  app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).send('Product not found');
  
    Object.assign(product, req.body);
    res.json(product);
  });
  
  // User Routes
  
  app.get('/users', (req, res) => {
    res.json(users);
  });
  
  app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  
  app.post('/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.id || !newUser.name || !newUser.email) {
        return res.status(400).send('Missing required user fields');
    }
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
  
    Object.assign(user, req.body);
    res.json(user);
  });
  
  // Start server
  const port = 3500;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
