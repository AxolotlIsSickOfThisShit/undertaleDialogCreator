![UNDERTALE Dialogue Creator!][logo]
***
![What is it?](/Assets/what.png)

**UNDERTALE Dialogue Creator** is a tool for modding **UNDERTALE**. It takes a string as input, and converts it into a string that you can copy and paste into the **data.win** file for UNDERTALE using [**UNDERTALE Modding Tool**](https://github.com/UnderminersTeam/UndertaleModTool). The string will then work as actual dialogue in UNDERTALE, without you having to edit the string afterwards.
***
![How do You Use it?](/Assets/how.png)

As of now, the tool is unfinished. 

**In the meantime, here are my findings for the inner workings of the UNDERTALE text system.**

``` none
G in square brackets is Gold Amount
I in square brackets is current ITEM (used when dropping items)
1-9 in square brackets refer to arguments 1-9 (these are temporary variables for specific dialogue or text, such as how much gold you gain or what armor Papyrus tells Undyne you were wearing)
\(capital letter) changes the color of text to the right of it to that color (\X changes it back to white)
^(number) creates a text delay, and also modifies how long the intro cutscene frame stays after the dialogue is over. (only after the closing backslash)
& begins a new line in textbox, intro cutscene, and battle dialogue
# begins a new line in naming screen text
You must put a backslash (\) immediately before anything that is in square brackets.
\E[number], when used in dialogue where the character's face is in the textbox, changes that character's expression. It also has an unknown effect on the intro cutscene, but only after the closing backslash.
a forwardslash ends dialogue that is not in the intro cutscene or on the naming screen. In the intro cutscene, a backslash marks the end of dialogue, but there is still things that go after the backslash.
a % symbol ends the dialogue only on the intro cutscene, and only after the "\E[number 1-9] ^[number 1-9]" sequence.
```
**Here is the current guide:**
> Typing "(Gold Amount)" will input how much G the player has.
       Typing "(Item)" when creating text relating to dropping an item will input the name of whatever item is being dropped. Typing "([number 1-9])" will input data specific to an argument. (This changes based on the context, it is basically a variable that changes based on what textbox is being shown.) Typing "([color])" (red, yellow, green, blue, purple, orange, teal, white, default) will change the text after it to that color. (Text usually defaults to white.) Typing "(delay [number])" will delay the text. Just press enter to start a new line.
**NOTE: Upon downloading the release, the user may be required to download and install a font file. If this is required, a guide will be supplied for this as well.**
***
![Do you want to help with this project?](/Assets/help.png)

Why *thank you* for asking! I could indeed use some help with this, so if you are willing to assist, please message me at **vipergamesco@gmail.com** or in the comments, and I will get to you as soon as I can.
***
![FAQ](/Assets/faq.png)

The repository just went public. Nobody has asked questions about it yet. Ask some in the comments.

[logo]: /Assets/txt-logo.png