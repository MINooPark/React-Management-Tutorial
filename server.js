const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 'first ID',
          'image': 'https://placeimg.com/64/64/1',
          'name': '일번',
          'birthday': '960101',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 'Second ID',
          'image': 'https://placeimg.com/64/64/2',
          'name': '이번',
          'birthday': '980101',
          'gender': '여자',
          'job': '프로그래머'
        },
        {
          'id': 'Third ID',
          'image': 'https://placeimg.com/64/64/3',
          'name': '삼번',
          'birthday': '990101',
          'gender': '여자',
          'job': '디자이너'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));