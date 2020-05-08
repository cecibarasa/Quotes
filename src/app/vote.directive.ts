import { Directive } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class VoteDirective {

  constructor(
    public description:string,
    public name:string,
    public completeDate:Date, 
    public vote:any,
    public downvote:any
) {
  this.vote=0;
  this.downvote=0;
 }

}
