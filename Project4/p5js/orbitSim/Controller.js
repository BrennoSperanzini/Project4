function Controller(p_dV)
{
    this.dispVectors = p_dV;
    
    this.G_FACTOR = 1;
    this.G_CONST = pow(10, this.G_FACTOR);

    this.Buttons = new Array(2);

    this.Buttons[0] = new Button(10, 10, 15, "Reset Sim");
    this.Buttons[1] = new Button(130, 10, 15, "Show vectors");

    this.bodies = new Array(3);

    this.bodies[0] = new OBody(750, 500, 10000, 0, 0, 100);

    this.bodies[1] = new OBody(450, 500, 50, 0, -17, 20);
    this.bodies[2] = new OBody(1050, 500, 50, 0, 17, 20);

    this.Display = function()
    {

        for(let i = 0; i < this.bodies.length; i++)
        {
            this.bodies[i].Display();
        }

        this.CalcCOM();

        for(let i = 0; i < this.Buttons.length; i++)
        {
            this.Buttons[i].Display();
        }
    }

    this.Click = function()
    {
        if(this.Buttons[0].CheckClick())
        {
            return 1;
        }
        if(this.Buttons[1].CheckClick())
        {
            this.dispVectors = !this.dispVectors;
            return 2;
        }
        return 3;
    }

    this.CalcForces = function()
    {
        let forceX = new Array(this.bodies.length);
        let forceY = new Array(this.bodies.length);

        for(let i = 1; i < this.bodies.length; i++)
        {
            forceX[i] = 0;
            forceY[i] = 0;

            for(let j = 0; j < this.bodies.length; j++)
            {
                if(i != j)
                {
                    forceX[i] = this.getForceX(i, j) + (forceX[i]);
                    forceY[i] = this.getForceY(i, j) + (forceY[i]);
                }
            }

        }

        for(let i = 1; i < this.bodies.length; i++)
        {
            this.bodies[i].CalcNextStep(forceX[i], forceY[i], this.dispVectors)
        }
    }

    this.getForceX = function(indexA, indexB)
    {
        let vecForceX;

        let vecX = (this.bodies[indexB].xPos - this.bodies[indexA].xPos);
        let vecY = (this.bodies[indexB].yPos - this.bodies[indexA].yPos);

        let vecMag = sqrt( ((pow(vecX, 2)) + (pow(vecY, 2))) );

        vecForceX = this.bodies[indexA].mass * this.bodies[indexB].mass;

        vecForceX = vecForceX / (pow(vecMag, 2));

        vecForceX = vecForceX * this.G_CONST;

        vecForceX = vecForceX * (vecX/vecMag);

        return vecForceX;
    }

    this.getForceY = function(indexA, indexB)
    {
        let vecForceY;
        
        let vecX = (this.bodies[indexB].xPos - this.bodies[indexA].xPos);
        let vecY = (this.bodies[indexB].yPos - this.bodies[indexA].yPos);
        
        let vecMag = sqrt( (pow(vecX, 2)) + (pow(vecY, 2)) );
        
        vecForceY = this.bodies[indexA].mass * this.bodies[indexB].mass;
        
        vecForceY = vecForceY / (pow(vecMag, 2));
        
        vecForceY = vecForceY * this.G_CONST;
        
        vecForceY = vecForceY * (vecY/vecMag);

        return vecForceY;
    }

    this.CalcCOM = function()
    {
        let totalSumX, totalSumY;
        totalSumX = 0;
        totalSumY = 0;
        let totalMass;
        totalMass = 0;
        
        for(let i = 0; i < this.bodies.length; i++)
        {
            totalSumX =((this.bodies[i].mass * this.bodies[i].xPos)/1000) + totalSumX;
            totalSumY =((this.bodies[i].mass * this.bodies[i].yPos)/1000) + totalSumY;
          
            totalMass = totalMass + this.bodies[i].mass;
        }
        
        totalSumX = (totalSumX / totalMass) * 1000;
        totalSumY = (totalSumY / totalMass) * 1000;
        fill(255, 0, 0);
        noStroke();
        ellipse(totalSumX, totalSumY, 10, 10);

        ellipseMode(CENTER);
        fill(0);
        stroke(0);
    }

    this.AddBody = function()
    {
        if(this.bodies.length < 40)
        {
            let finalConc = new Array(this.bodies.length + 1);
            
            let startVY = mouseY - 750;
            if(startVY <= 0)
            {
                startVY = -8;
            }
            else
            {
                startVY = 8;
            }
            let startVX = mouseX - 750;
            if(startVY <= 0)
            {
                startVX = -10;
            }
            else
            {
                startVX = 10;
            }

            let newB = new OBody(mouseX, mouseY, 25, startVX, startVY, 10);
            
            for(let i = 0; i < finalConc.length; i++)
            {
                if(i < (finalConc.length - 1))
                {
                    finalConc[i] = this.bodies[i];
                }
                else
                {
                    finalConc[i] = newB;
                }
            }
            print("a");
            this.bodies = finalConc;
        }

    }
}