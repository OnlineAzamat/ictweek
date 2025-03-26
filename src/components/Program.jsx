import { useState } from "react";
import { program } from "../data/program";

const Program = () => {
  const [programId, setProgramId] = useState(0);

  function btnClick(e) {
    setProgramId(e.target.value);
    console.log(e);
    e.target.parentElement.className = 'nav-item active';
  }

  return (
    <section className="programm mt-16 mx-3 px-[50px] py-[100px] max-sm:p-4">
      <div className="container">
        <div className="programm-head flex items-center justify-between max-sm:flex-wrap">
          <div className="mt-3 mr-2 max-sm:mt-0">
            <span className="text-white text-4xl uppercase font-bold max-sm:text-2xl">ПРОГРАММА</span>
          </div>
          <div className="mt-3">
            <div className="programm-date">
              <ul className="nav flex flex-wrap items-center">
                <li className="nav-item programm-calendar">
                  <button className="nav-link ml-0 mr-0">
                    <img src="https://ictweek.uz/img/calendar-clock.svg" alt="calendar" />
                  </button>
                </li>
                <li className="nav-item active">
                  <button className="nav-link active" value='0' onClick={btnClick}>17 Cентября</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" value="1" onClick={btnClick}>18 Cентября</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" value="2" onClick={btnClick}>19 Cентября</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" value="3" onClick={btnClick}>20 Cентября</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-body grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2">
          {
            program[programId].map((res, index) => {
              return (
                <div className="programm-in mt-4 p-4" key={index}>
                  <div class="flex items-center">
                    <img src="https://ictweek.uz/img/calendar-clock-blue.svg" alt="alter" />
                    <span class="ml-3 font-semibold text-white text-2xl max-sm:text-md">{res.time}</span>
                  </div>
                  <div className="programm-line mt-4"></div>
                  <div className="mt-4">
                    <span class="text-white text-2xl xl:h-[150px] max-sm:text-xl">{res.title}</span>
                  </div>
                  <div className="flex mt-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z" fill="white"></path>
                    </svg>
                    <span class="ml-2 text-white text-xl">{res.location}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Program