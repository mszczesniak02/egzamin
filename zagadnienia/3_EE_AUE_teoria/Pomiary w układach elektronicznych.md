---
aliases:
  - AUE,
  - Pomiary
Date: 14.10.2025
---
---
>[!danger] # Spis treści
>- Podstawowe zasady działania i budowy urządzeń pomiarowych
>- Wpływ ograniczeń sprzętowych podczas pomiarów, efekty pasożytniczę
>- błędy i niepewności 

---

>[!warning] ## Podstawowe zasady działania i budowy urządzeń pomiarowych
>Do podstawowych urządzeń pomiarowych zaliczamy:
>>[!info] ### ***Amperomierz***, ***Woltomierz***, ***Ohmomierz***, i ogólnie ***Multimetr***
>> - amperomierz mierzy szeregowo prąd, rezystacja wewnętrzna $R_{in} \to 0$, mierzy prąd przepływający przez urządzenie stanowiąc zwarcie ( **short-circuit**)
>> - woltimierz mierzy równolegle (spadek ) napięcie, rezystancja wewnętrzna $R_{in} \to \infty$, aby stanowić rozwarcie (**open-circuit**)
>> - miernik mocy mierzy zaraz prąd i napięcie, więc w zalezności od styków, trzeba odpowienio podpiąć, bo jak nie to jebnie bezpiecznik i sie zesra
>
>>[!faq] ### Budowa prostego *** #multimetra ***
>> cośtam
> 
>>[!important] #### Oscyloskop
>>Co robi, jak robi, itd
>> AC / DC coupling - sprzęganie sygnału w celu przepuszczenia go przez kapacytor ( jeżeli ac), jeżeli tryb DC, wejście jest podane bezpośrednio na wejście.
>> 
>> 
>>

---

>[!warning] ## Wpływ ograniczeń sprzętowych podczas pomiarów, efekty pasożytniczę
> Każdy sprzęt ma swoje ograniczenia, dla każdych z nich można zindentyfikować:
>>[!info] ### Dla #multimetru:
>> - błąd  (związany z rozdzielczością) - ograniczenie rozdzielczości w bitach, zakres wejściowy nie koniecznie jest zawsze dobrze odwzorowany
>> - błąd  (związany z przybliżeniem)
>> - błąd  (związany z sampling)
>> - błąd  (związany z co jeszcze nie wiem, trzeba spytać czata)
>
>>[!danger] ### Dla #oscyloskopu i #sond oscyloskopowych
>> - Czas integracji - Number of Power line Cycles - mniejrnik nie mierzy napięcia w jednostce czasu, lecz uśrednia w oknie czasowym, przy wolno zmieniających się sygnałów, wyższa opcja byłaby lepsza
>> - Sonda oscyloskopowa oraz jej odpowiednik RF: ![[Pasted image 20251204162048.png|500]] [^5]
>> -- 
>> 

---



>[!warning] # Błędy pomiarowe [^6]
>>[!danger] ## Kategorie:
>> - błędy statystyczne: ciągle się powtarzające, realie wpływające na kazdy wynik ze względu na sposób pomiaru, np. nieuwzględnienie 
>> - błędy gruby: błędy typu źle przepisana wartość przecinka pomiaru z miernika
>> - błąd przypadkowy: wyniki zmieniają się na skali błędu np. gaussa, błędy pokroju prawdopodobieństwa tolerancji w paczce rezystorów, wykonanych ze jednego materiału
>> - błąd systematyczny: błąd wynikający z metody pomiaru, np. pominięcie zjawisk fizyczych jak zmienna temperatura mierząc I-V
>
>>[!danger] ## Niepewności pomiarowe
>>  - Niepewność standardowa - równe stderr wedle rozkładu normalnego,
>>  -  niepewność względa - stosunek niepewności do wielkości mierzonej w \%
>> -  niepewność maksymalna - zwykle przedział  w kßórym miesczą się wszystkie wyniki pomiary, przeszłe i przyszłe!, wedle wzoru $$u(x)=\frac{\Delta x}{\sqrt{3}}$$
>>[!warning] ## Przenoszenie niepewności:$$u_c= \sqrt{  \sum_{k} [ \frac{\partial y }{\partial x_k} u(x_k) ]^2  }$$ 
>> To jest przenoszenie niepewności, robiąc pochodną cząstkową po każdej zmiennej zależnej



---
[^1]: Filtry analogowe

[^2]:  podstawowe ustawianie https://www.keysight.com/used/us/en/knowledge/glossary/oscilloscopes/what-is-oscilloscope-coupling

[^3]: https://www.matemaks.pl/blad-bezwzgledny-i-wzgledny-pomiaru.html

[^4]: https://pl.wikipedia.org/wiki/Niepewno%C5%9B%C4%87_standardowa_pomiaru

[^5]: https://piotr-gorecki.pl/m056-sondy-oscyloskopowe-dlaczego-sa-niezbedne/

[^6]: https://home.agh.edu.pl/~zak/downloads/RNP-2.pdf
