class abc {
    name = 'kildong'
    constructor (dkj){
        this.name = dkj
    }
    
    
    a=()=>{
        this.name = "haha";
    }
}
let a= new abc('dsds')
a.a();
console.log(a)