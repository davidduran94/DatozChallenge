import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import { getItemsSource, deleteFavorite, setFavorite } from "../actions";

import plusIcon from '../assets/static/plus-icon.png';
import minusIcon from '../assets/static/minus-icon.png';

const CarouselItem = (props) => {
  const { id, type, cover, title, description, price, name } = props;
  const loading = false;
  
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, description,
      price, name, type:'fav'
    });
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  }

  const handleRequestProducts = (nameStore) => {
    console.log(`requesting data from ${nameStore}`);
    props.getItemsSource(nameStore);

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
            onClick={type=='fav'? ()=>handleDeleteFavorite(id) : handleSetFavorite }
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

CarouselItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  cover: PropTypes.string,
  type: PropTypes.string,
};

const mapDispatchToProps = {
  getItemsSource,
  deleteFavorite,
  setFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
