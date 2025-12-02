> [!warning] # 1. Sygnały jako wektory.
>> [!danger] ## 1.1. Iloczyn skalarny, norma i metryka dla sygnałów analogowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Metodyka aproksymacji sygnału w zadanej bazie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Przykładowe bazy sygnałów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Szereg Fouriera.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Analiza częstotliwościowa sygnałów analogowych.
>> [!danger] ## 2.1. Ciągła transformacja Fouriera, prosta i odwrotna – definicje, właściwości.
>>> [!question]- #### Ciągła transformata furiera i sygnał rzeczywisty, podać wzór i opisać (amplituda, faza, cześć rzeczywista, urojona) 
>>>> [!quote] przekształca sygnał czasowy w funkcje zespoloną opisującą widmo częstotliwości sygnału Wzór to całka(-niesk,niesk)x(t)*e^-jwt dt gdzie w to pulsacja. Wynik jest liczbą zespoloną co oznacza że dla każdej częst otrzymujemy wektor na płaszczyźnie zespolonej. Korzystając z wzoru Eulera zachodzi symetria hermitowska czyli część rzeczywista jest parzysta a część urojona jest nieparzysta. Amplituda widma to moduł z widma i opisuje ile energi sygnał ma na danej częstotliwości, Faza widma to arctan(części urojonej do rzeczywistej) i opisuje jak przesunięte są sinusoidy składowe względem sygnału. Część rzeczywista - odpowiada za składowe koninusowe w rozwinięciu sygnału a część urojona za składowe sinusoidowe
>
>> [!danger] ## 2.2. Transformaty podstawowych sygnałów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Symetrie występujące w transformacie sygnału rzeczywistego.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

>[!warning] # Delta Diraca, Próbkowanie
>>[!danger] ## Twierdzenie Shannona, aliasing, transformaty fouriera
>>>[!question]- #### Próbkowanie, delta Diraca, twierdzenie Shannona, alissing (Grochot)
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





> [!warning] # 4. Koncepcja i zastosowania delty Diraca.
>> [!danger] ## 4.1. Definicja opisowa, właściwości praktyczne.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. Przyczyny wprowadzenia, przykłady wykorzystania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

>[!warning] # Transformata Fouriera, splot
>>[!danger] ##  FT, FFT, DFT, splot
>>>[!question]- #### transformata Fouriera, co to, po co, jak wygląda sygnał po (Krehlik)
>>>>[!quote] Transformata Fouriera to narzędzie stosowane do analizy zawartości różnych częstotliwości w danym sygnale.
>>>> Można rozróżnić wariant dla sygnałów analogowych (czyli takich, które w dowonym miejscu (zakresie mogą przyjąć dowolną wartość ))(FT) oraz dyskretnych (cyfrowych, takich które mają ograniczoną precyzję (rozdzielność), a nieskończonej dokładności nie ma).
>>>>
>>>> TF matematycznie jest całką oznaczoną w granicach [-inf- : + inf], której składową jest wartość sygnału w czasie pomnożona z liczbą zespoloną. Działa ona dzięki temu, że przy wykryciu (nałożeniu się ) częstotliwości z pierwotnego sygnału oraz sygnału z liczby zespolonej, funckje sinus i cosinus wykrywają zera, i jedynki, czyli gdy "trafią" w jakąś częśtotliwość, ich wartości nie są zerowe (dla cos (0) = 1, sin(pi/2) = 1).
>>>>
>>>> Rozróżniamy transformatę na FT (analogowe) i DFT (dyskretną). Również transformata Laplace'a to specjalny "case" FT, tyle że zamiast granic -inf +inf, uzywamy [0 : +inf], odpowiadającej za analize równania "od zdarzenia do końca czasu".
>>>> 
>>>> Sygnał wyjściowy FT jest liczbą zespoloną, z której można uzyskać wykresy w funkcji częstotliwości f/omega, fazowy oraz amplitudowy. Takowy sygnał, jezeli operujemy na funkcjach "piertownych", czyli np. k sin(af + p), gdzie a,k,p to jakieś współczynniki ustalone, to uzyskamy sygnał po transofrmacje, w przypadku sinusa, byłby to delta Diraca z ograniczoną amplitudą.
>>>>
>>>> Ciekawą własnością FT jest związek częstotliwości i czasu, mianowicie można łatwo zamienić operację splotu w dziedzinie czasu na mnożenie transformat w dziedzinie częstotliwości, pozwalając na usprawnienie liczenia.
>>>>
>>>> Typowy wykres w dziedzinie f dla FT{ square(Tt)  } , gdzie T to okres (czyli w czasie kwadrat z -T/2 do T/2) odpowiada sygnałowi 2T*Sinc(T/pi)*, gdzie miejsca zerowe są wielokrotnością T/pi (symetrycznie)
>>>>
>>>> Dodatkowe własności, które warto opisać: zasada Parseval ( zachowanie/równoważność energii (czyli sygnał do kwadratu) w czasie i częstotliwości ), symetria Hermitowska (samosprzężenie: dla f rzeczywistego: f(-x)*  <=FT=> f(x')* , dla f zespolonego: f(-x)* <=FT=> -f(x')*.
>>>> 
>>>> Można narysować wykresy np. dla sinusa w ramach odpowiedzi




> [!warning] # 6. Filtry analogowe.
>> [!danger] ## 6.1. System liniowy, system stacjonarny.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Parametry projektowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Bieguny, zera, stabilność.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.4. Odpowiedź impulsowa – definicja, sposoby wykorzystania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.5. Charakterystyki częstotliwościowe i ich modyfikacje.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.6. Transmitancja.
>>> [!question]- #### Transmitancja, co to jest, do czego służy?
>>>> [!quote] Transmitancja to funkcja zmiennej zespolonej zazwyczaj transformacji Laplace'a, która opisuje zachowanie liniowego, stacjonarnego układu dynamicznego. Jest to stosunek sygnału Wyjściowego do sygnału wyjściowego (w dziedzinie zespolonej obv) - stosunek odp układu do wymuszenia przy zerowych warunkach początkowych. Dzieki niej wiemy w jaki sposób układ zachowa się przy podaniu mu sygnału wejściowego dla różnych częstotliwości, przejść z równań różniczkowych do prostszej postaci algebraicznej. Zbadać stabilność układu (przy pomocy biegunów) oraz wyznaczyć charakterystyki amplitudowo-fazowe (bodego)
>
>> [!danger] ## 6.7. Łączenie filtrów – równolegle/szeregowo.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

>[!warning] # Próbkowanie 
>>[!danger] ## Aliasing, twierdzenie Shannona
>>>[!question]- #### aliasing (Krehlik)
>>>>[!quote] Aliasing to sytuacja która zachodzi w przypadku niespełnienia tw, Shannona. Przejawia się tym, że w reprezentowanym sygnałe powstają artefakty, w obrazach np linie okręgów na tle jednolitej ściany, bądź w dźwięku jako niewyraźna mowa, spłaszczenie dźwięku.
>>>> 
>>>> Aby aliasing mógł zajść, potrzeba jest rekonstrukcja sygnału, czyli odwtorzenie pierwotnego sygnału z jego spróbkowanych wartości. Realizowane jest to za pomocą funkcji sinc() dla każdej próbki (tu narysować trzeba). Jeżeli poprawnie dopasujemy częstotliwość próbkowania, aliasingu nie będzie.
>>>>
>>>> Aliasing w dziedzinie f przejawia się nachodzącymi się przedziałami (trzeba narysować), które potem się sumują, tworząc sztucznie częstotliwości sygnału, których nie ma w oryginalnym sygnale. Ponieważ operujemy na sygnale dyskretnym, to przez własności sprzężenia ( mnozenie  w f to splot w t i na odwrót) nasz sygnał powtarza się cyklicznie w dziedzinie częstotliwości ). Aby temu zaradzić ( powtarzającym się sygnałom oraz efektu aliasingu) stosuje się filtry dolnoprzepustowe, które pozwalają wyciszyć i usunąć składowe wysokoczęstotliwościowe z sygnału.
>>> 
>>
>>>[!question]- #### Aliasing (Frankowski)
>>>>[!quote]  Aliasing to sytuacja która zachodzi w przypadku niespełnienia tw, Shannona. Przejawia się tym, że w reprezentowanym sygnałe powstają artefakty, w obrazach np linie okręgów na tle jednolitej ściany, bądź w dźwięku jako niewyraźna mowa, spłaszczenie dźwięku.
>>>> 
>>>> Aby aliasing mógł zajść, potrzeba jest rekonstrukcja sygnału, czyli odwtorzenie pierwotnego sygnału z jego spróbkowanych wartości. Realizowane jest to za pomocą funkcji sinc() dla każdej próbki (tu narysować trzeba). Jeżeli poprawnie dopasujemy częstotliwość próbkowania, aliasingu nie będzie.
>>>>
>>>> Aliasing w dziedzinie f przejawia się nachodzącymi się przedziałami (trzeba narysować), które potem się sumują, tworząc sztucznie częstotliwości sygnału, których nie ma w oryginalnym sygnale. Ponieważ operujemy na sygnale dyskretnym, to przez własności sprzężenia ( mnozenie  w f to splot w t i na odwrót) nasz sygnał powtarza się cyklicznie w dziedzinie częstotliwości ). Aby temu zaradzić ( powtarzającym się sygnałom oraz efektu aliasingu) stosuje się filtry dolnoprzepustowe, które pozwalają wyciszyć i usunąć składowe wysokoczęstotliwościowe z sygnału.
>>> 

> [!warning] # 8. Próbkowanie sygnałów.
>> [!danger] ## 8.1. Twierdzenie o próbkowaniu.
>>> [!question]- #### próbkowanie
>>>> [!quote] Twierdzenie Nyquista–Shannona: Sygnał ciągły o maksymalnej częstotliwości fm może być jednoznacznie odtworzony z próbek, jeśli częstość próbkowania fs spełnia warunek: fs2fm.Częstość Nyquista to połowa tempa próbkowania, czyli fN=fs/2. Jest to graniczna częstotliwość sygnału, którą można poprawnie odtworzyć po dyskretyzacji.​ Konsekwencje praktyczne:​1Próbkowanie z szybkością poniżej tej wartości prowadzi do aliasingu.2W technice często stosuje się nieco wyższe wartości fs niż 2fm (oversampling), aby zapewnić margines bezpieczeństwa i umożliwić efektywną filtrację sygnału wejściowego.​Aliasing: Zjawisko nakładania się widm sygnałów podczas próbkowania zbyt niską częstotliwością – wysokie częstotliwości "udają" niższe i są nie do odróżnienia po próbkowaniu.Filtr antyaliasingowy: Dolnoprzepustowy filtr analogowy stosowany przed próbkowaniem, który usuwa składowe powyżej fs/2, aby zapobiec aliasingowi. Najczęściej używane są filtry Butterwortha lub Chebysheva, a ich dokładność zależy od rzędu filtra i częstotliwości odcięcia.
>
>> [!danger] ## 8.2. Aliasing, filtr antyaliasingowy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Tempo próbkowania i częstotliwość Nyquista.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.4. Kwantyzacja sygnałów - równomierna, nierównomierna, szum kwantyzacji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
