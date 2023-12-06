const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.getAll();
  return res.json(Category);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.get(req.params.id);
  return res.json(Category);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body);
  return res.json(Category);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body(req.params.id));
  return res.json(Category);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete(req.params.id);
  return res.json(Category);
});

module.exports = router;
