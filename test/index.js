const downloader = require('../index');

const f = async () => {
    let list = await downloader([
        'http://febox.ru/public/img/news/small/7cbbc409ec990f19c78c75bd1e06f215.jpg',
        'https://cardo-ua.com/2543-8318-mobile_prod/plate-febox-djinsovogo-tsveta-print-tsvety-leto-2016.jpg'
    ], {
        path: '/'
    });
    console.log(list)
};

f(); 