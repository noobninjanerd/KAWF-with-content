import React from 'react';
import './Wishlist.css'

export default function Wishlist() {
  return (
    <div className='content'> 
      <h2>Our Wishlist</h2>
      <p>
      We accept donations in all forms and not just monetary. 
      We require these items on a daily basis and receiving these 
      directly can help us immensely to achieve our goals.
      </p>
      <div className='tags'>
        <div>
          <h3>Cleaning Supplies</h3>
          <h2>Lizol, phenyl, etc.</h2>
        </div>
        <div>
          <h3>Antiseptic</h3>
          <h2>Dettol, Savlon, etc.</h2>
        </div>
        <div>
          <h3>Food Supplies</h3>
          <h2>Dog Food, Cat Food, Rice, Flour, Egg trays, Milk Formula for Puppies</h2>
        </div>
        <div>
          <h3>Medical Supplies</h3>
          <h2>Cotton Rolls, Bandages, Syringes (5 ml & 3ml), Betadine (liquid), Ivermectin</h2>
        </div>
        <div>
          <h3>Pet Products</h3>
          <h2>Collars, Leashes Shampoos, Toys</h2>
        </div>
        <div>
          <h3>Old Clothes</h3>
          <h2>Woollens, towels, bedsheets, pillows, etc.</h2>
        </div>
        <div>
          <h3>Old Furniture</h3>
          <h2>Office or home use, tables, etc.</h2>
        </div>
        <p>In the short run, we aim to help as many animals as we can through immediate rescues, on-spot treatments, etc. In the long run we need to establish a standardized system where these processes can be made efficient and easier, not only for us but also for those who seek help. 

          Together, we can foster an environment of compassion and ensure an aware audience. Check out our long term goals, here. (link to the goals blog)
        </p>
      </div>
    </div>
  );
}
