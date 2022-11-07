import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "Moms Kitchen - " + title;
  }, [title]);
};

export default useTitle;
