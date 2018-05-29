window.addEventListener('resize', function() {
  const imgs = document.querySelectorAll('.image');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.toggle('image');
  }
  setTimeout(function() {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.toggle('image');
    }
  }, .001);
});