import { useEffect } from 'react'

export default function useClassName(selector, className) {
  useEffect(() => {
    if (className == null) return
    const el = document.querySelector(selector)
    const classNames = className.split(' ')
    el.classList.add(...classNames)
    return () => el.classList.remove(...classNames)
  }, [className, selector])
}
