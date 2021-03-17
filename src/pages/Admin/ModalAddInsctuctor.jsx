import React from 'react'
import { useForm } from 'react-hook-form';
import './Admin.scss';

export default function ModalAddInsctuctor({ addInst }) {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = React.useState(false);

  const onSubmit = (data) => addInst({ ...data,honor:5 });

  return (
    <div>
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsOpen((isOpen) => !isOpen);
        }}>
        Добавить инструктора
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Добавление инструктора</h1>
              <input
                name="code_instr"
                ref={register}
                placeholder="Код инструктора"
              />
              <input name="surname" ref={register} placeholder="Фамилия" />
              <input name="name" ref={register} placeholder="Имя" />
              <input name="lastname" ref={register} placeholder="Отчество" />
              <input name="phone" ref={register} placeholder="Номер телефона" />
              <input type="submit" className="subm__btn" />
              <button
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="exit__modal__sched">
                &times;
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}