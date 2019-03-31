import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import useClassName from '../hooks/use-class-name'

export default function Portal({ children, className, selector }) {
  useClassName(selector, className)
  return createPortal(children, document.querySelector(selector))
}

Portal.propTypes = {
  children: PropTypes.node,
  selector: PropTypes.string.isRequired
}
