import { React, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState, watch, control } = useForm({
    defaultValues:{
      name:"",
      emailaddress:"",
      address:""
    }
  });
  const { fields,append, remove } = useFieldArray({
    control,
    name:"address"
  });

  const { errors } = formState;
    console.log(fields);
  //   console.log(formState);

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Registration</h1>
      <form
        action=""
        method="post"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          {...register("name", {
            required: {
              value: true,
              message: "User name is required...",
            },
          })}
        />
        <br />
        <p>{errors.name?.message}</p>
        <br />
        <label htmlFor="emailaddress">Email Address</label>
        <br />
        <input
          type="email"
          name="emailaddress"
          id="emailaddress"
          placeholder="Enter your email address"
          {...register("emailaddress", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        <br />
        <p>{errors.emailaddress?.message}</p>
        <br />
        <label htmlFor="name">Address</label> <br />
        {fields.map((field, index) => (
          <div>
          <input key={field.id}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            {...register(`address.${index}.city`, {
              required: {
                value: true,
                message: "Address is required...",
              },
            })}
          />
           <button type="button" onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <p>{errors.address?.message}</p>
        <br />
        <button
        type="button"
        onClick={() => append({ address:""})}
      >
        append
      </button>
       
        {/* <label htmlFor="password">Password</label><br />
        <input type="password" name="password" id="password" {...register('password',{
            required:{
                value:true,
                message:"Password is required"
            }})}/>
            <br />
            <p>{errors.password?.message}</p>
            <br />

        <label htmlFor="confirm_password">Confirm password</label><br />
        <input type="password" name="confirm_password" id="confirm_password" {...register('confirm-password',{
            required:{
                value:true,
                message:"confirm password is also required"
            },
            validate:(fieldvalue) => {
                if(fieldvalue !== watch('password')){
                    return "Password doesnot match";
                }
            } 
        })}/> */}
        <br />
        <p>{errors.confirm_password?.message}</p>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
