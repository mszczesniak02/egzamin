> [!warning] # 1. Bramki logiczne i układy kombinacyjne.
>> [!danger] ## 1.1. Rodzaje bramek (AND, OR, NOT, NAND, NOR, XOR, XNOR, bramka transmisyjna).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Budowa z wykorzystaniem tranzystorów CMOS i parametry (czas propagacji, pobór mocy, poziomy napięć).
>>> [!question]- #### parametry bramek (od czego zależy moc strat, napięcie) / Bramki, parametry, metody budowy
>>>> [!quote] (Będzie tu trzeba przedstawić schematy NOR NAND I inwertera imo) **p** - średni czas propagacji; czas upływający pomiędzy wystąpieniem zbocza impulsu wejściowego i wywołanym przez nie zboczem impulsu wyjściowego; tpHL przy przejściu sygnału wyjściowego z wysokiego na niski       (tpLH analogicznie); **ttLH** - czas narastania impulsu wyjściowego; między 10% a 90%.**ttHL** - czas opadania impulsu wyjściowego; między 90% a 10%. **Pobór mocy** jest bardzo niski w stanie statycznym; dynamiczny pobór zależy od częstotliwości przełączeń. **Poziom napięcia** odpowiadający logicznemu ’0’ mieści się w przedziale < 0.0; 0.8 > V . Poziom napięcia odpowiadający logicznej ’1’ mieści się w przedziale < 2.2; 5.0 > V . / TTK- technologia oparta na bipolarach wykorzystuje wieloemiterowe tranzystory na wejsciu. Tranzystory pracują w stanie nasycenia (logiczne 0) lub odcięcia (logiczne 1) raczej nie używane już. i na CMOSach mam nadzieję że wystarczy pokazać jak jest zbudowany i nie trzeba tłumaczyć zasady działania per se (skąd kiedy płynie prąd)
>
>> [!danger] ## 1.3. Standard LVDS (low voltage differential signaling).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Synteza i minimalizacja funkcji logicznych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.5. Hazard w układach kombinacyjnych (statyczny, dynamiczny).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.6. Podstawowe bloki kombinacyjne: multipleksery, demultipleksery, kodery, dekodery.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.7. Układy arytmetyczne: dodawanie (y= a+1 lub y=a+b), odejmowanie, dodawanie z przeniesieniem i przepełnieniem.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Przerzutniki i zatrzaski.
>> [!danger] ## 2.1. Rodzaje przerzutników (SR, D, D-latch, JK, T) i ich zasada działania.
>>> [!question]- #### Przerzutniki
>>>> [!quote] Przerzutnik to podstawowy, dwustanowy element pamięci cyfrowej, który może przechowywać 1 bit informacji. Ma dwa stabilne stany (0 lub 1) i zmienia swój stan tylko w określonych warunkach sterujących (np. na zboczu sygnału zegarowego albo przy sygnałach set/reset), utrzymując zapamiętaną wartość aż do następnej zmiany. **SR**	S, R	Ustaw/Zeruj	Prosta pamięć **D**	D, CLK	Przechowuje bit z wejścia	Rejestry, pamięci **JK**	J, K, CLK	Ustaw/Zeruj/Toggle	Liczniki, automaty **T**	T, CLK	Zmiana stanu przy zegarze	Dzielniki częstotliwości
>
>> [!danger] ## 2.2. Parametry dynamiczne (czas ustalania, podtrzymania, czas propagacji).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Reset synchroniczny i asynchroniczny, sygnał zezwolenia zegara.
>>> [!question]- #### Transmisja synchorniczna i asynchroniczna
>>>> [!quote] W asynchronicznej nadajnik i odbiornik nie są połączone linią zegarową i działają na własnych wewnętrznych zegarach. Transmisja asynchroniczna: dane przesyłane w ramkach każda z własnym bitem startu(0) i stopu(1), dane mają zazwyczaj 8bitów. Kluczowe cechyb to duży narzut (20% gdy cała ramka ma 10bitów), mogą się pojawiać błędy zegara, przerwy między ramkami są dozwolone, Rs-232,UART,bluetooth, Transmisja synchroniczna: Dane są przesyłane ciągłym strumieniem bitów bez dodatkowych znaków synchronizacji. Zegar jest wspólby lub przesyłany razem z danymi (np. w formie sygnału taktującego) np Ethernet,USB,SPI
>
>> [!danger] ## 2.4. Zjawisko metastabilności.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Układy sekwencyjne.
>> [!danger] ## 3.1. Definicja i różnica względem układów kombinacyjnych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Rejestry SIPO (serial-in parallel-out), PISO (parallel-in serial-out).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Liczniki binarne i dziesiętne, liczące w przód i do tyłu.
>>> [!question]- #### układy licznikowe
>>>> [!quote] To sekwencyjny układ cyfrowy którego stan zmienia się w odpowiedzi na impulsy zegarowe. Wyjście to liczba impulsów w postaci binarnej. Klasyfikujemy je np ze względu na synchronizację. 1)liczniki asynchroniczne - W tej konfiguracji sygnał zegarowy (CLK) jest podawany **tylko na wejście pierwszego przerzutnika** (LSB - Least Significant Bit). Wyjście pierwszego przerzutnika steruje wejściem zegarowym drugiego, drugiego steruje trzecim itd. Liczniki synchroniczne - Wszystkie przerzutniki są taktowane **tym samym, wspólnym sygnałem zegarowym**. Zmiana stanu wszystkich bitów następuje w tym samym momencie (na to samo zbocze zegara). Można je sklasyfikować ze wzgledu na kodowanie np binarny, licznik w kodzie graya. Zakładam że trzeba będzie mu przedstawić jakiś prosty licznik i będzie git
>
>> [!danger] ## 3.4. Liczniki specjalne (pierścieniowe, Johnsona).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.5. Praktyczne zastosowania rejestrów i liczników.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Automaty sekwencyjne.
>> [!danger] ## 4.1. Definicja i zastosowania automatów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. Model Moore’a – budowa i przykład.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Model Mealy’ego – budowa i przykład.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.4. Synteza automatów (diagramy stanów, tablice przejść).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.5. Minimalizacja automatów i optymalizacja przejść.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Pamięci komputerowe.
>> [!danger] ## 5.1. Technologie pamięci (SRAM, DRAM/HBM, Flash, ROM, EEPROM), ulotne i nieulotne.
>>> [!question]- #### Typy pamięci, budowa zastosowania różnice 
>>>> [!quote] **Nieulotne (non-volatile NVM), ROM (Read Only Memory)- Najważniejsze typy pamięci komputerowych to: rejestry, cache, RAM, ROM, pamięci masowe (SSD/HDD) oraz pamięci specjalne (Flash, VRAM). Różnią się szybkością, pojemnością, trwałością i zastosowaniem – im bliżej CPU, tym szybsze, ale mniejsze. Budowa: komórki pamięci wewnątrz CPU, oparte na przerzutnikach. Zastosowanie: przechowują aktualne dane i adresy podczas wykonywania instrukcji.Różnice: najszybsze, ale bardzo małe (kilka–kilkadziesiąt bajtów).2️⃣ Cache (L1, L2, L3)Budowa: szybka pamięć SRAM umieszczona blisko rdzenia CPU.Zastosowanie: przechowuje najczęściej używane dane i instrukcje, aby zmniejszyć opóźnienia dostępu do RAM.Różnice: szybka, ale ograniczona pojemność (KB–MB).3️⃣ RAM (Random Access Memory)Budowa: półprzewodnikowa pamięć DRAM (Dynamic RAM – wymaga odświeżania) lub SRAM (Static RAM – szybsza, droższa).Zastosowanie: pamięć operacyjna komputera – przechowuje dane i programy w trakcie pracy.Różnice: szybka i ulotna (traci dane po wyłączeniu zasilania).4️⃣ ROM (Read-Only Memory)Budowa: pamięć stała, dane zapisane fabrycznie lub programowalne (EPROM, EEPROM, Flash).Zastosowanie: firmware, BIOS, kontrolery.Różnice: nieulotna, wolniejsza od RAM, zwykle tylko do odczytu.5️⃣ Pamięci masowe (HDD, SSD)Budowa:HDD – mechaniczne talerze magnetyczne.SSD – komórki Flash NAND.Zastosowanie: trwałe przechowywanie danych (system, pliki).Różnice: HDD – tanie, duże pojemności, wolniejsze; SSD – szybkie, brak ruchomych części, droższe.
**
>
>> [!danger] ## 5.2. Architektura pamięci (komórki, bloki, banki pamięci), pamięci dwuportowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Zasada działania odczytu i zapisu.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Parametry pamięci (czas dostępu, przepustowość, pojemność).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.5. Pamięci specjalizowane: Look-Up Table, First-In First-Out.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.6. Przykłady zastosowań (mikrokontrolery, PC, FPGA).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Przetworniki A/C i C/A.
>
>> [!danger] ## 6.1. Przetworniki A/C kompensacyjne (równomierna, nadążne, wagowe - SAR).
>>> [!question]- #### ADC/DAC - concerter - flash converter etc różne convertery
>>>> [!quote] układ elektroniczny, który zamienia sygnał analogowy na jego reprezentację cyfrową, czyli na ciąg bitów. Wykonuje następujące czynności : próbkowanie, kwantyzacja i kodowanie(zapis skwantowanej wartości w postaci liczby binarnej). Convertery: ADC : **Przetwornik typu Flash (równoległy)** jednocześnie porównuje sygnał wejściowy z wieloma poziomami odniesienia za pomocą sieci komparatorów, **Przetwornik całkujący** Najpierw całkuje (ładuje kondensator sygnałem wejściowym), potem rozładowuje go napięciem referencyjnym i mierzy czas powrotu do zera **Przetwornik Sigma-Delta** Działa z dużą częstotliwością próbkowania (nadpróbkowanie) i porównuje sygnał wejściowy z odtworzonym, zapisując tylko 0 lub 1. Powstaje strumień bitów, w którym gęstość jedynek odpowiada amplitudzie sygnału. Następnie strumień jest filtrowany cyfrowo i spowalniany, co daje bardzo dokładną wartość cyfrową. DAC :  to układ elektroniczny, który odtwarza sygnał analogowy na podstawie danych cyfrowych. Jego zadaniem jest wygenerowanie napięcia lub prądu o wartości proporcjonalnej do otrzymanej liczby cyfrowej. Najpopularniejszą metodą tworzenia przetwornika C/A  jest wykorzystanie **sieci rezystorów**. Każdy bit danych cyfrowych steruje przełącznikiem, który włącza lub wyłącza przepływ prądu przez precyzyjnie dobrany rezystor. Suma tych prądów tworzy wyjściowy sygnał analogowy.
>>
>>>[!question]- #### ADC - opisać kilka + porównanie, dlaczego w dual-slope robimy podwójne całkowanie
>>>>[!quote] Convertery: ADC : **Przetwornik typu Flash (równoległy)** jednocześnie porównuje sygnał wejściowy z wieloma poziomami odniesienia za pomocą sieci komparatorów, **Przetwornik całkujący(Dual-Slope)** Najpierw całkuje (ładuje kondensator sygnałem wejściowym), potem rozładowuje go napięciem referencyjnym i mierzy czas powrotu do zera **Przetwornik Sigma-Delta** Działa z dużą częstotliwością próbkowania (nadpróbkowanie) i porównuje sygnał wejściowy z odtworzonym, zapisując tylko 0 lub 1. Powstaje strumień bitów, w którym gęstość jedynek odpowiada amplitudzie sygnału. Następnie strumień jest filtrowany cyfrowo i spowalniany, co daje bardzo dokładną wartość cyfrową. **W dual-slope** robimy podwójne całkowanie aby wyeliminować przekłamania odczytu związane z niedoskonałością rezystora i kondensatora (na wikipedi jest ładnie pokaza że się skracają i zostaje zależność od napięcia i czasu tylko). Szybkość : Flash > SAR > całkujący. Zasada : Flash 2^n komparatorów, SAR wyszukiwanie binarne, Całkujący ładowanie rozładowywanie C, odporność na szum: Flash brak,SAR średnie, Całkujący kozackie
>
>> [!danger] ## 6.2. Przetworniki C/A (sieć rezystorowa, drabinka R-2R).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Przetworniki jednobitowe: PWM, Sigma-Delta.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.4. Przetwornik z podwójnym całkowaniem.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.5. Parametry i błędy statyczne: rozdzielczość a błąd kwantyzacji w dB, offset, skalowania (gain) nieliniowość całkowa (INL) oraz różczniczkowa (DNL).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.6. Parametry dynamiczne (czas konwersji, pasmo).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.7. Zastosowania przetworników dla różnych częstotliwości próbkowania i rozdzielczości bitowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Architektura procesora i jednostki centralnej (CPU).
>>>[!question]- Architektury mikroporcesorów (jakie są, czym się różnią)
>>>
>>>>[!quote] Podział ze względu na organizację pamięci :**Architektura von Neumanna** wykorzystuje wspólną pamięć dla instrukcji i danych, co upraszcza budowę systemu. Jej wadą jest “wąskie gardło”, czyli sytuacja gdy procesor musi czekać w kolejce na dostęp do danych i instrukcji przez tę samą magistralę, ponieważ procesor nie może pobierać danych i instrukcji jednocześnie. Mimo tej ograniczonej wydajności jest to klasyczne rozwiązanie stosowane w większości komputerów. **Architektura Harvard** rozdziela pamięć i magistrale dla instrukcji oraz danych, co pozwala na jednoczesny dostęp do obu. Dzięki temu procesor może działać szybciej i bardziej efektywnie. W nowoczesnych CPU stosuje się często zmodyfikowaną wersję Harvard, łączącą zalety obu podejść. Podział ze względu na zestaw instrukcji **ISA (Instruction Set Architecture)** definiuje zestaw instrukcji, które procesor potrafi wykonać:**Architektura CISC** wykorzystuje złożone instrukcje, które mogą wykonywać wiele operacji naraz (np. x86), **Architektura RISC** opiera się na prostych instrukcjach wykonywanych w jednym cyklu (np. ARM) RISC lepiej współpracuje z potokowaniem i zwiększa efektywność, natomiast CISC pozwala zmniejszyć rozmiar kodu i zachować kompatybilność wsteczną.
>
>> [!danger] ## 7.1. ALU (jednostka arytmetyczno-logiczna).
>>> [!question]- #### CPU, co w nim jest itp
>>>> [!quote] CPU (Central Processing Unit) to główny układ komputera odpowiedzialny za wykonywanie instrukcji programów. Procesor pobiera dane z pamięci, przetwarza je i odsyła wyniki, sterując jednocześnie pracą całego systemu. **Jednostka arytmetyczno-logiczna (ALU)** wykonuje operacje matematyczne i logiczne**Jednostka sterująca (CU)** interpretuje instrukcje i kieruje przepływem danych**Rejestry** pełnią rolę bardzo szybkiej pamięci roboczej dla tymczasowych danych**Pamięć cache** przyspiesza dostęp do najczęściej używanych instrukcji i danych. Praca CPU to nieustanne powtarzanie czterech kroków, zwanych cyklem rozkazowym. Odbywa się on miliardy razy na sekundę.**Pobranie (Fetch)**: Jednostka sterująca pobiera z pamięci RAM następną instrukcję do wykonania.**Dekodowanie (Decode)**: Instrukcja jest tłumaczona na język zrozumiały dla procesora.**Wykonanie (Execute)**: ALU wykonuje określoną operację na danych.**Zapis (Store)**: Wynik operacji jest zapisywany z powrotem do rejestru lub pamięci RAM.Mechanizmy Optymalizacji Pracy CPU**Przetwarzanie potokowe (Pipelining)**: Nakładanie na siebie faz wykonania wielu instrukcji w celu maksymalizacji przepustowości.**Architektura superskalarna:** Wykonywanie więcej niż jednej instrukcji w jednym cyklu zegara dzięki zwielokrotnionym jednostkom wykonawczym.**Wykonywanie poza kolejnością (Out-of-Order):** Inteligentna zmiana kolejności instrukcji, aby unikać przestojów i optymalnie wykorzystywać zasoby.**Przewidywanie rozgałęzień (Branch Prediction):** Spekulacyjne wykonywanie kodu warunkowego w celu eliminacji opóźnień.Procesor korzysta z systemu pamięci, gdzie im bliżej rdzenia, tym szybszy dostęp, ale mniejsza pojemność. Rejestry (natychmiastowy) → Cache L1/L2/L3 (bardzo szybki) → RAM (szybki) → Dysk (wolny)
>
>> [!danger] ## 7.2. Rejestry ogólnego i specjalnego przeznaczenia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Stos i podprogramy procesora.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.4. Kontroler przerwań i DMA.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.5. Magistrale systemowe i peryferyjne.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.6. Kontroler pamięci i zarządzanie dostępem.
>>> [!question]- #### CPU i pamięć
>>>> [!quote] **CPU (Central Processing Unit)**to główny układ komputera odpowiedzialny za wykonywanie instrukcji programów. Procesor pobiera dane z pamięci, przetwarza je i odsyła wyniki, sterując jednocześnie pracą całego systemu.Jednostka arytmetyczno-logiczna (ALU) wykonuje operacje matematyczne i logiczne. 2)Jednostka sterująca (CU) interpretuje instrukcje i kieruje przepływem danych 3)Rejestry pełnią rolę bardzo szybkiej pamięci roboczej dla tymczasowych danych 4) Pamięć cache przyspiesza dostęp do najczęściej używanych instrukcji i danych. Pamięć a CPU: **RAM (Random Access Memory)** – pamięć operacyjna, szybka, ulotna (traci dane po wyłączeniu).**ROM (Read-Only Memory)** – pamięć stała, zawiera np. firmware.**Cache (L1, L2, L3)** – bardzo szybka pamięć blisko CPU, przechowuje najczęściej używane dane.**Rejestry** – najmniejsza, ale najszybsza pamięć wewnątrz CPU.**Pamięć masowa (SSD, HDD)** – trwała, ale wolniejsza niż RAM.
>
>> [!danger] ## 7.7. Rodzaje instrukcji maszynowych i tryby adresowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Reprezentacja i kodowanie danych.
>> [!danger] ## 8.1. Systemy liczbowe: binarny, ósemkowy, szesnastkowy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Reprezentacja liczb w systemach znak-moduł, U2, z przesunięciem (offset).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Reprezentacje specjalne (BCD, kod Graya).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.4. Konwersje pomiędzy systemami liczbowymi.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.5. Błędy zaokrągleń i przepełnienia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.6. Kolejność bajtów w reprezentacji wielobajtowej (endianness).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 9. Układy wejścia/wyjścia i peryferia mikrokontrolerów.
>> [!danger] ## 9.1. GPIO – podstawowe wejścia/wyjścia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.2. Liczniki i timery sprzętowe.
>>> [!question]- #### DAM i timery - nie wiem o co chodzi z tym DAM to jest albo DMA czyli direct memory access, albo chłopu się pojebało i chodziło o liczniki
>>>> [!quote] MA to wyspecjalizowany układ sprzętowy (kontroler), który potrafi przesyłać bloki danych między pamięcią a peryferiami (lub między obszarami pamięci) **bez udziału CPU** DMA i CPU dzielą tę samą szynę danych. Jeśli oba chcą dostępu naraz, kontroler magistrali (Bus Matrix) decyduje, kto ma pierwszeństwo (zazwyczaj DMA dostaje priorytet lub działa w cyklach, gdy CPU nie używa pamięci – tzw. _cycle stealing_).  **Timery** to układy sprzętowe liczące impulsy zegarowe. Mogą służyć do odmierzania czasu, generacji sygnałów, wyzwalania przerwań lub pomiaru częstotliwości. Elementy te charakteryzuje fakt, że działają niezależnie od działania procesora. Dzięki temu CPU może wykonywać niezależny kod programy, a w tym samym czasie licznik może np. zliczać impulsy na pinie wejściowym. **Timer (licznik)** do pracy potrzebuje sygnału zegarowego, który może być dostarczany z zewnątrz lub generowany wewnętrznie przez mikrokontroler. W przypadku użycia zegara wewnętrznego jego częstotliwość można zmniejszyć dzięki preskalerowi (dzielnikowi). Każdy licznik posiada również flagę przepełnienia, ustawianą po przekroczeniu zakresu. Wykorzystując to zjawisko, opóźnienia programowe można realizować poprzez wczytanie wartości początkowej i oczekiwanie na ustawienie tej flagi.**
>
>> [!danger] ## 9.3. Interfejsy komunikacyjne (UART, SPI, I²C, CAN).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.4. Moduły ADC i DAC.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.5. Generacja sygnałów PWM.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.6. Watchdog i kontrola pracy systemu.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.7. Współpraca mikrokontrolera z czujnikami cyfrowymi i analogowymi.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 10. Obsługa przerwań i wyjątków.
>> [!danger] ## 10.1. Kontroler przerwań (NVIC).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.2. Tablica wektorów przerwań.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.3. Procedury obsługi przerwań (ISR).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.4. Priorytety przerwań i ich hierarchia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.5. Stos procesora w obsłudze przerwań.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.6. Mechanizmy maskowania i obsługi wyjątków.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 11. Programowanie mikrokontrolerów w języku C.
>> [!danger] ## 11.1. Typy danych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.2. Przekształcanie typów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.3. Zmienne i stałe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.4. Zasięg zmiennych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.5. Wskaźniki i tablice.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.6. Struktury.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.7. Funkcje i makrodefinicje.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.8. Sposoby przekazywania argumentów do funkcji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.9. Operatory – priorytety, kolejność obliczeń.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.10. Operacje bitowe na rejestrach.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.11. Instrukcje sterujące: warunkowe, pętle i pozostałe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.12. Komentarze.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.13. Biblioteki i zbiory nagłówkowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.14. Elementy standardu C99.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
