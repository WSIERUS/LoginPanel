const contactInformation = {
  email : 'pomoc@program.pl',
  avaibleDays : {
    startDay : 'pon',
    endDay : 'pt'
  },
  avaibleHours : {
    startHour : '8:30',
    endHour : '16:30'
  }
}

const otherInformations = [
  {name:"Polityka prywatności", href:'https://www.google.pl'}, 
  {name:"Polityka cookie", href:'https://github.com/WSIERUS'}
]

//////////////////////////////////////////////

const email = document.querySelector('.contact-email')

email.textContent = contactInformation.email

const avaibleTime = document.querySelector('.contact-days')

const {avaibleDays, avaibleHours} = contactInformation

avaibleTime.textContent = `dostępna ${avaibleDays.startDay}. - ${avaibleDays.endDay}. 
  ${avaibleHours.startHour} - ${avaibleHours.endHour}`


///////////////////////////////////////////////

const sectionOtherInformation = document.querySelector('.other-section')

otherInformations.map(inf => {

  const createdInformation = document.createElement('a')
  createdInformation.textContent = inf.name
  createdInformation.setAttribute('href', inf.href)
  createdInformation.className = 'other-information'

  sectionOtherInformation.appendChild(createdInformation)
})