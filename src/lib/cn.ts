import { twMerge } from 'tailwind-merge'

export function cn(...classNames: (string | false | undefined | null)[]) {
  return twMerge(...classNames);
}
