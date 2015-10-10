module.exports.init = init;
module.exports.route = route;
module.exports.listen = listen;

function init(exp, app, http)
{
    this.exp = exp;
    this.app = app;
    this.http = http;
};

function route(view_eng){
    this.app.use(this.exp.static(__dirname + '/public'));
    if(view_eng){ this.app.set('view engine', view_eng); }
    this.app.get('/', renderHomePage);
};

function renderHomePage(req, res){
    res.render('pages/index');
};

function listen(port){
    this.http.listen(port, function(){
        console.log('Running on http://localhost:' + port);
    });
};
