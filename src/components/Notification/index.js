import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

export const notifyError = (message) => {
  return toast.error(message, {
    autoClose: 3000,
    closeOnClick: true,
  });
};
