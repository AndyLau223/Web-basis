/**
 * this js file defines routers.
 */
const express = require('express');

const db = require('../data/database.js');

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/posts');
});

router.get('/new-post', async function (req, res) {
  const [authors] = await db.query('SELECT * FROM authors');
  res.render('create-post', { authors: authors }); // destructuring
});

router.get('/posts', async function (req, res) {
  const query = `
    SELECT post.*, authors.name AS author_name FROM post 
    INNER JOIN authors ON post.author_id = authors.id
  `;
  const [posts] = await db.query(query);
  res.render('posts-list', { posts: posts });
});

router.post('/posts', function (req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  db.query('INSERT INTO post (title, summary, body, author_id) VALUES (?)', [
    data,
  ]);
  res.redirect('/posts');
});

router.get('/posts/:id', async function (req, res) {
  const query = `
  SELECT post.*, authors.name AS author_name, authors.email AS authro_email FROM post 
  INNER JOIN authors ON post.author_id = authors.id
  WHERE post.id = ?
  `;

  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render('404');
  }

  res.render('post-detail', { post: post });
});

module.exports = router;
