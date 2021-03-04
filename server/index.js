const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// 页面渲染
app.get('/', (req, res) => res.send('Hello World!'))

// 监听端口
console.log(process.env.PORT);
var port = process.env.PORT || '3000';
app.listen(port);
console.log('success listen at port:3000......');