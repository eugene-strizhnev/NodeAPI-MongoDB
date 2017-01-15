var express =     require('express');
var path =        require('path'); // модуль для парсинга пути
var bodyParser =  require('body-parser');
var favicon =     require('serve-favicon');
var serveStatic = require('serve-static');
var morgan =      require('morgan');
var methodOverride = require('method-override')
var app = express();

//app.use(favicon); // отдаем стандартную фавиконку, можем здесь же свою задать

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('combined')); // выводим все запросы со статусами в консоль
app.use(methodOverride('X-HTTP-Method-Override')); // поддержка put и delete
app.use(serveStatic(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(1337, function () {
    console.log('Express server listening on port 1337');
});