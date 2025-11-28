
---
# SPIS TREŚCI
- rodzaje bramek
- budowa bramek z CMOSów i ich parametry
- standard LVDS
- synteza oraz minimalizacja
- hazard w ukłądach kombinacyjnych
- podstawowe bloki mokunikacyjne
- układy arytmetyczne, przeniesienie, przepełnienie
---
## Rodzaje bramek
![[Pasted image 20251013164055.png]]

XOR dla wielu inputów -> spardzene parzystości inputów
XNOR - przeciwieństwo 

### Brama transmisyjna - switch, albo puszcza sygnał albo nie
---

## Budowa bramek z użyciem #CMOS oraz parametry dynamiczne 

![[Pasted image 20251116155343.png|720]]


Parametry tranzystora CMOS:
![[Pasted image 20251116160905.png|720]]

![[Pasted image 20251116161029.png|720]]

Każdy tranzystor CMOS posiada parametry:

---

## #LVDS - low voltage differentional signaling

System różnicowy tranzystorów przesylających sygnały w oparciu o niskie napięcie, pozwalajac na jednoczesny szybki transfer danych na skrętce, moze być używne w modelu OSI (L2).
![[Pasted image 20251116154438.png| 500]]
---
## #Synteza i #minimalizacja funkcji logicznych

Synteza logiczna to proces znalezienia konfiguracji bramek logicznych, które realizują daną funkcjonalność.
Układy cyfrowe używają np. HDL - język opisowy,

Minimalizacja to proces uproszczania logicznej formuły, która jest wymagana do wykonania operacji.
Pozwala zminimalizować ilość wymaganych bramek logicznych.

---

## #Hazard - niebezpieczeństwo 
![[Pasted image 20251116161551.png]]
![[Pasted image 20251116161632.png|720]]
Czyli niechciana zmiana stanu logicznego wynikającego z szybiej zmieniającej się jednej strony bramy logicznej niż z innej

eliminacja na poziomie projektowania minimalizacji

---

## Podstawowe bloki kombinacyjne
### Multiplexer - sygnał sterujący, który daje odpowienie wyjście
### Demultipelxer - sygnał sterujacy, przenoszacy sygnał z jednego wejścia na odpowiednie wyjście używjać sterujacego sygnału

### koder / dekoder - kodujący jakąś specjalną rzecz np. bcd
![[Pasted image 20251116161852.png|720]]

---
## Układy arytmetyczne z przeniesieniem i przepełnieniem [^1]

---
---


[^1]: https://home.agh.edu.pl/~ggora/labs/lab1/UklKombSekwWstep.pdf
