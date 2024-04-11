import './style.css';

const tabBtn = document.getElementsByTagName('button');

const activeTabStyle = {
   home: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)',
            zIndex: 1
         }
      },
      circle: {
         left: {
            borderColor: 'transparent #2a1717 transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)',
      }
   },
   menu: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)'
         }
      },
      circle: {
         left: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent transparent var(--tab-color) transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)'
      }
   },
   about: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)'
         }
      },
      circle: {
         left: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent transparent #160b0b transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)'
      }
   }
};

let activeHomeTab = (circleHome, btnHome, defaultTab) => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const mLeftCircle = document.querySelector('.menu-left-circle');

   const hLeftCircleStyles = getComputedStyle(hLeftCircle);
   let hLeft = hLeftCircleStyles.getPropertyValue('left');

   const hRightCircleStyles = getComputedStyle(hRightCircle);
   let hRight = hRightCircleStyles.getPropertyValue('right');

   const mLeftCircleStyles = getComputedStyle(mLeftCircle);
   let mLeft = mLeftCircleStyles.getPropertyValue('left');

   hLeftCircle.style.cssText = `border-color: ${circleHome.left.borderColor};
                                 z-index: ${circleHome.left.zIndex};
                                 left: ${hLeft}`;
   hRightCircle.style.cssText = `border-color: ${circleHome.right.borderColor};
                                 z-index: ${circleHome.right.zIndex};
                                 right: ${hRight}`;

   mLeftCircle.style.cssText = `border-color: transparent;
                                 left: ${mLeft}`;

   if (tabBtn[1].classList.contains('selected-menu')) {
      const aLeftCircle = document.querySelector('.about-left-circle');
      const aLeftCircleStyles = getComputedStyle(aLeftCircle);
      let aLeft = aLeftCircleStyles.getPropertyValue('left');

      aLeftCircle.style.cssText = `border-color: transparent; left: ${aLeft}`;
   }

   if (tabBtn[2].classList.contains('selected-about')) {
      const mRightCircle = document.querySelector('.menu-right-circle');
      const mRightCircleStyles = getComputedStyle(mRightCircle);
      let mRight = mRightCircleStyles.getPropertyValue('right');

      mRightCircle.style.cssText = `background-color: transparent; right: ${mRight}`;
   }

   tabBtn[0].style['background-color'] = btnHome.backgroundColor;
   tabBtn[0].classList.add('selected-home');

   tabBtn[1].removeAttribute('style');
   tabBtn[1].classList.remove('selected-menu');

   tabBtn[2].removeAttribute('style');
   tabBtn[2].classList.remove('selected-about');

   defaultTab = 2;
};

let activeMenuTab = (circleMenu, btnMenu) => {
   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');
   const hRightCircle = document.querySelector('.home-right-circle');

   const mLeftCircleStyles = getComputedStyle(mLeftCircle);
   let mLeft = mLeftCircleStyles.getPropertyValue('left');

   const mRightCircleStyles = getComputedStyle(mRightCircle);
   let mRight = mRightCircleStyles.getPropertyValue('right');

   const hRightCircleStyles = getComputedStyle(hRightCircle);
   let hRight = hRightCircleStyles.getPropertyValue('right');

   mLeftCircle.style.cssText = `border-color: ${circleMenu.left.borderColor};
                                 z-index: ${circleMenu.left.zIndex};
                                 left: ${mLeft}`;
   mRightCircle.style.cssText = `border-color: ${circleMenu.right.borderColor};
                                 z-index: ${circleMenu.right.zIndex};
                                 right: ${mRight}`;

   hRightCircle.style.cssText = `border-color: ${activeTabStyle.home.circle.right.borderColor};
                                 right: ${hRight}`;

   if (tabBtn[2].classList.contains('selected-about')) {
      const aLeftCircle = document.querySelector('.about-left-circle');
      const aLeftCircleStyles = getComputedStyle(aLeftCircle);
      let aLeft = aLeftCircleStyles.getPropertyValue('left');

      aLeftCircle.style.cssText = `border-color: transparent transparent var(--content-background-color);
                                    z-index: ${activeTabStyle.about.circle.left.zIndex};
                                    left: ${aLeft}`;
   }

   tabBtn[1].style['background-color'] = btnMenu.backgroundColor;
   tabBtn[1].classList.add('selected-menu');

   tabBtn[0].removeAttribute('style');
   tabBtn[0].classList.remove('selected-home');

   tabBtn[2].removeAttribute('style');
   tabBtn[2].classList.remove('selected-about');
};

let activeAboutTab = (circleAbout, btnAbout) => {
   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   const aLeftCircleStyles = getComputedStyle(aLeftCircle);
   let aLeft = aLeftCircleStyles.getPropertyValue('left');

   const aRightCircleStyles = getComputedStyle(aRightCircle);
   let aRight = aRightCircleStyles.getPropertyValue('right');

   const mRightCircleStyles = getComputedStyle(mRightCircle);
   let mRight = mRightCircleStyles.getPropertyValue('right');

   aLeftCircle.style.cssText = `border-color: ${circleAbout.left.borderColor};
                                 z-index: ${circleAbout.left.zIndex};
                                 left: ${aLeft}`;
   aRightCircle.style.cssText = `border-color: ${circleAbout.right.borderColor};
                                 z-index: ${circleAbout.right.zIndex};
                                 right: ${aRight}`;

   mRightCircle.style.cssText = `border-color: transparent; right: ${mRight}`;
                     
   tabBtn[2].style.cssText = `background-color: ${btnAbout.backgroundColor}`
   tabBtn[2].classList.add('selected-about');

   tabBtn[0].removeAttribute('style');
   tabBtn[0].classList.remove('selected-home');

   tabBtn[1].removeAttribute('style');
   tabBtn[1].classList.remove('selected-menu');
};

(function hoverTab() {
   [...tabBtn].map(btn => btn.addEventListener('mouseenter', function(e) {
      let id = e.target.id;
      const circleHome = activeTabStyle.home.circle;
      const circleMenu = activeTabStyle.menu.circle;
      const circleAbout = activeTabStyle.about.circle;

      if (id == 'menu') {
         const rightCircle = document.querySelector('.home-right-circle');
         const leftCircle = document.querySelector('.about-left-circle');

         const hRightCircleStyles = getComputedStyle(rightCircle);
         let hRight = hRightCircleStyles.getPropertyValue('right');

         const aLeftCircleStyles = getComputedStyle(leftCircle);
         let aLeft = aLeftCircleStyles.getPropertyValue('left');


         rightCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                      z-index: ${circleHome.right.zIndex};
                                      right: ${hRight}`;
         leftCircle.style.cssText = `transparent transparent #89ddf8 transparent;
                                     left: ${aLeft}`;

         if (tabBtn[1].classList.contains('selected-menu')) {
            rightCircle.style.cssText = `border-color: transparent;
                                         z-index: ${circleHome.right.zIndex};
                                         right: ${hRight}`;
         }

         if (tabBtn[2].classList.contains('selected-about')) {
            leftCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                        z-index: ${circleAbout.left.zIndex};
                                        left: ${aLeft}`;
         }

      } else if (id == 'home') {
         const leftCircle = document.querySelector('.menu-left-circle');
         const mLeftCircleStyles = getComputedStyle(leftCircle);
         let mLeft = mLeftCircleStyles.getPropertyValue('left');
         
         leftCircle.style.cssText = `border-color: transparent; left: ${mLeft}`;

         if (!tabBtn[0].classList.contains('selected-home')) {
            leftCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                        z-index: ${circleMenu.left.zIndex};
                                        left: ${mLeft}`;
         }

         if (tabBtn[1].classList.contains('selected-menu')) {
            const mRightCircle = document.querySelector('.menu-right-circle');
            const mRightCircleStyles = getComputedStyle(mRightCircle);
            let mRight = mRightCircleStyles.getPropertyValue('right');

            mRightCircle.style.cssText = `border-color: transparent transparent var(--tab-color) transparent;
                                          z-index: ${circleMenu.right.zIndex};
                                          right: ${mRight}`;
         }

      } else if (id == 'about') {
         const rightCircle = document.querySelector('.menu-right-circle');
         const mRightCircleStyles = getComputedStyle(rightCircle);
         let mRight = mRightCircleStyles.getPropertyValue('right');

         rightCircle.style.cssText = `border-color: transparent transparent #89ddf8 transparent;
                                      z-index: ${circleMenu.right.zIndex};
                                      right: ${mRight}`;

         if (tabBtn[2].classList.contains('selected-about')) {
            rightCircle.style.cssText = `border-color: transparent transparent var(--content-background-color) transparent;
                                         z-index: ${circleMenu.right.zIndex};
                                         right: ${mRight}`;
         }
      }
   }));

   [...tabBtn].map(btn => btn.addEventListener('mouseleave', function(e) {
      let id = e.target.id;
      const circleHome = activeTabStyle.home.circle;
      const circleMenu = activeTabStyle.menu.circle;
      const circleAbout = activeTabStyle.about.circle;

      if (id == 'menu' && !tabBtn[1].classList.contains('selected-menu')) {
         const rightCircle = document.querySelector('.home-right-circle');
         const leftCircle = document.querySelector('.about-left-circle');

         const hRightCircleStyles = getComputedStyle(rightCircle);
         let hRight = hRightCircleStyles.getPropertyValue('right');

         const aLeftCircleStyles = getComputedStyle(leftCircle);
         let aLeft = aLeftCircleStyles.getPropertyValue('left');

         rightCircle.style.cssText = `border-color: ${circleHome.right.borderColor};
                                      z-index: ${circleHome.right.zIndex};
                                      right: ${hRight}`;
         leftCircle.style.cssText = `border-color: transparent;
                                     z-index: ${circleAbout.left.zIndex};
                                     left: ${aLeft}`;

         if (tabBtn[2].classList.contains('selected-about')) {
            leftCircle.style.cssText = `border-color: ${circleAbout.left.borderColor};
                                        z-index: ${circleAbout.left.zIndex};
                                        left: ${aLeft}`;
         }

      } else if (id == 'home' && !tabBtn[0].classList.contains('selected-home')) {
         const leftCircle = document.querySelector('.menu-left-circle');
         const mLeftCircleStyles = getComputedStyle(leftCircle);
         let mLeft = mLeftCircleStyles.getPropertyValue('left');

         leftCircle.style.cssText = `border-color: ${circleMenu.left.borderColor};
                                     z-index: ${circleMenu.left.zIndex};
                                     left: ${mLeft}`;

      } else if (id == 'about' && !tabBtn[2].classList.contains('selected-about')) {
         const rightCircle = document.querySelector('.menu-right-circle');
         const mRightCircleStyles = getComputedStyle(rightCircle);
         let mRight = mRightCircleStyles.getPropertyValue('right');

         rightCircle.style.cssText = `border-color: ${circleMenu.right.borderColor};
                                      z-index: ${circleMenu.right.zIndex};
                                      right: ${mRight}`;
      }
   }));
})();

let adjustCirclePosition = () => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const windowWidth = document.querySelector('html').clientWidth;

   let homeLeftPosition = tabBtn[0].getBoundingClientRect().left - 40;
   let homeRightPosition = windowWidth - tabBtn[0].getBoundingClientRect().right - 40;

   let hLeftCircleStyles = hLeftCircle.getAttribute('style');
   let hRightCircleStyles = hRightCircle.getAttribute('style');

   hLeftCircle.style.cssText = `${hLeftCircleStyles} left: ${homeLeftPosition}px`;
   hRightCircle.style.cssText = `${hRightCircleStyles} right: ${homeRightPosition}px`;

   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   let menuLeftPosition = tabBtn[1].getBoundingClientRect().left - 40;
   let menuRightPosition = tabBtn[1].getBoundingClientRect().left - 40;

   let mLeftCircleStyles = mLeftCircle.getAttribute('style');
   let mRightCircleStyles = mRightCircle.getAttribute('style');

   mLeftCircle.style.cssText = `${mLeftCircleStyles} left: ${menuLeftPosition}px;`;
   mRightCircle.style.cssText = `${mRightCircleStyles} right: ${menuRightPosition}px`;

   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');

   let aboutLeftPosition = tabBtn[2].getBoundingClientRect().left - 40;
   let aboutRightPosition = windowWidth - tabBtn[2].getBoundingClientRect().right - 40;

   let aLeftCircleStyles = aLeftCircle.getAttribute('style');
   let aRightCircleStyles = aRightCircle.getAttribute('style');

   aLeftCircle.style.cssText = `${aLeftCircleStyles} left: ${aboutLeftPosition}px`;
   aRightCircle.style.cssText = `${aRightCircleStyles} right: ${aboutRightPosition}px`;
};

let pageLoadCirclePosition = () => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const windowWidth = document.querySelector('html').clientWidth;

   let homeLeftPosition = tabBtn[0].getBoundingClientRect().left - 40;
   let homeRightPosition = windowWidth - tabBtn[0].getBoundingClientRect().right - 40;

   let hLeftCircleStyles = hLeftCircle.getAttribute('style');
   let hRightCircleStyles = hRightCircle.getAttribute('style');

   hLeftCircle.style.cssText = `${hLeftCircleStyles} left: ${homeLeftPosition}px`;
   hRightCircle.style.cssText = `${hRightCircleStyles} right: ${homeRightPosition}px`;

   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   let menuLeftPosition = tabBtn[1].getBoundingClientRect().left - 40;
   let menuRightPosition = tabBtn[1].getBoundingClientRect().left - 40;

   let mLeftCircleStyles = mLeftCircle.getAttribute('style');

   mLeftCircle.style.cssText = `${mLeftCircleStyles} left: ${menuLeftPosition}px`;
   mRightCircle.style.cssText = `right: ${menuRightPosition}px`;

   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');

   let aboutLeftPosition = tabBtn[2].getBoundingClientRect().left - 40;
   let aboutRightPosition = windowWidth - tabBtn[2].getBoundingClientRect().right - 40;

   aLeftCircle.style.cssText = `left: ${aboutLeftPosition}px`;
   aRightCircle.style.cssText = `right: ${aboutRightPosition}px`;
};

document.addEventListener('DOMContentLoaded', pageLoadCirclePosition);

window.addEventListener('resize', adjustCirclePosition);

export {activeHomeTab, activeMenuTab, activeAboutTab, activeTabStyle};