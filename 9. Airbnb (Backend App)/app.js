const express = require('express')
const {userRouter} = require('./router/userRouter')

const {hostRouter} = require('./router/hostRouter')
const app = express()

app.use(express.urlencoded({ extended: true, limit: '20mb' })) // Parse URL-encoded form data with larger payloads
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/user', userRouter)

app.use('/host', hostRouter)



app.use((req, res, next) => {
  res.render('404', {title: "404: Error - airbnb", tab:"404"})
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`airbnb server is running at http://localhost:${PORT}`)
})
