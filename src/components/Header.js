import React from 'react'
import Portal from './Portal'

export default function Header() {
  return (
    <Portal selector="body > header">
      <h1>Header</h1>
    </Portal>
  )
}
