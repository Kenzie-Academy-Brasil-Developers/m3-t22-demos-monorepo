function eventExample1() {
  // const button1 = document.getElementById('button-1');
  const button1 = document.querySelector("#button-1");

  button1.addEventListener("click", (event) => {
    console.log("evento do botão `#button-1` acionado!");
    event.stopPropagation();
  });

  const button2 = document.querySelector("#button-2");

  button2.addEventListener("click", (event) => {
    console.log("evento do botão `#button-2` acionado!");
    // console.log(event);
    // console.log(event.target);
  });

  const sectionExample = document.querySelector(".section-example");

  sectionExample.addEventListener("click", (event) => {
    console.log("evento da section `.section-example` acionado!");
  });

  const btnContainer = document.querySelector(".btn__container");

  btnContainer.addEventListener("click", (event) => {
    console.log("evento da div `.btn__container` acionado!");
  });

  const paragraph1 = document.querySelector("#paragraph-1");

  paragraph1.addEventListener("click", (event) => {
    console.log("evento da p `#paragraph-1` acionado!");
  });
}

eventExample1();

function eventExample2() {
  const buttonHide = document.querySelector("#button-hide");
  const buttonShow = document.querySelector("#button-show");
  const paragraph2 = document.querySelector("#paragraph-2");

  buttonHide.addEventListener("click", (event) => {
    console.log("evento do botão `#button-hide` acionado!");

    // 1.
    // paragraph2.style.opacity = "0";
    // 2.
    paragraph2.classList.add("hidden");
  });

  buttonShow.addEventListener("click", (event) => {
    console.log("evento do botão `#button-show` acionado!");
    // 1.
    // paragraph2.style.opacity = "1";
    // 2.
    paragraph2.classList.remove("hidden");
  });
}

eventExample2();

function eventExample3() {
  const liTechItems = document.querySelectorAll(".tech__item");

  liTechItems.forEach((currentTechItem) => {
    currentTechItem.addEventListener("click", (event) => {
      console.log("evento do li `.tech__item` acionado!");
      console.log(currentTechItem);
      const inputCheckbox = currentTechItem.querySelector("input");
      console.dir(inputCheckbox);

      inputCheckbox.checked = !inputCheckbox.checked;
    });
  });

  const spansTechDescriptions = document.querySelectorAll(".tech__description");

  spansTechDescriptions.forEach((currentTechSpan) => {
    currentTechSpan.addEventListener("click", (event) => {
      console.log("evento do span `.tech__description` acionado!");
      console.log(currentTechSpan);
      event.stopPropagation();
    });
  });
}

eventExample3();

function eventExample4() {
  const formContainer = document.querySelector(".form__container");
  const btnCancel = document.querySelector(".cancel__button");
  const btnSubmit = document.querySelector(".submit__button");

  const inputFirstName = document.querySelector('input[name="first-name"]');
  const inputLastName = document.querySelector('input[name="last-name"]');

  formContainer.addEventListener("click", (event) => {
    console.log("evento do form `.form__container` acionado!");
    event.preventDefault();

    console.log(inputFirstName.value);
    console.log(inputLastName.value);
  });
}

eventExample4();
