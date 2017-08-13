var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 articleOne: {
 title: 'Article-one|Akanksha Dixit',
 heading: 'article One ',
 date: 'sep 5, 2016',
 content: `<p>
             this is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first article
            </p>
            <p>this is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first article.
          </p>
            <p>this is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first articlethis is content of my first article.
            </p>`
            
    
    
    
},
articleTwo: {
 title: 'Article-Two|Akanksha Dixit',
 heading: 'Article Two',
 date: 'sep 5, 2016',
 content: `<p>
             this is content of my first article</p>`,
            
    
    
    
},
  articleThree: {
 title: 'Article-Three|Akanksha Dixit',
 heading: 'article Three',
 date: 'sep 5, 2016',
 content: `<p>
             this is content of my first article</p>`,
            
    
    
    
}
};

function createTemplate(data){
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;

var htmltemplate= `<html>
    <head>
    <title>
    ${title}
    </title>
     
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                   <link href="/ui/style.css" rel="stylesheet" />
    </head>

    <body>
        <div class="container">
       <div>
           <a href="/">Home</a>
           
        </div>  
        <hr/>
        ${heading}
        <div>
            ${date}
        </div>    
        <div>
            ${content}
        </div>        
 
          </div>
           
    </body>    
    
</html>
`; 
return htmlTemplate;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res){
     res.send(createTemplate(articleOne));
});
app.get('/article-two',function (req,res){
     res.send(createTemplate(articleTwo));
});
app.get('/article-three',function (req,res){
      res.send(createTemplate(articleThree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
