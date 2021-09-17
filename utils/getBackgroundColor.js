function getBackgroundColor(types) {
  const mainType = types[0].type
  switch (mainType.name) {
    case 'grass':
      return '#5BD0B1'
    case 'water':
      return '#76BCFD'
    case 'electric':
      return '#FED86F'
    case 'fire':
      return '#F06A6B'
    case 'psychic':
      return '#B1736C'
    case 'bug':
      return '#DBE774'
    case 'normal':
      return '#CCCCCC'
    default:
      return '#7C538C'
  }
}

export default getBackgroundColor
