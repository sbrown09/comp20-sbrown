	
	//How many more lives you have
var	lives = 5;
	
	//Starting x position of frog
var	startx = 173.5;
	
	//Starting y position of frog
var	starty = 455;
	
	//These will be the variables that change as the frog is moved
var	xfrog = startx;
var	yfrog = starty;
	
	//How much to offset objects
var	offsetlives = 25;
var	offsetcar = 100;
	
	//Game info
var	time = 60;
var	level;
var	score = 0;
var	objectspeed = level*2;
var	bugfrequency = 5/level;
var	xlifefreq = 1/level;
var basex = [];
var ymax = starty;
basex['w'] = 10;
basex['y'] = 200;
basex['p'] = 100;
basex['s'] = 50;
basex['t'] = 10;
basex['l'] = [];
basex['l'][0] = 10;
basex['l'][1] = 40;
basex['l'][2] = 200;
basex['l'][3] = 250;
basex['l'][4] = 150;
var offsetlog = 200;
var base = [];
for(i=0;i<5;i++){
	base[i] = false;
}

document.addEventListener("keydown", function(event)
{
	if(event.keyCode == 40){
		yfrog += 30.5;
		console.log(yfrog);
	}
	if(event.keyCode == 38){
		yfrog -= 30.5;
			if(yfrog < ymax){
			ymax = yfrog;
			score += 10;
		}
		console.log(yfrog);
	}
	if(event.keyCode == 37){
		xfrog -= 42;
		console.log(xfrog);
	}
	if(event.keyCode == 39){
		xfrog += 42;
		console.log(xfrog);
	}
			if(yfrog < 90){
			if((xfrog == 5.5)&&(base[0]==false)){
				base[0] = true;
				score+=50;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
			if((xfrog == 89.5)&&(base[1]==false)){
				base[1] = true;
				score+=50;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
			if((xfrog == 173.5)&&(base[2]==false)){
				base[2] = true;
				score+=50;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
			if((xfrog == 257.5)&&(base[3]==false)){
				base[3] = true;
				score+=50;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
			if((xfrog == 341.5)&&(base[4]==false)){
				base[4] = true;
				score+=50;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
			else{
				lives--;
				xfrog = startx;
				yfrog = starty;
				ymax = starty;
			}
		}
}
);




img = new Image();
img.src = 'assets/frogger_sprites.png';
function start_game() {
	
	//These will be the variables that change as the frog is moved
var xfrog = startx;
var yfrog = starty;
level = 1;

	setInterval(function(){x_car()},50);
	function x_car(){
		basex['w'] += 5;
		if(basex['w'] > 399){
			basex['w'] = -300;
		}
		basex['y'] -= 8;
		if(basex['y'] < -300){
			basex['y'] = 400;
		}
		basex['p'] -= 9;
		if(basex['p'] < -300){
			basex['p'] = 400;
		}
		basex['s'] += 4;
		if(basex['s'] > 399){
			basex['s'] = -300;
		}
		basex['t'] -= 3;
		if(basex['t'] < -300){
			basex['t'] = 400;
		}
		for(i=0;i<5;i+=2){
			basex['l'][i] += .5*i + 3;
			if(basex['l'][i] > 600){
				basex['l'][i] = -600;
			}
			if(basex['l'][i] < -600){
				basex['l'][i] = 600;
			}
		}
		for(i=1;i<5;i+=2){
			basex['l'][i] -= .5*i + 3;
			if(basex['l'][i] > 600){
				basex['l'][i] = -600;
			}
			if(basex['l'][i] < -600){
				basex['l'][i] = 600;
			}
		}

		
		draw_stuff()
	}

	

	}
	function draw_stuff(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	//Put in the water
	ctx.fillStyle="#191970";
	ctx.fillRect(0,0, 399, 270);
	
	//Put in the "FROGGER" up top
    ctx.drawImage(img, 5, 4, 334, 49, 8, 8, 334, 49);
    
    //Put in the finish dock-ish area
    ctx.drawImage(img, 0, 48, 399, 67, 0, 58, 399, 67);
    
    //Put in the top purple roadside
    ctx.drawImage(img, 0, 111, 399, 40, 0, 260, 399, 40);
	
	//Put in the road
	ctx.fillStyle="#000000";
	ctx.fillRect(0,299, 399, 175);
	
	//Put in the bottom purple roadside
    ctx.drawImage(img, 0, 111, 399, 50, 0, 450, 399, 50);
    
    //Put in the white cars
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 42, 256, 35, 40, basex['w'] + i*offsetcar, 330, 35, 40);
    }
    
     //Put in the yellow cars
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 82, 256, 31, 40, basex['y'] + i*offsetcar, 300, 31, 40);
    }
    
     //Put in the purple cars
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 2, 256, 31, 40, basex['p'] + i*offsetcar, 360, 31, 40);
    }
    
     //Put in the striped cars
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 4, 296, 35, 32, basex['s'] + i*offsetcar, 390, 35, 32);
    }
      //Put in the trucks
    for(i=0; i < 3; i++){
        ctx.drawImage(img, 107, 296, 56, 30, basex['t'] + i*offsetcar, 420, 56, 30);
    }
    
    //Put in the logs
     for(i=0; i < 5; i++){
     	for(j=0;j<3;j++){
         ctx.drawImage(img, 0, 160, 200, 35,basex['l'][i] + j*offsetlog, 240-30*i, 200, 35);
        }
    }
    
      //Put in the safe frogs
     for(i=0; i < 5; i++){
     	if(base[i] == true){
         ctx.drawImage(img, 78, 367, 26, 23, 16+84*i, 87, 26, 23);
        }
    }
    
    //Put in the background for the bottom info panel
    ctx.fillStyle="#000000";
	ctx.fillRect(0,491, 399, 85);
	
	//Put in the number of lives as frogs
    for(i=0; i < lives - 1; i++){
	    ctx.drawImage(img, 8, 328, 25, 26, 5 + i*offsetlives, 505, 25, 26);
    }
    
    //Put in the frog
    ctx.drawImage(img, 0, 362, 35, 30, xfrog, yfrog, 35, 30);
    
    //Put in the Level
    ctx.fillStyle="#00FF00";
    ctx.font="23px sans-serif";
    ctx.fillText("Level 1", 175, 530);
    
    //Put in the score
    ctx.fillStyle="#00FF00";
    ctx.font="15px sans-serif";
    ctx.fillText("Score:" + score, 3, 555);
	
}  
