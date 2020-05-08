export class Quote {
    showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date, public vote: any, public downvote: any){
    this.showDescription=false;
  }
}
