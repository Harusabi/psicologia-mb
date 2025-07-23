
const deployResponse = () => {
  const preguntas = document.querySelectorAll(
    '.li__questionsAndBurgures-eight'
  );
  const respuestas = document.querySelectorAll('.divResponse__paragraph-eight');
  let beforeResponse;

  preguntas.forEach((pregunta, index) => {
    const respuesta = respuestas[index];

    pregunta.addEventListener('click', () => {
      if (respuesta.classList.contains('deployInformation')) {
        respuesta.classList.remove('deployInformation');
        respuesta.classList.add('closeInformation');
      } else {
        if (beforeResponse && beforeResponse !== respuesta) {
          beforeResponse.classList.remove('deployInformation');
          beforeResponse.classList.add('closeInformation');
        }

        respuesta.classList.remove('closeInformation');
        respuesta.classList.add('deployInformation');
      }
      beforeResponse = respuesta;
    });
  });
};

const animationBurger_inicio = () => {
  let beforeChildren = [];
  document
    .querySelectorAll('.li__questionsAndBurgures-eight')
    .forEach((containerClicked) => {
      containerClicked.addEventListener('click', () => {
        const fatherContainer = containerClicked.children[1];

        if (!fatherContainer) return;

        const childrenContainer = fatherContainer.querySelectorAll('span');
        const animaciones = [
          [
            'first__iconButton-animationActive',
            'first__iconButton-animationDesactive',
          ],
          [
            'second__iconButton-animationActive',
            'second__iconButton-animationDesactive',
          ],
          [
            'three__iconButton-animationActive',
            'three__iconButton-animationDesactive',
          ],
        ];

        animaciones.forEach(([activeClass, desactiveClass], i) => {
          const previo = beforeChildren[i];
          const actual = childrenContainer[i];

          if (actual.classList.contains(activeClass)) {
            actual.classList.remove(activeClass);
            actual.classList.add(desactiveClass);
          } else {
            if (previo && previo !== actual) {
              previo.classList.remove(activeClass);
              previo.classList.add(desactiveClass);
            }

            actual.classList.remove(desactiveClass);
            actual.classList.add(activeClass);
          }
        });
        beforeChildren = childrenContainer;
      });
    });
};

animationBurger_inicio();

deployResponse();
