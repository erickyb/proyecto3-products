const Products = require('../models/products.models')

const findAllProducts = async () => {
    //? Your code here:
    const products = await Products.findAll({
        include: {
            model: Products
        }
    })
    return products
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

const createProduct = async(productObj) => {
    //? Your code here:
    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.name,
        price: productObj.name,
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
    if (!selectedProduct) return null

    const updateProduct = await 
    selectedProduct.update(productObj)
    return updateProduct
}

const deleteProduct = async(id) => {
    //? Your code here:
    const product = await Products.destroy({
        where: {
            id
        }
    })
    return product

}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
