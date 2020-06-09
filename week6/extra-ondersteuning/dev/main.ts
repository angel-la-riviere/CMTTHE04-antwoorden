/**
 * Cheatsheet:
 * Reference: ///<reference path=".ts" />
 * Gameloop: requestAnimationFrame(() => this.gameLoop())
 * Event in Typescript: object.addEventListener("click", () => this.onClick())
 * CSS translate: domobject.style.transform = `translate(${x}px, ${y}px)`
 * Remove HTML: domobject.remove()
 * 
 * Collisions
 */

///<reference path="alien.ts" />
///<reference path="specialAlien.ts" />
///<reference path="game.ts" />

window.addEventListener("load", () => new Game());