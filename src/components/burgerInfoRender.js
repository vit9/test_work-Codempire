import React, { Fragment } from 'react';

import { Link } from "react-router-dom";

import EditModal from './modal'



function  BurgerInfoRender (props){
    
    const clickHandler = name =>{
       // alert(`Вы выбрали ${name} `)
        const { ingradientsAction } = props 
        ingradientsAction(name)
    }
    const closeEditModal = () => {
        const { closeModal } = props;
        closeModal();
    }
    return (
        <Fragment>
            <div className="maindiv1">
            
                { props.burgerSettings.map((el) =>el.ingradients.drinks.map((el,key) => <img className="img1" src={el.img} key={key} alt="lorem" onClick={()=> clickHandler(el.name)}></img> ))}
                { props.burgerSettings.map((el) =>el.ingradients.meats.map((el,key) => <img className="img1" src={el.img} key={key} alt="lorem" onClick={()=> clickHandler(el.name)}></img> ))}
                { props.burgerSettings.map((el) =>el.ingradients.souses.map((el,key) => <img className="img1" src={el.img} key={key} alt="lorem" onClick={()=> clickHandler(el.name)}></img> ))}
                <Link to="/finish" className="link"> Собрать </Link>
            
                    
               
            </div>
            <EditModal visible={props.showModalWindow}
                    onOk={closeEditModal}
                    onCancel={closeEditModal}
                    name = { props.staff }/>
        </Fragment>
      );
}

export default BurgerInfoRender;