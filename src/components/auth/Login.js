import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const  [ usuario, setUsuario ] = useState({
       email: '',
       password: '' 
    });

    const { email, password } = usuario;

    const onChange = e => [
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    ]

    const onSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <input type="submit" value="Iniciar Sesion" className='btn btn-primario btn-block'/>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;
