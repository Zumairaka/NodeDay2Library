const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = new express();
const booksRouter = express.Router();

app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);

app.set('views','./src/views');

app.set('view engine','ejs');

//app.get('/',function(request,response){          //using normal html 
    //response.sendFile(path.join(__dirname,"/src/views/index.html"));
//});
var nav=[
            {link:'/',title:'Home'},
            {link:'/signUp',title:'Sign Up'},
            {link:'/login',title:'Login'},
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}
        ];

var books=[
    {
        title:"War and Peace",
        genre:"Historical Fiction",
        author:"Liv Nicolayevich"
    },
    {
        title:"Les Miserable",
        genre:"Historical Fiction",
        author:"Victor Hugo"
    },
    {
        title:"Book3",
        genre:"Classic",
        author:"V.M.Basheer"
    },
    {
        title:"Book4",
        genre:"Fiction",
        author:"Vilasini"
    }
];

booksRouter.route('/')
    .get((req,res)=>{
        res.render(
            'books',
            {
                nav,
                title:"Books",
                books
            });
    });

app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:"Library"
    });        //using ejs view engine
});

app.listen(3020,function(){
    console.log("Listeing to Port"+chalk.blue(" 3020"));
});