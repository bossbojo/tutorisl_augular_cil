import { transition,trigger,style,state,animate} from '@angular/animations';

export const AppAnimation = [
 trigger('MyFade',[
      // state('FadeIn',style({
        
      // }))
      transition(':enter',[
        style({ 
          opacity:0
        }),
        animate(200,style({
          opacity:1
        }))
      ]),
      transition(':leave',[
        animate(200,style({
          opacity:0
        }))
      ])

    ]),
    trigger('MyFade2',[
        transition(':enter',[
          style({ 
            transform:'translateX(-100%)'
          }),
          animate(500)
        ]),
        transition(':leave',[
          animate(500,style({
            transform:'translateX(100%)'
          }))
        ])
  
      ])

]
