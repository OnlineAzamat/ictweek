
const Useful = () => {
  return (
    <section className="useful mt-16">
      <div className="container mx-auto max-w-[1360px] grid grid-cols-3 gap-4">
        <div className="item">
          <div className="useful-title my-4"><span className="text-white uppercase font-semibold">Официальная Поддержка</span></div>
          <div className="useful-link">
            <a href="https://digital.uz/en/" target="_self" class="flex items-center justify-center h-[125px] rounded-2xl px-4 py-3">
              <img src="https://ictweek.uz/uploads/F5Q8C9/RUS.png" class="max-w-full max-h-full" alt="Министерство цифровых технологий" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="useful-title my-4"><span className="text-white uppercase font-semibold">Организатор</span></div>
          <div className="useful-link">
            <a href="https://www.ite-association.uz/ru" target="_self" class="flex items-center justify-center h-[125px] rounded-2xl px-4 py-3">
              <img src="https://ictweek.uz/uploads/F5Q8C3/Logo-RU-white.png" class="max-w-full max-h-full" alt="Министерство цифровых технологий" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="useful-title my-4"><span className="text-white uppercase font-semibold">Technical Partner</span></div>
          <div className="useful-link">
            <a href="https://uztelecom.uz/ru" target="_self" class="flex items-center justify-center h-[125px] rounded-2xl px-4 py-3">
              <img src="https://ictweek.uz/uploads/F5Q8C9/Uztelecomlogo-rectangle.svg" class="max-w-full max-h-full" alt="Министерство цифровых технологий" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Useful