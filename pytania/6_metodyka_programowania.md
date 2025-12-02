

>[!warning] # Funkcje w programowaniu
>>[!danger] ## rola i struktura, rekurencja, przekazywanie argumentów
>>>[!question]- #### Funkcja w programowaniu (Witkowski)
>>>>[!quote] Funkcja w programowaniu to instrukcje które można wydzielić w celu ich ponownego użycia.
>>>> Każdy język może mieć różne realizacje tworzenia funkcji, natomiast ich działanie niskopoziomowe odpowiada wprowadzeniu do pamięci programu (na stack/stos) instrukcji, do której poźniej procesor kieruje licznik operacji do wykonania. 
>>>> Czyli jej głównym celem jest ograniczenie "pisania tego samego" do cennej pamięci, szczególnie w małych jednostkach.
>>>>
>>>> W zależności od języka programowania, statically-typed, czyli z strike określonymi typami danych oraz dynamically typed, czyli takimi, które nie mają twardo przypisanego typu.
>>>> Takie języki jak C, pozwalają na deklarację oraz implementacje osobno, co pozwala na higienę kodu oraz pomaga jego strukturyzacji. 
>>>> Każda funkcja w językach statycznych posiada typ zwracania (typem może również być brak typu, void) posiada swoją nazwę, oraz parametry wejściowe.
>>>> W zależności od języka, może również posiadać słowo odpowiadające za samą definicię funkcji, np. def. fn, itp. 
>>>> Parametrami funkcji mogą być wartości podawane nazwami (x=[wartości]), pozycjami (foo(x,y,z)) lub w niektórych językach \*arg \*\*kwark, czyli argumenty pozycyjne, i te podawane z nazwy.
>>>> Co za tym idzie, nieskończona ilość nie do końca, bo mamy ograniczoną pamięć i czas naszego życia, ale za pomocą właśnie Variadic Functions, czyli tych arg o kwarg, czy ... w c, definujemy parametry, których może być wiele, nie ma konkretnej ilości, jest ona zmienna, może się przydać np. do podawania wartości do narysowania funkcji jako plot_x(xs:array)
>>>> Wartości mogą być podawane jako referencje, i kopie, które odpowienio pozwolą wskazać na miejsce w pamięci do wykonania operacji bądź wręcz skopiowania tej wartośći do "pamięci funkcji" oraz nie zmieniania jej bebechów.
>>>> Funckja wykonuje instrukcje w sobie, co za tym idzie, ma swój własny zakres (scope) zmienne zawarte w funkcjach nie są dostępne poza nią (chyba że ściśle zadeklarowane do bycia takimi, np pointer bez wskazania na pamięć, ale to raczej błąd niż feature), chyba ze operujemy na zmiennych globalnych, lub po prostu dostępnych w zakresie wystąpienia funkcji.

>>
>>>[!question]- #### Funkcja w programowaniu, co robi i po co, czy może mieć nieograniczoną liczbę argumentów (Grochot)
>>>>[!quote]  Funkcja w programowaniu to instrukcje które można wydzielić w celu ich ponownego użycia.
>>>> Każdy język może mieć różne realizacje tworzenia funkcji, natomiast ich działanie niskopoziomowe odpowiada wprowadzeniu do pamięci programu (na stack/stos) instrukcji, do której poźniej procesor kieruje licznik operacji do wykonania. 
>>>> Czyli jej głównym celem jest ograniczenie "pisania tego samego" do cennej pamięci, szczególnie w małych jednostkach.
>>>>
>>>> W zależności od języka programowania, statically-typed, czyli z strike określonymi typami danych oraz dynamically typed, czyli takimi, które nie mają twardo przypisanego typu.
>>>> Takie języki jak C, pozwalają na deklarację oraz implementacje osobno, co pozwala na higienę kodu oraz pomaga jego strukturyzacji. 
>>>> Każda funkcja w językach statycznych posiada typ zwracania (typem może również być brak typu, void) posiada swoją nazwę, oraz parametry wejściowe.
>>>> W zależności od języka, może również posiadać słowo odpowiadające za samą definicię funkcji, np. def. fn, itp. 
>>>> Parametrami funkcji mogą być wartości podawane nazwami (x=[wartości]), pozycjami (foo(x,y,z)) lub w niektórych językach \*arg \*\*kwark, czyli argumenty pozycyjne, i te podawane z nazwy.
>>>> Co za tym idzie, nieskończona ilość nie do końca, bo mamy ograniczoną pamięć i czas naszego życia, ale za pomocą właśnie Variadic Functions, czyli tych arg o kwarg, czy ... w c, definujemy parametry, których może być wiele, nie ma konkretnej ilości, jest ona zmienna, może się przydać np. do podawania wartości do narysowania funkcji jako plot_x(xs:array)
>>>> Wartości mogą być podawane jako referencje, i kopie, które odpowienio pozwolą wskazać na miejsce w pamięci do wykonania operacji bądź wręcz skopiowania tej wartośći do "pamięci funkcji" oraz nie zmieniania jej bebechów.
>>>> Funckja wykonuje instrukcje w sobie, co za tym idzie, ma swój własny zakres (scope) zmienne zawarte w funkcjach nie są dostępne poza nią (chyba że ściśle zadeklarowane do bycia takimi, np pointer bez wskazania na pamięć, ale to raczej błąd niż feature), chyba ze operujemy na zmiennych globalnych, lub po prostu dostępnych w zakresie wystąpienia funkcji.

>>
>>>[!question]- #### Funckje- co to jak dziala, konstrukcja, argumenty, return (czy istnieje funkcja z niskonczona ilością argumentów, funckje anonimowe) (Grochot)
>>>>[!quote]  Funkcja w programowaniu to instrukcje które można wydzielić w celu ich ponownego użycia.
>>>> Każdy język może mieć różne realizacje tworzenia funkcji, natomiast ich działanie niskopoziomowe odpowiada wprowadzeniu do pamięci programu (na stack/stos) instrukcji, do której poźniej procesor kieruje licznik operacji do wykonania. 
>>>> Czyli jej głównym celem jest ograniczenie "pisania tego samego" do cennej pamięci, szczególnie w małych jednostkach.
>>>>
>>>> W zależności od języka programowania, statically-typed, czyli z strike określonymi typami danych oraz dynamically typed, czyli takimi, które nie mają twardo przypisanego typu.
>>>> Takie języki jak C, pozwalają na deklarację oraz implementacje osobno, co pozwala na higienę kodu oraz pomaga jego strukturyzacji. 
>>>> Każda funkcja w językach statycznych posiada typ zwracania (typem może również być brak typu, void) posiada swoją nazwę, oraz parametry wejściowe.
>>>> W zależności od języka, może również posiadać słowo odpowiadające za samą definicię funkcji, np. def. fn, itp. 
>>>> Parametrami funkcji mogą być wartości podawane nazwami (x=[wartości]), pozycjami (foo(x,y,z)) lub w niektórych językach \*arg \*\*kwark, czyli argumenty pozycyjne, i te podawane z nazwy.
>>>> Co za tym idzie, nieskończona ilość nie do końca, bo mamy ograniczoną pamięć i czas naszego życia, ale za pomocą właśnie Variadic Functions, czyli tych arg o kwarg, czy ... w c, definujemy parametry, których może być wiele, nie ma konkretnej ilości, jest ona zmienna, może się przydać np. do podawania wartości do narysowania funkcji jako plot_x(xs:array)
>>>> Wartości mogą być podawane jako referencje, i kopie, które odpowienio pozwolą wskazać na miejsce w pamięci do wykonania operacji bądź wręcz skopiowania tej wartośći do "pamięci funkcji" oraz nie zmieniania jej bebechów.
>>>> Funckja wykonuje instrukcje w sobie, co za tym idzie, ma swój własny zakres (scope) zmienne zawarte w funkcjach nie są dostępne poza nią (chyba że ściśle zadeklarowane do bycia takimi, np pointer bez wskazania na pamięć, ale to raczej błąd niż feature), chyba ze operujemy na zmiennych globalnych, lub po prostu dostępnych w zakresie wystąpienia funkcji.


