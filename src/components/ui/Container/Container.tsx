
import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<TContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-[1200px] mx-auto lg:px-0 px-4", className)}>{children}</div>
  );
};

export default Container;
