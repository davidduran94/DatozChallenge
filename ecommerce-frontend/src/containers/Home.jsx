import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = () => {
  const initialState  = { 
    storeList:[
        { 
            id: 1,
            name:'Kichink' ,
            type: "store",
            url: 'https://www.kichink.com/',
            cover: 'https://pbs.twimg.com/profile_images/1082317236121915393/D0ZNwfcn_400x400.jpg'
        },
        {
            id: 2,
            type: "store",
            name:'AMZ' ,
            cover: 'https://d39w7f4ix9f5s9.cloudfront.net/90/9c/51ab07474da3a6da25292fcc0826/amazon-logo-orgsmile.svg'
        }
    ],
    products:[
        {
            id: 1457234,
            name:'Kichink' ,
            url: 'https://www.kichink.com/',
            cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
            title: 'Chamarra negra',
            description: 'Chamarra para hombre en paño de lana',
            price: 450,

        },
        {
          id: 214234,
          name:'Kichink' ,
          url: 'https://www.kichink.com/',
          cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
          title: 'Chamarra negra',
          description: 'Chamarra para hombre en paño de lana',
          price: 450,

      },
      {
        id: 149234,
        name:'Kichink' ,
        url: 'https://www.kichink.com/',
        cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
        title: 'Chamarra negra',
        description: 'Chamarra para hombre en paño de lana',
        price: 450,

    },
    {
      id: 142934,
      name:'Kichink' ,
      url: 'https://www.kichink.com/',
      cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
      title: 'Chamarra negra',
      description: 'Chamarra para hombre en paño de lana',
      price: 450,

  }

    ],
    productsFavs:[

    ]
};


  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <Layout>

      <Search />

      {initialState.storeList.length > 0 && (
        <Categories title="">
          <Carousel>
            {initialState.storeList.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}


      <Categories title="Products Lists">
        <Carousel>
          {initialState.products.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Favorites">
        <Carousel>
          {initialState.productsFavs.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

    </Layout>
  );
}

export default Home;