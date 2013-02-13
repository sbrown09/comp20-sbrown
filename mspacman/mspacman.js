img = new Image();
img.src = 'pacman10-hp-sprite.png';
img.onload = function draw() {
	canvas = document.getElementById('gameboard');
	ctx = canvas.getContext('2d');
    ctx.drawImage(img, 320, 0, 466, 136, 0, 0, 464, 136);
    ctx.drawImage(img, 78, 21, 23, 21, 37, 92, 23, 21);
    ctx.drawImage(img, 78, 99, 23, 21, 60, 92, 23, 21);
	
	}    