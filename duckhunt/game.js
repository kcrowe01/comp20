function draw()
{
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	image = new Image();
	image.onload = function() {

	//dirt, grass, and bushes
	ctx.drawImage(image, 0, 400, 900, 500, 0, 0, 800, 600);
	//bird 1
	ctx.drawImage(image, 205, 150, 40, 40, 200, 200, 75, 75);
	//dog
	ctx.drawImage(image, 178, 0, 65, 45, 500, 452, 130, 90);
	//tree
	ctx.drawImage(image, 0, 270, 80, 130, 40, 295, 160, 260);
	//bird 2
	ctx.drawImage(image, 0, 115, 35, 30, 450, 250, 70, 60);
	//bird 3
	ctx.drawImage(image, 334, 190, 40, 40, 400, 75, 75, 75);
	//bird 4
	ctx.drawImage(image, 166, 115, 40, 30, 75, 20, 80, 60);
	//bird 5
	ctx.drawImage(image, 0, 190, 30, 40, 700, 175, 60, 80);
};
image.src =	"assets/duckhunt.png"; 
}