
// export function cn(...inputs: ClassValue[]) {
  // return twMerge(clsx(inputs))
// }
// Utility function to concatenate class names
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}