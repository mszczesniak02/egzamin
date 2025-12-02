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
>[!warning] # Kompresja sygnałów
>>[!danger] ## kodowanie Huffmana - opis i własności (Korohoda)
>>>[!question]- #### Kompresja - kodowanie Hauffmanna: opisz
>>>>[!quote]  Kompresja to proces zmniejszenia ilości danych z jak najmniejszą utratą jakości lub nawet jej brakiem. ( że brak utraty danych). 
>>>> Rozróżniamy dwa rodzaje kompresji - stratną i bezstratną. Sama nazwa sugeruje jak działają. 
>>>> 
>>>> Kompresja bezstratna to taka, w której nawet jeden bit informacji nie może się stracić. Może być ona stosowana w przypadku np. kompresji plików tekstowych.  
>>>> Stosuje się w niej mechanizm zamiany najczęściej pojawiającego się wyrazu (litery / liczby / bitu) oraz przyjmując odpowienie kodowanie, zamienia je w spobób, który pozwala potem je zdekompreskować.
>>>>Przykładami takiej bezstratnej może być JPEG, MP3, MP4
>>>> 
>>>> Kodowanie Huffmana jest jedną z takich metod, w niej przypisujemy wartości najpopularniejszych słów pewne prawdopodobieństwo.
>>>> Kroki: 
>>>>1- Podliczyć ile jest każdego słowa 
>>> 2- Uporządkować symbole od najmniejszego do największego (częstością)  
>>>3- Wybrać dwa elementy o najmniejszym prawdopodobieństwie i połączyć je w nowy węzeł, którego waga jest sumą ich wag. 
>>>4- Wstawić nowy węzeł z powrotem na listę (zachowując porządek sortowania) i powtarzać proces, aż zostanie tylko jeden element (korzeń drzewa). 
>>>>5- Przypisać gałęziom drzewa bity (np. lewa gałąź = 0, prawa = 1) i odczytać kody idąc od korzenia do liścia danego symbolu.
>>>>
>>>> Kod w postaci Huffmana pozwala na pisanie wszystkiego w jednym ciągu, bo żadne słowo nie jest początkiem innego słowa.
>>>> Jeżeli kompresja zachodzi na sygnałach które są względem siebie bardzo różne, to nie będzie dużych efektów.
>>>> Aby kompresja się ogólnie udała, kompresor i dekompresor musi wiedzieć jak ma zinterpretować dane, więc trzeba wiedzieć z góry, (dekompresor) jak ma rozczytywać dane

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
>[!warning] # Banki Filtrów
>>[!danger] ## Podpróbkowanie 
>>>[!question]- #### Metoda procesowania podpróbkowania i nadpróbkowania zwłaszcza w technice komputerowej (Witkowski) 
>>>>[!quote] Pod i nadpróbkowanie ( ogólnie przepróbkowanie ( resampling) ) to proces zmiany częstotliwości sygnału już spróbkowanego.
>>>> Używane jest to ogólnie do dostosowania częstotliwości do różnych standarów, m.in w przypadku, gdy w filmach mamy różne ilości klatek na sekundę, ( w europie i usa rózne) a mamy jeden angielski dźwięk, i wtedy trzeba dostosować odpowiednio częstotliwości, by się nic nie rozjechało.
>>>> 
>>>> Podpróbkowanie (decymacja) to proces, w którym próbujemy (domyślnie/historycznie co 10, bo decy) próbkę, w celu osiągnięcia niższej częstotliwośći wyjściowej sygnału.
>>>> Jest to realizowane w dwóch krokach ( dla podpróbkowania niedziesiętnego (1, 2 ,3 a nie .5, .6)): 
>>>> 1. Filtr dolnoprzepustowy - realizuje ucinanie składowych wysokoczestotliwośćiowych, by nie zostały wzięte pod uwagę przy przycinaniu (np: sin(5x) + .3sin(5000x), małe zmiany sin5k moga spowodować złą interpretacje ogolnego sygnału, który tu stanowi sin5x )
>>>> -2. Decymator - filtracja sygnału co M-tą próbkę. Sam on powoduje wysoką częstotliwość, bo gdy ucinamy sygnał, moze powstać wysoki skok z jednej wartości na drugą, a wysokie prążki, (wielka pochodna) w czasie odpowiada wielkiej (wysokiej ) częstotliwości. Stąd często krok 1 to filtr antyaliasingowy, który odpowiednio ścina wysoką częstotliwość
>>>>
>>>> Jeśli filtr to IIR, to przed drugim sygnałem musi dostać informację z feedback, jeżeli FIR, to po prostu bierze co Mtą próbkę.
>>>> W przypadku podpróbkowania o liczbę dziesiętną M/L = np. 4.5, należy najpierw przeprowadzić nadpróbkowanie o liczbe L, (L < M), a poźniej przeprowadzić decymację co M.
>>>>
>>>> Nadpróbkowanie (upsampling ) to proces odwrotny do podpróbkowania, chcemy zwiększyć ilość sampli.
>>>> Kroki:
>>>> -1. Ekspansja (eskpander) - dodaje między próbki M zer, zwiększając ilość sampli, przez co zwiększa częstotliwość próbkowania,
>>>> -2. Interpolacja - wyrównanie braku łączności (smoothing) próbek o drastycznym skoku (wielkie pochodne)
>>>>
>>>> Jeżeli chcemy zrobić zwiększenie o ułamek L/M, to należy zrobić upsampling o L, a potem downsampling o M.


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
>[!warning] # Próbkowanie sygnałów
>>[!danger] ## Próbkowanie, aliasing, kwantyzacja, błędy
>>>[!question]- #### Omów próbkowanie, delta Diraca, twierdzenie Shannona, alissing (Witkowski)
>>>>[!quote] Próbkowanie to proces, którego zadaniem jest uzyskanie z sygnału ciągłego w czasie sygnalu dyskretnego. Realizowane jest to (w idealnym świecie ) poprzez okresowy pomiar wartości amplitudy sygnału funkcją delty Diraca.
>>>> 
>>>> Delta Diraca to dystrybucja, nie funkcja ( bo nie spełnia kryterium funkcji), której powierzchnia (całka z delty diraca) wynosi zawsze 1, natomiast jej "span" (amplituda) w miejsach niezerowych wynosi nieskończoność. 
>>>> Jej własności pozwalając reprezentwoać sygnał impulsowy, o nieskończonej amplitudzie, a po transformacjach (Fourer / Laplace), odpowiada jedynce, przez co liczenie transformat z nią sprowadza się do mnożenia przez 1.
>>>> Delta Diraca jest liniowa, można ją skalować, jest również symetryczna
>>>>
>>>> Próbkowanie jest realizowane co stały okres funkcją grzebieniową (d.diraca co interwał).
>>>> Pozwala to uzyskać punkty odpowiadające wartości sygnałów w danym miejscu w czasie.
>>>> Najwazniejszym podczas próbkowania jest właśnie interwał z jakim to robimy. Musi być on na tyle duży, by nie doprowadzić do błędnego odczytu, co doprowadzi do złej rekonstrukcji sygnału.
>>>> Częstotliwośc próbkowania, czyli ów interwał musi być większy od dwukrotności największej częstotliwości sygnału pierownego (tego który chcemy spróbkować), by spełnić kryterium Shannona, dzięki któremu możliwa jest poprawna rekonstrukcja sygnału.
>>>> W przypadku niespełnienia kryterium Shannona, powstanie aliasing, czyli ( i tutaj narysować trzeba też) sygnał pierwotny zmienia się szybciej, niż go próbkujemy, przez to nie jesteśmy w stanie zobaczyć wszystkich zmian, co może doporowadzić do utraty zawartości sygnału. Jeżeli jest to dźwięk, to np. można utracić głębię głosu, spłaszczyć go i doprowadzić do tego, że nie bedzie wyraźnie go słuchać.
>>>>
>>>> Rekonstrukcja to możliwość odtworzenia sygnału z jego spróbowanej formy za pomocą użycia funkcji sinc(x) = sinx/x, gdy dla kazdej próbki przetworzymy go przez sinc, (oraz dodamy jej wartości dla każdej innej próbki, lepiej narysować ) to wynikowo otrzymamy poprawnie odtworzony sygnał pierwotny (pod warunkiem spełnienia tw.Shannona).
>>>>
>>>> Aliasing przejawia się (w dziedzienie t)  zbyt wolnym "dopasowaniem" sygnału, natomiast w dziedzinie f, nachodzącymi się zakresami (też narysować), co powoduje ich sumowanie, w efekcie zwiększenie pasma potrzebnego do wysłania sygnału.
>>> 
>>
>>>[!question]- #### Aliasing (Frankowski)
>>>>[!quote]  Aliasing to sytuacja która zachodzi w przypadku niespełnienia tw, Shannona. Przejawia się tym, że w reprezentowanym sygnałe powstają artefakty, w obrazach np linie okręgów na tle jednolitej ściany, bądź w dźwięku jako niewyraźna mowa, spłaszczenie dźwięku.
>>>> 
>>>> Aby aliasing mógł zajść, potrzeba jest rekonstrukcja sygnału, czyli odwtorzenie pierwotnego sygnału z jego spróbkowanych wartości. Realizowane jest to za pomocą funkcji sinc() dla każdej próbki (tu narysować trzeba). Jeżeli poprawnie dopasujemy częstotliwość próbkowania, aliasingu nie będzie.
>>>>
>>>> Aliasing w dziedzinie f przejawia się nachodzącymi się przedziałami (trzeba narysować), które potem się sumują, tworząc sztucznie częstotliwości sygnału, których nie ma w oryginalnym sygnale. Ponieważ operujemy na sygnale dyskretnym, to przez własności sprzężenia ( mnozenie  w f to splot w t i na odwrót) nasz sygnał powtarza się cyklicznie w dziedzinie częstotliwości ). Aby temu zaradzić ( powtarzającym się sygnałom oraz efektu aliasingu) stosuje się filtry dolnoprzepustowe, które pozwalają wyciszyć i usunąć składowe wysokoczęstotliwościowe z sygnału.
>>> 


>[!warning] # Filtry cyfrowe, banki filtrów
>>[!danger] ## Filtry cyfrowe FIR IIR
>>>[!question]- #### FIR, na czym budujemy???  (Krzak)
>>>>[!quote] FIR czyli Finite impulse response to filtr spełniający warunki liniowości (LTI - linear time invariant ) o skończonej ilości parametrów (współczynników), które trwają określony czas ( są zbiezne do zera po jakimś czasie T).
>>>>FIltry FIR mają M parametrów oraz filtrują M+1 sampli, zanim stanie się zerem (w sensie filtr, nie sygnał ).
>>>> Własnościami takiego filtru jest to, że zawsze jest stabilny, nie ma sytuacji w której stanie się generatorem, bo nie ma pętli zwrotnej feedback, ale również przez to, nie jest w stanie dopasowywać sygnału na bierząco, bo nie ma informacji zwrotnej do niego. 
>>>> Główną wadą filtrów FIR jest ich złożoność obliczeniowa, któej potrzebują względem filtrów IIR.
>>>> Filtry można opisywać za pomocą transformaty Z - transmitancja, wykresu, schematu i równania.
>>>> Głównymi elementami budulcowymi są elementy opóźniające (z^-1, rejestry przesuwne), układy mnozące (współczynniki b. * próbka) oraz sumatory dodające wyniki mnożeń
>>>>
>>> Zastosowanie do filtrów anty aliasingowych, equalizery ( bo FIR mają liniową fazę, to można fajnie wszystkimi operować),
>>>> w medycynie w sygnałach mózgu ważny jest kształ sygnału, więc stały filtr nie wprwowadzający zmian związanych z feedback lepiej oddaje rzeczywiste wartośći
>>
>>>[!question]- #### FIR - co to , budowa, wady,zalety, jak dziala, zastosowanie (krzak)
>>>>[!quote] FIR czyli Finite impulse response to filtr spełniający warunki liniowości (LTI - linear time invariant ) o skończonej ilości parametrów (współczynników), które trwają określony czas ( są zbiezne do zera po jakimś czasie T).
>>>>FIltry FIR mają M parametrów oraz filtrują M+1 sampli, zanim stanie się zerem (w sensie filtr, nie sygnał ).
>>>> Własnościami takiego filtru jest to, że zawsze jest stabilny, nie ma sytuacji w której stanie się generatorem, bo nie ma pętli zwrotnej feedback, ale również przez to, nie jest w stanie dopasowywać sygnału na bierząco, bo nie ma informacji zwrotnej do niego. 
>>>> Główną wadą filtrów FIR jest ich złożoność obliczeniowa, któej potrzebują względem filtrów IIR.
>>>> Filtry można opisywać za pomocą transformaty Z - transmitancja, wykresu, schematu i równania.
>>>> Głównymi elementami budulcowymi są elementy opóźniające (z^-1, rejestry przesuwne), układy mnozące (współczynniki b. * próbka) oraz sumatory dodające wyniki mnożeń
>>>>
>>> Zastosowanie do filtrów anty aliasingowych, equalizery ( bo FIR mają liniową fazę, to można fajnie wszystkimi operować),
>>>> w medycynie w sygnałach mózgu ważny jest kształ sygnału, więc stały filtr nie wprwowadzający zmian związanych z feedback lepiej oddaje rzeczywiste wartośći
>>

