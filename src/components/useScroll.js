import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const control = useAnimation();
  const [elment, view] = useInView({ threshold: 0.3 });
  if (view) control.start("show");
  else control.start("hidden");
  return [elment, control];
};
