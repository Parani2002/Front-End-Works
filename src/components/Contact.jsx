import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    defaultValues: {
      firstNames: [{ firstname: "" }]
    }
  });

  const { fields, append,remove } = useFieldArray({
    name: 'firstNames',
    control
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label htmlFor="firstname">First Name</label>
        <div className='flex flex-col'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex '>
              <input type="text" {...register(`firstNames.${index}.firstname`)} className='border rounded'/>
              {
                index > 0 && (
                  <button onClick ={() => remove(index)}>Remove</button>
                )
              }
            </div>
          ))}
        </div>
        <button type="button" onClick={() => append({ firstname: "" })}>Add Firstname</button>
        
      </form>
    </div>
  );
};

export default Contact;
