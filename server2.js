const express = require('express') //express module 불러오기 + 할당
const app = express() //express framework 생성
const port = 3000

app.get('/sum/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    sum = parseInt(req.params.num1) + parseInt(req.params.num2)
    console.log(sum)
    res.send('sum World!')
})
app.get('/min/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    min = parseInt(req.params.num1) - parseInt(req.params.num2)
    console.log(min)
    res.send('min World!')
})
app.get('/mul/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    mul = parseInt(req.params.num1) * parseInt(req.params.num2)
    console.log(mul)
    res.send('mul World!')
})
app.get('/div/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    div = parseInt(req.params.num1) / parseInt(req.params.num2)
    console.log(div)
    res.send('div World!')
})
app.listen(port, () => {
    console.log(`~ ${port}`)
})