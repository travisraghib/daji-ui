import { trigger, transition, style, animate } from '@angular/core';

export class AnimationHelper {
  public static drop = trigger(
    'drop', [
      transition(':enter', [
        style({ transform : 'translateY(-100%)', opacity : 0 }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateY(0)', opacity : 1 }))
      ]),
      transition(':leave', [
        style({ transform : 'translateY(0)', opacity : 1 }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateY(-100%)', opacity : 0 }))
      ])
    ]
  );
  
  public static slideToRight = trigger(
    'slideToRight', [
      transition(':enter', [
        style({ transform : 'translateX(-100%)' }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateX(0)', opacity : 1 }))
      ]),
      transition(':leave', [
        style({ transform : 'translateX(0)', opacity : 1 }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateX(-100%)', opacity : 0 }))
      ])
    ]
  );
  
  public static slideToLeft = trigger(
    'slideToLeft', [
      transition(':enter', [
        style({ transform : 'translateX(100%)' }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform : 'translateX(0)' }),
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform : 'translateX(100%)' }))
      ])
    ]
  );
  
  public static halfFade = trigger(
    'halfFade', [
      transition(':enter', [
        style({ opacity : 0 }),
        animate('750ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity : 0.5 }))
      ]),
      transition(':leave', [
        style({ opacity : 0.5 }),
        animate('750ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity : 0 }))
      ])
    ]
  );
  
}