const express = require('express');
const app = express();
app.locals.pretty = true;

//절대 경로가 아닌 상대 경로로 변경하는 방법이 없을까?
app.use(express.static('D:/workspace/git/nodejs/public'));

app.set('view engine', 'pug');

//'./views' <-- 폴더명이 되어야함'
app.set('views', './views');

app.get('/template' , (req, res) => {
  //'temp' == 'temp.pug'
  res.render('temp2');
});

app.get('/', function(req, res) {
  res.send("Welcome To Home  어서오세요. 아픈 강소연");
});

app.get('/topic' , (req, res) => {
  var id = req.query.id;
  var name = req.query.name;
  if(name == undefined)
  {
      name = '익명';
  }
  var returnString = "id 는 " + id + " 이름은 " + name;
  res.send(returnString);
});

app.get('/dynamic' , (req, res) =>{
  var li_tags = '';
  for (var i = 0; i < 5; i++) {
    li_tags = li_tags + '<li>코딩 삽입 ' + i + '</li>';
  }
  var time = Date(); 

  var output = `<!DOCTYPE html>
  <html" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      이 페이지는 동적인 페이지 입니다.!!!
      <ul>
      ${li_tags}
      </ul>
      ${time}
    </body>
  </html>`;

  res.send(output);
});

app.get('/cat' , (req, res) => {
    res.send('캣 화면입니다. <img src="/cat1.jpg">')
});

app.listen(3000, function() {
  console.log("3000 포트에 연결되었습니다.");
});
