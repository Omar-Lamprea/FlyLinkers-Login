import i18next from 'i18next';
import en from '../locales/en.js'
import es from '../locales/es.js'


async function initTranslate(){

  //console.log(navigator.language)

  let lang;


  (navigator.language.includes('es') ? lang="es": lang = "en")

  console.log(lang, lang.includes('es'))

  await i18next.init({
    lng: lang,
    debug: true,
    resources: {
      en, es
    }
  });
  
  const datas = document.querySelectorAll('[data-translate]')

  datas.forEach(item => {
    if(item.hasAttribute('placeholder')){
      item.setAttribute('placeholder', `${i18next.t(item.dataset.translate)}`)
    }
    item.innerHTML = i18next.t(item.dataset.translate)
  })
}

initTranslate()
