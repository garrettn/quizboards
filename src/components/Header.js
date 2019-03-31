import React from 'react'
import { createPortal } from 'react-dom'

export default function Header() {
  return createPortal(<h1>Header</h1>, document.querySelector('body > header'))
}
