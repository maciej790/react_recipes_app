import { useState } from "react";

const useActiveCategory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const changeActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return { changeActiveIndex, activeIndex };
};

export default useActiveCategory;
