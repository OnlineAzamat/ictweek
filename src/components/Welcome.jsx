import Timer from "./Timer"

const Welcome = () => {
	// Timer
	const time = new Date('September 24, 2025 00:00:00');
	time.setMinutes(time.getMinutes());

  return (
    <section className="welcome">
      <div className="welcome-in relative w-full h-[100vh] flex items-center px-[6%]">
        <div className="welcome-text w-full h-[25rem]">
          <div className="welcome-title flex justify-between items-center mt-16 max-md:flex-wrap max-sm:mt-8">
            <div className="flex flex-col">
              <span className="text-6xl font-bold text-white max-md:text-4xl">ICTWEEK</span><br />
              <span className="text-6xl text-white max-md:text-4xl">UZBEKISTAN</span>
              <button className="bg-[#00D8FF] px-12 py-4 mt-8 text-white text-xl border border-[2] border-transparent rounded-[9px] hover:border-white hover:bg-transparent hover:text-[#00D8FF] w-min">Регистрация</button>
            </div>
            <div>
              <div className="text-white mx-[10%]">
                <img src="/partners/huawei.png" alt="huawei" className="w-[120px]" />
                <p className="text-nowrap">Gold партнёр</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-end mt-24 max-md:flex-wrap max-sm:mt-8">
            <p className="text-4xl font-bold text-white max-md:text-xl">Ташкент, 23-26 Cентября 2025</p>
            <Timer expiryTimestamp={time} autoStart={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome