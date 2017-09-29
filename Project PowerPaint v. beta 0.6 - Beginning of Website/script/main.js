var sliderban = false;
var otherside = false;
var size, shape, strokeFat;
var rSlider, gSlider, bSlider, aSlider;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	aSlider = createSlider(0, 255, 255);
	aSlider.position(20, 200);
	rSlider = createSlider(0, 255, 0);
	rSlider.position(20, 20);
	gSlider = createSlider(0, 255, 173);
	gSlider.position(20, 50);
	bSlider = createSlider(0, 255, 173);
	bSlider.position(20, 80);
	size = createSlider(1, 150, 15);
	size.position(20, 110);
	shape = createSlider(1, 10, 1);
	shape.position(20, 140);
	strokeFat = createSlider(1, 10, 4);
	strokeFat.position(20, 170);
}

function draw() {
	var a = aSlider.value();
	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();
	var s = size.value();
	var fat = strokeFat.value();
	text("red", 165, 35);
	text("green", 165, 65);
	text("blue", 165, 95);
	text("size", 165, 125);
	text("shape", 165, 155);
	text("stroke weight", 165, 185);
	text("alpha", 165, 215);

	if (mouseX < 200) {
		sliderban = true;
	} else {
		sliderban = false;
	}
	if (!otherside) {
		if (mouseIsPressed && !sliderban) {
			noStroke();
			fill(r, g, b, a);
			if (shape.value() === 3) {
				ellipse(mouseX, mouseY, s, s);
			} else if (shape.value() === 2) {
				rectMode(CENTER);
				rect(mouseX, mouseY, s, s);
			} else if (shape.value() === 6) {
				stroke(r, g, b, a);
				strokeWeight(fat);
				line(mouseX, mouseY + s, mouseX, mouseY - s);
			} else if (shape.value() === 7) {
				stroke(r, g, b, a);
				strokeWeight(fat);
				line(mouseX + s, mouseY, mouseX - s, mouseY);
			} else if (shape.value() === 4) {
				triangle(mouseX - s, mouseY + s / 2, mouseX, mouseY - s, mouseX + s, mouseY + s / 2);
			} else if (shape.value() === 1) {
				stroke(r, g, b);
				strokeWeight(s);
				line(mouseX, mouseY, pmouseX, pmouseY);
			} else if (shape.value() === 8) {
				circGrid(s, r, g, b, a);
			} else if (shape.value() === 9) {
				qubeGrid(s, r, g, b, a);
			} else if (shape.value() === 5) {
				triangle(mouseX - s, mouseY - s / 2, mouseX, mouseY + s, mouseX + s, mouseY - s / 2);
			} else if (shape.value() === 10) {
				beginShape();
				vertex(mouseX - s, mouseY - s / 2);
				vertex(mouseX, mouseY - s);
				vertex(mouseX + s, mouseY - s / 2);
				vertex(mouseX + s, mouseY + s / 2);
				vertex(mouseX, mouseY + s);
				vertex(mouseX - s, mouseY + s / 2);
				endShape(CLOSE);
			}

		} else if (keyIsPressed, key == 'a') {
			stroke(0);
			strokeWeight(s + 25);
			line(mouseX, mouseY, pmouseX, pmouseY);
		} else if (keyIsPressed, key == 'o') {
			background(r, g, b);
		} else if (keyIsPressed, key == 'q' && !sliderban) {
			strokeWeight(s);
			stroke(random(0, 255), random(0, 255), random(0, 255));
			line(mouseX,mouseY,pmouseX,pmouseY);
		} else if (keyIsPressed, key == 'w' && !sliderban) {
			stroke(r, g, b, a);
			strokeWeight(fat);
			fill((r + g + b) / 3, a);
			beginShape();
			vertex(mouseX, mouseY);
			vertex(mouseX + s, mouseY + s / 2);
			vertex(mouseX + s / 2, mouseY + s);
			vertex(mouseX + s * 2, mouseY - s);
			vertex(mouseX - s * 3, mouseY);
			endShape(CLOSE);
		} else if (keyIsPressed, key == 's' && !sliderban) {
			stroke(r, g, b, a);
			strokeWeight(fat);
			fill((r + g + b) / 3, a);
			beginShape();
			vertex(mouseX, mouseY - s);
			vertex(mouseX - s / 2 + s / 4, mouseY + s);
			vertex(mouseX + s, mouseY);
			vertex(mouseX - s, mouseY);
			vertex(mouseX + s / 2 + s / 4, mouseY + s);
			endShape(CLOSE);
		} else if (keyIsPressed, key == 'i' && !sliderban) {
			background(0);
		}
	}
	noStroke();
	fill(r, g, b, a);
	ellipse(100, height / 2, 75);

}

function circGrid(d, r, g, b, a) {
	noFill();
	stroke(r, g, b, a);
	strokeWeight(4);
	ellipse(mouseX, mouseY, d);
	ellipse(mouseX + d, mouseY, d);
	ellipse(mouseX - d, mouseY, d);
	ellipse(mouseX, mouseY + d, d);
	ellipse(mouseX, mouseY - d, d);
	ellipse(mouseX + d, mouseY + d, d);
	ellipse(mouseX - d, mouseY - d, d);
	ellipse(mouseX + d, mouseY - d, d);
	ellipse(mouseX - d, mouseY + d, d);
}

function qubeGrid(wh, r, g, b, a) {
	rectMode(CENTER);
	s = wh;
	noFill();
	stroke(r, g, b, a);
	strokeWeight(4);
	rect(mouseX, mouseY, s, s);
	rect(mouseX + s, mouseY, s, s);
	rect(mouseX - s, mouseY, s, s);
	rect(mouseX, mouseY + s, s, s);
	rect(mouseX, mouseY - s, s, s);
	rect(mouseX + s, mouseY + s, s, s);
	rect(mouseX - s, mouseY - s, s, s);
	rect(mouseX + s, mouseY - s, s, s);
	rect(mouseX - s, mouseY + s, s, s);
}
