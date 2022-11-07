import React from 'react'
import { useForm } from 'react-hook-form';



const Registration = () => {

    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }
return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name
                <input 
                    {...register('firstName', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'Имя должно содержать не меннее 5 символов'
                        }
                    })}
                />
            </label>
            {errors.firstName && <div style={{color: 'red'}}>{errors.firstName.message || 'Error'}</div>}
            <label>Age
                <input 
                    {...register('age', {
                        required: true,
                        min: {
                            value: 18,
                            message: 'Минимальный возраст для входа 18 лет'
                        },
                        max: {
                            value: 75,
                            message: 'Максимальный возраст для входа 75 лет'
                        }
                    })}
                />
            </label>
            {errors.age && <div style={{color: 'red'}}>{errors.age.message || 'Error'}</div>}
            <input type="submit" />
        </form>
    </>
  )
}

export default Registration