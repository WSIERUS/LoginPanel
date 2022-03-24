const ImageSectionItems = [
  {svg:'./icons/ico2.svg', boldName:'Realizuj swoje cele', otherName:'i zgarniaj korzyści'},
  {svg:'./icons/ico1.svg', boldName:'Śledź swoje wydatki', otherName:''},
]

const renderSide = document.querySelector('.main-sections-on-image')

ImageSectionItems.map(item => {

  const section = document.createElement('span')
  section.className = 'main-section-element'

  const elementSVG = document.createElement('svg')

  elementSVG.setAttribute('src', item.svg)

  const element = document.createElement('span')

  const elementName = document.createElement('span')
  const elementBoldName = document.createElement('span')

  element.className = 'main-section-element-name'
  elementBoldName.className = 'main-section-element-bold-name'
  elementName.className = 'main-section-element-other-name'

  elementName.textContent = item.otherName
  elementBoldName.textContent = item.boldName

  element.appendChild(elementBoldName)
  elementName.textContent !== '' ? element.appendChild(elementName) : null

  section.appendChild(elementSVG)
  section.appendChild(element)

  renderSide.appendChild(section)

}) // Dodać SVG do renderowania