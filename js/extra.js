

const links = document.querySelectorAll('.header__nav-link');
links.forEach(item => {
  item.addEventListener('click', () => {
    const el = document.getElementById(item.getAttribute('data-header-link'));
    el.scrollIntoView({ behavior: "smooth", block: 'center' });
  })
})


const mainLinks = document.querySelectorAll('.main-link');
const titleSec = document.querySelectorAll('.tab-links');
const sec = document.querySelectorAll('.tab-pane');

for (let i = 0; i < mainLinks.length; i++) {
  mainLinks[i].addEventListener('click', function (e) {
    e.preventDefault();
    const el = document.getElementById(mainLinks[i].getAttribute('data-main-link'));
    el.scrollIntoView({ behavior: "smooth", block: 'center' });
    for (let k = 0; k < titleSec.length; k++) {
      titleSec[k].classList.remove('active');
      sec[k].classList.remove('active');
    }
    titleSec[i].classList.add('active');
    sec[i].classList.add('active');
    sec[i].classList.add('in');
  })

}




const CHAT_ID = '-1001677254027';
const URL_API = `https://api.telegram.org/bot5417121973:AAEdmO9UkZOY_IlmN2tr6p8DP9o2a9m5ed4/sendMessage`;
const tgMessage = document.getElementById('tg-message');

const inputsTel = document.querySelector('input[type="tel"]');
const im = new Inputmask('+999 (99) 999-99-99');
im.mask(inputsTel);

function validateForm(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      const name = document.getElementById('name');
      const tel = document.getElementById('phone');
      const email = document.getElementById('email');
      const interest = document.getElementById('interest');
      const comment = document.getElementById('comment');
      const success = document.getElementById('success');




      let message = `<b>Новая заявка</b>\n`;
      message += `<b>Имя:</b> ${name.value}\n`;
      message += `<b>Номер телефона:</b> ${tel.value}\n`;
      message += `<b>Email:</b> ${email.value}\n`;
      message += `<b>Интересует:</b> ${interest.value}\n`;
      message += `<b>Комментарии к проекту:</b> ${comment.value}\n`;

      console.log(message);

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
        .then((res) => {
          success.style.display = 'block',
          success.innerHTML = 'Заявка успешно отправлена'
          name.value = '';
          email.value = '';
          interest.value = '';
          comment.value = '';
          tel.value = '';
        })

    }
  })
}
validateForm('.contact__form', { name: { required: true }, phone: { required: true }, interest: { required: true } });
