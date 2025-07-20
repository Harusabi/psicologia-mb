const animationBurger_icon = () => {
  const button = document.getElementById('navDiv__button-id');
  const iconOne = document.getElementById('iconButton__one-id');
  const iconSecond = document.getElementById('iconButton__second-id');
  const iconThree = document.getElementById('iconButton__three-id');

  button.addEventListener('click', () => {
    const isActive = button.classList.toggle('activo');

    if (isActive) {
      button.style.opacity = '1';
      iconOne.classList.add('first__iconButton-animationActive');
      iconOne.classList.remove('first__iconButton-animationDesactive');

      iconSecond.classList.add('second__iconButton-animationActive');
      iconSecond.classList.remove('second__iconButton-animationDesactive');

      iconThree.classList.add('three__iconButton-animationActive');
      iconThree.classList.remove('three__iconButton-animationDesactive');
    } else {
      button.style.opacity = '.5';
      iconOne.classList.remove('first__iconButton-animationActive');
      iconOne.classList.add('first__iconButton-animationDesactive');

      iconSecond.classList.remove('second__iconButton-animationActive');
      iconSecond.classList.add('second__iconButton-animationDesactive');

      iconThree.classList.remove('three__iconButton-animationActive');
      iconThree.classList.add('three__iconButton-animationDesactive');
    }
  });
};

const menu = () => {
  document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', function (e) {
      if (this.classList.contains('keep-open')) {
        e.stopPropagation();
        return;
      }

      const dropdown = this.closest('.dropdown');
      const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
      const instance = bootstrap.Dropdown.getInstance(toggle);
      instance.hide();
    });
  });
};

const submenu = () => {
  document.querySelectorAll('.submenu__li').forEach((item) => {
    item.addEventListener('click', function (e) {
      const dropdown = this.closest('.dropdown');
      const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
      const instance = bootstrap.Dropdown.getInstance(toggle);
      instance.hide();
    });
  });
};

animationBurger_icon();

menu();

<<<<<<< HEAD
submenu();
=======
submenu();
>>>>>>> upstream/contact
