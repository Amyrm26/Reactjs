import React from 'react';
import './styles/Card.css'

const Cultura = () => {
    return(
        <div className="card mx-auto Fitness-Card">
               <div className="card-body">
                     <div className="row center">
                           <div className="col-4">
                           <img src={process.env.PUBLIC_URL + '/images/carnival-mask.png'} className="Float-right"   width='200' height='200' alt='img'/>
                           
                            </div>
                    
                                  <div className="col-5 Fitness-Card-Info">
                                     <h1>Carnaval</h1>
                                     <p>Cosas que debes de saber del carnaval dominicano </p>
                                    
                                 </div>
                
                     </div>   

                </div>    
                
        </div>
    
    );
}

export default Cultura;
