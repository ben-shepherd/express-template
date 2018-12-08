import express from 'express'
import { view } from '../libs/helper/helpers'

const router = express.Router()

/**
 * Index, list of available functions
 */
router.get('/', async(req, res) => {
	try {
		res.sendFile(view('index.html'))
	}
	catch(e) {
		res.status(e.status || 500).json(e)
	}
})

export default router