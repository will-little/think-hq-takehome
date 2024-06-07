import { useGLTF } from "@react-three/drei";

//Custom hook to avoid nasty type hacks in implementation layer.
//Better for maintainability
export const useGLB = <T>(url: string) => {
  return useGLTF(url) as T;
};
