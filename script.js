// Nâng cấp nhỏ cho trải nghiệm đọc: đánh dấu mục đang xem trong thanh điều hướng trên màn hình lớn.
(() => {
  const links = Array.from(document.querySelectorAll('.nav-item[href^="#"]'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  sections.forEach(section => observer.observe(section));
})();
