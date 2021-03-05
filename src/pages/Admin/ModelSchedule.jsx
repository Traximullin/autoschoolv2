import React from 'react'
import { useForm } from 'react-hook-form';

export default function ModelSchedule(){
    const [isOpenModalSched,setIsOpenSched] = React.useState(false)

    return (
      <div>
        <button
        onClick={(e)=>{
          e.preventDefault()
          setIsOpenSched(
            isOpenModalSched => !isOpenModalSched
          )
        }}
        >Составить расписание</button>
        {
          isOpenModalSched && (
            <h1>Пока</h1>
          )
        }
      </div>
    );
}