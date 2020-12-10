import Link from 'next/link'
import { useEffect } from 'react'
import HeadComponent from '../components/head/HeadComponent'
import style from './style.module.css'
import axios from 'axios'

function index() {

    useEffect(() => {
        const getUsers = async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/usuarios`)
            console.log(res.data);
        }
        getUsers()
    }, []) 

    return (
        <div className={style.cont}>
            <HeadComponent>
            Welcome
            </HeadComponent>
            <link rel="stylesheet" href={style}/>
            <div className={style.text}>
            <h1 className="text-center">Bienvenido a BloGinG</h1>
            <h3>Aqui podrás encontrar blogs de diversos temas y compartir tu opinion con personas de todo el mundo</h3>
         
            </div>
     
              <div className={style.cent}>
              <Link href="/login">
          <button className={style.snip1562}>Iniciar</button>
      

            </Link>
              </div>

        </div>
    )
}

export default index

