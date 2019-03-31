import React from 'react'
import Portal from './Portal'

export default function Header() {
  return (
    <Portal
      selector="body > header"
      className="flex flex-row justify-between items-center bg-black text-white px-4 py-2"
    >
      <h1 className="text-3xl">Quizboards!</h1>
      <div>
        <a href="/">My Boards</a>
        <button className="bg-green-600 hover:bg-green-700 px-2 py-4 rounded">
          Create New Board
        </button>
      </div>
    </Portal>
  )
}
