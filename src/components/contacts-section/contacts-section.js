const select = document.getElementById('country-select');
const flagImg = document.getElementById('flag-img');

if (select && flagImg) {
  select.addEventListener('change', () => {
    const selectedOption = select.options[select.selectedIndex];
    const countryCode = selectedOption.getAttribute('data-flag');
    if (countryCode) {
      flagImg.src = `https://flagcdn.com/w40/${countryCode}.png`;
      flagImg.alt = `${countryCode.toUpperCase()} flag`;
    }
  });
}
