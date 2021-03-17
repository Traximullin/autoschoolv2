import React from 'react'
import './Instructor.scss';

export default function Instructor({ instructor }) {
  return (
    <div className="wrapper__instructor">
      {
        instructor.map((elem) =>{
          return (
            <div className="body__instructor">
              <p>{elem.surname}</p>
              <p>{elem.name}</p>
              <p>{elem.lastname}</p>
              <p>{elem.phone}</p>
              <p>Рейтинг: {elem.honor}</p>
            </div>
          );
        })
      }
    </div>
  );
}