import React from 'react'
import { useForm } from 'react-hook-form';
import './Admin.scss'

export default function ModelSchedule({ addSched }) {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = React.useState(false);
  const onSubmit = (schedl) =>
    addSched({ ...schedl, date: new Date().toDateString });

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((isOpen) => !isOpen);
        }}>
        Составить расписание
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="nine" ref={register} placeholder="9:00" />
              <input name="ten" ref={register} placeholder="10:00" />
              <input name="eleven" ref={register} placeholder="11:00" />
              <input name="twelve" ref={register} placeholder="12:00" />
              <input name="thirteen" ref={register} placeholder="13:00" />
              <input name="fifteen" ref={register} placeholder="15:00" />
              <input name="sixteen" ref={register} placeholder="16:00" />
              <input name="seventeen" ref={register} placeholder="17:00" />
              <input name="eighteen" ref={register} placeholder="18:00" />
              <input type="submit" className="subm__btn"></input>
            </form>
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="exit__modal__sched">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}