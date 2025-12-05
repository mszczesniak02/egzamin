
---
>[!info] # spis treści:
> Cel stosowania sprzężęnia zwrotnego, kiedy dodatnie kiedy ujemne
> Kryteria stabilności

---

>[!bug] # Sprzężenie zwrotne
> *Sprzężenie* zwrotne to pętla feedback, która służy do podania informacji zwrotnej z sygnału wyjśćiowego w celu dokanania na nim dodatkowej operacji, lub dostarczenia odpowiedzi na jego temat
>
> Wyróżnia się dwa rodzaje - dodatni oraz ujemny feedback, który odpowiada zmianie fazy sygnału wyjściowego
>
>>[!example]  Dodatnie sprzężenie zwrotne
>> Efekt raczej mniej pożądany w układach które striktre nie chcą go. Powoduje niestabilność, która może się przejawić w generacji dźwięku, np. przykładając mikrofon do głośnika. Używa się ich do generowania sygnałów oraz jako komparator z histerezą, który zamienia sygnały na albo 1 albo 0, ale przestraja je aż do napięcia zasilania maksymalnie.
>> 
>> ## Sprzężenie zwrotne ujemne:
>> # $$H(s) = \frac{G(s)}{G(s)+1}$$,
> Jeżeli open loop gain, czyli wzmocnienie bez pętli zwrotnej osiągnie wartość -1, czyli odwróci się faza sygnału, mamy dzielenei przez zero, czyli niestabilność.
>> Definiowane są granice (margins) które określają ile nam brakuje do niestabilnośći, która przejawia się generowaniem sygnału 

