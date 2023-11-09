const poll = require('../db')


const createProject= async(req,res, next)=>{

    const{id_proyecto, nombre_proyecto, objetivos,descripcion,fecha_inicio,fecha_fin,estado,responsable,docente_tutor}= req.body
    try{
        const project = await pool.query( 
            'INSERT INTO proyectos(id_proyecto, nombre_proyecto, objetivos,descripcion,fecha_inicio,fecha_fin,estado,responsable,docente_tutor) VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9) RETURING*',[req.body.id_proyecto, req.body.nombre_proyecto, req.body.objetivos,req.body.descripcion,req.body.fecha_inicio,req.body.fecha_fin,req.body.estado,req.body.responsable,req.body.docente_tutor]
            );
            res.json(result.rows[0]);
    }catch (error){
        next(error)
    }
}



const getallProject = async(req, res, next)=>{
    try{
        const allProjects = await pool.query('SELECT * FROM Projects')
        res.json(allProjects.rows)
    }catch (error){
        next(error)
    }
}

const getProject = async(req, res, next)=>{
    try{
    const{id_proyecto, nombre_proyecto}= req.params
    const result = await pool.query('SELECT * FROM proyectos WHERE id_proyecto =$1',[id_proyecto])
    if(result.rows.lenght===0)return res.status(400).json({
        message:'No se encontro el proyecto'
    })
     res.json(result.rows[0]);
    
}catch (error){
        next(error)
    }
}

const updateProject = async(req, res, next)=>{
    try{
        const{id_proyecto, nombre_proyecto, objetivos,descripcion,fecha_inicio,fecha_fin,estado,responsable,docente_tutor}= req.body

        const project = await pool.query( 
            'UPDATE  proyectos SET id_proyecto = $1, nombre_proyecto=$2, objetivos=$3,descripcion=$4,fecha_inicio =$5,fecha_fin=$6,estado=$7,responsable$8,docente_tutor$9 WHERE id_proyecto=$1 RETURING*',[req.body.id_proyecto, req.body.nombre_proyecto, req.body.objetivos,req.body.descripcion,req.body.fecha_inicio,req.body.fecha_fin,req.body.estado,req.body.responsable,req.body.docente_tutor]
            );
            if(result.rowcount===0) return res.status(404).json({
                message: 'no se encontro el proyecto',
            })
            res.json(result.rows[0]);
    }catch (error){
        next(error)
    }
}

module.exports = {
    createProject,
    getallProject,
    getProject,
    updateProject
  }