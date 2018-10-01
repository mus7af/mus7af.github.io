function resizeImages() {
  const imgs = document.querySelector('#images');
  const wide = window.innerWidth / window.innerHeight > 2 * 750 / 1072
  // Remove the appropriate classes...
  if (wide) {
    imgs.classList.remove('horizontal');
    imgs.classList.add('vertical');
  } else {
    imgs.classList.add('horizontal');
    imgs.classList.remove('vertical')
  }
  // ...then add them back after a while to reset
  setTimeout(function() {
    if (!wide) {
      imgs.classList.remove('horizontal');
      imgs.classList.add('vertical');
    } else {
      imgs.classList.add('horizontal');
      imgs.classList.remove('vertical')
    }
  }, .001);
}
resizeImages();
window.addEventListener('resize', resizeImages);