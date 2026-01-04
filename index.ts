import express = require('express');
import { exec } from "child_process";
const app = express()

app.on('ready', () => {
    console.log('ready')
})

app.get('/:oya', function (req, res) {
    //runs a windows command
    console.log(req.params.oya);
    exec('echo pogchamp', (err, stdout, stderr) => {
       if (err) {
           // node couldn't execute the command
           return;
       }

       // the *entire* stdout and stderr (buffered)
       console.log(`stdout: ${stdout}`);
       console.log(`stderr: ${stderr}`);
    });
  res.send('Hello World')
})

app.listen(3000)