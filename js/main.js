

$(function(){
    var mobileActive = false;
	var desktopActive = false;
    
    $(document).ready(function () {

        // init scroll magic controller
        var controller = new ScrollMagic.Controller();


       
       //  .busint-header-bottom section animations

        $('.busint-header-bottom').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax(); 

            itemAnimLeft
                .from('.busint-header-bottom .busint-left-block .busint-vector-img', 0.7, { x: -60, opacity: 0, ease: Power1.easeNone })
                .from('.busint-header-bottom .busint-left-block .busint-blue-box', 0.2, {  opacity: 0, ease: Power1.easeNone });

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 500})
                .setTween( itemAnimLeft )
                .addTo(controller);

            var itemAnimRight = new TimelineMax(); 

            itemAnimRight
                .from('.busint-header-bottom .busint-right-block .busint-vector-img', 0.7, { x: 60, opacity: 0, ease: Power1.easeNone })
                .from('.busint-header-bottom .busint-right-block .busint-blue-box', 0.2, {  opacity: 0, ease: Power1.easeNone })
                .from('.busint-header-bottom .busint-block p', 0.7, {  opacity: 0, ease: Power1.easeNone });


             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 500})
                .setTween( itemAnimRight )
                .addTo(controller);
        });



        $('.busint-comparison-section .busint-comparison-row .busint-left').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 
            itemAnim
                .from($(element), 0.7, { x: -60, opacity: 0, ease: Power1.easeNone });

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnim )
                .addTo(controller);
           
        });


        $('.busint-comparison-section .busint-comparison-row .busint-right').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 
            itemAnim
                .from($(element), 0.7, { x: 60, opacity: 0, ease: Power1.easeNone });

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnim )
                .addTo(controller);
           
        });


        $('.busint-comparison-section .busint-comparison-row .busint-vs').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 
            itemAnim
                .from($(element).find('h2'), 0.5, { opacity: 0,  ease:Power4.easeOut })
                .from($(element).find('img'), 0.7, { opacity: 0, scale: 0.5,  ease:Power4.easeOut })
                .from($(element).parent().find('.busint-bottom p'), 0.5, { opacity: 0,  ease:Power4.easeOut });

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnim )
                .addTo(controller);
           
        });


        $('.busint-section-1').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax(); 
            itemAnimLeft
                .from($(element).find('h2'), 1, { opacity: 0, x: -60,  ease:Power4.easeOut })  

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });


        $('.busint-section-1').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax(); 
            itemAnimLeft 
                .from($(element).find('h4'), 1, { opacity: 0, x: -80,  ease:Power4.easeOut })   

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });

        $('.busint-section-1').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax(); 
            itemAnimLeft  
                .from($(element).find('p.busint-w-1'), 1, { opacity: 0, x: -100,  ease:Power4.easeOut })  

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });


        $('.busint-section-1 .busint-row-3').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax();  

            itemAnimLeft  
                .from($(element).find('.busint-mobile'), 1, { opacity: 0, x: -40, scale: 0.5,  ease:Power4.easeOut })  
                .from($(element).find('.busint-block-desc p'), 0.2, { opacity: 0, x: -40,  ease:Power4.easeOut }, 1, 'scene1')  
                .staggerFrom($(element).find('.busint-box'), 0.2, { autoAlpha: 0, scale: 0.5, ease: Power2.easeOut }, 0.2, 'scene1')
                

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });


         $('.busint-discriptive-content-section .busint-section-1 .busint-row-4').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax();  

            itemAnimLeft  
                .from($(element).find('p'), 1, { opacity: 0, x: -40,  ease:Power4.easeOut })  
                .from($(element).find('.magnifying-glasses'), 0.5, { opacity: 0, scale: 0.5,  ease:Power4.easeOut })   
                

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });

 

        $('.busint-innovative-businesses .busint-r2').each( function (index, element) { 
             
            var itemAnimLeft = new TimelineMax();  

            itemAnimLeft  
                .from($(element).find('img'), 0.7, { opacity: 0, x: 40, ease:Power4.easeOut })  
                .from($(element).find('.busint-img-line'), 0.7, { opacity:0,  width: 0, left: 100, ease:Power4.easeOut })  
                .from($('.busint-innovative-businesses').find('.busint-open-architectures h3'), 0.4, { opacity:0, ease:Power4.easeOut })  
                .from($('.busint-innovative-businesses').find('.busint-open-architectures .busint-architectures-list-wrapper'), 0.2, { opacity:0, ease:Power4.easeOut })  
                .staggerFrom($('.busint-innovative-businesses').find('.busint-open-architectures .busint-architectures-list-item'), 0.2, { autoAlpha: 0, scale: 0.5, ease: Power2.easeOut }, 0.2, 'scene1')
                

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnimLeft )
                .addTo(controller);
           
        });


        $('.busint-vector3').each( function (index, element) { 
             
            var itemAnim = new TimelineMax();  

            itemAnim  
                .from($(element), 0.7, { opacity: 0, ease:Power4.easeOut })  
                //.from($(element).find('.busint-v1'), 0.3, { opacity: 0, scale: 0.5, ease:Power4.easeOut })  
                .from($(element).find('.busint-v1 .busint-img-container'), 0.3, { opacity: 0, scale: 0.5, x: 50, y: 50, ease:Power4.easeOut })  
                .from($(element).find('.busint-v3 .busint-img-container'), 0.3, { opacity: 0, scale: 0.5, x: 50, y: -50, ease:Power4.easeOut })  
                .from($(element).find('.busint-v2 .busint-img-container'), 0.3, { opacity: 0, scale: 0.5, x: -50, y: 50, ease:Power4.easeOut })    

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnim )
                .addTo(controller);
           
        });


         $('.busint-direction').each( function (index, element) { 
             
            var itemAnim = new TimelineMax();  

            itemAnim  
                .from($(element), 1, { opacity: 0, x: -60, y: 60, ease:Power4.easeOut })   

            var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
                .setTween( itemAnim )
                .addTo(controller);
           
        });
 
       

         //Header animation

        $('.busint-anim-up').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.7, { opacity: 0, y: 60, ease: Power1.easeNone } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        }); 

        $('.busint-anim-down').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.7, { opacity: 0, y: -60, ease: Power1.easeNone } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        }); 

        $('.busint-anim-down-lg').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.7, { opacity: 0, y: -100, ease: Power1.easeNone } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        }); 

        $('.busint-anim-left').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.7, { opacity: 0, x: -40, ease: Power2.easeOut } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        });


        $('.busint-anim-right').each( function (index, element) { 
             
            var item = new TimelineMax(); 

            item.from($(element), 0.7, { opacity: 0, x: 40, ease: Power2.easeOut } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( item )
                .addTo(controller)
        });


        $('.busint-fade-in').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.5, { opacity: 0, ease: Power1.easeNone } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        }); 


        $('.busint-zoom-in').each( function (index, element) { 
             
            var itemAnim = new TimelineMax(); 

            itemAnim.from($(element), 0.5, { opacity: 0,  scale: 0.5, ease: Power1.easeNone } );

             var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 150})
                .setTween( itemAnim )
                .addTo(controller)
        }); 



        




        // Opacity changes
        $('.appear').each(function (index, element) {
            var listAlpha1Tl = new TimelineMax();
            var childElement = $(element).find('.item');

            listAlpha1Tl
                .staggerFrom(childElement, 1, { autoAlpha: 0, ease: Power2.easeOut }, 0.5, 'scene1');

            new ScrollMagic.Scene({ triggerElement: element, offset: -100 })
                .setTween(listAlpha1Tl)
                .addTo(controller);
        });


        //Left to right animation
        $('.left-icon').each(function (index, element) {
			var lefttoRight = new TimelineMax();

			lefttoRight
				.from($(element), 1, { x: '-=120', ease: Power1.easeNone });

			new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 }, 2)
				.setTween(lefttoRight)
				.addTo(controller);
		});

        //Right to left animation
        $('.right-icon').each(function (index, element) {
			var righttoLeft = new TimelineMax();

			righttoLeft
				.from($(element), 1, { x: '+=120', ease: Power1.easeNone });

			new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 }, 2)
				.setTween(righttoLeft)
				.addTo(controller);
        });
        
        // Stagger from left/opacity
        $('.left--x1').each(function (index, element) {
            var listX1Tl = new TimelineMax();
            var childElement = $(element).find('.item');

            listX1Tl
                .staggerFrom(childElement, 1, { xPercent: '-50%', autoAlpha: 0, ease: Power2.easeOut }, 0.1, 'scene1');

            new ScrollMagic.Scene({ triggerElement: element, offset: -100 })
                .setTween(listX1Tl)
                .addTo(controller);
        });

        //top to bottom
        $('.top-to-bottom').each(function (index, element) {
            var blockY2Tl = new TimelineMax();
    
            blockY2Tl
                .from($(element), 1, { y: '+=100', opacity: 0, ease: Power1.easeNone });
    
            new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 })
                .setTween(blockY2Tl)
                .addTo(controller);
        });
            
        
    });
});