import Image from 'next/image'
import HeadComponent from '../../components/head/HeadComponent';
import {useAppContext} from '../../contexts/AppContext'

export default function Home() {

   
     const{userAuth} = useAppContext()

      

    return (
        
        <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
          
          <HeadComponent>
              Home
          </HeadComponent>
            {userAuth ?
            <div>
<h3 className="text-center"> Welcome {userAuth.name}</h3>
            <h2 className="text-center">Abraham es tremenda locasa y repartera</h2>
            <Image
        src="/img/main.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
        layout="responsive"
        />            </div>
            :
            <div className="wrapper">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="shadow" />
            <div className="shadow" />
            <div className="shadow" />
            <span>Loading</span>
          </div>}
           
          
      <style jsx>
          {`
          .wrapper{
            width:200px;
            height:60px;
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%, -50%);
        }
        .circle{
            width:20px;
            height:20px;
            position: absolute;
            border-radius: 50%;
            background-color: rgb(131, 30, 101);
            left:15%;
            transform-origin: 50%;
            animation: circle .5s alternate infinite ease;
        }
        
        @keyframes circle{
            0%{
                top:60px;
                height:5px;
                border-radius: 50px 50px 25px 25px;
                transform: scaleX(1.7);
            }
            40%{
                height:20px;
                border-radius: 50%;
                transform: scaleX(1);
            }
            100%{
                top:0%;
            }
        }
        .circle:nth-child(2){
            left:45%;
            animation-delay: .2s;
        }
        .circle:nth-child(3){
            left:auto;
            right:15%;
            animation-delay: .3s;
        }
        .shadow{
            width:20px;
            height:4px;
            border-radius: 50%;
            background-color: rgba(0,0,0,.5);
            position: absolute;
            top:62px;
            transform-origin: 50%;
            z-index: -1;
            left:15%;
            filter: blur(1px);
            animation: shadow .5s alternate infinite ease;
        }
        
        @keyframes shadow{
            0%{
                transform: scaleX(1.5);
            }
            40%{
                transform: scaleX(1);
                opacity: .7;
            }
            100%{
                transform: scaleX(.2);
                opacity: .4;
            }
        }
        .shadow:nth-child(4){
            left: 45%;
            animation-delay: .2s
        }
        .shadow:nth-child(5){
            left:auto;
            right:15%;
            animation-delay: .3s;
        }
        .wrapper span{
            position: absolute;
            top:75px;
            font-family: 'Lato';
            font-size: 25px;
            letter-spacing: 9px;
            color: rgb(20, 20, 20);
            left:15%;
        }
        `}
      </style>
      </div>



    /*     <div>
            <h3 className="text-center">Welcome {userAuth?
            <h2>{userAuth.username}</h2>:
            <p>asd</p>
        }</h3>
        </div> */
    );
}



