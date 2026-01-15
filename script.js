<script>
const video = document.querySelector('.hover-video');

video.addEventListener('mouseover', () => {
    video.play();
});

video.addEventListener('mouseout', () => {
    video.pause();
});
</script>

<script>
  function goToPage(page) {
    window.location.href = page;
  }
</script>
const video = document.getElementById("heroVideo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.5
  }
);

observer.observe(video);
<script>
const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroVideo.play().catch(() => {});
      } else {
        heroVideo.pause();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(heroVideo);
}
</script>
