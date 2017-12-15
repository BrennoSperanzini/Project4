function Controller()
{
    this.bubbles = new Array(8);

    this.xOffset = 0;

    this.bubbles[0] = new Bubble("\tV-2\n\tRocket", (90), (height/1.5));
    this.bubbles[0].AddText("The world's first\nlong range\nguided ballistic\nmissile.Used by\nthe germans to\nassault Allied\ncities", 250, "1944");

    this.bubbles[1] = new Bubble("\tSputnik\n\t\t 1", (290), (height/1.5));
    this.bubbles[1].AddText("The first artificial\nEarth satellite.\nLaunched during\nthe Cold War\nby the Soviet\nUnion", 250, "1957");

    this.bubbles[2] = new Bubble("\tYuri\nGagarin", (490), (height/1.5));
    this.bubbles[2].AddText("The first human\nto orbit the\nEarth in the\nSoviet Vostok 1.\nHis flight lasted\n108 minutes before\nreturning.", 250, "1961");

    this.bubbles[3] = new Bubble("\tJohn\n\tGlenn", (690), (height/1.5));
    this.bubbles[3].AddText("The first\nAmerican to fly\norbit Earth. Later\n in life, he became\nthe oldest person to\nfly the Space\nShuttle", 250, "1962");

    this.bubbles[4] = new Bubble("\tMoon\n\tLanding", (890), (height/1.5));
    this.bubbles[4].AddText("Neil Armstrong takes\nthe first step on\nthe moon, marking\nthe first of many\nAppolo landings by\nthe USA", 250, "1969");

    this.bubbles[5] = new Bubble("Expansion", (1090), (height/1.5));
    this.bubbles[5].AddText("Satellite coverage\nincreases, giving\naccess to television,\ncommunication,\n and navigation.", 250, "1980s");
    this.bubbles[5].RepositionText(height/1.45);

    this.bubbles[6] = new Bubble("\tSpace\n\tShuttle", (1290), (height/1.5));
    this.bubbles[6].AddText("\nSpace Shuttle\nColumbia starts to give\neliable access to\nlow-earth-orbit\nKick-starting reusability", 250, "1981");

    this.bubbles[7] = new Bubble("\t\tISS", (1490), (height/1.5));
    this.bubbles[7].AddText("Seen by the naked\nfrom Earth, the\nISS is a hub for sciency\nand diplomacy in\nspace.", 250, "1998");
    this.bubbles[7].RepositionText(height/1.45);

    this.bubbles[8] = new Bubble("Falcon 9", (1690), (height/1.5));
    this.bubbles[8].AddText("The first rocket to\nsuccessfully land after\ndelivering a payload\ninto orbit without\nhuman control.", 250, "2015");

    this.Display = function()
    {

        for(let i = 0; i < this.bubbles.length; i++)
        {
            this.bubbles[i].Display();
        }

        strokeWeight(10);
        stroke(255);
        line(50 + this.xOffset, (height/2.5), width-50+this.xOffset, (height/2.5));

        noStroke();
        fill(255, 255, 255, 50);
        if(this.xOffset < -0.1)
        {
            rect(0, 0, 80, height);
        }
        if(width < 1890 || this.xOffset < -0.1)
        {
            rect(width-80, 0, width, height);
        }
    }

    this.CheckMouse = function()
    {
        if(mouseX < width - 80 && mouseX > 80)
        {
            for(let i = 0; i < this.bubbles.length; i++)
            {
                this.bubbles[i].CheckMousePos();
            }
        }
        else
        {
            if(mouseX > width-80 && (width-50+this.xOffset) > width/1.5)
            {
                this.xOffset = this.xOffset - 2;
            }
            else
            {
                if(this.xOffset < 0.1 )
                {
                    this.xOffset = this.xOffset + 2;
                }
            }
            for(let i = 0; i < this.bubbles.length; i++)
            {
                this.bubbles[i].ChangeOffset(this.xOffset);
            }
        }
    }
}