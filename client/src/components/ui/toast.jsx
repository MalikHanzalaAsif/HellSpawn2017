import { toast } from "react-toastify";

const toastEmitter = ({
  title,
  type,
  position = "top-right",
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress,
  theme = "colored",
}) => {
  const options = {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme
  };

  switch (type) {
    case "info":
      toast.info(title, options);
      break;
    case "warn":
      toast.warn(title, options);
      break;
    case "success":
      toast.success(title, options);
      break;
    case "error":
      toast.error(title, options);
      break;
    default:
      toast(title, options);
      break;
  }
};

export default toastEmitter;
