> [!warning] # 1. Dyskretna transformacja Fouriera.
>> [!danger] ## 1.1. Definicja, właściwości.
>>> [!question]- #### DFT (co to, widmo sin i cos, symetrie, jak odczytać konkretny sygnał w czasie) 
>>>> [!quote] To matematyczna metoda służąca do przekształcania sygnałów dyskretnych z dziedziny czasu do częstotliwości. Przy jej pomocy możemy badać poszczególne częstotliwości występujące w sygnale. Widmo sin i cos to dwa prążki, nie do odróżnienia na wykresie amplitudowym. Dopiero na wykresie fazowym sin ma jeden prążek do góry na ujemnych częstotliwościach i dodatni na dodatnich częstotliwościach. Cos ma dwa dodanie prążki. Oby odczytać sygnał w czasie należy go spróbkować w skończoną ilość próbek przy pomocy konwertera A/C. Ewentualnie jeżeli mamy sygnał w częst to to potrzebujemy znać częst próbkowania i liczbe próbek żeby znać rozdzielczość widma, amplitude oraz fazę.
>
>> [!danger] ## 1.2. Interpretacja części amplitudowej i fazowej transformaty.
>>> [!question]- #### Widma częstotliwościowe podstawowych sygnałów 
>>>> [!quote] Sin to dwie linie na f0 i -f0 (częst sygnału), sygnał prostokątny to nieskończony szereg harmonicznych nieparzystych czyli f = f0,3f0,5f0
>
>> [!danger] ## 1.3. Symetrie występujące w transformacie DFT sygnału rzeczywistego.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Odczytywanie częstotliwości analogowej (w Hz) z transformaty DFT.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.5. Szybka transformacja Fouriera (FFT) i jego efektywność obliczeniowa.
>>> [!question]- #### FFT
>>>> [!quote] Szybka transformata Fouriera (FFT) to algorytm obliczania dyskretnej transformaty Fouriera (DFT) w sposób uproszczony i znacznie szybszy.Zamiast przeliczać wszystkie próbki po kolei, FFT wykorzystuje symetrie i powtarzalność współczynników DFT, co pozwala dzielić obliczenia na mniejsze fragmenty.

> [!warning] # 2. Analiza czasowo-częstotliwościowa sygnałów.
>> [!danger] ## 2.1. Krótko-czasowa transformacja Fouriera (STFT) dla sygnałów cyfrowych.
>>> [!question]- #### stft - ogólne informacje, transformacja falkowa
>>>> [!quote] DFT zakłada że sygnał jest stacjonarny czyli niezmienny w czasie ale w rzeczywistości większość sygnałów analogowych taka nie jest. Aby rozwiązać ten problem używa się stft, które analizuje sygnał w krótkich równych przedziałach czasowych. Przy pomocy okien czyli krótkich wycinków sygnału liczymy dft wycinka następnie przesuwamy okno ale tak żeby na siebie nachodziło - w ten sposób nie tłumimy sygnału na skrajach okien (overlaping). wynikiem stft jest spektogram - trójwymiarowy wykres z czas częstotliwością i amplitudą(kolor) w danej częstotliwości. Falkowa rozkłada sygnał na krótkie skończonne oscylacje które są skalowane i przesuwane w czasie. z chata: Rozciąganiu / ściskaniu falki→ odpowiada to analizie różnych skal (niskie i wysokie częstotliwości).Przesuwaniu jej po sygnale→ dzięki temu wiesz, gdzie dana częstotliwość występuje.
>
>> [!danger] ## 2.2. Rodzaje okien dla sygnałów cyfrowych i ich zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Operacja splotu.
>> [!danger] ## 3.1. Splot liniowy – definicja, właściwości, zastosowania, związek ze splotem kołowym.
>>> [!question]- #### Splot liniowy i kolowy - czym sa, jak działają , wzory 
>>>> [!quote] splot liniowy - opisuje jak kształt jednego sygnału (np odpowiedzi impulsowej filtru) wpływa na drugi sygnał wejściowy - polega na tym że jeden sygnał przesuwamy względem drugiego i mnożymy punktowo i sujmujemy, $$y[n] = \sum_{k=-\infty}^{\infty} x[k] \cdot h[n-k]$$ własności to 1przemienność x*h = h*x 2łączność (x*h)*g = x*(h*g) 3rozdzielność  względem dodawania (tak jak mnożenie nawiasów gdzie jest dodawnie) 4Długość wyniku: Jeśli ciąg x[n] ma długość L, a ciąg h[n] ma długość M, to wynikowy ciąg splotu liniowego y[n] ma długość L+M−1. Splot kołowy jest zdefiniowany dla dwóch sygnałów dyskretnych o tej samej, skończonej długości N. W tej operacji indeksy są traktowane "cyklicznie", co oznacza, że po dojściu do końca sygnału następuje "zawinięcie" na jego początek. $$y[n] = \sum_{k=0}^{N-1} x[k] \cdot h[((n-k) \pmod N)]$$
>
>> [!danger] ## 3.2. Splot kołowy – definicja, właściwości, zast osowania, związek ze splotem liniowym.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Splot liczony w dziedzinie częstotliwości - definicja, zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Transformacja z.
>> [!danger] ## 4.1. Definicja i właściwości.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. Związki z transformacjami Fouriera.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Filtry o skończonej odpowiedzi impulsowej FIR.
>>[!danger] ## Pytania o porównanie filtrów FIR i IIR
>>>[!question]- #### Filtry cyfrowe, działanie i parametry. Wykorzystanie FIR i IIR
>>>>[!quote] **algorytm** (wzór matematyczny), który przetwarza ciąg liczb (sygnał wejściowy $x[n]$) na inny ciąg liczb (sygnał wyjściowy $y[n]$). Parametry: częstotliwość odcięcia ( punkt w którym sygnał spada o 3dB), rząd filtru(liczba opóźnień - wyższy rząd to bardziej strome zobacze-lepsza selektywność ale więcej obliczeń), charakterystyka fazowa (Jak filtr opóźnia różne częst). Porównanie FIR i IIR będzie dalej a jak nie to wróce
>> [!danger] ## 5.1. Linowość i stacjonarność filtru.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Właściwości i charakterystyki częstotliwościowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Liniowa charakterystyka fazowa filtru.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Metody projektowania filtrów typu FIR – metoda okien czasowych, metoda oparta na odwrotnej transformacji Fouriera, metody optymalizacyjne.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Filtry o nieskończonej odpowiedzi impulsowej IIR.
>> [!danger] ## 6.1. Równanie różnicowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Właściwości i charakterystyki częstotliwościowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Stabilność, bieguny.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.4. Transmitancja – definicja, właściwości, zastosowania.
>>> [!question]- #### odpowiedz impulsowa sygmałów, BIBO, badanie( H(s), lowe pass filter - daje tu bo kij wie gdzie to umieścić
>>>> [!quote] Odpowiedź impulsowa to reakcja układu na pobudzenie Impulsem diraca czyli nieskończenie krótkim i nieskończonej amplitudzie sygnału którego pole to 1. Liczy się to przy pomocy splotu. x(t)*h(t) = $$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau) d\tau$$  czyli nakładanie się jednej funkcji na drugą przy różnych przesunięciach w czasie(splot w czasie to mnożenie w częstotliwości) BIBO - jeżeli dla ograniczonego sygnału wejściowego odpowiedź wyjściowa jest ograniczona to układ jest stabilny. Badanie H(s) dla lower pass filtra - na logike kondensator się od razu naładuje a potem będzie sie powoli rozładowywał. Powiedziałbym jeszcze że transmitancja to (1/sC)/R+(1/sC) bo dzielnik napięcia i że po przkształceniu dostajemy funkcję która po przekształceniu ma argument f/fg i dzięki niej wyznaczamy że gdy f = fg to spadek 3dB
>
>> [!danger] ## 6.5. Metoda projektowania z wykorzystaniem transformacji biliniowej.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.6. Struktura kaskadowa.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Banki filtrów.
>> [!danger] ## 7.1. Podpróbkowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Nadpróbkowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Warunki perfekcyjnej rekonstrukcji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Podstawy kompresji sygnałów.
>> [!danger] ## 8.1. Definicja entropii i jej zastosowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Kompresja stratna i bezstratna – założenia, przykłady.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Kodowanie Huffmana – opis metody, właściwości.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.4. Dyskretna transformacja kosinusowa DCT.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
