const poll = require('../db')


const createproject= async(req,res, next)=>{
    try{
        const project = await pool.query( 
            'INSERT INTO proyectos(id_proyecto, nombre_proyecto, objetivos,descripcion,fecha_inicio,fecha_fin,estado,responsable,docente_tutor) VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9)',[req.body.id_proyecto, req.body.nombre_proyecto, req.body.objetivos,req.body.descripcion,req.body.fecha_inicio,req.body.fecha_fin,req.body.estado,req.body.responsable,req.body.docente_tutor]
            );
            res.json({ message: 'Proyecto registrado con éxito' });
    }catch (error){
        next(error)
    }
}


module.exports = {
    createproject
  }