require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Business'},
    {name: 'Entertainment'},
    {name: 'Health'},
    {name: 'Science'},
    {name: 'Sports'},
    {name: 'Technology'},
  ]);

  process.exit();

})();