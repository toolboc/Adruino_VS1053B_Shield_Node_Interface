## Description ##
Control Arduino VS1053B Shield through Node.js interface

![](https://github.com/toolboc/Adruino_VS1053B_Shield_Node_Interface/blob/master/Assets/Arduino_VS1053B_Shield.jpg)

##Demonstration##

![](https://github.com/toolboc/Adruino_VS1053B_Shield_Node_Interface/blob/master/Assets/Demonstration.PNG)

## Software Prerequisites ##
[Arduino IDE](https://www.arduino.cc/en/Main/Software)

##Hardware Requirements##
- [Arduino VS1053B Shield](http://www.geeetech.com/wiki/index.php/Arduino_MP3_shield_board_with_TF_card)

- [Arduino Uno Compatible Device](https://www.arduino.cc/en/Main/ArduinoBoardUno)

- MicroSD Card with mp3s named as shown below:

![](https://github.com/toolboc/Adruino_VS1053B_Shield_Node_Interface/blob/master/Assets/SDFileNames.PNG)

##Instructions##

1. [Install Node.js](https://nodejs.org/en/)
2. Install [nodeserialport](https://www.npmjs.com/package/serialport) 
3. Obtain the [Sparkfun MP3 Player Shield Library](https://github.com/madsci1016/Sparkfun-MP3-Player-Shield-Arduino-Library) and install into *C:\Program Files (x86)\Arduino\libraries*
4. Open Arduino IDE and select Examples => SFEMP3Shield => MP3Shield_Library_Demo and flash to your Arduino 
5. Open a Command Prompt / Terminal then navigate to the directory of *Adruino_VS1053B_Shield_Node_Interface.js* included in this library and modify the COM Port value in *var sp = new SerialPort("COM3", {* to match the COM / tty port of your Arduino
6. Excecute: *node Adruino_VS1053B_Shield_Node_Interface.js*
7. Plug up some speaker and enjoy =)
