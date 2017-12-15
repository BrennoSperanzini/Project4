function OBody(p_X, p_Y, p_M, p_vX, p_vY, p_bS)
{
    this.xPos = p_X;
    this.yPos = p_Y;
    this.mass = p_M;
    this.velX = p_vX;
    this.velY = p_vY;
    this.bodySize = p_bS;

    this.bodyColorR = Math.floor(random(50, 206));
    this.bodyColorG = Math.floor(random(50, 206));
    this.bodyColorB = Math.floor(random(50, 206));

    this.accX = 0;
    this.accY = 0;

    this.CalcNextStep = function(x_c, y_c, dV)
    {
        this.accX = (x_c/this.mass);
        this.accY = (y_c/this.mass);

        if(dV)
        {
            this.DisplayACC();
        }
        this.velX = this.velX + this.accX;
        this.velY = this.velY + this.accY;

        this.xPos = this.xPos + this.velX;
        this.yPos = this.yPos + this.velY;
    }

    this.Display = function()
    {
        fill(this.bodyColorR, this.bodyColorG, this.bodyColorB);
        ellipse(this.xPos, this.yPos, this.bodySize, this.bodySize);
    }

    this.DisplayACC = function()
    {
        strokeWeight(3);
        stroke(0, 255, 0);
        line(this.xPos, this.yPos, (this.xPos + (20*this.accX)), (this.yPos +  (20*this.accY)));
        stroke(255, 0, 0);
        line(this.xPos, this.yPos, (this.xPos + (2*this.velX)), (this.yPos + (2*this.velY)));
        strokeWeight(1);
    }
}