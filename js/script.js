var bannerBtn = document.querySelector('.banner-button');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.popup-close');

bannerBtn.addEventListener('click',function() {
    popup.classList.add('popup-open')
})

closePopup.addEventListener('click',function() {
    popup.classList.remove('popup-open')
})