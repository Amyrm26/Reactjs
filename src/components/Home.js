import React from 'react'; 
import Componente from './Componente';
import '../App.css';

const Home = () => {

    return(
        <div className="App">
      <header className="App-header">
      <h1>
         <i> República Dominicana de Hoy!
         </i>
        </h1>
       <img src={process.env.PUBLIC_URL + '/images/dominican-republic (1).png'} width='350' height='350' alt='img'/>
       <h6>Cultura, Comida, Espacios turísticos....</h6>
       <button>
           Empezar
       </button>
       
       
       <section>
           <Componente/>
           
       </section>
        
      </header>
      
    </div>
        
    );

}

export default Home;

