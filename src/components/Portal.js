import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export default function Portal({ children, selector }) {
  const el = document.querySelector(selector)
  return createPortal(children, el)
}

Portal.propTypes = {
  children: PropTypes.node,
  selector: PropTypes.string.isRequired
}
