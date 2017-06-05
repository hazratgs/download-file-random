const http = require('http');
const https = require('https');
const fs = require('fs');
const urlParse = require('url-parse');
const md5 = require('md5');
const resolve = require('path').resolve;

module.exports = async (items, options) =>
    await Promise.all(items.map(item => download(item, options)));

// Асинхронная загрузка файлов
const download = async (url, options) => {
    let parse = urlParse(url);
    let type = parse.pathname.split('.');

    // Имя файла
    let name = !options.name ? md5(new Date()) + '.' + type[type.length - 1] : options.name;

    // Дириктория, куда будет сохранен файл
    let fileStream = fs.createWriteStream(resolve() + options.path + name);

    // Определяем тип протокала, по умолчанию http
    const protocol = parse.protocol === 'https:' ? https : http;

    // Возвращаем промис загрузки файла
    return new Promise(resolve => {
        protocol.get(url, res => {
            res.pipe(fileStream);

            // Возвращаем название файла
            resolve(name)
        })
    });
};