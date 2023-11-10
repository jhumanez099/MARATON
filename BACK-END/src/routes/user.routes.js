const {Router}= require ('express')
const{createProject,  getallProject,getProject} = require ('./controllers/user.controllers.js')

const router = Router();

router.post('/project', createProject);

router.get('/project/:id_project', getProject)

router.get('/project', getallProject)

router.put('/project/:id_project')


module.exports = router;