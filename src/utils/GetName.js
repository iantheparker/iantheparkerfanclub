import React from 'react'
import Cookie from 'js-cookie'

function capitalizeFirstLetter (x) {
  return x.charAt(0).toUpperCase() + x.slice(1)
}
function getName () {
  // TODO ADD COOKIE SUPPORTS
  const entry = window.location.search.replace(/[^\w\s]/gi, ' ').trim()
  let name = Cookie.get('greetings') || ''
  if (entry !== '') {
    name = entry
      .split(/\s+/)
      .map(capitalizeFirstLetter)
      .join(' ')
    Cookie.set('greetings', name)
  }
  return name
}

class GetName extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: 'World' }
  }
  updateName () {
    const name = getName()
    if (name !== '') {
      this.setState({
        name,
      })
    }
  }

  componentDidMount () {
    this.updateName()
  }

  render () {
    return <span>{this.state.name}</span>
  }
}

export default GetName
