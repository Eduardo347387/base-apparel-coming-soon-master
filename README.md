# Frontend Mentor - Base Apparel coming soon page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/Solucion.png)

  
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Preprocesador SCSS
- JavaScript

### What I learned

Aprendi a usar grid, colocar transiciones a elementos como
textos imagenes, modificar archivos SVG y solucionar problemas de cuello de botella

```js
function validarGmail(){
        let timer
        clearTimeout(timer);

        timer = setTimeout(()=>{
            const valor = $inputEmail.value.trim()
            const isValidEmail = regexEmail(valor)
           
            if(!isValidEmail){
                mostrarIcon('../images/icon-error.svg',1)
                $btnSubmit.style.opacity = 0.4;
                mostrarAlerta(`El Gmail es invalido`,$form)
            }
            else if(isValidEmail){
                limpiarAlerta($form,'.input-error')
                mostrarIcon('../images/icon-valide.png',1)
                $btnSubmit.style.opacity = 1;
                $btnSubmit.disabled = false;   
            }
        },2000); 
    }
```


### Continued development

La parte de la optimizacion de codigo el como crear funciones 
y reutilizarlar, la forma de estructurar el codigo para evitar
problemas de cuello de botella


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Eduardo347387)


