import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyError = (message) => {
  return toast.error(message, {
    autoClose: 3000,
    closeOnClick: true,
  });
};
