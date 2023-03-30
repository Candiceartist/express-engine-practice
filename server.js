// Load Express -Reqire Statement

const express = require('express')
const fs = require('fs')
// initialize express

const app = express()
// define port
const PORT = 3000

// ----------------------{main requirements}


// ------------{Middleware}
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      return callback(null, rendered)
    })
  })

  app.engine('racecar', (filePath, options, callback) => { // define the view engine called hypatia
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      return callback(null, rendered)
    })
  })

  app.set('views', './views') // specify the views directory
  app.set('view engine', 'madeline','racecar') 

// --------------{Routing}

app.get('/', (req, res) => {
    res.render('template', { title: 'One', message: 'Line1!', content: 'I`ve paid my dues time after time' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Two', message: 'Line2!', content: 'I`ve done my sentence and commited no crime' })
  })

  app.get('/about-who', (req, res) => {
    res.render('template2', { title: 'Three', message: 'Queen Lyrics', content: 'I`ve paid my dues time after time' })
  })

  app.get('/about-time', (req, res) => {
    res.render('template2', { title: 'Four', message: 'Queen', content: 'I`ve done my sentence and commited no crime' })
  })
  app.get('/about-what', (req, res) => {
    res.render('template2', { title: 'Five', message: 'Queen', content: 'and bad mistakes ive made a few' })
  })
  app.get('/about-where', (req, res) => {
    res.render('template2', { title: 'Six', message: 'Queen', content: 'ive had my share of sand kicked in my face but ive come through' })
  })

  app.get('/about-why', (req, res) => {
    res.render('template2', { title: 'Seven', message: 'Queen', content: 'We are the champions my friend' })
  })
  app.get('/about-how', (req, res) => {
    res.render('template2', { title: 'eight', message: 'Queen', content: 'and we will keep on fighting to the end' })
  })
  app.get('/about-when', (req, res) => {
    res.render('template2', { title: 'nine', message: 'Queen', content: 'no time for loosers cause we are the champions' })
  })
  app.get('/about-queen', (req, res) => {
    res.render('template2', { title: 'ten', message: 'Queen', content: 'we are the champions of the world ' })
  })


// -----------{server info}



// tell the app to listten on port 3000 for HTTP request from clients
// call back function. ats asyncronously with 
app.listen(PORT,() => { 
    console.log(`currently listening on Port ${PORT}`)
})