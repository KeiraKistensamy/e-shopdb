import { userRouter, express } from './controller/UserController.js'
import { productRouter } from './controller/ProductController.js'
import path from 'path'

// Create an express app
const app = express()
const port = +process.env.PORT || 4000

// Middleware
<<<<<<< HEAD
app.use('/user', userRouter),
app.use('/product', productRouter),

=======
app.use(router,
    '/user', userRouter,
    '/product', productRouter,
>>>>>>> 65914f978b65b5618f64c5cda8ae5d98dd037795
    express.static('./static'),
    express.json(),
    express.urlencoded({ 
        extended: true 
    })

<<<<<<< HEAD
=======
app.use()
app.use()
>>>>>>> 65914f978b65b5618f64c5cda8ae5d98dd037795

// Endpoints
app.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

<<<<<<< HEAD

app.use('/users', userRouter)
app.use('/products', productRouter)
=======
router.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Route not found'
    })
})
>>>>>>> 65914f978b65b5618f64c5cda8ae5d98dd037795

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})
