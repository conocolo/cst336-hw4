const fake = require('faker');
const titleCase = require('title-case');
const fs = require('fs');

exports.idxResponder = (req, res) => {
    res.render('pages/index', {fakeName: fake.name.lastName()});
}

exports.dbResponder = (req, res) => {
    fs.readFile('public/text/' + req.params.db + '.txt', 'utf8', (error, data) => {
        res.render('pages/db', {fakeName: fake.name.lastName(),
                                      db: titleCase(req.params.db),
                                    text: data,
                                    nadb: req.params.db});
    });
}