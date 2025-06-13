(function () {
  const loadMoreBtn = document.querySelector('.services-load-more');
  const servicesSection = document.querySelector('.services-section .row');

  if (!loadMoreBtn || !servicesSection || typeof masonryReferenceSource === 'undefined') return;

  loadMoreBtn.addEventListener('click', async () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loadMoreBtn.prepend(loader);

    const url = new URL(window.location.origin + masonryReferenceSource);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        console.warn('Nepodařilo se načíst další služby.');
        loader.remove();
        return;
      }

      const data = await response.json();

      if (data.html) {
        const range = document.createRange();
        const documentFragment = range.createContextualFragment(data.html);
        const elements = Array.from(documentFragment.children);

        servicesSection.append(...elements);
      }

      loadMoreBtn.style.display = 'none';
    } catch (error) {
      console.error('Chyba při načítání služeb:', error);
    } finally {
      loader.remove();
    }
  });
})();
