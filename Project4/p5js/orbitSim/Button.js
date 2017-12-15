function Button(p_X, p_Y, textS, p_T)
{
    this.xPos = p_X;
    this.yPos = p_Y;

    this.bText = p_T;

    this.bSize = textS;

    this.textLength = this.bText.length;

    this.xSize = 40 + (this.textLength * 7);
    this.ySize = 20 + this.bSize;

    this.Display = function()
    {
        fill(255);
        stroke(0);
        rect(this.xPos, this.yPos, this.xSize, this.ySize);
        fill(0);
        textSize(this.bSize);
        text(this.bText, (this.xPos + 20), (this.yPos + 5 + this.bSize));
    }

    this.CheckClick = function()
    {
        if(mouseX >= this.xPos && mouseX <= (this.xPos + this.xSize) && mouseY >= this.yPos && mouseY <= (this.yPos + this.ySize))
        {
            return true;
        }
        return false;
    }
}