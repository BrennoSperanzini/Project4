function Bubble(p_n, p_x, p_y)
{
    this.name = p_n;
    this.text = "placeHolder"

    this.xPos = p_x;
    this.yPos = p_y;
    this.textYpos = this.yPos

    this.xPosPerma = this.xPos;

    this.textS = 28;
    this.defaultSize = 140;

    this.expandedSize = this.defaultSize;

    this.currSize = this.defaultSize;

    this.sizeSwitch = false;
    this.year = 0;

    this.AddText = function(p_t, p_s, p_year)
    {
        this.text = p_t;
        this.expandedSize = p_s;
        this.year = p_year;
    }

    this.Display = function()
    {
        strokeWeight(3);
        stroke(200, 200, 200);
        line(this.xPos, this.yPos, this.xPos, height/2.8);
        textSize(40);
        text(this.year, this.xPos - 45, height/3);

        stroke(240, 240, 240);
        strokeWeight(3);
        fill(255);
        ellipse(this.xPos, this.yPos, this.currSize, this.currSize);
        fill(0);
        textSize(this.textS);
        if(!this.sizeSwitch)
        {
            text( this.name, this.xPos - (this.currSize/2.7)-10, this.textYpos - (this.textS/2.8));
        }
        else
        {
            textSize(this.textS - 7);
            text(this.text, this.xPos - (this.currSize/2.8), this.textYpos - 75);
        }
    }

    this.CheckMousePos = function()
    {
        if((mouseX >= (this.xPos - (this.currSize/2))) && (mouseX <= this.xPos + (this.currSize/2)) && (mouseY >= (this.yPos - (this.currSize/2))) && (mouseY <= this.yPos + (this.currSize/2)))
        {
            if(!this.sizeSwitch)
            {
                this.sizeSwitch = true;
                this.currSize = this.expandedSize;
            }
        }
        else
        {
                this.sizeSwitch = false;
                this.currSize = this.defaultSize;
        }
    }

    this.ChangeOffset = function(p_xOff)
    {
        this.xPos = this.xPosPerma + p_xOff;
    }

    this.RepositionText = function(p_y)
    {
        this.textYpos = p_y;
    }
}