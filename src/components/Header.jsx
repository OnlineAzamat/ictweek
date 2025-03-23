import { useEffect, useState } from "react";

const Header = () => {
  const [scrollClass, setScrollClass] = useState('');
  const [checkNav, setCheckNav] = useState(true);
  const [checkHidden, setCheckHidden] = useState('hidden');

  window.addEventListener('scroll', () => {
    window.scrollY > 10 ? setScrollClass('nav-blur') : setScrollClass('')
  })

  function openNav() {
    checkNav ? setCheckHidden('') : setCheckHidden('hidden')
    checkNav ? setCheckNav(false) : setCheckNav(true)
  }

  useEffect(() => {
    window.innerWidth < 767 ? setScrollClass('nav-blur') : setScrollClass('')
  }, [checkNav])

  return (
    <header className={`header text-white ${scrollClass} max-md:nav-blur`}>
      <div className="container">
        <nav className="navbar px-[6%] py-4 flex flex-wrap items-center justify-between">
          <a className="navbar-brand" href="/ru">
            <img src="https://ictweek.uz/img/header-logo2.svg" alt="ictweek" />
          </a>
          <button className="navbar-toggler md:hidden" type="button" onClick={openNav}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.94971 11.9497H39.9497" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M7.94971 23.9497H39.9497" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M7.94971 35.9497H39.9497" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <div className={`flex max-md:basis-full max-md:flex-col max-md:py-4 max-md:${checkHidden}`}>
            <ul className="flex items-center mx-8 max-md:flex-col gap-4 text-md transition-all">
              <li className='hover:opacity-[0.8]'><a href="#">ICTWeek</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Экспоненты</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Стартапы</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Спикеры</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Инвестиция</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Программа</a></li>
              <li className='hover:opacity-[0.8]'><a href="#">Медиа</a></li>
            </ul>
            <div className="flex gap-4 max-md:mt-4">
              <button className="bg-[#0028AC] px-8 py-4 border border-[2] border-transparent rounded-[9px] hover:border-white hover:bg-transparent">Партнерство</button>
              <button className="bg-[#0028AC] p-4 border border-[2] border-transparent rounded-[9px]">РУ</button>
              <button className="bg-[#0028AC] p-4 border border-[2] border-transparent rounded-[9px] text-xl"><i className="bi bi-person-fill"></i></button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header