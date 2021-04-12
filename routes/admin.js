const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model('Categorias');

router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/posts', (req, res) => {
  res.send('Página de Posts');
});

router.get('/categorias', (req, res) => {
  Categoria.find()
    .sort({ date: 'desc' })
    .then((categorias) => {
      res.render('admin/categorias', { categorias: categorias });
    })
    .catch((error) => {
      req.flash('error-msg', 'Houve um erro ao listar as categorias');
      res.redirect('/admin');
    });
});

router.get('/categorias/add', (req, res) => {
  res.render('admin/addcategorias');
});

router.post('/categorias/nova', (req, res) => {
  var erros = [];

  if (
    !req.body.nome ||
    typeof req.body.nome == undefined ||
    req.body.nome == null
  ) {
    erros.push({ Texto: 'Nome inválido' });
  }

  if (
    !req.body.slug ||
    typeof req.body.slug == undefined ||
    req.body.slug == null
  ) {
    erros.push({ Texto: 'Slug inválido' });
  }

  if (erros.lengh > 0) {
    res.render('admin/addcategorias', { erros: erros });
  } else {
    const novaCategoria = {
      nome: req.body.nome,
      slug: req.body.slug,
    };

    new Categoria(novaCategoria)
      .save()
      .then(() => {
        req.flash('success_msg', 'Categoria criada com sucesso');
        res.redirect('/admin/categorias');
        console.log('Categoria salva com sucesso');
      })
      .catch((err) => {
        req.flash(
          'error_msg',
          'Houve um erro ao savar a categoria, tente novamente.'
        );
        res.redirect('/admin');
      });
  }
});

router.get('categorias/edit/:id', (req, res) => {
  Categoria.findOne({ _id: req.params.id })
    .then((categoria) => {
      res.render('admin/editcategorias', { categoria: categoria });
    })
    .catch((erro) => {
      req.flash('error_msg', 'Esta categoria não existe');
      res.redirect('/admin/categorias');
    });
});

router.post('categorias/edit', (req, res) => {
  Categoria.findOne({ _id: req.body.id })
    .then((categoria) => {
      categoria.nome = req.body.nome
      categoria.slug = req.body.slug

      categoria.save().then(() =>{
        req.flash("success_msg", 'Categoria editada com sucesso.')
        res.redirect('admin/categorias')
      }).catch((err) => {
        req.flash('error_msg', "Houve um erro ao salvar a edição da categoria")
      })
    })
    .catch((err) => {
      req.flash('error_msg', 'Houve um erro ao editar a categoria');
      res.redirect('/admin/categorias');
    });
});

router.get('/teste', (req, res) => {
  res.send('Isso é um teste');
});

module.exports = router;
