import {activeHomeTab, activeMenuTab, activeAboutTab, activeTabStyle} from './change-tab-styles.js';
import appendHomeInfo from './home-tab-info.js';

const tabBtn = document.getElementsByTagName('button');

(function changeTab() {
   const circleHome = activeTabStyle.home.circle;
   const btnHome = activeTabStyle.home.button;
   const circleMenu = activeTabStyle.menu.circle;
   const btnMenu = activeTabStyle.menu.button;
   const circleAbout = activeTabStyle.about.circle;
   const btnAbout = activeTabStyle.about.button;

   [...tabBtn].map(btn => btn.addEventListener('click', function(e) {
      const selectedHome = tabBtn[0].classList.contains('selected-home');
      const selectedMenu = tabBtn[1].classList.contains('selected-menu');
      const selectedAbout = tabBtn[2].classList.contains('selected-about');
      let id = e.target.id;
      let defaultTab = 1

      if (id == 'home' && !selectedHome && (selectedMenu || selectedAbout || defaultTab == 1)) {
         activeHomeTab(circleHome, btnHome, defaultTab);
         removePreviousTab();
         appendHomeInfo();

      } else if (id == 'menu' && !selectedMenu && (selectedHome || selectedAbout)) {
         activeMenuTab(circleMenu, btnMenu);
         removePreviousTab();

      } else if (id == 'about' && !selectedAbout && (selectedHome || selectedMenu)) {
         activeAboutTab(circleAbout, btnAbout);
         removePreviousTab();
      }
   }));
})();

(function defaultTab() {tabBtn[0].click()})();

function removePreviousTab() {
   const content = document.getElementById('content');

   while (content.lastChild !== null) {
      content.removeChild(content.lastChild);
   }
}