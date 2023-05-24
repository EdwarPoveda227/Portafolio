
//menu//

const nav= document.querySelector(".menu");
	const abrir = document.querySelector(".menuboton__abrir");
	const cerrar = document.querySelector(".menuboton__cerrar");

	abrir.addEventListener("click", ()=> {
		nav.classList.add("menuvisible");
	})

	cerrar.addEventListener("click",()=>{
		nav.classList.remove("menuvisible");
	})


//cirre de menu al dar clic//
  const menulinks = document.querySelectorAll('.menu a[href^="#"]');
  menulinks.forEach(menulinks => {
    menulinks.addEventListener("click",function(){
      nav.classList.remove("menuvisible");
    })
  })





//seccion portafolio diseñog y diseño W//
	const targets = document.querySelectorAll('[data-target]');
	const content = document.querySelectorAll('[data-content]');

	targets.forEach(target => {
		target.addEventListener('click',() => {


            content.forEach(c => {
            	c.classList.remove('active');
            })


			 const t = document.querySelector(target.dataset.target);
			 t.classList.add('active');
	 })

	})



	//visualizacion galeria//
    
    const contentDiseñoG=document.querySelector(".sectiondiseñoG");   
    const btnTeabrir= document.querySelector("#tea");
    const  imgTea= document.querySelector(".popupdiseñoG--tea");
    const  cerrarImgtea = document.querySelector(".popupdiseñoG__btncerrar--tea");

    btnTeabrir.addEventListener("click" , () =>{
          imgTea.style.display='block';

    })

    cerrarImgtea.addEventListener("click",()=>{
		imgTea.style.display = 'none';
		
	})

  

    const imgTiti= document.querySelector(".popupdiseñoG--titi");
    const btnTitiabrir= document.querySelector("#titi");
     const  cerrarImgtiti = document.querySelector(".popupdiseñoG__btncerrar--titi");

    btnTitiabrir.addEventListener("click" , () =>{
          imgTiti.style.display='block';

    })

    cerrarImgtiti .addEventListener("click",()=>{
		imgTiti.style.display = 'none';
		
	})

    
     const imgJ= document.querySelector(".popupdiseñoG--jardin");
    const abrirJ= document.querySelector("#j");
     const  cerrarJ = document.querySelector(".popupdiseñoG__btncerrar--jardin");

    abrirJ.addEventListener("click",() =>{
          imgJ.style.display='block';

    })

    cerrarJ.addEventListener("click",()=>{
		imgJ.style.display = 'none';
		
	})

    
     const imgB= document.querySelector(".popupdiseñoG--brus");
    const abrirB= document.querySelector("#B");
    const  cerrarB= document.querySelector(".popupdiseñoG__btncerrar--brus");

    abrirB.addEventListener("click",() =>{
          imgB.style.display='block';

    })

    cerrarB.addEventListener("click",()=>{
		imgB.style.display = 'none';
		
	})

       
    const imgS= document.querySelector(".popupdiseñoG--S");
    const abrirS= document.querySelector("#S");
    const  cerrarS= document.querySelector(".popupdiseñoG__btncerrar--S");

    abrirS.addEventListener("click",() =>{
         imgS.style.display='block';

    })

    cerrarS.addEventListener("click",()=>{
		imgS.style.display = 'none';
		
	})





  //validacion formulario//

  let  form = document.querySelector('.footer__contentinputs');
  let nombre = document.querySelector('.contentinputs__inputnombre');
  let correo = document.querySelector('.contentinputs__inputcorreo');
  let mensaje = document.querySelector('.contentinputs__inputmensaje');



  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validacion();
  })

  const validacion =()=>{
    const useNombre =nombre.value.trim();
    const useCorreo =correo.value.trim();
    const useMensaje =mensaje.value.trim();
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}) ps/;

    
     //validacion nombre//
    if (useNombre === '') {
      validaErrorn(nombre,'Campo requerido');
    }else{
       validacionBienn(nombre);
    }
    
     //validacion mensaje//
    if (useMensaje === '') {
      validaErrorm (mensaje,'Campo requerido');
    }else{
       validacionBienm(mensaje);
    }

      //validacion correo//
    if (useCorreo === '') {
       validaErrorc(correo,'campo requerido');
    }else if (useCorreo.match(pattern)) {
    	  validaErrorc(correo,'email no valido');
    }else{
       validacionBienc(correo);
    }
    
   





}

//validacion nombre//
const validaErrorn = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--nombre');
      avisoError.innerText=mjs;

      nombre.className = 'ingresofallido__nombre';


    }

   
 const validacionBienn = (input) => {
      const formControl = input.parentElement;

      const avisoError =formControl.querySelector('.error--nombre');
      avisoError .innerText='';

      nombre.className='ingresoExito__nombre';


      
    }


 //validacion mensaje/
  const validaErrorm = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--mensaje');
      avisoError.innerText=mjs;

      mensaje.className = 'ingresofallido__mensaje';


    }


  const validacionBienm = (input) => {
      const formControl = input.parentElement;
      const avisoError =formControl.querySelector('.error--mensaje');
      avisoError.innerText='';


      mensaje.className='ingresoExito__mensaje';


      
    }
      

//validacion correo/
   const validaErrorc = (input,mjs) =>{
   	  const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--email');
      avisoError.innerText=mjs;

      correo.className = 'ingresofallido__correo';

   }


   const validacionBienc = (input) => {
      const formControl = input.parentElement;

      const avisoError =formControl.querySelector('.error--email');
      avisoError .innerText='';

      correo.className='ingresoExito__correo';


      
    }

   

  