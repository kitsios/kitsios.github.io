var img;
function preload() {
  img = loadImage('car.jpg');
    imgc = loadImage('carl.png');
  imgk = loadImage('keo.png');
imgb = loadImage('back.png');
imgg = loadImage('game.jpg');
 
  
}


function setup() {
  createCanvas(800, 800);
  xx = width/1.25;
	yy = height/3;
	ww = 20;
	hh = 60;
	x = width/2;
	y = height/2;
	w = 20;
	h = 60;
  ex = 300;
  ey = 100;
  ew = 140;
  eh = 60;
  lives = 3;
  score = 0;
  bon = 0;
}
 

function draw() {
  background(imgb);
 
 
  image(img,ex,ey,ew,eh);
 ////fill(255,0,0);
///rect(ex,ey,ew,eh);
  ex = mouseX;
  ey = mouseY;
	//fill(0,50,0);
	image(imgc,x,y,w,h);
 // fill(50,0,50);
  image(imgk,xx,yy,ww,hh);
  textSize(25);
  fill(255,0,0);
  text('lives:',30,30);
  fill(255,0,0);
  text(lives,100,30);
   fill(0,0,255);
  text('score:',30,70);
  fill(0,0,255);
  text(score,100,70);
   fill(255);
  line(0,10,30,500);
  if(x>0){x-=8;}
  else{x = width;
       y = random(50,750);
      }
  if (x < ex + ew &&
  x + w > ex &&
  y < ey + eh &&
  h + y > ey){
  x = width;
  y = random(50,750);
  lives -=1;
   }
  if(lives <= 0){background (imgg);
					noLoop();
					textSize(70);
					fill(255,255,0);
					text(score,width/2-35,height/1.4);
  
					}
	if(xx>0){xx-=8;}
  else{xx = width;
       yy = random(50,750);
      }
  if (xx < ex + ew &&
  xx + ww > ex &&
  yy < ey + eh &&
  hh + yy > ey){
  xx = width;
  yy = random(50,750);
  score += 1;
  bon +=1;

  }
  if(score >=10)
  { x -= 1;
	xx -= 1;
	}
if(score >=20)
  { x -= 1;
	xx -= 1;
	}
	if(score >=30)
  { x -= 1;
	xx -= 1;
	}
	if(score >=40)
  { x -= 1;
	xx -= 1;
	}
	if(score >=50)
  { x -= 1;
	xx -= 1;
	}
	if(score >=60)
  { x -= 1;
	xx -= 1;
	}
	if(score >=70)
  { x -= 1;
	xx -= 1;
	}
	if(score >=80)
  { x -= 1;
	xx -= 1;
	}
	if(score >=90)
  { x -= 1;
	xx -= 1;
	}
	if(score >=100)
  { x -= 1;
	xx -= 1;
	}
	if(score >=110)
  { x -= 1;
	xx -= 1;
	}
	if(score >=120)
  { x -= 1;
	xx -= 1;
	}
	if(score >=130)
  { x -= 1;
	xx -= 1;
	}
	if(score >=140)
  { x -= 1;
	xx -= 1;
	}
	if(score >=150)
  { x -= 1;
	xx -= 1;
	}
	if(score >=160)
  { x -= 1;
	xx -= 1;
	}
	if(score >=170)
  { x -= 1;
	xx -= 1;
	}
	
 if(score == 24 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 48 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 72 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 96 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 120 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 144 && lives <= 2){
	 
	 lives += 1;
	 
 }
 if(score == 168 && lives <= 2){
	 
	 lives += 1;
	 
 }
	
}
