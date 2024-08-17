import { connection as db } from '../config/index.js'

class Products {
fetchProdutcs(req, res) {
        try {
            const strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch product')
                    res.json({
                        status: res.statusCode,
                        results: results
                    })
            })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
}

fetchProduct(req, res) {
        try {
            const strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            WHERE productID = ${req.params.id}
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch product')
                    res.json({
                        status: res.statusCode,
                        results: results[0]
                    })
            })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
}

recentProducts(req, res) {
        try {
            strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            ORDER BY productID DESC
            LIMIT 5;
            `
        db.query(sryQry, (err, results) => {
            if(err) throw new Error('Unable to fetch  recent product')
        })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
        }
            )
    }
}

addProduct(req, res) {
        try {
            const strQry = `
            INSERT INTO Products
            SET?
            `
        db.query(strQry, [req.body], (err)=>{
            if(err) throw new Error('Unable to add product')
            res.json({
        status:res.statusCode,
        msg: 'Product was successfully added'
        })})
         } catch(e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
}

updateProduct(req, res) {
    try {
        const strQry = `
        UPDATE Products
        SET ?
        WHERE productID = ${req.params.id}
        `
        db.query(strQry, [req.body], (err) => {
            if (err) throw new Error('Unable to update a product')
                res.json({
                    status: res.statusCode,
                    msg: 'The product record was updated'
                })
        })
    } catch (e) {
        res.json({
            status: 400,
            msg: e.message
        })
    }
}

deleteProduct(req, res) {
    try {
        const strQry = `
        DELETE FROM Products
        WHERE productID = ${req.params.id};
        `
        db.query(strQry, (err) => {
            if(err) throw new Error('Unable to delete product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product\'s information was removed'
                })
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
}

}
export {
    Products
}