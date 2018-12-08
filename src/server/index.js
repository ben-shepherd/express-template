import logger from 'morgan'
import cors from 'cors'
import express from 'express'
import errorhandler from 'errorhandler'
import bodyParser from 'body-parser' 
import cookieParser from 'cookie-parser'
import fileUpload from'express-fileupload'
import routes  from './routes'

global.__basedir = __dirname
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(fileUpload())
app.use(bodyParser.urlencoded({
		extended: true
	})
)
app.use(cors())
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
	app.use(errorhandler())
}

// <Routes></Routes>
app.use('/', routes)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})


export default app