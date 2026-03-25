import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "$"): string {
  return `${currency}${price.toFixed(2)}`;
}

export function initializeColorSelection(): void {
            const colorButtons = document.querySelectorAll('.colorButton');
            
            colorButtons.forEach((button) => {
                button.addEventListener('click', (event: Event) => {
                    const target = event.target as HTMLElement;
                    
                    if (target.classList.contains('colorButton')) {
                        const activeButton = document.querySelector('.colorButton.active');
                        if (activeButton) {
                            activeButton.classList.remove('active');
                        }
                        
                        target.classList.add('active');
                        
                        const activeImage = document.querySelector('.imgBox .active');
                        if (activeImage) {
                            activeImage.classList.remove('active');
                        }
                        
                        const colorClass = target.getAttribute('data-color');
                        if (colorClass) {
                            document.querySelector(`.imgBox .${colorClass}`)?.classList.add('active');
                        }
                    }
                });
            });
        }