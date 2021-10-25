# Pruebaw2m

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Libraries

jQuery | PopperJS | Bootstrap | AnimateCSS | SweetAlertJS | FontAwesome | Ngrx Redux | UUID-generator-ts

## Notas del desarrollador:

He desarrollado (como se pedía en la prueba) un sistema CRUD para administrar 'HEROES'.
Contiene un CRUD con objetos simulados (Se guardan en el Storage de Redux, no estan siendo persistidos en ningún lado), 
los cuales se manipulan/comunican por medio del patrón de diseño REDUX. He utilizado algunas librerias de terceros para el diseño y animaciones (básicas).

Decidí no usar un archivo service (para los heroes) simulando consumir los endpoints de una API ya que tomaba más tiempo, y, gracias a REDUX
no es necesario alojarlos en ningún lugar.

Omití la vista de New Heroe y Edit Heroe por Modals, reduciendo así trabajo y código que implementar (como rutas).

IMPORTANTE: No implementé muchas de las opciones adicionales por falta de tiempo. Pero aquí se demuestra el nivel que manejo en Angular.
Se usó: Services, Directivas (If, For), SCSS, Sweetalert2, Bootstrap, jQuery, FontAwesome, otras librerias de terceros, Lazy load, Models, REDUX, Helpers, Animaciones, Promesas, entre otros.

Me disculpo por la falta de diseño (también diseño y maqueto), pero por tiempo no pude diseñar y maquetar algo decente...
Me enfoqué mas en la parte de lógica y desarrollo.

Aquí comparto algo de lo que he hecho para que puedan valorar el nivel de diseño y maquetación:
https://cabuweb.com 