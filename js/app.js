document.addEventListener('DOMContentLoaded',function(){  
      
    const $inputEmail = document.getElementById('gmail')
    const $inputContainer = document.querySelector('.input-container')
    const $form = document.querySelector('#formulario')
    const $btnSubmit = document.querySelector('#formulario button[type="submit"]')

    $inputEmail.addEventListener("input", validarGmail);

    $btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault();

        const alertaExito = crearElemento('P','input-valido','Gmail Agregado',{
            marginBottom: '1rem',
            paddingLeft: '1.8rem',
            color:'#44bc3e',
            textAlign:'left',
        },)
        $form.appendChild(alertaExito)

        setTimeout(()=>{
            limpiarFormulario()
        },2000)
    })

    function limpiarFormulario(){
        $btnSubmit.style.opacity = 0.4; 
        $btnSubmit.disabled = true;//Bloquear Boton
        limpiarAlerta($inputContainer,'.icon-error')
        limpiarAlerta($form,'.input-valido')
        $form.reset()
    }

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
    
    function mostrarIcon(address,elementBefore){
        const $icon = $inputContainer.querySelector('.icon-error');
        if ($icon) {
            $icon.src = address;
            return $icon;
        }
        const img = crearElemento('IMG', 'icon-error', address, {
            marginLeft: '0.1rem',
            marginRight: '0.8rem',
            width: '2.5rem',
            height: '2.5rem',
        });
        $inputContainer.insertBefore(img, $inputContainer.children[elementBefore]);
    }

    function mostrarAlerta(mensaje,referencia){
        const $sms = referencia.querySelector('.input-error')
        if($sms){
            $sms.textContent = mensaje
        }else {
            const error = crearElemento('P', 'input-error', mensaje, {
              marginTop: '1rem',
              paddingLeft: '2rem',
              color: 'red',
              textAlign: 'left',
              marginBottom: '10px',
            });
            referencia.appendChild(error);
        }
    }

    function limpiarAlerta(referencia,id){
        const alerta = referencia.querySelector(id)
        if(alerta){
            alerta.remove()
        } 
    }

    function regexEmail(email){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }

    function crearElemento(tagName, className, content, styles) {
        const element = document.createElement(tagName);
        element.classList.add(className);

        if(tagName === 'P') element.textContent = content;
        else if(tagName === 'IMG') element.src = content;
        
        for (const style in styles) element.style[style] = styles[style];

        return element;
    }
})
