// document.addEventListener('DOMContentLoaded', () => {
  // Slider pause/play on click
  let isPaused = false;

  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.slider');

  if (sliderContainer && slider) {
    sliderContainer.addEventListener('click', () => {
      isPaused = !isPaused;
      slider.style.animationPlayState = isPaused ? 'paused' : 'running';
    });
  }

  // Loader logic
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    const mainContent = document.querySelector('.main-content');

    if (loader && mainContent) {
      loader.style.display = 'none';
      mainContent.style.display = 'block';
    }
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const runCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText.replace('+', '');

        const increment = Math.ceil(target / speed);

        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = `+${count}`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = `+${target}`;
        }
      };
      updateCount();
    });
  };

  if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          observer.disconnect();
        }
      });
    });

    observer.observe(counters[0]);
  }
// });
