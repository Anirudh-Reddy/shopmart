import '../styles/Home.css'
import Product from './Product'
const Home = () => {
    return (
    <div className='home'>
        <img className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
         alt='' />
         <div className='home__row'>
          <Product id='1' 
          title='HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD, 15.6-inch (39.62 cms) FHD Screen, Windows 10, MS Office'
          price={649.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81Ne5qKmE8L._SX679_.jpg' 
           />
           <Product id='2' 
          title='OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)'
          price={499.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg' 
           />
        </div>
        <div className='home__row'>
          <Product id='3' 
          title='You Don`t Know JS: 6 Volume Set Paperback – 1 January 2017'
          price={12.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51llKt2oJEL._SX333_BO1,204,203,200_.jpg' 
           />
           <Product id='4' 
          title='Belear I-280 Couturier Series 38 Inch Blue Spruce Cutaway Acoustic Guitar with Truss Rod Combo with Gig Bag and Picks'
          price={9.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71EszVTqWtL._SY741_.jpg' 
           />
            <Product id='5' 
          title='Canon PowerShot SX540HS 20.3MP Digital Camera with 50x Optical Zoom (Black)'
          price={199.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71Xp-K4MMBL._SL1000_.jpg' 
           />
        </div>
        <div className='home__row'>
          <Product id='6' 
          title='Samsung 189 cm (75 inches) 4K Ultra HD Smart QLED TV QA75Q70TAKXXL (Titan Gray) (2020 Model)'
          price={1599.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71koQer7gLL._SL1500_.jpg' 
           />
        </div>
    </div>
    )
}

export default Home
