
const Footer = () => {
  return (
    <section className="footer mt-20 rounded-t-2xl mx-4 py-16 relative text-white text-xs">
      <div className="flex max-w-[1360px] mx-auto">
        <div className="footer-logo min-w-[250px]">
          <a href="/"><img src="https://ictweek.uz/img/footer-logo2.svg" alt="footer-logo" /></a>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div>
            <div><span className="text-white uppercase font-medium text-xs">ICTWEEK</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/category/faq" target="_self">ЧЗВ</a></li>
            </ul>
            <div><span className="mt-8 text-white uppercase font-medium text-xs">Спикеры</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/category/faq" target="_self">Список спикеров</a></li>
            </ul>
            <div><span className="mt-8 text-white uppercase font-medium text-xs">Медиа</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/category/faq" target="_self">Новости</a></li>
            </ul>
          </div>
          <div>
            <div><span className="text-white uppercase font-medium text-xs">Экспоненты</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/partner/category/exhibitor" target="_self">Список экспонентов</a></li>
            </ul>
            <div><span className="text-white uppercase font-medium text-xs">Инвестиция</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/partner/category/exhibitor" target="_self">Инвестиционные возможности</a></li>
            </ul>
          </div>
          <div>
            <div><span className="text-white uppercase font-medium text-xs">Стартапы</span></div>
            <ul className="footer-list mt-1 mb-2">
              <li><a href="/ru/partner/category/exhibitor" target="_self">Путь стартапа</a></li>
              <li><a href="/ru/partner/category/exhibitor" target="_self">Стартап питчинг</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">
              <span className="text-white uppercase text-xs font-medium">Свяжитесь с нами для получения более подробной информации:</span>
            </div>
            <ul className="footer-list mt-3">
              <li><a href="tel:++998555110777">+998 55 511 07 77</a></li>
            </ul>
            <div className="footer-title"><span className="text-white uppercase text-xs font-medium">Email</span></div>
            <ul className="footer-list mt-3">
              <li><a href="mailto:Info@ite-association.uz">Info@ite-association.uz</a></li>
              <li><a href="mailto:info@ictweek.uz">info@ictweek.uz</a></li>
            </ul>
            <div className="footer-title"><span className="text-white uppercase text-xs font-medium">Местонахождение</span></div>
            <ul className="footer-list mt-3">
              <li><span className="text-white font-bold text-xs">"CAEx" (Central Asian Expo Uzbekistan),  Узбекистан, г. Ташкент, ул. Миллий бог, 1</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full max-w-[1360px] mx-auto h-[0.5px] bg-white my-12'></div>
      
    </section>
  )
}

export default Footer