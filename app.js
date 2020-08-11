const express = require('express');
const app = express();

//절대 경로가 아닌 상대 경로로 변경하는 방법이 없을까?
app.use(express.static('D:/workspace/git/nodejs/public'));

app.get('/', function(req, res) {
  res.send("Welcome To Home  어서오세요. 아픈 강소연");
});

app.get('/cat' , (req, res) => {
    res.send('캣 화면입니다. <img src="/cat1.jpg">')
});

app.listen(3000, function() {
  console.log("3000 포트에 연결되었습니다.");
});
