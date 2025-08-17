setInterval(() => {
  const svg = Array.from(
    document.querySelectorAll('.contentButton__svg > svg')
  );

  svg.forEach((svgElement) => {
    svgElement.classList.add('animation');
    setTimeout(() => {
      svgElement.classList.remove('animation');
    }, 300);
  });
}, 3000);
