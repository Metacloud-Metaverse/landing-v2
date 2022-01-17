import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export class ComponentAnimation {
    static componentAnimation = trigger('componentAnimation',[
        transition('void => *', [
          query('.component-animation', style({ transform: 'translateY(100px)', opacity: 0 })),
          query('.component-animation' ,
          stagger('150ms', [
            animate('800ms ease', style({ transform: 'translateY(0)', opacity: 1 }))
          ]))
        ])
    ]);
}