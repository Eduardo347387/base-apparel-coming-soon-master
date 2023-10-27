

document.addEventListener('DOMContentLoaded',function(){    
    const $inputEmail = document.getElementById('gmail')
    const $inputContainer = document.querySelector('.input-container')
    const $form = document.querySelector('#formulario')
    const $btnSubmit = document.querySelector('#formulario button[type="submit"]')
    

    $inputEmail.addEventListener('input',validadGmail);
    
    $btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        const alertaExito = document.createElement('P')
        alertaExito.classList.add('input-valido')
        alertaExito.style.marginTop = '1rem'
        alertaExito.style.paddingLeft = '1.8rem'
        alertaExito.style.color = '#44bc3e'
        alertaExito.textContent = 'Gmail Agregado';
        $form.appendChild(alertaExito)

        setTimeout(()=>{
            // console.log('limpiar')
            $btnSubmit.style.opacity = 0.4; 
            $btnSubmit.disabled = true;
            limpiarAlerta($inputContainer,'.icon-error')
            limpiarAlerta($form,'.input-valido')
            $form.reset()
        },2000)
        
    })

    function prueba(a){
        console.log(a)
    }
    function validadGmail(){
        let timer
        clearTimeout(timer);

        timer = setTimeout(()=>{
            const valor = $inputEmail.value.trim()
            const isValidEmail = regexEmail(valor)
         
            const actions = {
                validacion2:()=>{
                    mostrarIcon('../images/icon-error.svg',1)
                    $btnSubmit.style.opacity = 0.4;
                    mostrarAlerta(`El Gmail es invalido`,$form)
                },
                validacion3:()=>{
                    limpiarAlerta($form,'.input-error')
                    mostrarIcon('../images/icon-valide.png',1)
                    $btnSubmit.style.opacity = 1;
                    $btnSubmit.disabled = false;
                },
            };
    
            if(!isValidEmail){
                actions.validacion2()
           
            }
            else if(isValidEmail){
                actions.validacion3()
                
            }


        },1600); 
    }

       
    function mostrarIcon(address,elementBefore,){
        // limpiarAlerta($inputContainer,'.icon-error')
        // const img = document.createElement('IMG');
        // img.classList.add('icon-error')
        // img.style.marginLeft = '0.1rem'
        // img.style.marginRight = '0.8rem'
        // img.style.width = '2.5rem';
        // img.style.height = '2.5rem';
        // img.src = address;
        // $inputContainer.insertBefore(img,$inputContainer.children[elementBefore]);
        const $icon = $inputContainer.querySelector('.icon-error');
        if ($icon) {
            $icon.src = address;
            return $icon;
        }
        const img = document.createElement('IMG');
        img.classList.add('icon-error');
        img.style.marginLeft = '0.1rem';
        img.style.marginRight = '0.8rem';
        img.style.width = '2.5rem';
        img.style.height = '2.5rem';
        img.src = address;
        $inputContainer.insertBefore(img, $inputContainer.children[elementBefore]);
    
    }

    function mostrarAlerta(mensaje,referencia){
        limpiarAlerta($form,'.input-error')
        const error = document.createElement('P')
        error.classList.add('input-error')
        error.style.marginTop = '1rem'
        error.style.paddingLeft = '2rem'
        error.style.color = 'red'
        error.textContent = mensaje;
        error.style.textAlign = 'left'
        error.style.marginBottom = '10px'
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia,id){
        const alerta = referencia.querySelector(id)
        if(alerta){
            alerta.remove()
        } 
    }

    function regexEmail(email){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
})
