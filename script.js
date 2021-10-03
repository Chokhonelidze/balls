class ball {
    constructor(element,cont,diameter){
        let obj =new content(cont);
        let elem = document.createElement("div");
        elem.style.backgroundColor = obj.color;
        elem.className = 'ball';
        elem.id = element;  
        elem.style.width = diameter +'px';
        elem.style.height = diameter +'px';
        elem.style.left = 0;
        elem.style.top = 0;
        document.body.appendChild(elem);  
        this.element = document.getElementById(element); 
        this.obj = obj; 
    }
    throwBall(deg,force){
        this.element.velocityX = force;
        this.element.velocityY = 0;
        this.element.directionX = true;
        this.element.directionY = true;
    }
    motion(){
       if(window.innerWidth < parseInt(this.element.style.left)){
           this.element.directionX = false;
       } 
       if(parseInt(this.element.style.left) < 0){
           this.element.directionX = true;
       }
       if(this.element.directionX){

           this.element.style.left = `${parseInt(this.element.style.left) + this.element.velocityX}px`;
           
       }
       else{
           this.element.style.left = parseInt(this.element.style.left) - this.element.valocityX + 'px';
       }
       if(window.innerHeight <= parseInt(this.element.style.top)){
          this.element.directionY = false;
       }
       if(parseInt(this.element.style.top) <= 0 || this.element.valocityY < 0){
           this.element.directionY = true;
       }
       if(this.element.directionY){
        this.element.valocityY = this.element.valocityY + this.getGravity();

        this.element.style.top = parseInt(this.element.style.top) +  this.element.valocityY +'px';
        console.log(this.element.valocityX,this.element.valocityY);
        
       }
       else{
        this.element.valocityY = this.element.valocityY - this.getGravity();
           this.element.style.top = parseInt(this.element.style.top) - this.element.valocityY + 'px';
       }
       if(Math.abs(this.element.valocityY)<=gravity){
          this.element.valocityY=0;
       }
    
    }
    getGravity(velocity){
        return gravity * this.getMass();
    }
    getMass(){
        let r = parseInt(this.element.style.width)/2* 0.0264583333;
        let v = 4* Math.PI*Math.pow(r,3)/3;
        let mass = this.obj.density * v;
        return mass;

    }
}
class content{
    constructor(content){
        switch(content){
            case "Aluminum":
                this.density = 2.73;
                this.color = "#d0d5db";
                break;
            case "Steel":
                this.density = 8.02;
                this.color = "#43464B";
                break;
            case "Copper":{
                this.density=8.91;
                this.color = "#B87333";
            }
            case "Iron":
                this.density=7.2;
                this.color = "#CBCDCD";
                break;         
            case "Titanium" :
                this.density = 4.51;
                this.color = "#878681";
                break;
            case "Lead" : 
                this.density = 11.350;
                this.color = "#525b55";
                break;
            
            case "Wood" : 
                this.density= 0.46;
                this.color="#966F33";
                break;
            
        }

    }

}
