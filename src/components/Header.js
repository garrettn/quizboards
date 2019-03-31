import React from 'react'
import Portal from './Portal'

export default function Header() {
  return (
    <Portal selector="body > header" className="bg-black text-white">
      <h1>Quizboards!</h1>
    </Portal>
  )
}
