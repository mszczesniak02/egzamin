
>[!warning] # Przerwania & obsługa wątków
>>[!danger] ## Przerwania, NVIC, ISR, hierarchia przerwań, maskowanie 
>>>[!question]- #### Przerwania w mikrokontrolerze (Ostrowski)
>>>>[!quote] Przerwania w mikrokontrolerze to funkcja która pozwala na "przekazanie uwagi" procesora na obsługę zdarzenia, po której zakończeniu wraca do tego, co robił przed wezwaniem do przerwania.
>>>> Przerwania w zależności od producenta, ale ogólne mają rejestr NVIC ( Nested vecored interrupt controller), który informuje procesor o przerwaniu, by ten mógł do niego przejść.
>>>> Ważnym konceptem jest priorytet przerwania oraz jego typ
>>>>
>>>> Przerwania można podzielić na systemowe(software) oraz sprzętowe(hardware).
>>>> Przerwanie sprzętowe odpowiada zdarzeniu, w którym jakiś układ informuje o zmianie stanu, czy gotowości do nadawania, np. UART, klawiatura, czy sensor. Aby móc takie żądanie obsłużyć, należy odpowiednio zaprogramować ISR( interrupt service routine), czyli należy włączyć piny na których podlączeniu jest system do obługi, należy do odpowiedniego przerwania włączyć maskę oraz stworzyć mechanizm obługi (funkcja callback ). No i przypisać priotytet dla danego zadania.
>>>>
>>>> Przerwania systemowe to takie, w których np. procesor bądź pamięć nie jest wstanie wykonać zadania, oraz pojawia sie błąd np. segfault, błąd połaczenia, brak danych w pliku itp. W niektórych przypadkach można odpowiedio się do nich przygotowąć tworząc funkcje do obsługi takich błędów, ale czasami po prostu program się rozpierdoli.
>>>>
>>>> Priotytety w przerwaniach są bardzo istotne, bo pozwalają na zdefiniowanie ważniejszych funkcji do obługi, np klikanie na klawiaturze jest wolniejsze niż przesył danych przez uart, stąd uart miałby ważniejszy priorytet. Ich numerowanie jest odwrotne ( im niższy, tym ważniejszy) możliwe jest przypisanie aż do 0. Systemowe przerwania mają priorytet -1.
>>>> Wykonanie przerwania następuje po jego wykryciu, procesor zapamiętuje gdzie był w stosie, następnie przechodzi do obsługi przerwania, jeżeli podczas wykonywania przerwania nastąpi inne, o większym priorytecie, robi to ważniejsze, jeżeli jest to samo, to najpierw kończy swoje. Po skończeniu wraca do obłsugi tego co robił przed przerwaniami

>[!warning] # Pamięci komputerowe
>>[!danger] ## Technologie pamięci, zasada działania
>>>[!question]- #### Pamięci w mikrokontrolerze, rodzaje do czego służą, ograniczenia pamieci (Krzak)
>>>>[!quote] Pamięci w mikrokontrolerze są podzielone na pamięci danych oraz pamięci operacyjne, wedle architektury Harwardzkiej. Można rozróżnić również ewentualne pamięci stałe nieulotne przy systemach typu raspberry PI ale to zwykle pamięci w formie pendrive czy karty pamięci.
>>>> Większość procesorów posiada również swoją dedykowaną pamięć Cache, czyli małą pamięc (względnie) do przetwarzania informacji szybko ( na podstawie przewidywania co może być następne).
>>>>
>>>> Celami pamięci jest przechowywanie danych: pamięć flash, czyli danych jest nieulotna, czyli nie znika po wyłączeniu zasilania, jest na niej zapisywany program który chodzi na płytce, czyli tam może byc Bootloader. Mamy pamięć operacyjną SRAM, która jest szybka, wielodostępowa służaca do wykonywania operacji na danych. 
>>>> 
>>>> Ograniczeniami pamięci jest prędkość oraz ich pojemność, w przypadku danych nieulotnych również ilość możliwych wpisów oraz "wyczyszczeń". Do pamięci operacyjnej mikrokontrolera raczej nie uzyjemy dynamicznego przypisaywania pamięci bo nie ma jej aż tyle, w przypadku przepełnienia program się zesra.
>>>>
>>>> Pamięci również mają ograniczony czas dostępu - proces zapisu danych może być znacznie wolniejszy niż ich obróbka w procesorze, a jeżeli celem jest zapisanie danych, stanowi to problem. Procesor musi czekać na dostęp do danych, a mógłby robić co innego.

>[!warning] # Architektura procesora 
>>[!danger] ## Rejestry, stos, kontroler przerwań, magistrale systemowe
>>>[!question]- #### Rejestry w mikroprocesorze - jakie są i do czego służą (Jamro)
>>>>[!quote] Rejestry to szybkie pamięci stosowane do wykonania operacji  i tymczasowego przetrzymywania danych. Ilość tych rejestrów zależy od producenta, ale zwykle jest to 8,16,32 bity per register.
>>>>Wyróżniamy takie ważniejsze jako:
>>>> -General Purpose Register - trzyma dane z wykonanych operacji arytmetycznych i logicznych
>>>> -Stack pointer - wskaźnik na obecną pozycję w stosie
>>>> -Link register - pozwala na łączenie w szereg operacji do wykonania, np. zagnieżdżone funkcje, odpowiednio zwraca miejsce w pamięci do którego trzeba iść
>>>> -Control register - rejestr to trzymania konfiguracji, np. włączone piny, ich kierunkki, maski, przerwania
>>>> -Status register - monitoruje stany operacji, np Carry, Overflow, Zero, flagi operacji
>>>> -Special registers - specjalne rejestry do uarta, timerów, PWM itd
>>>> -Program coutner - licznik programu, rejestr trzymająćy adres następnej instrukcji
>>>>
>>>> Można wpisywać na twardo w C wartości do rejestrów, w tym celu trzeba zrobić pointer na pamięć, np uint32_t, i wpisać odpowiednią bitową wartość masek, ale większość bibliotek ma to ułatwione odpowiednimi makrami i funkcjami, XOR itp.
>
>>[!danger] ## Pamięci Cache, pamięci SRAM, 
>>>[!question]- #### Pamięć Cache, czym jest, gdzie się znajduje jakie ma cechy (sram), jakie są różnice między poziomami l1 l2 l3, co jest nad cache (pamięć operacyjna) Dram (Jamro)
>>>>[!quote] Pamięć Cache to względnie mała pamięć ( w porównaniu do np. pamięci operacyjnej) stosowana bezpośrednio w procesorze CPU. Jest ona przystosowana do szybkiego transferu danych, pozwala przyspieszyć operacje na danych odpowienio przewidując jakie operacje nastepne będą wykonywane, odpowiendio biorąc te dane zawczasu.  
>>>>
>>>> Ich cechami jest mała pojemność, bo im większa pojemność, tym więcej czasu wymaga odczyt i wymiary fizyczne, szybkość oraz bliskość do procesora.
>>>> Są zbudowane zwykle jako SRAM
>>>>
>>>> L1 - level 1 b.mały, wewnątrz procesora, każdy wątek ma swoją własną
>>>> L2 - level 2 może być zarówno w jak i poza procesorem, jeśli poza, to może byc wspólny dla kilku wątków, połączone z procesorem szybką magistralą danych
>>>> L3 - poza procesorem, wspólny dla wszystkich wątków, zadaniem jest przyspieszenie L1 i L2, do kilku MB.
>>>
>>> Pamięć operacyjna to pamięć szybsza od dyskowej ale wolniejsza od cache, jest to rodzaj DRAM, czyli dynamic random access memory, służy do przechowywania danych do wykonania na nich operacji. Jest stworzony z wielu tranzystorów i kondensatorów, podtrzymujących poziom logiczny danych. Wymgaja one odświeżania, bo się same rozładowywują. Dane są rozczytywane jako rzędy i kolumny. są dwie linie do dostepu - linia słów i linia bitów, kolejno pozioma i pionowa, pozwala na dostęp do pojedynczej komórki.

>[!warning] # Układy sekwencyjne
>>[!danger] ## Liczniki
>>>[!question]- #### Budowa liczników, narysowanie dwubitowego zliczającego (Dziurdzia)
>>>>[!quote] Licznik to maszynka stanu, która zwiększa się co 1 aż do ostatniego bitu, który resetuje układ, pozwalając na liczenie od zera.
>>>> Liczniki są oparte na przerzutnikach, mogą być asynchroniczne bądź synchroniczne, w zalezności od potrzeby, no ale raczej lepiej wybrać synchroniczne, dla wspólnego sygnału zegarowe.
>>>> Ilość bitów n oznacza że możemy policzyć aż do 2^n -1, bo liczymy od zera. Zwykle mamy jeszcze sygnał do resetu, który podłączamy do licznika.
>>>>
>>>> Przerzutniki są oparte na zatrzaskach, które są oparte na bramkach logicznych, których zmiant stanów set i reset pozwalają utrzymac stan logiczny na wejściu.

>[!warning] # Przetowrniki
>>[!danger] ## A/C 
>>>[!question]- #### Przetworniki A/C, zasada działania, które najszybsze? które całkują? (Dziurdzia)
>>>>[!quote] Przetwornik A/C pozwala zamienić sygnał analogowy na cyfrowy, ich główną zasadą działa jest porównanie wartości referencyjnej komparatorem z wartością analogową. Przez serię rezystorów tworzących dzielnik napięcia przypisywane są stany logiczne.
>>>> Aby to było możliwe, wprowadzana jest kwantyzacja, czyli proces przypisujący stany logiczne wartością napięć. Ograniczenie rozdzielczości powoduje, ze orzymywany sygnał wytwarza błąd kwantyzacji.
>>>> Rodzaje:
>>>> SAR - porównuje sygnał z LSB, odpowiednio poprawiając dokładność z kazdym porównaniem
>>>> digital ramp / ramp compair -timery tworzą sygnał ramp, gdy trafią na sygnał analogowy, zerują się i zaczynają od nowa, wyjście to poziom logiczny tego trafienia 
>>>> slope - integrator, mierzy czas rozładowania kondensatora, ładowanego sygnałem analogowym 
>>>> flash adc - ten typowy, podzialka rezystorów na dzielniki i komparatory
>>>> pipeline adc
>>>> tracking - śledzący, ciągle bez przerwy sprawdza wartość, gdy dotrze do niej, nie zaczyna od zera tylko śledzi sygnał

