var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5e3781f5-8e8c-4e57-83e1-18e06e71ca6a","752a08f6-a9e2-4bc2-8147-33143da93bcf","12db9120-1de7-4522-a385-78b17d79b6cf"],"propsByKey":{"5e3781f5-8e8c-4e57-83e1-18e06e71ca6a":{"name":"person","sourceUrl":null,"frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":12,"version":"1WwzeGEXb2q8AkH3sqYsqWHv5u7Q8ajx","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/5e3781f5-8e8c-4e57-83e1-18e06e71ca6a.png"},"752a08f6-a9e2-4bc2-8147-33143da93bcf":{"name":"maze","sourceUrl":"assets/v3/animations/jEr4oQbFvGYqCx80kgH0vOluvqmrC6A2hwEVwtMkREs/752a08f6-a9e2-4bc2-8147-33143da93bcf.png","frameSize":{"x":400,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":".jOwWxheYcsfVF7grNUXLTT3Q1Sa2Euv","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":300},"rootRelativePath":"assets/v3/animations/jEr4oQbFvGYqCx80kgH0vOluvqmrC6A2hwEVwtMkREs/752a08f6-a9e2-4bc2-8147-33143da93bcf.png"},"12db9120-1de7-4522-a385-78b17d79b6cf":{"name":"Corona","sourceUrl":null,"frameSize":{"x":224,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ulp8fOZBkaTFqBXxeDh7nyIABN5jV1wt","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":225},"rootRelativePath":"assets/12db9120-1de7-4522-a385-78b17d79b6cf.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState="play";

var maze= createSprite(200,200,400,400);
var player = createSprite(14,64);
 player.setAnimation("person");
 maze.setAnimation("maze");
 player.scale=0.4;

var mazeWall = createSprite(3,170,9,280);
var mazeWall2 = createSprite(180, 318,350,9);
var mazeWall3 = createSprite(390,190,9,300);
var mazeWall4 = createSprite(224,60,330,9);
var mazeWall5 = createSprite(317,170,9,90);
var mazeWall6 = createSprite(46, 135,9,60);
var mazeWall7 = createSprite(24, 212,35,9);
var mazeWall8 = createSprite(125,100,9,100);
var mazeWall9 = createSprite(161, 278,9,50);
var mazeWall10 = createSprite(364, 262,90,9);
var mazeWall11 = createSprite(238, 90,9, 50);
var mazeWall12 = createSprite(85, 256,80,9);
var mazeWall13 = createSprite(371,160,50,9);
var mazeWall14 = createSprite(352,185,9,60);
var mazeWall15= createSprite(240, 281,9,50);
var mazeWall16 = createSprite(324,110,70,9);
var mazeWall17 = createSprite(123,228,9,60);
var mazeWall18 = createSprite(240, 256,80,9);
var mazeWall19= createSprite(273,214,40,9);
var mazeWall20 = createSprite(78,184,9,40);
var mazeWall21 = createSprite(110,160,90,9);
var mazeWall22 = createSprite(201,132,9,50);
var v1 = createSprite(200, 200);
v1.setAnimation("Corona");
v1.scale=0.2;
var v2 = createSprite(200, 200);
v2.setAnimation("Corona");
v2.scale=0.2;
var v3 = createSprite(200, 200);
v3.setAnimation("Corona");
v3.scale=0.2;


var wallGroup= createGroup();
wallGroup.add(mazeWall);
wallGroup.add(mazeWall2);
wallGroup.add(mazeWall3);
wallGroup.add(mazeWall4);
wallGroup.add(mazeWall5);
wallGroup.add(mazeWall6);
wallGroup.add(mazeWall7);
wallGroup.add(mazeWall8);
wallGroup.add(mazeWall9);
wallGroup.add(mazeWall10);
wallGroup.add(mazeWall11);
wallGroup.add(mazeWall12);
wallGroup.add(mazeWall13);
wallGroup.add(mazeWall14);
wallGroup.add(mazeWall15);
wallGroup.add(mazeWall16);
wallGroup.add(mazeWall17);
wallGroup.add(mazeWall18);
wallGroup.add(mazeWall19);
wallGroup.add(mazeWall20);
wallGroup.add(mazeWall21);
wallGroup.add(mazeWall22);




function draw() {
 if (keyDown("UP_ARROW")) {
   player.y=player.y-5;
 }
  if (keyDown("DOWN_ARROW")) {
   player.y=player.y+5;
 }
 if (keyDown("LEFT_ARROW")) {
   player.x=player.x-5;
 }
if (keyDown("RIGHT_ARROW")) {
   player.x=player.x+5;
 } 
player.collide(wallGroup);
if (player.isTouching(v1)) {
  gameState="quiz1";
}
if (gameState==="quiz1") {
 wallGroup.setVisibleEach(false);
 player.visible=false;
 v1.visible=false;
 v2.visible=false;
 v3.visible=false;
 maze.visible=false;
text("Is the virus transmitted via food?",200,200);
}
wallGroup.setColorEach("black");



 background("white");
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
