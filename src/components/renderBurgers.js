import React, { Fragment } from 'react';

import { Link } from "react-router-dom";

import Loader from 'react-loader-spinner';


function RenderBurger (props){
    const { getBurger, trigger } = props
    let data;
        if (trigger === true) {
            data = 
            <Fragment> 
              <Loader>   
              </Loader>
            </Fragment>
       
        }
        else{
          data =  
            <Fragment> 
              {getBurger.map((el,key) =>( 
                  <div key = {key}>
                      <Link to={`/burger/${el.name}`} ><img src={el.imageUrl} className="img" width="325" height="190"  alt="lorem"  /></Link> 
            </div>
        ))} 
          </Fragment>
        }
        return (
            <Fragment>
                {data}
            </Fragment>
            );
}


export default RenderBurger;