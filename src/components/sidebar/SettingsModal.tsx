import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const SettingsModal = ({
  isOpen,
  onClose,
  currentUser,
}: SettingsModalProps) => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors}
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image
    }
  })

  const image = watch('image');

  const handleUpload = (result: any) => {
    setValue('image', result.info.secure_url. {
      shouldValidate: true
    })
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
    .post("/api/settings", data)
    .then(()=> {
      router.refresh();
      onClose();
    })
    .catch(()=> toast.error('에러가 났습니다.'))
    .finally(()=> setIsLoading(false));
  }



  return <div>SettingsModal</div>;
};

export default SettingsModal;
