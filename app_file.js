const express = require('express');

const app = express();
const fs = require('fs');

//html 태크 코드 정리
app.locals.pretty = true;

app.set('view engine', 'pug');

//아래 두 줄은 post 로 데이터를 받기 위햐 필요한 미들웨어를 선언 또는 설치
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(3000, function() {
  console.log("3000 포트에 연결되었습니다.");
});

//'./views' <-- 폴더명이 되어야함'
app.set('views', './views_file');

app.get('/topic/new', (req, res) => {
  fs.readdir('data', (err, files) => {
    if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  });
});

app.get(['/topic/view', '/topic/:id'], (req, res) => {
  var id = req.params.id;

  fs.readdir('data', (err, files) => {
    if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }

    if(id) {
      fs.readFile('data/'+id , {encoding : 'UTF-8'}, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view' , {topics:files, title:id, desc:data});
      })
    } else {
        res.render('view' , {topics:files, title:"환영합니다.", desc:"어서오세요."});
    }
  });
});

// app.get('/topic/:id' , (req, res) => {
//   var id = req.params.id;
//   var v_files;
//
//   fs.readdir('data', (err, files) => {
//     if (err) {
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//     }
//     v_files = files;
//   });
//
//   fs.readFile('data/'+id , {encoding : 'UTF-8'}, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Internal Server Error');
//     }
//     res.render('view' , {topics:v_files, title:id, desc:data});
//   })
// });

app.post('/topic/save', (req, res) => {
  var file_title = req.body.title;
  var file_desc = req.body.desc;

  fs.writeFile('data/'+file_title, file_desc, (err) =>{
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/'+file_title);
  });
});
