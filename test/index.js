const downloader = require('../index');

downloader('https://scontent.cdninstagram.com/t51.2885-15/e35/18888672_1318212121630783_2222031790493663232_n.jpg', {
    path: ''
}).then(res => {
    console.log(res)
    console.log('Успешно выполнено')
}).catch(err => {
    throw new Error(err)
})