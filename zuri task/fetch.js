const fs  = require('fs')
const fetch = require('node-fetch')

fs.access('./result/', (err) => {
    if (err) throw err
    console.log(`The folder exists.`)
})

const getApi = fetch('https://jsonplaceholder.typicode.com/posts')
 .then( Response => Response.json())
 .then(json => {
     
    fs.writeFile('./result/post.json', JSON.stringify(json), (err)=>{
    if (err) throw err
    console.log('file created succesfully.')
})

 })

 


