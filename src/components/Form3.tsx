import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// using 3rd party lib react-hook-form@7.43

interface FormData {
  name: string;
  age: number;
}

const Form3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        ></input>
        {errors.name?.type === "required" && (
          <p className="text-danger">The name Field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name Field must have 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form3;
