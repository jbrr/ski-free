/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Skier = __webpack_require__(1);
	var reportCollisions = __webpack_require__(2);
	var obstacleGenerator = __webpack_require__(7);
	var yetiEnding = __webpack_require__(11);
	var Yeti = __webpack_require__(12);

	var canvas = document.getElementById('skifree');
	var ctx = canvas.getContext('2d');
	var stopped = false;
	var spriteMapImg = new Image();
	spriteMapImg.src = 'https://s3.amazonaws.com/jbrr-turing/assets/spritemap.png';

	function keyPressed(event, skier) {
	  if (event.keyCode === 37) {
	    skier.moveLeft();
	  } else if (event.keyCode === 39) {
	    skier.moveRight();
	  }
	}

	var stopCheck = function stopCheck(skier, yeti) {
	  if (Math.round(yeti.x) === Math.round(skier.x) && Math.round(yeti.y) === Math.round(skier.y)) {
	    skier.lives = 0;
	  }
	  if (skier.lives === 0) {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    stopped = true;
	  }
	};

	var start = function start(skier, yeti, obstacles, spriteMapImg) {
	  if (stopped === false) {
	    requestAnimationFrame(function gameLoop() {
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	      skier.draw(spriteMapImg);
	      obstacleGenerator(obstacles, skier, canvas, ctx);
	      reportCollisions(obstacles, skier);
	      yetiEnding(skier, yeti);
	      stopCheck(skier, yeti);
	      requestAnimationFrame(gameLoop);
	    });
	  }
	};

	function init() {
	  document.addEventListener("keydown", function (event) {
	    keyPressed(event, skier);
	  }, false);
	  var yeti = new Yeti({ canvas: canvas, context: ctx });
	  var skier = new Skier({ canvas: canvas, context: ctx });
	  var obstacles = [];
	  start(skier, yeti, obstacles);
	}

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function Skier(options) {
	  this.x = options.canvas.width / 2;
	  this.y = 150;
	  this.width = 10;
	  this.height = 10;
	  this.maxWidth = options.canvas.width;
	  this.context = options.context;
	  this.lives = 5;
	  this.crashed = false;
	  this.distance = 0;
	}

	Skier.prototype.moveRight = function () {
	  if (this.x < this.maxWidth - this.width) {
	    this.x += 5;
	  }
	  return this;
	};

	Skier.prototype.moveLeft = function () {
	  if (this.x > 3) {
	    this.x -= 5;
	  }
	  return this;
	};

	Skier.prototype.draw = function (spriteMapImg) {

	  var spriteMap = {
	    'down': { 'x': 0, 'y': 0 },
	    'left': { 'x': 16, 'y': 0 },
	    'right': { 'x': 32, 'y': 0 },
	    'fullLeft': { 'x': 48, 'y': 0 },
	    'fullRight': { 'x': 64, 'y': 0 },
	    'crashed': { 'x': 80, 'y': 0 }
	  };

	  this.context.fillStyle = "black";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	module.exports = Skier;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var reportCollisions = __webpack_require__(3);

	module.exports = reportCollisions;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isColliding = __webpack_require__(4);

	var reportCollisions = function reportCollisions(obstacles, skier) {
	  for (var i = 0; i < obstacles.length; i++) {
	    isColliding(skier, obstacles[i]);
	  }
	};

	module.exports = reportCollisions;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayContainsObject = __webpack_require__(5);
	var collisionObstacles = [];
	var hypotenuse = __webpack_require__(6);

	var isColliding = function isColliding(skier, obstacle) {
	  if (hypotenuse(skier, obstacle) < skier.width) {
	    skier.crashed = true;
	    if (arrayContainsObject(obstacle, collisionObstacles) === false) {
	      collisionObstacles.push(obstacle);
	      skier.lives -= 1;
	      console.log(skier.lives);
	    }

	    document.onkeyup = function () {
	      skier.crashed = false;
	    };
	  }
	};

	module.exports = isColliding;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	function arrayContainsObject(obj, list) {
	  var i;
	  for (i = 0; i < list.length; i++) {
	    if (list[i] === obj) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayContainsObject;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	function hypotenuse(skier, obstacle) {
	  return Math.sqrt(Math.pow(skier.x + skier.width / 2 - (obstacle.x + obstacle.width / 2), 2) + Math.pow(skier.y - obstacle.y, 2));
	}

	module.exports = hypotenuse;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tree = __webpack_require__(8);
	var Rock = __webpack_require__(9);
	var drawObstacles = __webpack_require__(10);

	var obstacleGenerator = function obstacleGenerator(obstacles, skier, canvas, ctx) {
	  if (Math.random() > 0.98) {
	    obstacles.push(new Tree({ canvas: canvas, context: ctx }));
	  }
	  if (Math.random() > 0.98) {
	    obstacles.push(new Rock({ canvas: canvas, context: ctx }));
	  }
	  drawObstacles(obstacles, skier);
	};

	module.exports = obstacleGenerator;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	function Tree(options) {
	  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
	  this.y = 600;
	  this.width = 10;
	  this.height = 10;
	  this.maxWidth = options.canvas.width;
	  this.context = options.context;
	}

	Tree.prototype.go = function () {
	  this.context.fillStyle = "green";
	  this.context.fillRect(this.x, this.y--, this.width, this.height);
	  return this;
	};

	Tree.prototype.stop = function () {
	  this.context.fillStyle = "green";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	module.exports = Tree;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	function Rock(options) {
	  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
	  this.y = 600;
	  this.width = 10;
	  this.height = 10;
	  this.maxWidth = options.canvas.width;
	  this.context = options.context;
	}

	Rock.prototype.go = function () {
	  this.context.fillStyle = "grey";
	  this.context.fillRect(this.x, this.y--, this.width, this.height);
	  return this;
	};

	Rock.prototype.stop = function () {
	  this.context.fillStyle = "grey";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	module.exports = Rock;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var drawObstacles = function drawObstacles(obstacles, skier) {
	  for (var i = 0; i < obstacles.length; i++) {
	    if (skier.crashed === false) {
	      obstacles[i].go();
	      skier.distance += 0.3;
	    } else {
	      obstacles[i].stop();
	    }
	  }
	};

	module.exports = drawObstacles;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	var yetiEnding = function yetiEnding(skier, yeti) {
	  if (skier.distance > 4000 && Math.random() > 0.995) {
	    yeti.aggressive = true;
	  }

	  if (yeti.aggressive === true) {
	    yeti.attack(skier);
	  }
	};

	module.exports = yetiEnding;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	function Yeti(options) {
	  this.x = 4;
	  this.y = 10;
	  this.width = 10;
	  this.height = 10;
	  this.aggressive = false;
	  this.context = options.context;
	}

	Yeti.prototype.attack = function (skier) {
	  this.context.fillStyle = "red";
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
	  this.x += Math.cos(this.rotation);
	  this.y += Math.sin(this.rotation);
	  return this;
	};

	module.exports = Yeti;

/***/ }
/******/ ]);