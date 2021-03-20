class FirstQuestion {
 constructor(){
    this.question1 = createElement('h3');
    this.option1 = createButton('First option here');
    this.option2 = createButton('Second option here');
    this.option3 = createButton('Third option here');
    this.option4 = createButton('Fourth option here');
 }

 display(){
   this.question1.html("First Question here");
   this.question1.position(100,100);

   this.option1.position(100,200);
   this.option2.position(100,250);
   this.option3.position(100,300);
   this.option4.position(100,350);
 }



}