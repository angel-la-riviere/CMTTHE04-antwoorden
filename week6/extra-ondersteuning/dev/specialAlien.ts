class SpecialAlien extends Alien{
    protected draw(){
        this.element = document.createElement('special');
        let game = document.getElementsByTagName('game')[0];
        game.appendChild(this.element);
    }
}