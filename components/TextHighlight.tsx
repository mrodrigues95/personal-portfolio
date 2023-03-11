import { ComponentProps } from "react";
import clsx from "clsx";

export const TextHighlight = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span className={clsx("text-orange-600", className)} {...props} />
);
