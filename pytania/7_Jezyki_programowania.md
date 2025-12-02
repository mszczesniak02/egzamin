

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
