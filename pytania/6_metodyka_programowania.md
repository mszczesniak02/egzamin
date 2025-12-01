> [!warning] # 1. Algorytmy i ich analiza.
>> [!danger] ## 1.1. Złożoność czasowa i pamięciowa algorytmów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Szacowanie złożoności algorytmicznej.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Algorytmy sortowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Algorytmy wyszukiwania w strukturach danych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Typy i struktury danych.
>> [!danger] ## 2.1. Podstawowe typy danych.
>>> [!question]- #### Typy danych (metodyki programowania
>>>> [!quote] Typ to zbiór możliwych wartości (domena) oraz zbiór operacji, jakie można na tych wartościach wykonać (podać jakiś przykład typu int to liczby całkowite i wykonujemy na nich operacje z liczbami całkowitymi dzielenie bez reszty itp itd). Są podstawowe i złożone na przykład tablice listy, stosy itp itd.
>
>> [!danger] ## 2.2. Struktury danych: tablice, listy, drzewa, stos, mapa.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Reprezentacja łańcuchów tekstowych (string).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Operatory i instrukcje sterujące.
>> [!danger] ## 3.1. Operatory arytmetyczne, logiczne, bitowe, warunkowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Hierarchia i łączność operatorów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Instrukcje warunkowe (if, switch-case).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.4. Pętle (for, while, do-while).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Wskaźniki i referencje.
>> [!danger] ## 4.1. Składnia i semantyka.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. lvalue reference.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Wskaźniki na funkcje.
>>> [!question]- #### Funcja w C, wskaźnik na funkcję. Jak używać i po co.  Stackowerflow
>>>> [!quote] Funkcja to zdefiniowany blok kodu posiadający własny adres pamięci, który operuje na własnej ramce stosu. Funkcja w c składa się z nagłówka (deklaracji) i  ciała (instrukcji złożonej). W deklaracji określamy typ zwracany czyli rozmiar i format danych które funkcja umieści w rejestrze wyjściowym procesora po zakończeniu działania. Następnie jest identyfikator, czyli etykieta symboliczna która w czasie kompilacji jest zamieniana na adres fizyczny pierwszej instrukcji. W () deklarujemy zmienne - są to wartości skopiowane chyba że użyjemy wskaźników. W ciele funkcji tworzy się ramka stosu w skład której wchodzą 1) zmienne lokalne 2) instrukcję storujące 3) punkt wyjścia. Wskaźnik na funkcje to adres fizyczny początku bloku instrukcji - deklaruje się go w ten sposób int (*ptr)(argumenty itd) - bez nawiasów byłby wskaźnik na int. Używa się ich do przekazywania funkcji jako argument czyli callbacków, czyli funkcję wyższego rzędu osiąga się przez wskaźniki na funkcje. Widzę że używa się ich jeszcze w struct w c jako metod. Stackoverflow to błąd w programy gdy stos (pamięc używana do przechowywania lokalnych zmiennych i adresów) zostaje przepełniony. Może występować gdy jest nieskończona rekurencja.
>
>> [!danger] ## 4.4. Mechanizm wywołań zwrotnych (callback).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Funkcje i programowanie funkcyjne.
>> [!danger] ## 5.1. Rola i struktura funkcji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Przekazywanie argumentów i zwracanie wyników.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Rekurencja.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Programowanie funkcyjne: funkcje wyższego rzędu, czyste funkcje, unikanie efektów ubocznych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Obsługa błędów i wyjątków.
>> [!danger] ## 6.1. Rodzaje błędów i wyjątków.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Obsługa wyjątków w C++/Python.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Programowanie obiektowe.
>> [!danger] ## 7.1. Założenia paradygmatu obiektowego.
>>> [!question]- #### Wymienić paradygmaty programowania obiektowego (polimorfizm, hermetyzacja itd.)
>>>> [!quote] Podstawą są klasy (przepisy na obiekty) i obiekty (konkretne instancje). **Enkapsulacja** ukrywa szczegóły implementacji: pola są prywatne, a na zewnątrz wystawiamy tylko przemyślany interfejs metod.**Abstrakcja** pozwala mówić o tym, co obiekt robi, a nie jak to robi; interfejsy i klasy bazowe definiują kontrakty zachowania. **Dziedziczenie** umożliwia specjalizowanie klas (współdzielenie kodu), ale w praktyce częściej preferuje się kompozycję („składaj obiekty z innych obiektów”), bo daje luźniejsze powiązania. **Polimorfizm** sprawia, że to samo wywołanie metody może prowadzić do różnych implementacji w zależności od konkretnego typu obiektu; dzięki temu kod odwołuje się do abstrakcji, a nie do detali. Dobre projekty stosują też zasady SOLID (m.in. pojedyncza odpowiedzialność i zależność od abstrakcji), aby utrzymać modułowość i testowalność.
>
>> [!danger] ## 7.2. Metody konstrukcyjne i dostępowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Wzorce projektowe (klasyfikacja, przykłady).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Dobre praktyki programistyczne.
>> [!danger] ## 8.1. Zasady SOLID.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Refaktoryzacja kodu.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Debbuger i profiler.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 9. Szablony.
>> [!danger] ## 9.1. Szablony funkcji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.2. Szablony klas.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.3. Metodyka projektowania konstrukcji szablonowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 10. Proces budowania kodu.
>> [!danger] ## 10.1. Preprocessing.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.2. Kompilacja.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.3. Konsolidacja.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.4. Struktura pliku obiektowego (format ELF).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.5. Optymalizacja.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
