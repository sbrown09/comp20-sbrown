img = new Image();
img.src = 'assets/frogger_sprites.png';
img.onload = function start_game() {
	
	//How many more lives you have
	lives = 3;
	
	//Starting x position of frog
	startx = 175;
	
	//Starting y position of frog
	starty = 472;
	
	//These will be the variables that change as the frog is moved
	xfrog = startx;
	yfrog = starty;
	
	//How much to offset objects
	offsetlives = 25;
	offsetcar = 100
	
	//Game info
	time = 60;
	level = 1;
	score = 0;
	objectspeed = level*2;
	bugfrequency = 5/level;
	xlifefreq = 1/level
	
	
	draw_stuff(lives, offsetlives, offsetcar, xfrog, yfrog);
	
	
	
	}
	function draw_stuff(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	//Put in the water
	ctx.fillStyle="#191970";
	ctx.fillRect(0,0, 399, 267);
	
	//Put in the "FROGGER" up top
    ctx.drawImage(img, 5, 4, 334, 49, 3, 0, 334, 49);
    
    //Put in the finish dock-ish area
    ctx.drawImage(img, 0, 48, 399, 67, 0, 47, 399, 67);
    
    //Put in the top purple roadside
    ctx.drawImage(img, 0, 111, 399, 50, 0, 258, 399, 50);
	
	//Put in the road
	ctx.fillStyle="#000000";
	ctx.fillRect(0,299, 399, 175);
	
	//Put in the bottom purple roadside
    ctx.drawImage(img, 0, 111, 399, 50, 0, 465, 399, 50);
    
    //Put in the cars
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 42, 256, 35, 40, 10 + i*offsetcar, 330, 35, 40);
    }
    
    //Put in the log
    ctx.drawImage(img, 0, 160, 200, 35, 10, 150, 200, 35);
    
    //Put in the background for the bottom info panel
    ctx.fillStyle="#000000";
	ctx.fillRect(0,506, 399, 65);
	
	//Put in the number of lives as frogs
    for(i=0; i < lives - 1; i++){
	    ctx.drawImage(img, 8, 328, 25, 26, 5 + i*offsetlives, 505, 25, 26);
    }
    
    //Put in the frog
    ctx.drawImage(img, 0, 362, 35, 30, xfrog, yfrog, 35, 30);
    
    //Put in the Level
    ctx.fillStyle="#00FF00";
    ctx.font="23px sans-serif";
    ctx.fillText("Level 1", 75, 530);
    
    //Put in the score
    ctx.fillStyle="#00FF00";
    ctx.font="15px sans-serif";
    ctx.fillText("Score: 0", 3, 555);
	
}  
