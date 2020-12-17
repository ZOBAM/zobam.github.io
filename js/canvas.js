class Components{
    constructor(context){
        //this.context = el.getContext("2d");
        this.context = context;
    }
    drawnComps = [];
    startX;
    startY;
    width;
    height;
    color;
    //speed = 1;
    vSpace = 2;//vertical spacing between overlapping comps
    hSpace = 2;//horizontal spacing between overlapping comps
    addComp(x1 = 0, y1 = 0, w = 10, h = 10, color = "green"){
        this.startX = x1;
        this.startY = y1;
        this.width = w;
        this.height = h;
        this.color = color;
        if(this.drawnComps.length){
            let clearY = 0;
            for(let obj of this.drawnComps){
                if(this.drawnComps.length == 1)
                    clearY += obj.startX + obj.height;
                else
                    clearY = obj.startY + obj.height;
            }
            if(this.startY<clearY){
                this.startY = clearY + this.vSpace;
            }
        }
        this.drawnComps.push(
            {startX: this.startX, startY: this.startY, width: this.width, height: this.height, color:this.color,speedX: 1,speedY:1}
        );
    }
    draw(){
        /* this.startX = x1;
        this.startY = y1;
        this.width = w;
        this.height = h;
        if(this.drawnComps.length){
            let clearY = 0;
            for(let obj of this.drawnComps){
                if(this.drawnComps.length == 1)
                    clearY += obj.startX + obj.height;
                else
                    clearY = obj.startY + obj.height;
            }
            if(this.startY<clearY){
                this.startY = clearY + this.vSpace;
            }
        } */
        this.context.clearRect(0,0,400,300);
        for(let obj of this.drawnComps){
            this.context.fillStyle = obj.color;
            this.context.fillRect(obj.startX, obj.startY, obj.width, obj.height);
        }
    }
    move(){
        for(let obj of this.drawnComps){
            if((obj.startX + obj.width) >= 400){
                obj.speedX = -1;
            }
            if(obj.startX<=0){
                obj.speedX = 1;
            }
            if((obj.startY + obj.height) >= 300){
                obj.speedY = -1;
            }
            if(obj.startY<=0){
                obj.speedY = 1;
            }
            obj.startX += obj.speedX;
            obj.startY += obj.speedY;
        }
    }//end move
    start(){
        setInterval(()=>{
            this.move();
            this.draw();
        }, 10);
    }
}
var el = document.querySelector('#canvas');
el.style.marginLeft = "2rem";
el.addEventListener('click',function(e){
    console.log(e);
    alert("C clicked");
})
var ctx = el.getContext('2d');
var comp = new Components(ctx);
comp.addComp(0,0,40,30,'red');
comp.addComp(45,0,40,30,'blue');
comp.addComp(0,0,40,30);
comp.addComp(30,0,40,30,'pink');
comp.addComp(30,0,40,30,'pink');
comp.addComp(30,0,40,30,'pink');
comp.addComp(30,0,40,30,'pink');
comp.addComp(30,0,40,30,'pink');
comp.addComp(15,0,40,30,'purple');
comp.draw();
comp.start();
console.log(comp.drawnComps.length);
console.log(comp.drawnComps);