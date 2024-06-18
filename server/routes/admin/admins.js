const express = require('express')
const db = require('../../db')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const router = express.Router()

router.post('/signin',(request,response) => {
    const {email, password} = request.body
    const encrpswd = crypto.SHA256(password)
    const statement = `select id, firstname, lastname, phone from admins where email ='${email}' 
    and password = '${encrpswd}'`
    db.query(statement,(error,users) => {
        const result = {}
        if(error)
            {
                result['status'] = 'error'
                result['error'] = error
            }
            else
            {
                if(users.length == 0)
                    {
                result['status'] = 'error'
                result['error'] = 'Invalid email or password'
                    }
                    else{
                        const user = users[0]
                        const token = jwt.sign({id: user[id]}, config.secret )
                        result['status'] = 'success'
                        result['data'] = {
                            firstname: user['firstname'],
                            lastname: user['lastname'],
                            token: token
                        }   
                    }
            }
            response.send(result)
        })
})

module.exports = router