const express = require('express') //express module 불러오기 + 할당
const app = express() //express framework 생성
const port = 3000

//get 방식 : 루트 요청 받고 나서 콜백함수 실행
app.get('/', (req, res) => { //매개변수 req에는 request 객체 , res는 response 객체
    res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Bye World!')
})
app.get('/abc/:num', (req, res) => {
    console.log(req) // request 객체 정보
    console.log(req.params) //request 객체 내부의 인자정보
    console.log(req.params.num)
    res.send('abc World!')
})

app.get('/def/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    res.send('def World!')
})
//listen함수 : 시작 후 대기상태 == 3000번 포트에서 청취.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//실행은 node + 파일이름.js
