import React from 'react'
import { useForm } from 'react-hook-form'
import './Modal.scss'

export default function ModalApplication() {
    const { register, handleSubmit } = useForm();
    
    const [isOpen,setOpen] = React.useState(false)

    const onSubmit = data => console.log(data)

    const openModal = () =>{setOpen(!isOpen)}

    return (
      <div className="modal__applic">
        <button className="open__modal" onClick={openModal}>
          Подать заявку на обучение
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Заявка на обучение</h1>
              <p>
                Выберите категорию обучения, способ изучения теории, район обучения
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h3>Категория обучения</h3>
                  <select name="trainingCategory" ref={register}>
                    <option value="Выберите вариант из списка">
                      Выберите вариант из списка
                    </option>
                    <option value="Категория А" name="сategoryA">
                      Категория А
                    </option>
                    <option value="Категория В" name="сategoryB">
                      Категория В
                    </option>
                  </select>
                </div>
                <div>
                  <h3>Способ изучения теории</h3>
                  <select name="learningMethods" ref={register}>
                    <option value="Выберите вариант из списка">
                      Выберите вариант из списка
                    </option>
                    <option value="Онлайн с преподавалем" name="onlineTeacher">
                      Онлайн с преподавателем
                    </option>
                    <option value="Самостоятельно онлайн">
                      Самостоятельно онлайн
                    </option>
                    <option value="В учебном классе" name="schoolClass">
                      В учебном классе
                    </option>
                  </select>
                </div>
                <div>
                  <h3>Район обучения</h3>
                  <select name="district" ref={register}>
                    <option value="Выберите вариант из списка">
                      Выберите вариант из списка
                    </option>
                    <option value="Юга западный">Юга западный</option>
                    <option value="Академический">Академический</option>
                    <option value="Автовокзал">Автовокзал</option>
                  </select>
                  <input name="firstName" placeholder="Ваше имя" ref={register} />
                  <input name="phone" placeholder="+7 999 999 99 99" ref={register}>
                  </input>
                </div>
                <input type="submit" className="submit__btn" />
                &nbsp;
                <button
                  className="exit__modal"
                  onClick={() => setOpen((isOpen) => !isOpen)}>
                  &times;
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}