# #UART - Universal async receiver-transmitter
![[Pasted image 20251013150921.png]]
## W modelu #OSI - **$L2$** - **data link** (połączeniowa).
### UART zawiera #komponenty:
- ##### Generator zegara
- ##### Rejestr przesuwny FIFO
- ##### kontroler nadajnik / odbiornik  (CTS, RTS)
- ##### odczyt/zapis kontorler logiki

### #Tryby komunikacji - [[Układy sekwencyjne#Tryby komunikacyjne | simplex | full duplex | half duplex]]
### #Parametry transmicji:
- ##### poziom napięcia (3.3V)
- #### Baud Rate ( 9600, 115200 ... )
- #### Bit parzystości ( Error Detection )
- #### (opcjonalnie) Rozmiar danych (bity)
- #### (opcjonalnie) Rozmiar stop (bit)
- #### Flow Control ( jeżeli transmiter wysyła zbyt szybko, (odbiornik nie nadąża), odbiornik wysyła mu żeby przestał wysyłać, aby poźniej, po obsłużeniu buforów wznowić transmisję ( pause | resume ) ) (***RTS & CTS***)

### #Przesył danych [[Protokoły komunikacji szeregowej#UART - Universal async receiver-transmitter | uart:]]  [^1]
![[Pasted image 20251013152853.png]]
### Dane wysyłane w ramkach:
#### ***IDLE STATE - HIGH***
- #### start - LOW bit
- #### stop - return to HIGH bit 
- ####  pairity (optional), bit before stop, needs to be configured beforehand
- #### data (useful bits - 5 do 8 | zwykle 7 albo 8), wysyłane w kolejności LSB (0x52 = 0b1010011 -> in transmit -> **LSB: 1100101**  )

# #SPI - Serial Periferal Interface [^2]
![[Pasted image 20251013154252.png]]
## Komunikacja przeprowadzana na wedle zasady [[Układy sekwencyjne#Master-Slave | master-slave]]. 
## Opis pinów:
- #### !SS - Slave Select - służy do adresowania komunikacji z konkretnym urządzeniem podpiętym do MASTERa
- #### MISO - Master-Out, Slave-In - serial data 
- #### MISO - Master-In, Slave-OUT - serial data
- #### SCLK - sygnał zegarowy z MASTERa

### Każde urządzenie odbiera oraz wysyła dane za pośrednictwem [[Układy sekwencyjne#Shift Register | rejestru przesuwnego  ]] oraz  [[Układy sekwencyjne#Bufor kołowy : bufora kołowego]].

### Gdy SLAVE nie jest wybrany do komunikacji - ich MISO powinien przybrać stan [[Układy sekwencyjne#Stan Wysokiej impedancji | wysokiej impedancji]].
#### Inne slave'y, które nie mają trój-stanowego buffera, nie moga komunikować się urządzeniami które takowy mają.



# #Przesył SPI: [^3]
![[Pasted image 20251013160542.png]]


### CPOL && CPHA - kazdy tryb musi byc wybrany taki sam dla kazdego urządzenia w komunikacji
CLOCK POLARITY - którą stronę clocka odczytujemy jako bity,  narastającą czy opadającą  , czy active low czy active high
CLOCK PHASE - czy sygnał narastająco, czy opadająco
MULTI-SLAVE CONFIGUTATION:
linie oddzielne (independent slave):![[Pasted image 20251013155449.png]] 
- Daisy chain - ![[Pasted image 20251013155449.png]]

> [!info] Daisy chain
> Some products that implement SPI may be connected in a daisy chain configuration, where the first slave's output is connected to the second slave's input, and so on with subsequent slaves, until the final slave, whose output is connected back to the master's input. This effectively merges the individual communication shift registers of each slave to form a single larger combined shift register that shifts data through the chain. This configuration only requires a single SS line from the master, rather than a separate SS line for each slave.




|             ZALETY              | WADY                                                                                           |
| :-----------------------------: | ---------------------------------------------------------------------------------------------- |
|           full-duplex           | zajmuje dużo pinów                                                                             |
|     Wysoka<br>przepustowość     | krótkie dystanse                                                                               |
|         Prosty hardware         | nie ma formalnego<br>standardu                                                                 |
| Łatwa separacja <br>galwaniczna | Nie ma wbudowanych protokołów<br>do m.in:<br>flow-control,<br>slave-ACK,<br>error-check<br>... |


# #I2C - Inter-Integrated CIrcuit



# #CAN - Controller Area Network

# #USB - Universal Serial Bus

[^1]: Rohde & Schwarz UART https://www.youtube.com/watch?v=sTHckUyxwp8

[^2]: wiki SPI https://en.wikipedia.org/wiki/Serial_Peripheral_Interface

[^3]: R&S tutorial https://www.youtube.com/watch?v=0nVNwozXsIc&t=15s
