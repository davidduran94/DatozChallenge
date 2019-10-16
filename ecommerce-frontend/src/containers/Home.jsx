import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = (state) => {

  return state.length === 0 ? <h1>Loading...</h1> : (
    <Layout>

      <Search />

      {state.storeList.length > 0 && (
        <Categories title="">
          <Carousel>
            {state.storeList.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}


      <Categories title="Products Lists">
        <Carousel>
          {state.products.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Favorites">
        <Carousel>
          {state.productsFavs.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Home);