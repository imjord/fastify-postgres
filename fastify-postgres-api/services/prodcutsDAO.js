const fp = require('fastify-plugin');

const ProductsDAO = (db) => {
    const createProduct = async(category, title, price) => {
        const {id} = await db.one(`INSERT INTO products (category,title, price) VALUES ($1, $2, $3) RETURNING id`,
            [category, title, price]
            )
        return {id, category, title, price}
    }
    const getAllProducts = () => {
        const products = db.any(`SELECT id ,category, title, price FROM products`)
        return products
}
    const getProductById = (id) => {
        const product = db.one(`SELECT id, category, title, price FROM products WHERE id = $1`,
            [id])

        return product
    }
    const updateProduct = (id, category, title, price) => {
        const product = db.one(`UPDATE products SET category = $2, title = $3, price = $4 WHERE id = $1 RETURNING id, category, title, price`,
            [id, category, title, price])
        return product
    }
    const deleteProduct = (id) => {
        const product = db.one(`DELETE FROM products WHERE id = $1 RETURNING id, category, title, price`,
            [id])
        return product
    }
    return {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct}
}

module.exports = fp((fastify, opts, next) => {
    fastify.decorate('productsDAO', ProductsDAO(fastify.db))
    next()
})