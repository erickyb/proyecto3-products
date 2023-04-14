// const Products = require('../models/products.models')
const Products = require('../models/products.models')

const findAllProducts = async () => {
    //? Your code here:
    const products = await Products.findAll({
        // include: {
        //     model: Products
        // }
    })
    return products
}


const patchProduct = (req, res) => {
    const id = Number(req.params.id)
    const productObj = req.body
    productControllers.updateProduct(id, productObj)
        .then(data => {
            if (!data) {
                return res.status(404).json({ message: 'Invalid ID' })
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: 'Bad request', err })
        })
}
const findProductById = async(id) => {
    //? Your code here:
    const product = await Products.findOne({
        where: {
            id:id
        }
    })
    return product
}

const createProduct = async (productObj) => {
    //? Your code here:
    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock
       
    })
    return newProduct
}

const updateProduct = async(id, productObj) => {
    //? Your code here:
    const selectedProduct = await Products.findOne({
        where: {
            id:id
        }
    })
    if(!selectedProduct) return null

    const modifiedProduct = await selectedProduct.update(productObj)
    return modifiedProduct
}

const deleteProduct = async(id) => {
    //? Your code here:
    const product = await Products.destroy({
        where: {
            id:id
        }
    })
    return product

}

module.exports = {
    findAllProducts,
    patchProduct,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
