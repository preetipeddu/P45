class Form {
 constructor(){
     this.nameInput = createInput("Enter your name here.");
     this.title = createElement("h2");
     this.submitButton = createButton("Submit");
     this.hello = createElement("h2");
     this.reset = createButton("Reset");
 }

 hide(){
     this.nameInput.hide();
     this.title.hide();
     this.submitButton.hide();
 }

 display(){
     this.title.html("Reality Check");
     this.nameInput.position(100,350);
     this.title.position(100,100);
     this.submitButton.position(100,400);
     this.reset.position(600,300);
     
     this.submitButton.mousePressed(()=>{
      this.nameInput.hide();
      this.title.hide();
      this.submitButton.hide();
      player.name = this.nameInput.value();
      playerCount = playerCount + 1;
      player.update();
      player.updateCount(playerCount);
      this.hello.html("Hello " + player.name);
      this.hello.position(600,100);
     })

     this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.update(0);
     })
 }



}