import { Renderer2 } from "@angular/core";

// This method allows adding a bounce animation to the button
export function addAnimation(renderer: Renderer2, el: any, animation: string, velocity: string): void {
    renderer.addClass(el, `animate__${animation}`);
    renderer.addClass(el, `animate__${velocity}`);
}

// This method allows you to remove the animations to the button
export function removeAnimation(renderer: Renderer2, el: any, animation: string, velocity: string): Promise<string> {
    return new Promise((resolve, reject) => {
        renderer.listen(el, 'animationend', () => {
            renderer.removeClass(el, `animate__${animation}`);
            renderer.removeClass(el, `animate__${velocity}`);
            resolve('Ok');
        });
    });
}