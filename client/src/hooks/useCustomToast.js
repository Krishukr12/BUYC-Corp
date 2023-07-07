import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const [toastId, setToastId] = useState(null);
  const toast = useToast();

  const showToast = (message, status = "success") => {
    if (toastId) {
      toast.close(toastId);
    }
    const newToastId = toast({
      title: message,
      status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    setToastId(newToastId);
  };

  return showToast;
};

export default useCustomToast;
