

document.addEventListener('DOMContentLoaded',function(){    
    const $inputEmail = document.getElementById('gmail')
    const $inputContainer = document.querySelector('.input-container')
    const $form = document.querySelector('#formulario')
    const $btnSubmit = document.querySelector('#formulario button[type="submit"]')

    $inputEmail.addEventListener('input',validadGmail)

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

    function validadGmail(e){
        let inputvalue = e.target.value.trim();
        const isValidEmail = regexEmail(inputvalue)

        const functionIcon = (address,inset)=>{
            mostrarIcon(address,inset)
        }
        const functionsms = (sms,address)=>{
            mostrarAlerta(sms,address)
        }

        // const function = (){

        // }
       
        if(inputvalue === ''){
            functionIcon('../images/icon-error.svg',1)
            $btnSubmit.style.opacity = 0.4;
            functionsms(`El campo Gmail es obligatorio`,$form);
            return;
        }
        else if(!isValidEmail){
            functionIcon('../images/icon-error.svg',1)
            $btnSubmit.style.opacity = 0.4;
            functionsms(`El Gmail es invalido`,$form)
            return;
        }
        else{
            limpiarAlerta($form,'.input-error')
            functionIcon('../images/icon-valide.png',1)
            $btnSubmit.style.opacity = 1;
            $btnSubmit.disabled = false;
            return;
        } 
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
        // return img;
    
    }

    function mostrarAlerta(mensaje,referencia){
        // console.log(referencia)
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
        // console.log(alerta)  

        if(alerta){
            alerta.remove()
        } 
    }

    function regexEmail(email){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        console.log(resultado)
        return resultado;
    }
})
