import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import { getItemsSource, deleteFavorite, setFavorite, getProducts } from "../actions";

import plusIcon from '../assets/static/plus-icon.png';
import minusIcon from '../assets/static/minus-icon.png';

/**
 * Card item que muestra l ainformacion de un producto o tienda
 * @param {*} props 
 */
const CarouselItem = (props) => {
  const { _id, type, cover, title, description, price, name } = props;
  const loading = false;
  
  const handleSetFavorite = () => {
    props.setFavorite({
      _id, cover, title, description,
      price, name, type:'fav'
    });
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  }

  const handleRequestProducts = (nameStore) => {
    //console.log(`requesting data from ${nameStore}`);
    props.getProducts(nameStore);

  }

  return(
    <div 
      className="carousel-item" 
      onClick={type=='store'? () => handleRequestProducts(name) :  console.log("no action")  }>
      
      <img className="carousel-item__img" src={cover} />
      
      { type !== 'store' ? ( 
      <div className="carousel-item__details">
        <div>
          <img 
            className="carousel-item__details--img" 
            src={type=='fav'? minusIcon : plusIcon} 
            alt="Icon" 
            onClick={type=='fav'? ()=>handleDeleteFavorite(_id) : handleSetFavorite }
          />
        </div>
        <p className="carousel-item__details--title">Store: {name}</p>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${description} `}</p>
        <p className="carousel-item__details--subtitle">{`\$${price}`}</p>
      </div> ) : (
        <div className="carousel-item__details"> 
          
        </div>
      )
      }

    </div>
  );

}

/** validacion de pros del component */
CarouselItem.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  cover: PropTypes.string,
  type: PropTypes.string,
};

/** acciones que puede ejecutar el componente para cambiar estado */
const mapDispatchToProps = {
  getItemsSource,
  deleteFavorite,
  setFavorite,
  getProducts
};

export default connect(null, mapDispatchToProps)(CarouselItem);
