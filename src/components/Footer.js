import React from 'react'
import Portal from './Portal'

export default function Footer() {
  return (
    <Portal selector="body > footer">
      <p>Footer</p>
    </Portal>
  )
}
