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

> [!warning] # 3. Transformacja Laplace’a.
>> [!danger] ## 3.1. Definicja i właściwości.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Związki z ciągłą transformacją Fouriera.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Koncepcja i zastosowania delty Diraca.
>> [!danger] ## 4.1. Definicja opisowa, właściwości praktyczne.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. Przyczyny wprowadzenia, przykłady wykorzystania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Operacja splotu.
>> [!danger] ## 5.1. Definicja oraz właściwości.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Twierdzenie o splocie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

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

> [!warning] # 7. Analiza czasowo-częstotliwościowa sygnałów analogowych.
>> [!danger] ## 7.1. Krótko-czasowa transformacja Fouriera (STFT).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Rodzaje okien i ich zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

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
