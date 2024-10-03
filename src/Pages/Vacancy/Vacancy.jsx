import React, { useState } from 'react';
import data from '../../data/vacancy.json';
import cross from '../../assets/cross.png';

import './Vacancy.scss';
import Form from '../../Components/Form/Form';

export default function Vacancy() {
  const [selectedVacancy, setSelectedVacancy] = useState(
    'Страница вакансий, кнопка с главного блока'
  );
  //   let formData = 'Страница вакансий, кнопка с главного блока';
  const [isFromOpen, setIsFormOpen] = useState(false);
  return (
    <div className="vacancy">
      <div className="vacancy-main">
        <div className="vacancy-main__filter"></div>
        <div className="vacancy-main__container">
          <h1 className="vacancy-main__title ">
            Вакансии в KGF. Строительные и отделочные работы
          </h1>
          <p className="vacancy-main__description">
            Компания предлагает отличные возможности для специалистов в области
            строительных и отделочных работ. Мы реализуем проекты различного
            масштаба и сложности, включая монтаж фасадных систем, внутреннюю
            отделку и строительные работы. Если вы хотите стать частью команды
            профессионалов и развиваться в стабильной компании, присоединяйтесь
            к нам! Мы ценим ответственный подход, внимание к деталям и
            стремление к совершенству в каждом проекте.
          </p>

          <button
            onClick={() => {
              setIsFormOpen(true);
              setSelectedVacancy('Страница вакансий, кнопка с главного блока');
            }}
            className="vacancy-main__button"
          >
            Хочу работать
          </button>
        </div>
      </div>

      <div className="vacancy-list">
        <h2 className="title vacancy-list__title">
          Актуальные вакансии в KG Fasady
        </h2>
        <div
          style={{ gridTemplateColumns: data.length <= 1 ? 'auto' : '1fr 1fr' }}
          className="vacancy-list__wrapper"
        >
          {data.length === 0
            ? 'На данный момент все позиции заняты, мы не ищем сотрудников.'
            : data.map((vacancy, index) => (
                <div className="vacancy-list__item" key={index}>
                  <div className="vacancy-list__item-left">
                    <p className="vacancy-list__item-name">{vacancy.name}</p>
                    <p className="vacancy-list__item-title">Требования:</p>
                    <ul className="vacancy-list__item-must-list">
                      {vacancy.requirements.map((item, index) => (
                        <li className="vacancy-list__item-must-li" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="vacancy-list__item-right">
                    <p className="vacancy-list__item-salary">
                      З/П: от
                      <span className="vacancy-list__item-salary-num">
                        {vacancy.salary}
                      </span>
                      р.
                    </p>

                    <button
                      onClick={() => {
                        setSelectedVacancy(vacancy.name);
                        console.log(selectedVacancy);
                        setIsFormOpen(true);
                      }}
                      className="vacancy-list__button"
                    >
                      Откликнуться
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div
        style={{
          opacity: isFromOpen ? 1 : 0,
          visibility: isFromOpen ? 'visible' : 'hidden',
        }}
        onClick={() => setIsFormOpen(false)}
        className="vacancy__form-outer"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="vacancy__form"
        >
          <img
            onClick={() => setIsFormOpen(false)}
            src={cross}
            className="vacancy__form-close"
            alt=""
          />
          <Form type={selectedVacancy} />
        </div>
      </div>
    </div>
  );
}
