/**
 * Game, character link en rechts bewegen
 * Zodra item rechts is, even wachten
 * Zodra item links is score optellen in alien
 * Scores optellen in Game
 * 
 * Cheatsheet:
 * Reference: ///<reference path=".ts" />
 * Gameloop: requestAnimationFrame(() => this.gameLoop())
 * Event in Typescript: object.addEventListener("click", () => this.onClick())
 * CSS translate: domobject.style.transform = `translate(${x}px, ${y}px)`
 * Remove HTML: domobject.remove()
 */

/**
 * Game need alien
 * ..so alien first
 */
///<reference path="alien.ts" />
///<reference path="game.ts" />