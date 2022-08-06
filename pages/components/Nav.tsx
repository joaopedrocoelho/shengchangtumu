import React from 'react'

const Nav = () => {
  return (
    <div className="flex w-full sm:py-8 py-4 sm:px-12 bg-white">
    <div className="mr-auto">Logo</div>
    <nav>
      <ul className="flex justify-center gap-4">
        <li>
          <a href="">泡沫防水工程</a>
        </li>
        <li>
          <a href="">隔熱工程</a>
        </li>
        <li>
          <a href="">PU跑道工程</a>
        </li>
        <li>
          <a href="">進口工程原料</a>
        </li>
        <li>
          <a href="">聯絡我們</a>
        </li>
        <li>
          <a href="">關於勝昌</a>
        </li>
      </ul>
    </nav>
  </div>

  )
}

export default Nav