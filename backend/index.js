import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user/data', (req, res) => {
    const data=[
    {
        "name": "David",
        "age": 22,
        "gender": "male",
    },
    {
        "name": "Shaun",
        "age": 20,
        "gender": "male",
    },
    {
        "name": "Sandy",
        "age": 13,
        "gender": "female",
    }
]
res.send(data);
});
// getting data from api

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})