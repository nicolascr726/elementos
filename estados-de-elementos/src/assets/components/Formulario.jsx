import React, {Fragment, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

export const Formulario = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

    if(name.trim() === '' || email ==='' || password ==="" || secondPassword ===""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Completa todos los campos!'
        });
        setError(true);
        return
    } 
    else if(password !== secondPassword){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas ingresadas no son iguales',
        });
      } else
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
      })
      setError(false);
      return
};
    
    return (
    <Fragment>
    <Form className='formulario' onSubmit={handleSubmit}>
    { error? <p className="text-center text-danger">Intentalo nuevamente!</p> : null }
      <Form.Group className="mb-3" controlId="inputName">
        <Form.Control type="Name" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputSecondPassword">
          <Form.Control type="password" placeholder="Confirma tu contraseña" onChange={(e) => setSecondPassword(e.target.value)}/>
      </Form.Group>
      <div>
      <Button variant="success" type='submit' value='submit'>Registrarse</Button>
      </div>
    </Form>
    </Fragment>
  )
}

export default Formulario