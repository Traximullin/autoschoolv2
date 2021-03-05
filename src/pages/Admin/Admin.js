import React from 'react'
import './Admin.scss';
import SignIn from './SignIn'
import ModelSchedule from './ModelSchedule'

export default function Admin() {
    let [isOpen, setIsOpen] = React.useState(false)
    
    const openAdmin = (e) =>{
        e.preventDefault()
        setIsOpen(
            isOpen = !isOpen
        )
    }

    return (
      <div className="admin__wrapper">
        {isOpen === false ? (
          <SignIn openAdmin={openAdmin} />
        ) : (
          <div className="admin__body">
            <ModelSchedule/>
            <button>Добавить инструктора</button>
          </div>
        )}
      </div>
    );
}