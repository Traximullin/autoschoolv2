import React from 'react';
import './index.scss';
import Modal from '../../Modal/ModalApplication';

export default function Home({ addApplication }) {
  return (
    <div className="wrapper__home">
      <div className="school__content">
        <img
          src="https://img.incacar.com/cars/Mercedes-Benz/E-Class/2018/4172dfb81ced9f1b38afeb93f54ddf4a.jpg"
          alt="Loading..."
        />
        <Modal addApplication={addApplication} />
        <h1 className="line">Почему нас выбирают?</h1>
        <p className="school__content_p">
          Правильно выбрать хорошую автошколу и преподавателей — это первый шаг к
          получению водительского удостоверения.
        </p>
        <div className="why__me">
          <div className="why__me_item">
            <div className="number">1</div>
            <div className="inf">
              <p>20 лет опыта</p>
              <p>Автошкола работает с 1997 года</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">2</div>
            <div className="inf">
              <p>Опытные преподаватели</p>
              <p>Средний стаж преподавателей 10 лет</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">3</div>
            <div className="inf">
              <p>Обучение рядом с домом</p>
              <p>7 филиалов в разных районах города, 3 учебных автодрома</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">4</div>
            <div className="inf">
              <p>Онлайн обучение</p>
              <p>Вы можете изучать теорию в любом удобном для Вас месте</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">5</div>
            <div className="inf">
              <p>Комфортные условия обучения</p>
              <p>
                Гибкий график занятий по теории и вождению, возможность заниматься по
                индивидуальному графику
              </p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">6</div>
            <div className="inf">
              <p>Обучение на МКПП и АКПП</p>
              <p>В автопарке автошколы 16 учебных автомобилей</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">7</div>
            <div className="inf">
              <p>Высокий % сдачи экзаменов</p>
              <p>Более 60% курсантов сдают экзамен в ГИБДД с первого раза</p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">8</div>
            <div className="inf">
              <p>Фиксированная цена</p>
              <p>
                В процессе обучения нет доплат за ГСМ, страховку, аренду автодрома
              </p>
            </div>
          </div>
          <div className="why__me_item">
            <div className="number">9</div>
            <div className="inf">
              <p>Оплата в рассрочку</p>
              <p>
                Оплату можно разделить на 4 части, без увеличения стоимости обучения
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
