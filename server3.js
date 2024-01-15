const express = require('express')
const app = express()
const port = 3000

var movieList=[
    {id:1,title:'Harry Potter',raiting:'5.0',running:'3:00:00'},
    {id:2,title:'about',raiting:'9.5',running:'5:00:00'},
    {id:3,title:'time',raiting:'9.7',running:'1:00:00'},
    {id:4,title:'lord of the rings',raiting:'',running:'6:00:00'}
]
app.get('/', (req, res)=> {
    res.send('Hello')
})
app.get('/movie', (req, res)=> {
    console.log('movie')
    res.send(movieList)
})
app.get('/movie/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    console.log(req.params) // {id:'2'}
    console.log(id)//2 실제론 string 인데 number 인줄안다. 그래서 parseInt필요
    var findObj=''
    for(var i =0; i<movieList.length; i++){
        if(id === movieList[i].id){
            findObj=movieList[i]
            break
        }
    }
    res.send(findObj)
})
app.delete('/person', (req,res)=>{
    console.log('/person(delete)')
    const id = req.body.id;
    let index=0;
    for(let i = 0; i <personList.length; i++){
        if(id===personList[i].id){
            index=i;
        }
    }
    personList.splice(index,1)
res.send('/perosn(delete)')
})



app.listen(port, () => {
    console.log(`listening ${port}`)
})