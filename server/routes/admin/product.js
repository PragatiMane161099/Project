const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

router.get('/',(request,response) => {
    const statement = `select id, title, description, price, brandId, catagoryId, imageFile from product`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response) => {
    const {title, description, catagoryId, brandId, price} = request.body
    const statement = `insert into product (title, description, catagoryId, brandId, price) 
    values ('${title}','${description}','${catagoryId}','${brandId}','${price}')`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.put('/:id',(request,response) => {
    const {id} = request.params
    const {title, description,catagoryId, brandId, price} = request.body
    const statement = `update product set title = '${title}', description = '${description}',
    catagoryId = '${catagoryId}', brandId = '${brandId}', price = '${price}'
    where id ='${id}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

router.delete('/',(request,response) => {
    const {id} = request.params
    const statement = `delete from product where id ='${id}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error,data))
    })
})

module.exports = router