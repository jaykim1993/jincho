import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// clsx+tailwind-merge 결합, 클래스 충돌 병합 전용.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
