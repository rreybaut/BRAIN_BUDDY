export const socialButtons = () => {
  const shareBtn = document.querySelector('.share-btn');

  if (shareBtn) {
    const shareOptions = document.querySelector('.share-options');

    shareBtn.addEventListener('click', () => {
        shareOptions.classList.toggle('active');
    })
  }
}
