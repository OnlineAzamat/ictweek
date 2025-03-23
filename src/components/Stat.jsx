
const Stat = () => {
  return (
    <section className="stat mt-[60px]">
      <div className="grid grid-cols-6 mx-[8%] max-md:grid-cols-3 max-md:gap-4 max-sm:grid-cols-2">
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-1.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Общая площадь</p>
          <p className="text-4xl font-bold text-white text-nowrap">10 000 ㎡+</p>
        </div>
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-2.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Гости</p>
          <p className="text-4xl font-bold text-white">20k+</p>
        </div>
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-3.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Стартапы</p>
          <p className="text-4xl font-bold text-white">200+</p>
        </div>
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-4.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Экспоненты</p>
          <p className="text-4xl font-bold text-white">300+</p>
        </div>
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-5.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Страны</p>
          <p className="text-4xl font-bold text-white">50+</p>
        </div>
        <div className="item">
          <div className="logo"><img src="https://ictweek.uz/uploads/F5Q8C3/stat-6.svg" alt="" /></div>
          <p className="text-gray-400 text-2xl text-center">Международные СМИ</p>
          <p className="text-4xl font-bold text-white">20+</p>
        </div>
      </div>
    </section>
  )
}

export default Stat