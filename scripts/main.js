import { userInfoData } from '../data/user-info.js';
import { userImagesData } from '../data/user-images.js';

//get buttons
const prevButton = document.querySelector('js-button-previous');
const nextButton = document.querySelector('.js-next-button');

//elements image specific
const description = document.querySelector('.js-description');
const img = document.querySelector('.js-middle-img');
const rightSidebar = document.querySelector('.js-right-sidebar');

//elements user specific
const socialMediaContacts = document.querySelector('.js-social-media-div');
const personalContacts = document.querySelector('.js-contact-information');

//if we want to make it multi user we have to change this by whose uid are we looking at
//if it becomes multi user we should add that persons username on the page
const userId = '00000001';

//get user + image specific data
const userInfo = userInfoData[userId];
const userImages = userImagesData[userId];

//load user specific data
let socialMediaHTML = '';
if (userInfo.socialMedia.facebook) {
  socialMediaHTML += `
  <a href="${userInfo.socialMedia.facebook}">
    <img
      class="social-media-link"
      src="icons/facebook-icon-1.png"
      alt="facebook-link"
      target="_blank"
    />
  </a>
`;
}
if (userInfo.socialMedia.instagram) {
  socialMediaHTML += `
  <a href="${userInfo.socialMedia.instagram}">
    <img
      class="social-media-link"
      src="icons/instagram-icon-1.png"
      alt="instagram-link"
      target="_blank"
    />
  </a>
`;
}
if (userInfo.socialMedia.x) {
  socialMediaHTML += `
  <a href="${userInfo.socialMedia.x}">
    <img
      class="social-media-link"
      src="icons/x-icon-3.png"
      alt="x-link"
      target="_blank"
    />
  </a>
`;
}
socialMediaContacts.innerHTML = socialMediaHTML;

let personalContactsHTML = '';
if (userInfo.email) {
  personalContactsHTML += `
    <p>Email:</p>
    <a href="mailto:${userInfo.email}" class="contact-email" target="_blank">${userInfo.email}</a>
  `;
}
if (userInfo.telNumber) {
  personalContactsHTML += `
    <p>Tel number:</p>
    <a class="contact-tel" href="tel:${userInfo.telNumber}" target="_blank">${userInfo.telNumber}</a>
  `;
}
personalContacts.innerHTML = personalContactsHTML;

//* mby move this to local storage later
let imageIndex = 0;
const imageCount = userImages.imgPath.length;

function generateImgHtml() {
  //right sidebar link creation
  let rightSidebarHTML = '';
  if (userImages.workProcedure[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.workProcedure}" >Postup&nbsppráce</a>
    `;
  }
  if (userImages.materials[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.materials}" >Materiály</a>
    `;
  }
  if (userImages.inspirations[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.inspirations}" >Inšpirácie</a>
    `;
  }

  //load image specific data
  description.innerText = userImages.imgDescription[imageIndex];
  img.src = userImages.imgPath[imageIndex];
  rightSidebar.innerHTML = rightSidebarHTML;
}
generateImgHtml();

//TODO make it so when we reach the last image it will overflow
