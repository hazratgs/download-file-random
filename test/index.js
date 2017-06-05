const assert = require('assert');
const downloader = require('../index');

const files = [
    'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
    'https://facebook.github.io/react/img/logo_og.png'
];


describe('Downloader', () => {
    it('Загружаем несколько файлов', (done) => {
        downloader(files, { path: '/test/' })
            .then(result => {
                done()
            })
    });

    it('Загружаем один файл', (done) => {
        downloader(['https://facebook.github.io/react/img/logo_og.png'], { path: '/test/' })
            .then(result => {
                done()
            })
    });
});