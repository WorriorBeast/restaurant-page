import './style.css';

const content = document.getElementById('content');

const tabInfo = {
   companyName: 'Sweetly',
   homeIntro: `Try out our seasonal menu before it's gone.
        Definitely do not want to miss out on our international 2024 Paris award winning spring treats.
        You'll be ordering extra to take home. Don't believe me? Have a look at the review down below.`,
   review: `"Such an amazing atmosphere. The service was impeccable. I actually felt welcomed.
            OH MY!!! Don't get me started with the food.
            I had to order extra for myself and an additional order for my family.
            I was blown away by how delicious and aesthetically pleasing the food were.
            This is truly a sweet tooths' paradise! Will be coming back for all the sweet goodness tomorrow😋🤤"`,
   reviewerName: 'Ashley',
   hours: [
      'Sunday: 10am - 8pm',
      'Monday: 8am - 9pm',
      'Tuesday: 8am - 9pm',
      'Wednesday: 8am - 9pm',
      'Thursday: 8am - 9pm',
      'Friday: 8am - 9pm',
      'Saturday: 10am - 8pm'
   ],
   contactInfo: {
      phoneNumber: '(707)234-8351',
      email: 'sweetlyTreats@sweetly.com'
   },
   address: '2331 Yummy Street, Dixon, California'
};

let restaurantName = () => {
   const header = document.createElement('h1');

   header.textContent = tabInfo.companyName;
   header.classList.add('home-header');
   
   content.appendChild(header);
}

let homeIntro = () => {
   const intro = document.createElement('p');

   intro.textContent = tabInfo.homeIntro;
   intro.classList.add('home-intro');

   content.appendChild(intro);
};

let review = () => {
   const reviewContainer = document.createElement('div');
   const review = document.createElement('strong');
   const reviewerName = document.createElement('em');

   review.textContent = tabInfo.review;
   reviewerName.textContent = tabInfo.reviewerName;

   content.appendChild(reviewContainer);
   reviewContainer.appendChild(review);
   reviewContainer.appendChild(reviewerName);

   reviewContainer.classList.add('home-review-container');
   review.classList.add('home-review');
   reviewerName.classList.add('home-reviewer-name');
};

let restaurantHours = () => {
   const hoursContainer = document.createElement('div');
   const hoursHeader = document.createElement('h2');
   const hoursList = document.createElement('ul');

   content.appendChild(hoursContainer);

   hoursHeader.textContent = 'Hours';

   hoursContainer.appendChild(hoursHeader);
   hoursContainer.appendChild(hoursList);

   for(let i = 0; i < tabInfo.hours.length; i++) {
      const openHours = document.createElement('li');

      openHours.textContent = tabInfo.hours[i];
      hoursList.appendChild(openHours);
   }
};

let contactInfo = () => {
   const contactInfoContainer = document.createElement('div');
   const contactHeader = document.createElement('h2');
   const contactList = document.createElement('ul');
   const phoneNumber = document.createElement('li');
   const email = document.createElement('li');

   content.appendChild(contactInfoContainer);
   content.appendChild(contactList);

   contactHeader.textContent = 'Contacts';
   contactInfoContainer.appendChild(contactHeader);

   contactInfoContainer.appendChild(contactList);

   phoneNumber.textContent = `Phone Number: ${tabInfo.contactInfo.phoneNumber}`;
   email.textContent = `Email: ${tabInfo.contactInfo.email}`;

   contactList.appendChild(phoneNumber);
   contactList.appendChild(email);
};

let address = () => {
   const addressContainer = document.createElement('div');
   const addressHeader = document.createElement('h2');
   const address = document.createElement('div');

   content.appendChild(addressContainer);

   addressHeader.textContent = 'Address';
   address.textContent = tabInfo.address;

   addressContainer.appendChild(addressHeader);
   addressContainer.appendChild(address);
};

export default () => {
   restaurantName();
   homeIntro();
   review();
   restaurantHours();
   contactInfo();
   address();
};