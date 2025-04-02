import { LucideIcon } from "lucide-react";
import Link from "next/link";

export function UnitContact({
  title,
  icon: Icon,
  description,
  href = "#",
  noNewWebOpen = false,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
  href?: string;
  noNewWebOpen?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(!noNewWebOpen && { target: "_blank", rel: "noopener noreferrer" })}
      className="border p-1 rounded-lg hover:border-primary-brand-700  flex flex-col items-start justify-center px-2 group active:scale-90  transition-all duration-700 ease-in-out "
    >
      <div className="flex items-center justify-start  gap-2 ">
        {Icon && <Icon className="w-4 h-4 text-primary-brand-800" />}
        <p className="font-medium text-sm group-hover:text-primary-brand-800  transition-all duration-700 ease-in-out">
          {title}
        </p>
      </div>
      <span className=" font-light text-xs text-primary-black-300 group-hover:text-primary-black-950  transition-all duration-700 ease-in-out">
        {description}{" "}
      </span>
    </Link>
  );
}
