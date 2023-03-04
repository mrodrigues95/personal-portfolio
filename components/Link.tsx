import { ComponentProps } from "react";
import clsx from "clsx";

export const Link = ({
  className,
  rel = "noopener noreferrer",
  target = "_blank",
  ...props
}: ComponentProps<"a">) => (
  <a
    className={clsx(
      "not-prose flex items-center gap-3 rounded-md bg-orange-50 px-2.5 py-1 font-semibold text-gray-900 no-underline transition hover:bg-orange-100",
      className
    )}
    rel={rel}
    target={target}
    {...props}
  />
);
