const router = require('express').Router();
const { model } = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// api route to get all tags and associated Product data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// api route to find a single tag by its `id` & associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    if (!tag) {
      res.status(404).json({ message: `No tag has been found with id ${req.params.id}` });
      return;
    }

    res.json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// api route to create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    console.lop(err);
    res.status(400).json(err);
  }
});

// api route to update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTag[0]) { 
      res.status(404).json({ message: `No tag has been found with id ${req.params.id}` });
      return;
    }

    res.json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// api route to delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const result = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!result) {
      res.status(404).json({ message: `No tag has been found with id ${req.params.id}` });
      return;
    }

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
