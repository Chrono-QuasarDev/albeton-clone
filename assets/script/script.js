const videoContainer = document.getElementById('videoContainer');
const videoOverlay = document.getElementById('videoOverlay');
const videoContent = document.getElementById('videoContent');
const playButton = document.getElementById('playButton');


function playVideo() {
  videoOverlay.style.opacity = '0';

  setTimeout(() => {
    videoOverlay.style.display = 'none';

    videoContent.style.display = 'flex';
  }, 300);

  return false;
}

videoContainer.addEventListener('click', playVideo);

playButton.addEventListener('click', (event) => {
  event.stopPropagation();
  playVideo();
});