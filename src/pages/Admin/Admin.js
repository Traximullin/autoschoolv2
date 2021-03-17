import React from 'react'
import './Admin.scss';
import SignIn from './SignIn'
import ModelSchedule from './ModelSchedule'
import ModalAddInsctuctor from './ModalAddInsctuctor'

export default function Admin({ addInst, application, addSched }) {
  let [isOpen, setIsOpen] = React.useState(false);

  const openAdmin = (e) => {
    e.preventDefault();
    setIsOpen((isOpen = !isOpen));
  };

  return (
    <div className="admin__wrapper">
      {isOpen === false ? (
        <SignIn openAdmin={openAdmin} />
      ) : (
        <div className="admin__body">
          <ModelSchedule addSched={addSched} />
          <ModalAddInsctuctor addInst={addInst} />
          <div>
            {application.map((elem) => {
              return (
                <div className="app__body">
                  <h2>Заявка на обучение</h2>
                  <p>{elem.firstName}</p>
                  <p>{elem.phone}</p>
                  <p>{elem.learningMethods}</p>
                  <p>{elem.trainingCategory}</p>
                  <p>{elem.district}</p>
                  <p>{elem.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}