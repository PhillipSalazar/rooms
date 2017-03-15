var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var map;
var layer;

function preload() {
game.load.tilemap('stage','main.json', null, Phaser.Tilemap.TILED_JDON);
game.load.image('tiles', 'set.png');
}

function create() {
  game.stage.backgroundColor = '#787878';
  map = game.add.tilemap('scene');
  map.addTilesetImage('stage', 'tiles');

map.setCollisionBetween(1, 12);

layer = map.createLayer('Tile Layer 1');

}

function update() {
}
