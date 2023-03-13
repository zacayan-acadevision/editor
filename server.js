const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(express.json());
app.post('/api/save', (req, res) => {
    const { name, data } = req.body;
    Save(name, data)
    res.status(200)
    res.json(true)
})

app.post('/api/list', async (req, res) => {
    let out
    let response = await new Promise((res, rej)=>{
        fs.readdir('api/files', (error, archivos) => {
            if (error) {
                rej(['Error al leer el directorio', error]);
                return;
            }
            res(archivos)
        });
    })
    res.status(200)
    res.json(response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function Save(name, data) {
    fs.writeFile('api/files/' + name, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('El archivo ha sido creado exitosamente!');
    });
}