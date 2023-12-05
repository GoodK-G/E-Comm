const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.getAll();
  return res.json(Tag);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.get(req.params.id);
  return res.json(Tag);
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body);
  return res.json(Tag);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,(req.params.id));
  return res.json(Tag);
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.delete(req.params.id);
  return res.json(Tag);
});

module.exports = router;
