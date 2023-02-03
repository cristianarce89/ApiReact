const db = require('../../database/models');
const sequelize = db.sequelize;


const Products = db.Product;


const adminController = {
    list: (req, res) => {
        Products.findAll()
            .then(products => {
                let response = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/administar'
                    },
                    data: products
                }
                res.json(response)
            })
    },
    detail: (req, res) => {
        Products.findByPk(req.params.id)
            .then(product => {
                //metodos que se usan para las APIS
                let response = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: `api/administrar/productDetail/${req.params.id}`
                    },
                    data: product
                }
                //respuesta de la busqueda en formato json
                res.json(response)
            })
            //Error en caso de no encontrar el producto solicitado por id
            .catch(error => {
                return res.status(404).json({ message: 'Producto no encontrado' })
            })
    },
}
module.exports = adminController;