export default class Service{
    public url:string;
  
    constructor(url:string){
      this.url=`http://localhost:8080/api/v1${url}`;
    }
  }