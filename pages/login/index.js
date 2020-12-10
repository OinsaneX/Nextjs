import Axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import HeadComponent from "../../components/head/HeadComponent";
import {useAppContext} from '../../contexts/AppContext'

export default function Login() {


    const [user, setuser] = useState({username:'',password:''})
    const {login} = useAppContext()
    const onInputChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    const handleLogin=async(e)=>{
        e.preventDefault()
        const {data} = await Axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/usuarios`)
         data.forEach(element => {
             console.log(element.username , user.username);
            if(element.username==user.username){
                console.log("3");
                if(element.password==user.password){
                    localStorage.setItem("id",element.id)
                    console.log("asd");
                    login()
                    Router.push("/home")
                }
            }
            
            
        });  
    }

    return (
        <div>
            <HeadComponent>
            Login
            </HeadComponent>
            <div>
        <div className="sidenav">
          <div className="login-main-text">
            <h2>Aplicacion<br /> Pagina de Login</h2>
            <p>Inicia sesion o registrate para entrar</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>Usuario</label>
                  <input type="text" name="username" value={user.username} onChange={(e)=>{onInputChange(e)}} className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" name="password" value={user.password} onChange={(e)=>{onInputChange(e)}} className="form-control" placeholder="Password" />
                </div>
                <button type="submit" onClick={(e)=>handleLogin(e)} className="btn btn-black my-2">Login</button>
              </form>
              <p>No tienes cuenta ...Crea una <Link href="/register"><a> Aqui </a></Link></p>
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
                margin-top: 70%;
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
          }`}
      </style>
        </div>
    );
}