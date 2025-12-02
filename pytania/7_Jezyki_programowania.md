> [!warning] # 1. Typy danych i operatory.
>> [!danger] ## 1.1. C++
>>> [!question]- #### 1.1.1. Typy podstawowe: int, float, double, char, short, long, unsigned, bool. - int vs float, jak działa float, który jest lepszy kiedy
>>>> [!quote] Int - liczby całkowite, Zazwyczaj kod U2, operacje są wykonywane na ALU (Arithmetic Logic Unit) czyli najszybsze instrukcje 1 zegarowe. Float - Floating Point, czyli instrukcja jak liczbę zbudować float składa się z bitu znaku(1bit) , wykładnika(8bitów) - rząd wielkości i mantysa (cyfry znaczące czyli precyzja) float operuje na potęgach dwójki $$Wartość = (-1)^{Znak} \times (1 + Mantysa) \times 2^{(Wykładnik - Bias)}$$ Int lepszy gdy : wystarczają całe liczby bo szybszy, można zapisać przecinek jako liczbe stałą dla lepszej dokładności np przy liczeniu pieniędzy (grosze jako liczbe po prostu drugą), sterowania bitami, systemów embedded bo niektóre tanie mikrokontrolery emulują floata co jest bardzo wolne. Float jest użyteczny gdy błędy przybliżenia są akceptowalne np w fizyce, grafice, temperaturze. Gdy w programie operuje się na ogromnych różnicach w liczbach np 10^20 i 10^-40 lub przy funkcjach trygonometrycznych
>>>
>>> [!question]- #### 1.1.2. Tablice jedno- i wielowymiarowe, struktury, unie, enumeracje.  ---Listy jedno i dwu kierunkowe, porównanie z tablicami
>>>> [!quote] Lista jednokierunkowa (singly linked list) budowa każdy element węzeł zawiera dane oraz wskaźnik na następny element cechy można przechodzić tylko w jednym kierunku od początku do końca prosta implementacja mniejsze zużycie pamięci niż lista dwukierunkowa operacje wstawiania i usuwania w środku listy są szybkie O(1) jeśli mamy wskaźnik do elementu dostęp do elementu o indeksie n wymaga przejścia od początku O(n) lista dwukierunkowa (doubly linked list) budowa każdy element zawiera dane wskaźnik na następny element oraz wskaźnik na poprzedni element cechy można przechodzić w obu kierunkach większe zużycie pamięci dodatkowy wskaźnik łatwiejsze usuwanie i wstawianie elementów w dowolnym miejscu bardziej elastyczna niż lista jednokierunkowa tablica (array) budowa ciągły blok pamięci z elementami o stałym rozmiarze cechy dostęp do elementu o indeksie n w czasie stałym O(1) rozmiar tablicy jest zwykle stały trzeba znać liczbę elementów przy tworzeniu wstawianie i usuwanie w środku wymaga przesuwania elementów O(n) bardzo efektywna pamięciowo i szybka przy odczycie.
>>>
>>> [!question]- #### 1.1.3. Operatory arytmetyczne, logiczne, bitowe, warunkowe, hierarchia i łączność.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Python
>>> [!question]- #### 1.2.1. Typy podstawowe: int, float, str, bool, complex.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 1.2.2. Kolekcje: list, tuple, set, dict.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 1.2.3. Operatory arytmetyczne, logiczne, porównania, operatory na kolekcjach.
>>>> [!quote] Odpowiedź

> [!warning] # 2. Instrukcje sterujące i obsługa wyjątków.
>> [!danger] ## 2.1. C++
>>> [!question]- #### 2.1.1. Instrukcje: if, switch-case, pętle for, while, do-while.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 2.1.2. Obsługa wyjątków: throw, try-catch.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.2. Python
>>> [!question]- #### 2.2.1. Instrukcje: if, elif, else, pętle for, while.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 2.2.2. Obsługa wyjątków: try-except-finally, raise.
>>>> [!quote] Odpowiedź

> [!warning] # 3. Funkcje i programowanie funkcyjne.
>> [!danger] ## 3.1. C++
>>> [!question]- #### 3.1.1. Funkcje, argumenty, zwracanie wartości.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.1.2. Wskaźniki na funkcje, callbacki.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.1.3. Rekurencja.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.1.4. Lambdy, std::function.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Python
>>> [!question]- #### 3.2.1. Definicje funkcji (def), argumenty pozycyjne i nazwane, wartości domyślne.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.2.2. Funkcje jako obiekty, dekoratory.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.2.3. Rekurencja.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 3.2.4. Programowanie funkcyjne: map, filter, reduce, lambda.
>>>> [!quote] Odpowiedź

> [!warning] # 4. Wskaźniki, referencje i zarządzanie pamięcią.
>> [!danger] ## 4.1. C++
>>> [!question]- #### 4.1.1. Wskaźniki, referencje, lvalue reference.
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 4.1.2. Dynamiczna alokacja (new, delete, malloc, free).
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 4.1.3. bufor kołowy
>>>> [!quote] Bufor kołowy to struktura danych służąca do efektywnego przechowywania danych o stałej pojemności. Operuje na 2 wskaźnikach: head - gdzie są zapisywane nowe dane i tail - gdzie dane są odczytywane. Gdy bufor dojdzie do końca tablicy to się zawija na jej początek. Działa na zasadzie FIFO. Jest to skuteczna metoda na zarządzanie strumieniem dancyh gdy prędkość ich odławiania jest różna np przy szybkim procesorze i wolnym odbieraniem danych z sieci. Używany przy sterownikach do UART, Przy buferowaniu filmów na yt lub w grafice do kolejki rozkazów dla karty graficznej.
>
>> [!danger] ## 4.2. Python
>>> [!question]- #### 4.2.1. Brak wskaźników jawnych – wszystko jest referencją do obiektu.
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 4.2.2. Automatyczne zarządzanie pamięcią (GC – garbage collector).
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 4.2.3. id(), is, semantyka kopiowania (copy, deepcopy).
>>>> [!quote] Odpowiedź

> [!warning] # 5. Programowanie obiektowe.
>> [!danger] ## 5.1. C++
>>> [!question]- #### 5.1.1. Klasa, obiekt, hermetyzacja. - różnica pomiędy clasa a objektem w językach programowania, dzeciczenei 
>>>> [!quote] **Klasa** to zdefiniowany przez użytkownika typ danych. Definiuje jakie zmienne i jakiego typu będą przechowywane w pamięci. Zawiera implementacje metod i niezależnie od ilości późniejszych obiektów istnieje tylko raz w pamięci programu. **Obiekt** to instancja klasy i jest to byt dynamiczny czyli istnieje tylko w czasie wykonywania się programu. Jest zalokowany na stosie lub stercie. Ma unikalne wartości zmiennych zdefiniowanych w klasie. 2 obiekty mają zawsze odzielne adresy pamięci. **Dziedziczenie** to relacja w której klasa pochodna przejmuje specyfikację klasy kazowej. (na egzaminie poszedłbym w stronę czemu warto używać dziedziczenia, ewentualnie kiedy klasa pochodna przejmuje wartości private protected public)
>>
>>> [!question]- #### 5.1.2. Dziedziczenie i polimorfizm.
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 5.1.3. Przeciążanie operatorów.
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 5.1.4. Konstruktor, destruktor.
>>>> [!quote] Odpowiedź
>>
>>> [!question]- #### 5.1.5. SOLID w C++.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Python
>>> [!question]- #### 5.2.1. Klasa, obiekt, atrybuty i metody.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 5.2.2. Dziedziczenie i polimorfizm (także wielokrotne).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 5.2.3. Metody specjalne (__init__, __str__, __add__ itd.).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 5.2.4. Właściwości (@property) i hermetyzacja umowna.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 5.2.5. SOLID w Pythonie.
>>>> [!quote] Odpowiedź

> [!warning] # 6. Szablony i generyczność vs. dynamiczność.
>> [!danger] ## 6.1. C++
>>> [!question]- #### 6.1.1. Szablony funkcji i klas.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 6.1.2. Programowanie generyczne (STL oparty na szablonach).
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Python
>>> [!question]- #### 6.2.1. Typowanie dynamiczne.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 6.2.2. Adnotacje typów (typing).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 6.2.3. Generics (List[T], Dict[K,V]).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 6.2.4. Duck typing i elastyczność zamiast szablonów.
>>>> [!quote] Odpowiedź

> [!warning] # 7. Biblioteki standardowe i kolekcje.
>> [!danger] ## 7.1. C++ – STL
>>> [!question]- #### 7.1.1. Kontenery: std::vector, std::string, std::array, std::list, std::map.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 7.1.2. Algorytmy: std::sort, std::find, std::for_each, std::transform, std::copy, std::max_element, std::min_element, std::count.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Python
>>> [!question]- #### 7.2.1. Kolekcje: list, dict, set, tuple.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 7.2.2. Biblioteka standardowa: math, itertools, functools, collections.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 7.2.3. Wbudowane funkcje (len, max, min, sum, sorted).
>>>> [!quote] Odpowiedź

> [!warning] # 8. Współbieżność i proces budowania kodu.
>> [!danger] ## 8.1. C++
>>> [!question]- #### 8.1.1. Proces budowania kodu: preprocessing, kompilacja, linkowanie, optymalizacja.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 8.1.2. Programowanie wielowątkowe: std::thread, std::mutex, std::lock, sekcje krytyczne, operacje atomowe.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 8.1.3. Synchronizacja i komunikacja między wątkami.
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Python
>>> [!question]- #### 8.2.1. Brak procesu kompilacji (interpreter, bajtkod).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 8.2.2. Wątki: threading, Global Interpreter Lock (GIL).
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 8.2.3. Współbieżność: multiprocessing, asyncio.
>>>> [!quote] Odpowiedź
>>>
>>> [!question]- #### 8.2.4. Synchronizacja: Lock, Semaphore, Queue.
>>>> [!quote] Odpowiedź



>[!warning] # Obsługa błędów
>>[!danger] ## Wyjątki try-catch
>>>[!question]- #### Mechanizm wyjątków (Ziętek)
>>>>[!quote] Wyjątki to specjalny case zdarzenia, które moze wystąpić podczas wykonywania (runtime) instrukcji, jeżeli nie jest ono odpowienio obsłużone to spowoduje crash programu.
>>>> Wyróżniamy podstawowe: własne oraz standardowe:
>>>> -własne - to takie które pozwolą na specjalne zachowanie programu w razie, gdy spodziewamy się jakiegoś zdarzenia, które nie zawsze może się spełnić, np wartość wpisana przez usera będzie NULL, a być nie może:
>>>>```cpp
>>>>try:
>>>>	if (!coś) throw wyjątek;
>>>>catch:
>>>>	... //obsługa wyjatku
>>>>```
>>>> 
>>>> Istnieją również wyjątki systemowe, które odpowiadają np. za brak pliku w lokacji którą podajemy, dzielenie przez zero, out of range, invalid argument
>>>> Jeżeli spodziewamy się pewnych błędów, to możemy je obsłużyć, zapobiegając wykroczenia sie programu.
