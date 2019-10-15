import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import { getItemsSource } from "../actions";

import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, type, cover, title, description, price } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, type, description,
      price
    });
  }
  const handleDeleteFavorite = (itemId) => {
    props.deteleFavorite(itemId);
  }

  const handleRequestProducts = () => {
    props.getItemsSource();
  }

  return(
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} />
      
      { type !== 'store' ? ( 
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
        </div>
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
  getItemsSource
};

export default connect(null, mapDispatchToProps)(CarouselItem);
