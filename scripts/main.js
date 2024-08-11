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
const userInfo = userInfoData;
const userImages = userImagesData;

//* mby move this to local storage later
let imageIndex = 0;
const imageCount = imgPath.length;

function generateImgHtml() {
  //right sidebar link creation
  let rightSidebarHTML = '';
  if (userImages.workProcedure[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.workProcedure}">Postup&nbspprace</a>
    `;
  }
  if (userImages.materials[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.materials}">Materialy</a>
    `;
  }
  if (userImages.inspirations[imageIndex]) {
    rightSidebarHTML += `
    <a class="right-sidebar-link" href="${userImages.inspirations}">Inspiracie</a>
    `;
  }

  //load image specific data
  description.innerText = userImages.imgDescription[imageIndex];
  img.src = userImages.imgPath[imageIndex];
  rightSidebar.innerHTML = rightSidebarHTML;
}
generateImgHtml();

//load user specific data
//TODO later

let socialMediaHTML = '';
if (userInfo.socialMedia.facebook) {
  socialMediaHTML += `
  <a href="${userInfo.socialMedia.facebook}">
    <img
      class="social-media-link"
      src="icons/facebook-icon-1.png"
      alt="facebook-link"
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
    />
  </a>
`;
}
socialMediaContacts.innerHTML = socialMediaHTML;

let personalContactsHTML = '';
if (userInfo.email) {
  personalContactsHTML += `
    <p>Email:</p>
    <a href="mailto:${userInfo.email}" class="contact-email">${userInfo.email}</a>
  `;
}
if (userInfo.telNumber) {
  personalContactsHTML += `
    <p>Tel number:</p>
    <a class="contact-tel" href="tel:${userInfo.telNumber}">${userInfo.telNumber}</a>
  `;
}
personalContacts.innerHTML = personalContactsHTML;

//TODO make it so when we reach the last image it will overflow
