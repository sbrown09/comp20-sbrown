img = new Image();
img.src = 'assets/frogger_sprites.png';
img.onload = function start_game() {
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
    ctx.drawImage(img, 42, 256,35, 40, 10, 400, 35, 40);
    ctx.drawImage(img, 42, 256,35, 40, 90, 400, 35, 40);
    
    //Put in the log
    ctx.drawImage(img, 0, 160, 200, 35, 10, 150, 200, 35);
    
    //Put in the background for the bottom info panel
    ctx.fillStyle="#000000";
	ctx.fillRect(0,506, 399, 65);
	
	//Put in the initial number of lives as frogs (3)
    ctx.drawImage(img, 8, 328, 25, 26, 0, 505, 25, 26);
    ctx.drawImage(img, 8, 328, 25, 26, 25, 505, 25, 26);
    
    //Put in the Level
    ctx.fillStyle="#00FF00";
    ctx.font="23px sans-serif";
    ctx.fillText("Level 1", 60, 530);
    
    //Put in the score
    ctx.fillStyle="#00FF00";
    ctx.font="15px sans-serif";
    ctx.fillText("Score: 0", 3, 555);
	
	

	
	
	}   