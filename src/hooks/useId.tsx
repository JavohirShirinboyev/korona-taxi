import { useId } from "react";

const useUniqueId = () => {
  const id: string = useId();
  return id;
};

export default useUniqueId;
