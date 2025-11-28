
---
# Spis Treści:
- GPIO
- Licziki & Timery
- Interfejsy komunikacyjne
- ADC / DAC
- Generator PWM
- WATCHDOG
- Współpraca między czujnikami
---

## #GPIO - general-purpose input/output

Piny służące w mikroprocesorze służące do obsługi urządzeń peryferyjnych.
Nie mają odgórnie przypisanych funkcji. 

Zwykle w płytkach mikrokontrolerowych każdy GPIO jest dostepny oraz może pełnić funkcję podstawową, mianowicie odczytywanie lub nadaniwe sygnału logicznego 1 lub 0, ale zwykle za każdym pinem dostepny jest również inny tryb, czy to #UART (RX, TX), SPI, DAC czy ADC. Również dostępne są inne interfejsy, wszstko jest zalezne od producenta oraz jak rozwiązze to systemowo.

![[Pasted image 20251115163501.png]]

---

## Liczniki & #Timer 

Liczniki to urządzenie które zlicza impulsy zegara oraz zapamiętuje ile ich już wystąpiło.

Prescaler - dzielnik który pozwala zliczyć co N-ty licznik, pozwalając zliczyc co modulo jakiejś tam wartości.

Po osiągnięciu maksymalnej wartości (lub jakiejś ustalonej) licznik się resetuje do 0.

Możliwe jest łączenie timerów, np. dwóch 16-bitowych -> w 32-bit.
Timer pozwoli liczyć ponad 4e9 razy. 

Domyślnie timery zliczają do maksymalnej wartości


Róznica między timerem a counterem: 


---

## Interfejny #komunikacyjne [[Protokoły komunikacji szeregowej]]

Szerzej opisano w [[Protokoły komunikacji szeregowej]]
Najpopularniejsze interfejsy (szeregowe) dostępne na mikrokontrolerach to #SPI #UART magistrala #CAN oraz #I2C 
Tak jak opisano w #GPIO, wiele pinów pozwala ustawić wiele trybów na jednym konkretnym gpio.

Niektóre płytki np. Pi Pico zapewniają osobną logikę dla każdego z pinów, pozwalając odciążyć główną jednostkę obliczeniową od zwykłych, prostych oprracji. [^1]



---

## Generator #PWM

Większość nowoczesnych mikrokontrolerów posiada Pulse-Width-Modulation jako już gotową funkcjonalność, nie potrzeba odpowienio ustawiać timerów w celu wytworzenia odpowieniego sygnału.

Funkcjonalność opisana na zdjęciu w #GPIO.
![[Pasted image 20251115164529.png|500]]

---


## #WATCHDOG

Watchdog Timer (WDT) to timer który monitoruje MCU( mikrokontroler ) i sprawdza czy jednostak poprawnie funkcjonuje, czy nie jest "zacięta", przeładowana itd.

Jeżeli WDT wykryje że MCU nie działa poprawnie, wysyła bezpośrednio wsygnał resetu do jednostki centralnej


Tryby działania:
- Time-Out mode - w tym wariancie jeżeli po okreslonym czasie MCU nie odpowiada, wysyłąny jest sygnał resetu. 

>[!warning] Czasy mogą się ułożyć naprzemiennie, przez co możliwe jest niewykrycie malfunkcji
>![[Pasted image 20251115165032.png|500]] 

- Window Mode - tryb okienkowy - czyli jeżeli w oknie czasowym WDT nie dostanie odpowiedzi (pojedynczy sygnał lub wiele sygnałów), to wysyła reset.


---


# Sensory i inne gówno

Inne protokoły do komunikacji z sensorami:

- #oneWire - Protokuł #half-duplex, polegający na komunikacji z sensorem za pomocą jednego portu danych, raz odczytując, raz pisząc, przykładowo:
- ![[Pasted image 20251115165343.png|500]]

---

[^1]: https://en.wikipedia.org/wiki/Programmed_input%E2%80%93output
