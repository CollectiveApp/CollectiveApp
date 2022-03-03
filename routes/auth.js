const router = require("express").Router();
const bcrypt = require('bcryptjs')
const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken');
const { isAuthenticated } = require("../middleware/jwt");


router.post('/signup', (req, res, next)=>{
    const {email, password, name} = req.body
	console.log('test')
    if(email === '' || password === '' || name === ''){
        res.status(400).json({message: 'email, password and name are required'})
        return
    }
    if (password.length < 6){
        res.status(400).json({message: 'Password should be at least six characters'})
        return
    }
    Admin.findOne({email})
    .then(foundAdmin => {
        if(foundAdmin){
            res.status(400).json({message: 'Admin already exists'})
            return
        }
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt)
        return Admin.create({email, name, password: hashedPassword})
        .then(createdAdmin => {
            const {email, name, _id} = createdAdmin
            const Admin = {email, name, _id}
            res.status(201).json({admin: Admin})

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:'inernal server error'})
        })
        
    })
})

router.post('/login', (req, res, next) => {
	const { email, password } = req.body
	if (email === '' || password === '') {
		res.status(400).json({ message: 'Provide email and password' })
		return
	}
	Admin.findOne({ email })
		.then(foundAdmin => {
			if (!foundAdmin) {
				res.status(400).json({ message: 'Admin not found' })
				return
			}
			const passwordCorrect = bcrypt.compareSync(password, foundAdmin.password)
			if (passwordCorrect) {
				const { _id, email, name } = foundAdmin
				const payload = { _id, email, name }
				// create the json web token
				const authToken = jwt.sign(
					payload,
					process.env.JWT_SECRET,
					{ algorithm: 'HS256', expiresIn: '12h' }
				)
				res.status(200).json({ authToken })
			} else {
				res.status(401).json({ message: 'Unable to authenticate' })
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({ message: 'Internal Server Error' })
		})
});

router.get('/verify', isAuthenticated, (req, res, next) => {
	// if the token is valid we can access it on : req.payload
	console.log('request payload is: ', req.payload)
	res.status(200).json(req.payload)
});

module.exports = router;