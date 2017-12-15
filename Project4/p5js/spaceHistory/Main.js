var Cont;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(0);
    ellipseMode(CENTER);

    Cont = new Controller();
}

function draw()
{
    background(0, 0, 60);
    Cont.CheckMouse();
    Cont.Display();
    banner();
}

function banner()
{
    noStroke();
    fill(240, 240, 240);
    triangle(width/1.4, height/6, width/1.4, 0, (width/1.2), 0);
    rect(0, 0, width/1.4, height/6);

    fill(0);
    if(height < 500)
    {
        textSize(30);
    }
    else
    {
        textSize(70);
    }
    text("A Brief History Of Space Travel", 25, height/10);
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}