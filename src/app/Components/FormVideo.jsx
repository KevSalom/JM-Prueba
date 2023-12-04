'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Spinner from './Spinner';
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';


const FormComponent = ({ defaultValues, onSubmit, error, loading }) => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues,
    mode: 'onChange',
  });
  const params = useParams()
  const router = useRouter()


  const handleFormSubmit = async (formData) => {

 // To handle edit or create request based on the existence of params.
    if(params.id){
      try {
        await onSubmit(params.id, formData);
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    } else{
      try {
        await onSubmit(formData);
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
    
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col max-w-md mx-auto bg-gray-50 p-8 rounded-md gap-10 my-6 shadow-md'>
      <div>
      <input
        {...register('title', { required: true, maxLength: 50 })}
        placeholder="Título"
        className=' border-b-2 border-b-gray-400 outline-none  py-2  bg-transparent text-gray-500 w-full'
      />
      {errors.title && <p className='text-[13px] mt-1 text-red-400 text-center'>El título es requerido y debe tener menos de 50 caractéres</p>}
      </div>
      <div>
      <input
        {...register('description', { required: true, maxLength: 250 })}
        placeholder="Description"
        className=' border-b-2 border-b-gray-400 outline-none py-2 bg-transparent text-gray-500 w-full'
      />
      {errors.description && <p className='text-[13px] mt-1 text-red-400 text-center'>Description is required and must be less than 250 characters</p>}
      </div>
      <div>
      <input
        {...register('url', { required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/ })}
        placeholder="URL"
        className=' border-b-2 border-b-gray-400 outline-none py-2 bg-transparent text-gray-500 w-full'
      />
      {errors.url && <p className='text-[13px] mt-1 text-red-400 text-center'>URL is required and must be a valid URL</p>}
      </div>
      <button disabled={!isValid} className={`py-2 w-full rounded-sm text-gray-50  ${(!isValid)? 'bg-gray-500': 'bg-gray-800'}`}>{(loading)?<Spinner/>:'Guardar'}</button>
      {error && <p>{error}</p>}
    </form>

  );
};

export default FormComponent;