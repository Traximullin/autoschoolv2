import React from 'react'
import './Schedule.scss';

export default function Schedule({schedule}){
    return(
        <div className='wrapper__schedule'>
            {
                schedule.map((elem) =>{
                    return (
                      <div>
                        <h2>Расписание</h2>
                        <p>9:00 {elem.nine}</p>
                        <p>10:00 {elem.ten}</p>
                        <p>11:00 {elem.eleven}</p>
                        <p>12:00 {elem.twelve}</p>
                        <p>13:00 {elem.thirteen}</p>
                        <p>15:00 {elem.fifteen}</p>
                        <p>16:00 {elem.sixteen}</p>
                        <p>17:00 {elem.seventeen}</p>
                        <p>18:00 {elem.eighteen}</p>
                        <h3>С 14:00 до 15:00 обед.</h3>
                      </div>
                    );
                })
            }
        </div>
    )
}