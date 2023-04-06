const router = require('express').Router()

const productServices = require('./products.services')

router.route("/api/v1/products ")
  .get(productServices.getAllProducts)
  .post(productServices.productNewProduct)

router.route("/api/v1/products/:id")
  .get(productServices.getProductsById)
  .patch(productServices.patchProduct)
  .delete(productServices.deleteProduct)


module.exports = router