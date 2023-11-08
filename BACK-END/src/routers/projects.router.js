const {Router}= require ('express')
const{createproject} = require ('../controllers/user.controllers.js')

const router = Router();

router.post('/', createproject);