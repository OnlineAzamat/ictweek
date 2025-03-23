import React from 'react'

const Catalog = () => {
  return (
    <section className='catalog'>
      <div className="catalog-item flex justify-between items-center px-8 max-md:flex-wrap max-md:py-8">
        <div className="logo"><img src="https://ictweek.uz/img/header-logo2.svg" alt="logo" /></div>
        <div className=""><img src="https://ictweek.uz/img/catalog-image.png" alt="catalog-img" /></div>
        <div className="catalog-title text-white">
          <p className='text-xl'>Скачайте ICT Week Uzbekistan 2024</p>
          <h1 className='text-5xl font-bold max-md:text-3xl'>Каталог участников выставки</h1>
        </div>
        <div className="catalog-link">
          <button className="bg-[#00D8FF] px-8 py-4 text-white text-xl font-bold border border-[2] border-transparent rounded-[9px] hover:border-[#00D8FF] hover:bg-transparent hover:text-[#00D8FF] w-min">Скачать</button>
        </div>
      </div>
    </section>
  )
}

export default Catalog