import Axios from "axios";
import Link from "next/link";
import { useState } from "react";
import HeadComponent from "../../components/head/HeadComponent";
import Router from 'next/router'

export default function Register() {


    const [user, setuser] = useState({name:'',username:'',email:'',age:0,password:'',confirm:''})

    const onChangeInput= (e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        console.log(e.target.name, e.target.value);
    }

const registerUser=async(e)=>{
    e.preventDefault()
    await Axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/usuarios`,user)
    .then(response => { 
        Router.push("/login")
    })
    .catch(error => {
        console.log(error.response)
    });

}


    return (
        <div>
            <HeadComponent>
            Registro
            </HeadComponent>
            <div>
        <div className="sidenav">
          <div className="login-main-text">
            <h2>Aplicacion<br /> Pagina de Registro</h2>
            <p>Inicia sesion o registrate para entrar</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" name="name" className="form-control" onChange={(e)=>onChangeInput(e)} placeholder="Nombre" />
                </div>
                <div className="form-group">
                  <label>Usuario</label>
                  <input type="text" className="form-control" name="username" onChange={(e)=>onChangeInput(e)} placeholder="Nombre de Usuario" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" onChange={(e)=>onChangeInput(e)} id="inputEmail3" placeholder="Tu correo"/>
                </div>
                <div className="form-group">
                  <label>Edad</label>
                  <input type="number" min="10" defaultValue="20" max="120" name="age" onChange={(e)=>onChangeInput(e)} className="form-control"  placeholder="Tu edad"/>
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" autoComplete="on" className="form-control" name="password" onChange={(e)=>onChangeInput(e)} placeholder="Contraseña" />
                </div>
                <div className="form-group">
                  <label>Verificar Contraseña</label>
                  <input type="password" autoComplete="on" className="form-control" name="confirm" onChange={(e)=>onChangeInput(e)} placeholder="Repite la Contraseña" />
                </div>
                <button type="submit" className="btn btn-secondary my-2" onClick={(e)=>{registerUser(e)}}>Register</button>
              </form>
              <p>Ya tienes cuenta ...Inicia seseion <Link href="/login"><a> Aqui </a></Link></p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
          {`
          body {
            font-family: "Lato", sans-serif;
        }
        
        
        
        .main-head{
            height: 150px;
            background: #FFF;
           
        }
        
        .sidenav {
            height: 100%;
            background-color: #000;
            overflow-x: hidden;
            padding-top: 20px;
        }
        
        
        .main {
            padding: 0px 10px;
        }
        
        @media screen and (max-height: 450px) {
            .sidenav {padding-top: 15px;}
        }
        
        @media screen and (max-width: 450px) {
            .login-form{
                margin-top: 10%;
            }
        
            .register-form{
                margin-top: 10%;
            }
        }
        
        @media screen and (min-width: 768px){
            .main{
                margin-left: 40%; 
            }
        
            .sidenav{
                width: 40%;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
            }
        
            .login-form{
                margin-top: 40%;
            }
        
            .register-form{
                margin-top: 20%;
            }
        }
        
        
        .login-main-text{
            margin-top: 20%;
            padding: 60px;
            color: #fff;
        }
        
        .login-main-text h2{
            font-weight: 300;
        }
        
        .btn-black{
            background-color: #000 !important;
            color: #fff;
        }
        `}
      </style>
        </div>
    );
}