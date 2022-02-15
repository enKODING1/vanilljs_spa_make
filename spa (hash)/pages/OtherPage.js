export class OtherPage{
    constructor({router}){
      this.router = router;
   }

  mount(){
      const button = document.querySelector('.main-button');
      button.onclick = ()=>{
          this.router.push('main');
      }
  }

    render(){
      return `<span>다른 페이지</span>
                <button type="button" class="main-button">Other Page</button>`;
    }
}