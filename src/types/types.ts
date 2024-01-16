export type WithChildren = React.PropsWithChildren;

export type WithClassName = {
  className?: string;
}

export type NavLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export type FormState = {
  success?: boolean | null;
  message?: string | null;
  error?: string | null;
  // data: Tour | null;
}
