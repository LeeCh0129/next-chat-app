import { MessagingOptions } from "child_process";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput = ({
  placeholder,
  id,
  type,
  required,
  register,
}: MessagingOptions) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        {...register(id, { required })}
        placeholder={placeholder}
        className={`
        w-full px-4 py-2 font-light text-black rounded-full bg-ne-100 focus:outline-none`}
      />
    </div>
  );
};

export default MessageInput;
