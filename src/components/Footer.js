import React from 'react'
import { createPortal } from 'react-dom'

export default function Footer() {
  return createPortal(<p>Footer</p>, document.querySelector('body > footer'))
}
