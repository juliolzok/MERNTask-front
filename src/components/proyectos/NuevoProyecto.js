import React, { Fragment, useState, useContext } from "react";

import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {  


    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;
    
    const [ proyecto, guardarProyecto ] = useState({
        nombre: '',
    });
    
    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        if (nombre === '') {
            mostrarError();
            return;
        }
        agregarProyecto(proyecto);

        guardarProyecto({
            nombre: ''
        })
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={() => mostrarFormulario()}
            >
            Nuevo Proyecto            
            </button>

            {
                formulario ?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text" 
                                name="nombre"
                                className='input-text' 
                                placeholder='Nombre Proyecto'
                                value={nombre}
                                onChange={onChangeProyecto}
                            />
                            <input
                                type="submit"
                                className='btn btn-primario btn-block'
                                value='Agregar Proyecto'
                            />       
                        </form>
                    ): null
            }
            { errorformulario ? <p className='mensaje error'>El nombre del Proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;