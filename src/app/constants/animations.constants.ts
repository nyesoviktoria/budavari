import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const toggleAnimation: AnimationTriggerMetadata = trigger('toggle', [
  transition(':enter', [
    style({
      height: '0',
      paddingTop: '0',
      paddingBottom: '0',
      marginTop: '0',
      marginBottom: '0',
      opacity: '0',
    }),
    animate(
      '.3s',
      style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        marginTop: '*',
        marginBottom: '*',
        opacity: '1',
      })
    ),
  ]),
  transition(':leave', [
    style({
      height: '*',
      paddingTop: '*',
      paddingBottom: '*',
      marginTop: '*',
      marginBottom: '*',
      opacity: '1',
    }),
    animate(
      '.3s',
      style({
        height: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginTop: '0',
        marginBottom: '0',
        opacity: '0',
      })
    ),
  ]),
]);
