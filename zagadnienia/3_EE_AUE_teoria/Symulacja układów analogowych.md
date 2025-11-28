---
aliases:
  - SPICE analiza układów
Date: 14.10.2025
---
---
>[!important] # Spis treści
>- Ogólna zasada działania symulatora, rodzaje analiz, zakresy ich stosowności
>- Od czego zależy wiarygodnośc symulacji
>- Jakie zjawiska problemy są w realnych układach trudne / niemożliwe do symulacji

---

>[!warning] # Spice 
>LT-Spice to system do symulacji oparty w gównej mierze na równaniach macierzowych.
>Można używać w trybie pisania kodu, lub graficznym (LT-spice)
>Pliki ktore się tworzy są pisane wedle schematu
>```spice
>* Układ całkujący RC
>V1 1 0 PULSE(0 5 0 1u 1u 1 2)
>R1 1 2 1k>
>C1 2 0 1u>
>.tran 10u 5m *analiza czasowa
>.end
>```
>Można tworzyć zaawansowane układy, są one numerowane węzłami, które są łączone
>Można dołączać swoje elementy lub cudze, jako biblioteki oraz symulować działania układów w opaciu o parametry elementów

>[!faq] ## Rodzaje analiz
>-  ***DC*** - zasilanie DC zmieniane z odpowienim krokiem w zakresie (walk), pozwala analizować układy przejściowe
>- ***AC ***- analiza w zakresie częstotliwości od np. $0$ do $1~MHz$, pozwala pokazywać zmiany w pasmie częstotliwościowym
>- ***trans -*** analiza czasowa, w której wymuszenie stanowi np. zmiana stanów bramek logicznych przez 10 sekund, źródła działaja same sobie
>- ***monte carlo*** - analiza dodatkowa w danym zakresie parametrów, np. analiza systemu dla rezystorów o tolerancji $5\% \Omega$, pokazująca np. 30 różnych wyników  

---

>[!danger] ##  Od czego zależy wiarygodnośc symulacji
>Zasada "Garbage in, Garbage out", jezeli niepoprawnie zdefiniujemy układ, źle przedstawi dane.
>Elementy w układach symulacyjnych zwykle interpretuja urządzenia jako idealne, nie biorące realnych parametrów pod uwagę, czy też nieskończoną prezycję.
>- Nie brane są pod uwagę rzeczy typu, czy elementy są z tej samej serii
>- co element może się róznić, 
>- nei brane pod uwagę tolerancji
>- elementy pasożutnicze w układach,
>- zanikanie sygnału w szerokim spektrym z powodów uszkodzeń mechanicznych ?
>-  coś tam jeszcze

>[!important] ## Zjawiska i problemy trudne do przesymulowania
>- przesłuchy, prądy przepływu, ogólne rzeczy które dzieją się pod równaniami, których nie bierze pod uwagę #Spice 
>- zjawiska termiczne, grzanie się układów, co je np. spowolni
>- szumy sygnału
>- stany nieustalone przy włączaniu urządzeń

---
# Dodatkowe
- ### Szybka analiza [falstad'em](https://www.falstad.com/circuit/)

---


[^1]: https://www.seas.upenn.edu/~jan/spice/spice.overview.html
