const animationOpen = () => {
  const button = document.getElementById('divContent__buttonId-whats');
  const buttonClose = document.querySelector('.crossExit__modifyStyle');
  const bodyContainer = document.querySelector(".bodyContainer__whatsButton");
  const containerContent = document.querySelector(
    '.whatsButton__divInformation'
  );

  button.addEventListener('click', () => {
    if (!containerContent.classList.contains('deployContainer__information')) {
      containerContent.classList.remove('closeContainer__information');
      containerContent.classList.add('deployContainer__information');
      containerContent.style.display = 'flex';
      bodyContainer.style.maxWidth = '300px';
        bodyContainer.style.minWidth = '300px';
    }
  });

  buttonClose.addEventListener('click', () => {
    if (containerContent.classList.contains('deployContainer__information')) {
      containerContent.classList.remove('deployContainer__information');
      containerContent.classList.add('closeContainer__information');

      containerContent.addEventListener('animationend', () => {
        bodyContainer.style.maxWidth = '200px';
        bodyContainer.style.minWidth = '200px';
        containerContent.style.display = 'none';
      }, {once: true});
    }
  });
};

animationOpen();
