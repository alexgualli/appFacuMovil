export default class Service{
    public url:string;
  
    constructor(url:string){
      this.url=`http://192.168.8.143:1337/api/v1${url}`;
    }
  }