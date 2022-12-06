import PropTypes from 'prop-types'

export const Header = ({ title }) => {
  return (
    <div className="header">
        <h2>{title}</h2>
        <form>
          <input className='searchBar' placeholder='Search...'></input>
        </form>
    </div>
  )
}

Header.defaultProps = {
  title: "Home"
}