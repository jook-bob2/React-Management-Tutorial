const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김진석',
        'birthday': '910929',
        'gender': '남자',
        'job': 'Developer'
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동',
        'birthday': '001101',
        'gender': '여자',
        'job': '프리랜서'
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이수',
        'birthday': '890101',
        'gender': '남자',
        'job': '가수'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));