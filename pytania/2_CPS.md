

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

