import './style.css';

const menuItems = {
   lavaCake: {
   name: 'Lava Cake',
   description: `Our world famous lave cake has an outer soft chocolate bread lightly covered with fine powder,
                 filled with warm melted 60% cacoa dark chocolate, topped with a few red raspberries and a
                 mint leaf`,
   imagePath: '/Users/Emmanuel/repos/restaurant-page/src/lava-cake.jpeg',
   price: '15'
   },
   flan: {
      name: 'Flan',
      description: `One of our top sellers for a very good reason. Cold served soft and delicious custard topped 
                    with caramelized brown sugar to add sweetness`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/flan-pexels-teresa-jang.jpeg',
      price: '18'
   },
   cremeBrulee: {
      name: 'Crème Brûlée',
      description: `Very creamy cold served custard with a blow torched brown sugar top layer with berries on top`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/crème-brûlée-orkun-orcan-unsplash.jpeg',
      price: '13'
   },
   blackForestGateau: {
      name: 'Black Forest Gâteau',
      description: `German three layered chocolate sponge cake filled with lots of cream and washington cherries`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/black-forest-gâteau-jacob-thomas-unsplash.jpeg',
      price: '14'
   },
   crepes: {
      name: 'Crêpes',
      description: `Crepes are filled with banana and hazelnut nutella. Comes with mildly sweet cherry sauce
                    and vanilla bean ice cream on top`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/crêpes-with-ice-cream.jpeg',
      price: '10'
   },
   tiramisu: {
      name: 'Tiramisu',
      description: `Classic Italian dessert made of layers of ladyfingers dipped in coffee with cream in 
                    between the layers and outside. Outer top layer covered in cocoa powder`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/tiramisu.jpeg',
      price: '12'
   },
   mochi: {
      name: 'Handmade Japanese Mochi',
      description: `Chewy and light treat made from pounded rice grains. Center is filled with red bean paste.
                    Mochi comes in strawberry, green tea, and mango flavors`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/japanese-mochi.jpeg',
      price: '8'
   },
   piñaColada: {
      name: 'Piña Colada',
      description: `Drink consists of pineapple, coconut cream, and ice. Our Piña Colada is non-alcoholic`,
      imagePath: '/Users/Emmanuel/repos/restaurant-page/src/piña-colada.jpeg',
      price: '5'
   }
};

function appendMenu() {
   const content = document.getElementById('content');

   for (const food in menuItems) {
      const foodContainer = document.createElement('div');
      const foodName = document.createElement('div');
      const image = document.createElement('img');
      const foodDescription = document.createElement('p');
      const foodPrice = document.createElement('div');

      foodContainer.classList.add('food-container');
      content.appendChild(foodContainer);

      foodName.textContent = menuItems[food].name;
      foodContainer.appendChild(foodName);
      foodName.classList.add('food-name');

      image.setAttribute('src', `${menuItems[food].imagePath}`);
      image.setAttribute('alt', `${menuItems[food].name}`);

      foodContainer.appendChild(image);

      foodDescription.textContent = menuItems[food].description;
      foodContainer.appendChild(foodDescription);
      foodDescription.classList.add('food-description');

      foodPrice.textContent = menuItems[food].price;
      foodContainer.appendChild(foodPrice);
      foodPrice.classList.add('food-price');
   }
};

export default appendMenu;