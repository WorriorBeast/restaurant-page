# restaurant-page

A restaurant webpage that can be navigated by clicking any tab to view the desired content. The default tab when the
page loads is the home tab.

Live Demo: https://worriorbeast.github.io/restaurant-page/ 

Objective:
    - Build a tabular page
    - Primarily use Javascript to build the page
    - Use ES6 modules
    - Use Webpack to bundle the javascript module
    - Create a custom webpack configuration for development

What I learned:

The development environment was quite confusing as first. In the past I wrote all Javascript in a single file, but
this time I wrote multiple files as a module to make maintaining and building simpler. There was a lot of uncertainty
when starting this project that I went back and reread information about webpack again. Now I'm pretty confident about
setting up a basic custom webpack configuration file. When I first began to set up the project, I noticed there was a
node_modules directory and was unsure if that directory must be pushed into github until I read about .gitignore.

I read extensively about what is DOMContentLoaded and load and what is the difference. DOMContentLoaded fires once
the html has parsed and load fires immediately after the html has parsed and other resources such as images have
loaded. In my specific use case, DOMContentLoaded was the better option. I also read information about the resize
event since it was my first time using it. Luckily resize is straight forward and simple on how it fires. When reading
about how to get the width the window, I found there were multiple methods and properties that can be used, but which
one is used highly depends how it's going to be used and how it calculates the window width. This took quite a bit of
reading and testing to decide which works best for my use case.

After creating a live demo on github pages and viewing it, I noticed the images in the menu tab gave a error 404.
I fixed it by importing the images into the javascript file rather than using an absolute path or relative path. I
don't understand why when using an absolute path and relative path the images are displayed when viewing the html
locally, but not when viewing on a server. What I did notice though was that after I imported the images and ran
Webpack, the images were added in the output dist directory. From this, I can only deduce that the problem came from
how Webpack bundles the files since the images weren't part of the output dist directory. As a result the gh-pages
branch in the repository did not have access to the images, so the images weren't displaying. The local html worked because the images were found locally. It's possible that github pages was partially responsible for the images giving 
a error 404.

Below is a list of images I used all tabs with their respective url link, photographer/creator, title, and relative
file path.

1) Dark chocolate tile pieces covered in chocolate powder by drobotdean:
https://www.freepik.com/free-photo/dark-chocolate-tile-pieces-covered-chocolate-powder_7887392.htm#query=chocolate&position=0&from_view=author&uuid=8b49d666-d963-4459-85f6-16f220bb4404
[Dark chocolate tile pieces covered in chocolate powder](src/dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg)

2) Front view of delicious chocolate cake by freepik: 
https://www.freepik.com/free-photo/front-view-delicious-chocolate-cake_8327605.htm#fromView=search&page=1&position=43&uuid=075de02d-f713-4826-b60e-974995a1dc78
[Front view of delicious chocolate cake](src/lava-cake.jpeg)

3) Spanish Flan Dessert by Teresa Jang: 
https://www.pexels.com/photo/spanish-flan-dessert-18089587/
[Spanish Flan Dessert](src/flan-pexels-teresa-jang.jpeg)

4) Tiramissu dessert with mint by senivpetro:
https://www.freepik.com/free-photo/tiramissu-dessert-with-mint_2553336.htm#fromView=search&page=1&position=1&uuid=a4e8481a-b6af-4a13-9e13-d100f08c76a1
[Tiramissu dessert with mint](src/tiramisu.jpeg)

5) Breakfast snack crepe white homemade by mrsiraphol:
https://www.freepik.com/free-photo/breakfast-snack-crepe-white-homemade_1037955.htm#fromView=search&page=1&position=44&uuid=4fe1100e-e3fa-4a93-b2a0-eb9f5c045f0e
[Breakfast snack crepe white homemade](src/crêpes-with-ice-cream.jpeg)

6) Japanese colorful mochi isolated on white background by chandlervid85:
https://www.freepik.com/free-photo/japanese-colorful-mochi-isolated-white-background_47001764.htm#fromView=search&page=1&position=17&uuid=90dd6eae-1d5e-45f2-b136-b27e71bc1595
[Japanese colorful mochi isolated on white background](src/japanese-mochi.jpeg)

7) white ice cream in clear glass cup by Kike Salazar N:
https://unsplash.com/photos/white-ice-cream-in-clear-glass-cup-BtdMFRwbqbA
[white ice cream in clear glass cup](src/piña-colada.jpeg)

8) chocolate cake with strawberry on white ceramic plate by Jacob Thomas:
https://unsplash.com/photos/chocolate-cake-with-strawberry-on-white-ceramic-plate-6jHpcBPw7i8
[chocolate cake with strawberry on white ceramic plate](src/black-forest-gâteau-jacob-thomas-unsplash.jpeg)

9) a bowl of pudding with a raspberry on top by Orkun Orcan:
https://unsplash.com/photos/a-bowl-of-pudding-with-a-raspberry-on-top-xQFLBRdch_k
[a bowl of pudding with a raspberry on top](src/crème-brûlée-orkun-orcan-unsplash.jpeg)

10) white dough on black textile by Tamara Gak:
https://unsplash.com/photos/white-dough-on-black-textile-SQLOsc0HGDI
[white dough on black textile](src/white-dough-tamara-gak-unsplash.jpeg)

11) Portrait of smiling chef in uniform by gpointstudio:
https://www.freepik.com/free-photo/portrait-smiling-chef-uniform_10676564.htm#fromView=search&page=1&position=2&uuid=6cd16da8-68d8-438d-992a-15abe131654f
[Portrait of smiling chef in uniform](src/ceo-profile-pic.jpeg)

12) a group of trophies by Jelly Dollar:
https://unsplash.com/photos/a-group-of-trophies-u715bKFZBvA
[a group of trophies](src/trophy-collection-jelly-dollar-unsplash.jpeg)