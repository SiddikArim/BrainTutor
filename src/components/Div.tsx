import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TDiv = {
  children?: ReactNode;
  className?: string;
};

const Div = ({ children, className }: TDiv) => {
  return (
    <div className={cn("bg-gray h-[415px]  rounded-2xl", className)}>
      {children}
    </div>
  );
};

export default Div;
