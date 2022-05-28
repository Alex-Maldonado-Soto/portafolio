
      // selecciona el objeto pero esto no necesariamente es una animacion

      // gsap.set('#logo', {
      //     backgroundColor: 'red',
      // });

      // a como cambiara el objeto

  

      // OBJECT

      // let object = { value: 100 };
      // gsap.from(.object, {
      //     duration: 2,
      //     value: 1000,
      //     onStart: () => { console.log('start', object.value); },
      //     onUpdate: () => { console.log(object.value) },
      //     onComplete: () => { console.log('end', object.value); }
      // });

      // FROM

      gsap.from('#nav', {
          duration: 1,
          x:-200,
      });

      gsap.from('#img-nav', {
          duration: 1,
          x:200,
      });
      // Starger inicia una animacion en secuencia
gsap.registerPlugin(ScrollTrigger);


gsap.to('#text-header', {
  scrollTrigger: {
    trigger: "#text-header",
    toggleActions: "restart none restart none"
  },
  duration: 3,
  zoom: 1.2,
  ease: 'elastic'
});
  
      gsap.from('.progress', {
        scrollTrigger: {
          trigger: ".button-contact",
          toggleActions: "restart none restart none"
        },
          duration: .3,
          y: -200, //'random(-500,500)',
          scale: 0,
          stagger: 0.5,
          //  delay: 2 // it's better to use timeline
      });

      gsap.from('.about-me-animation', {
        scrollTrigger: {
          trigger: ".button-contact",
          toggleActions: "restart none restart none"
        },
          duration: .3,
          x: -200, //'random(-500,500)',
          scale: 0,
          stagger: 0.5,
          //  delay: 2 // it's better to use timeline
      });


      gsap.from('.circle', {
        scrollTrigger: {
          trigger: ".circle",
          toggleActions: "restart none restart none"
        },
          duration: .3,
          x: -200, //'random(-500,500)',
          scale: 0,
          stagger: 0.5,
          //  delay: 2 // it's better to use timeline
      });

      gsap.from('.h2-logros', {
        scrollTrigger: {
          trigger: ".circle",
          toggleActions: "restart none restart none"
        },
          duration: .3,
          x: 200, //'random(-500,500)',
          scale: 0,
          stagger: 0.5,
          //  delay: 2 // it's better to use timeline
      });

      gsap.from('.span-logros', {
        scrollTrigger: {
          trigger: ".circle",
          toggleActions: "restart none restart none"
        },
          duration: .3,
          x: 200, //'random(-500,500)',
          scale: 0,
          stagger: 0.4,
          //  delay: 2 // it's better to use timeline
      });


      gsap.from('.section-contact', {
        scrollTrigger: {
          trigger: ".section-contact",
          toggleActions: "restart none restart none"
        },
          duration: 2,
          x: 200, //'random(-500,500)',
          scale: 1.2,
          //  delay: 2 // it's better to use timeline
      });

    
      // CONTROLS

      // document.querySelector('.play').onclick = () => tween.play();
      // document.querySelector('.pause').onclick = () => tween.pause();
      // document.querySelector('.reverse').onclick = () => tween.reverse();
      // document.querySelector('.slow').onclick = () => tween.timeScale(.2);

      // TIMELINE 

      // let tl = gsap.timeline({ repeat: 1, yoyo: true });
      // tl.from('#logo', {
      //     duration: 2,
      //     rotate: 360
      // });

      // LABEL 

      //tl.addLabel('label1', "+=1");

      // tl.from('.circle', {
      //     duration: .2,
      //     scale: 0,
      //     stagger: .5
      // }, '+=1');

      // REPEAT (-1 infinite | yoyo)

////scrollTrigger