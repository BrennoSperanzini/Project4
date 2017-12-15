var Cont;
var dV;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(20);
    ellipseMode(CENTER);
    dV = false;
    Cont = new Controller(dV);
}

function draw()
{
    background(255);
    Cont.Display();
    Cont.CalcForces();
    textSize(20);
    stroke(255);
    fill(0);
    text("Click on the screen to add a new body to the simulation", 20, 80);

}

function mouseClicked()
{
    switch(Cont.Click())
    {
        case 1:
            Cont = new Controller(dV);
            print("reset");
        break;

        case 2:
            dV = !dV;
        break;

        case 3:
            Cont.AddBody();
        break;
    }

}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}