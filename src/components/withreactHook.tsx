"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    // Todo: submit on server
    // ...
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        {...register("email", {
          required: "Email is required",
          minLength: {
            value: 5,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords must match",
        })}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
