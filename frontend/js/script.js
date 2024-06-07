const contactForm = document.getElementById('contact_form');

function createObjectWithInputNameAndValues(acc, { name, value }) {
  return !name ? acc : { ...acc, [name]: value };
}

function getInformationsFromForm(elements) {
  if (elements instanceof HTMLFormControlsCollection)
    return [...elements].reduce(createObjectWithInputNameAndValues, {});

  if (!elements.length) throw new Error('Formulário vazio.');
  if (!Array.isArray(elements)) throw new Error('Formulário inválido.');

  return elements.reduce(createObjectWithInputNameAndValues, {});
}

async function sendInformationsForm(informations) {
  try {
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(informations),
    };

    return await fetch('http://localhost:8080/contact', options);
  } catch (error) {
    console.log(error);
    throw new Error('Ocorreu um erro ao fazer a requisição:', error.message);
  }
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  event.submitter.disabled = true;
  event.submitter.value = 'Enviando Mensagem...';
  event.submitter.style.cursor = 'wait';

  const message = getInformationsFromForm(event.target.elements);

  sendInformationsForm(message)
    .then((response) => {
      if (response.status === 200 && response.ok)
        event.submitter.value = 'Mensagem enviada ✨';
      return response.json();
    })
    .then((responseJson) => {
      alert(responseJson.message);
      event.submitter.style.cursor = 'default';
    });
});
