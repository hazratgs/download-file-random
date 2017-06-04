const http = require('http');
const https = require('https');
const fs = require('fs');
const urlParse = require('url-parse');
const md5 = require('md5');
const resolve = require('path').resolve;

module.exports = (urls, options) => {

    // Если передан только 1 параметр в виде строки,
    // преобразуем его в массив
    if (typeof urls === String){
        urls = [urls];
    }
    
    let parse = urlParse(url);

    // Тип файла
    let type = parse.pathname.split('.');

    // Имя файла
    let name = !options.name ? md5(new Date()) + '.' + type[type.length - 1] : options.name;

    // Дириктория, куда будет сохранен файл
    let fileStream = fs.createWriteStream(resolve() + options.path + name);

    // Загружаем файл
    return new Promise((resolve, reject) => {

        // Определяем протокол соединения
        if (parse.protocol === 'https:'){
            https.get(url, response => {
                response.pipe(fileStream);

                // На выход отдаем название файла
                resolve(name)
            })
        } else if (parse.protocol === 'http:'){
            http.get(url, response => {
                response.pipe(fileStream);

                // На выход отдаем название файла
                resolve(name)
            })
        } else {
            reject('Ошибка, не определен протокол соединения')
        }
    });
};