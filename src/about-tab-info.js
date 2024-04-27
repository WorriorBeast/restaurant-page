import './style.css';
import trophyCollectionImg from './trophy-collection-jelly-dollar-unsplash.jpeg';

const tabInfo = {
	headerPhrases: [`Special Customers.`, `Special Chefs.`, `Special Food.`],
	story: [`Sweetly was founded in 2001 by a young 22 year old who loved baking desserts more than anything else
		  in the world. The founder, Emmanuel Sanchez happened to have a sweet tooth and a creative imagination.
		  The passion was unmatched. Unfortunately Emmanuel realized baking without a source of income to fund
		  his passion was not possible if he wanted to continue baking. Emmanuel baked from home fulfilling
		  orders made by friends, family, and customers who came from word of mouth.`, 
		  `Eventually he gained traction and became too busy to keep baking from home. Emmanuel opened up a
		  small shop where he was able to bake more efficiently and grow Sweetly. Occasionally, he would
		  temporarily close shop to compete in competitions.`,
		  `In a paris competition he won, he networked with a private investor who was really impressed and saw the
		  vast potential Sweetly had. This lead to Emmanuel being able to relocate and open a large restaurant
		  in a prominent area of Dixon. After winning the Paris competition, he became widely recognized as an elite
		  baker. With this, he was able to recruit top talent to work at Sweetly.`],
	ceoProfilePic: '/Users/Emmanuel/repos/restaurant-page/src/ceo-profile-pic.jpeg',
	letter: {
		p1: `Our goal is to be an innovative hub where talented chefs who want to continue inventing new delicious 
			  desserts while serving some of the best desserts in the world to sweet-craving customers`,
		p2: `We are more than just a business. This is our second home where we get to enjoy our hobby while 
			  satisfying your sweet palate. Nothing makes us happier than seeing customers savor and melt from
			  the first bite. Seeing all the satisfied expressions motivates us to experiment creating new delicious
			  treats`,
		p3: `Our chefs take great pride in being the best of the best in world. In fact, all of our chefs are 
			  currently competing in major dessert competitions or have competed in the past. We can truly claim
			  to have top notch talent`
		},
	achievements: ['2013 World Dessert Champion', '2015 World Dessert Champion',
						'2016 National Banana Pudding Cook Off', '2016 World Dessert Championship',
						'2017 Cacao Barry World Chocolate Masters', '2017 Taste of World', '2017 Sugar Rush',
						'2017 US Pastry Competition'],
	trophyImage: trophyCollectionImg
};

let header = () => {
	const content = document.getElementById('content');
	const headerPhrase = document.createElement('h1');

	headerPhrase.classList.add('about-header');
	content.appendChild(headerPhrase);

	for (let i = 0; i < tabInfo.headerPhrases.length; i++) {
		const phrase = document.createElement('div');

		phrase.textContent = tabInfo.headerPhrases[i];

		headerPhrase.appendChild(phrase);
	}
};

let companyStory = () => {
	const storyContainer = document.createElement('div');
	const storyHeader = document.createElement('h2');
	const story = document.createElement('div');

	content.appendChild(storyContainer);

	storyHeader.textContent = 'Story';
	storyContainer.appendChild(storyHeader);

	story.textContent = tabInfo.p2;
	storyContainer.appendChild(story);

	for (let i = 0; i < tabInfo.story.length; i++) {
		const paragraph = document.createElement('p');

		paragraph.textContent = tabInfo.story[i];

		story.appendChild(paragraph);
	}
};

let letter = () => {
	const ceoLetter = document.createElement('div');
	const letterHeader = document.createElement('div');
	const ceoImage = document.createElement('div');

	ceoLetter.classList.add('letter');
	letterHeader.classList.add('letter-header');
	ceoImage.classList.add('ceo-pic');

	content.appendChild(ceoLetter);
	ceoLetter.appendChild(letterHeader);
	letterHeader.appendChild(ceoImage);

	const ceoName = document.createElement('div');
	const ceoTitle = document.createElement('div');

	ceoName.textContent = 'Emmanuel Sanchez';
	ceoTitle.textContent = 'CEO & FOUNDER';

	ceoName.classList.add('ceo-name');
	ceoTitle.classList.add('ceo-title');

	letterHeader.appendChild(ceoName);
	letterHeader.appendChild(ceoTitle);

	for (const paragraph in tabInfo.letter) {
		const p = document.createElement('p');

		p.textContent = tabInfo.letter[paragraph];

		ceoLetter.appendChild(p);
	}
};

let achievements = () => {
	const achievementContainer = document.createElement('div');
	const achievementHeader = document.createElement('h2');
	const listImageContainer = document.createElement('div');
	const achievementList = document.createElement('ul');

	content.appendChild(achievementContainer);

	achievementHeader.textContent = 'Competitions Won';
	achievementContainer.appendChild(achievementHeader);

	achievementContainer.appendChild(listImageContainer);

	listImageContainer.classList.add('list-image-layout');
	listImageContainer.appendChild(achievementList);

	for (let i = 0; i < tabInfo.achievements.length; i++) {
		const achievement = document.createElement('li');

		achievement.textContent = tabInfo.achievements[i];

		achievementList.appendChild(achievement);
	}
	
	const trophyImage = document.createElement('img');

	trophyImage.setAttribute('src', tabInfo.trophyImage);
	trophyImage.setAttribute('alt', 'A collection of trophies');

	listImageContainer.appendChild(trophyImage);
};
					
let appendAbout = () => {
	header();
	companyStory();
	letter();
	achievements();
};

export default appendAbout;