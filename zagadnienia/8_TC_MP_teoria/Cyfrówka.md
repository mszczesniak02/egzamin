
>[!info] # [[Bramki logiczne i układy kombinacyjne]]
> Rodzaje bramek (AND, OR, NOT, NAND, NOR, XOR, XNOR, bramka transmisyjna)
> Budowa z wykorzystaniem tranzystorów CMOS i parametry (czas propagacji, pobór mocy, poziomy napięć)
> Standard LVDS (low voltage differential signaling)
> Synteza i minimalizacja funkcji logicznych
> Hazard w układach kombinacyjnych (statyczny, dynamiczny)
> Podstawowe bloki kombinacyjne: multipleksery, demultipleksery, kodery, dekodery
> Układy arytmetyczne: dodawanie (y= a+1 lub y=a+b), odejmowanie, dodawanie z przeniesieniem i przepełnieniem

>[!info] # [[latch|Przerzutniki i zatrzaski]]
> Rodzaje przerzutników (SR, D, D-latch, JK, T) i ich zasada działania
> Parametry dynamiczne (czas ustalania, podtrzymania, czas propagacji)
> Reset synchroniczny i asynchroniczny, sygnał zezwolenia zegara
> Zjawisko metastabilności

>[!info] # [[Układy sekwencyjne]]
> Definicja i różnica względem układów kombinacyjnych
> Rejestry SIPO (serial-in parallel-out), PISO (parallel-in serial-out)
> Liczniki binarne i dziesiętne, liczące w przód i do tyłu
> Liczniki specjalne (pierścieniowe, Johnsona)
> Praktyczne zastosowania rejestrów i liczników

>[!info] # [[Automaty sekwencyjne]]
> Definicja i zastosowania automatów
> Model Moore’a – budowa i przykład
> Model Mealy’ego – budowa i przykład
> Synteza automatów (diagramy stanów, tablice przejść)
> Minimalizacja automatów i optymalizacja przejść

>[!info] # [[Pamięci komputerowe]]
> Technologie pamięci (SRAM, DRAM/HBM, Flash, ROM, EEPROM), ulotne i nieulotne
> Architektura pamięci (komórki, bloki, banki pamięci), pamięci dwuportowe
> Zasada działania odczytu i zapisu
> Parametry pamięci (czas dostępu, przepustowość, pojemność)
> Pamięci specjalizowane: Look-Up Table, First-In First-Out
> Przykłady zastosowań (mikrokontrolery, PC, FPGA)

>[!info] # [[ADC_DAC|Przetworniki A/C i C/A]]
> Przetworniki A/C kompensacyjne (równomierna, nadążne, wagowe - SAR)
> Przetworniki C/A (sieć rezystorowa, drabinka R-2R)
> Przetworniki jednobitowe: PWM, Sigma-Delta
> Przetwornik z podwójnym całkowaniem
> Parametry i błędy statyczne: rozdzielczość a błąd kwantyzacji w dB, offset, skalowania (gain), nieliniowość całkowa (INL) oraz różczniczkowa (DNL)
> Parametry dynamiczne (czas konwersji, pasmo)
> Zastosowania przetworników dla różnych częstotliwości próbkowania i rozdzielczości bitowych

>[!info] # [[MCU|Architektura procesora i jednostki centralnej (CPU)]]
> ALU (jednostka arytmetyczno-logiczna)
> Rejestry ogólnego i specjalnego przeznaczenia
> Stos i podprogramy procesora
> Kontroler przerwań i DMA
> Magistrale systemowe i peryferyjne
> Kontroler pamięci i zarządzanie dostępem
> Rodzaje instrukcji maszynowych i tryby adresowania

>[!info] # [[kody_danych | Reprezentacja i kodowanie danych]]
> [[kody_danych#^1025bc|Systemy liczbowe: binarny, ósemkowy, szesnastkowy]]
> [[kody_danych#^fe173a|Reprezentacja liczb w systemach znak-moduł, U2, z przesunięciem (offset)]]
> [[kody_danych#BCD - binary coded decimal|Reprezentacje specjalne (BCD, kod Graya)]]
> [[kody_danych#Konwersja między systemami|Konwersje pomiędzy systemami liczbowymi]]
> [[kody_danych#Błędy systemów liczbowych|Błędy zaokrągleń i przepełnienia]]
> [[kody_danych#Little-endian oraz Big-endian|Kolejność bajtów w reprezentacji wielobajtowej (endianness)]]

>[!info] # [[IO_mikrokontroler | Układy wejścia/wyjścia i peryferia mikrokontrolerów ]]
> [[IO_mikrokontroler#GPIO - general-purpose input/output|GPIO – podstawowe wejścia/wyjścia]]
> [[IO_mikrokontroler#Liczniki & Timer|Liczniki i timery sprzętowe]]
>[[Protokoły komunikacji szeregowej#USB - Universal Serial Bus|Interfejsy komunikacyjne (UART, SPI, I²C, CAN)]]
> Moduły ADC i DAC
> [[IO_mikrokontroler#Generator PWM|Generacja sygnałów PWM]]
>[[IO_mikrokontroler#WATCHDOG|Watchdog i kontrola pracy systemu]]
> [[IO_mikrokontroler#Sensory i inne gówno|Współpraca mikrokontrolera z czujnikami cyfrowymi i analogowymi]]

>[!info] # [[interrupts|Obsługa przerwań i wyjątków]]
> [[interrupts#NVIC - Nested Vectored Interrupt Controller|Kontroler przerwań (NVIC)]]
> [[interrupts#Tablica wektorów przerwań [ 2] [ 3]|Tablica wektorów przerwań]]
> [[interrupts#Procedury obsługi przerwań ( ISR )|Procedury obsługi przerwań (ISR)]]
> [[interrupts#Priorytety przerwań i ich hierarchia|Priorytety przerwań i ich hierarchia]]
> [[interrupts#Stos procesora w obsłudze przerwań|Stos procesora w obsłudze przerwań]]
> [[interrupts#Mechanizmy maskowania i obsługi wyjątków|Mechanizmy maskowania i obsługi wyjątków]]

>[!info] # Programowanie mikrokontrolerów w języku C.
 [[c&cpp#Primitive_types | Typy danych. ]]
[[c&cpp#atomics|Przekształcanie typów. CAST]]
[[c&cpp#variable_initiations|Zmienne i stałe.]]
[[c&cpp#find in mask,|Zasięg zmiennych.]]
[[c&cpp#smart-pointers| Wskaźniki i tablice.]]
[[c&cpp#arrays && dynamic_arrays && memory(c && c++)| Struktury.]]
[[c&cpp#functions| Funkcje i makrodefinicje.]]
[[c&cpp#bit_manipulation| Sposoby przekazywania argumentów do funkcji.]]
[[c&cpp#Operators && operations|Operatory – priorytety, kolejność obliczeń.]]
