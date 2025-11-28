## Spis danych:
- Systemy liczbowe
- konwersje między systemami
- Reprezentacja liczb ujemnych
- rodzaje kodowań specjalnych
- błąd zaokrąglenia oraz przepełnienia
- kolejność bajtów reprezentacja
---
# #Systemy_liczbowe
System liczbowy to zbiór zasad jednolitego zapisu danych oraz nazewnictwa
# $$N = a_{n}\cdot b ^{n} + \dots + a_{n_{0}}\cdot b^{{0}}$$
---
## Konwersja między systemami 

Dziesięty do jakiekogolwiek - podzielenie przez jakiekolwiek,
binarny na większy - podział liczb na inne

---
## Reprezentacja liczb ujemnych
### #Znak-moduł (sign-magnitude) ZM:
Zero jako pierwsza liczba (najstarsza) w słowie oznacza liczbe nieujemną, 
Jedynka jako pierwsza oznacza liczbę niedodatnią

>[!warning] Podwójne zero:
>Przez zakres +- otrzymujemy dwa zera, co utrudnia liczenie 

| ZM  | base_2 | ZM  | base_2 |
| --- | ------ | --- |:------:|
| 000 | 0      | 100 |   -0   |
| 001 | 1      | 101 |   -1   |
| 010 | 2      | 110 |   -2   |
| 011 | 3      | 111 |   -3   |
## #U2 kod uzułenień do 2
 Najbardziej powszechny kod , używany jako standard.  Eliminuje problem podwójnego zera. Przesuwa zakres o jeden w lewo (jeden mniej) dodatniej liczby.

Sposób zapisu:
1. Liczba binarna -> $7_{2} = 111$
2. tworzenie maski -> $m = 000$
3. dodanie jedynki do maski -> $m_{+1} = 001$
4. Finalna liczba $7_2 = 0b111 = 001_{U_{2}}$

---

## Kody specjalne 
###  #BCD - binary coded decimal
BCD to kod, który osobno reprezentuje każdą liczbę dziesiętną za pomocą liczby binarnej. Od 0 - 9, czyli 4bity per liczba na wyświetlacz. 
### #Gray - kodowanie gray'a
Kodowanie graya jest używane ponieważ każda zmiana wartości jest reprezentwowana zmianą tylko jednego bitu (patrząc na poprzedni lub następny bit)

---

## Błędy systemów liczbowych
### Błąd przepełnienia #overflow
Błąd przepełeniania przejawia się tym, że chcemy przypisać liczbe poza jej zakresem, np do uint8 chcemy zaposać liczbę 300.
Zwykle mikroprocesory resetują swoją wartość po 255 do 0, co w przypadku niewiedzy może powodować nieskończone pętle.

Procesory oraz układy liczące indukują informację o przekroczeniu w postaci ustawienia #flagi C - #Carry_flag. Mówi ona o przekroczeniu zakresu.

### Błąd zaokrąglenia  #Round-off #error
Błąd zaokrąglenia polega na chęci przypisania liczby zmiennoprzecinkowej o wysokiej dokładności do formatu liczby której rozdzielczość nie pozwala na to.

Jeżeli wymagana jest dokładność, należy zwiększyć rozmiar zmiennej przechowywującej daną w celu jej odpowieniego zapisu.

Błąd jest określany jako wartości w zakresie:
	Niech Z będzie liczbą 5-cio bitową
	$Z = float(00,000)$, gdzie pierwsze dwie liczby to wartość dziesiętna,
	a 3 kolejne to liczby ułamkowe.
Chcąc zapisać liczbę 3.1416, będzie to wyglądało tak:
	3 -> Z = 11, 
	0.1416 -> Z = , 001 -> 0.125, $2^{-3}$, błąd będzie wynosił najmniejszą rozdzielczność

---

## Kolejność zapisywania danych
### #Little-endian oraz #Big-endian
![[Pasted image 20251115132415.png | 500]]
Endian to sposób zapisu bajtów w słowie, konkretnie kolejność, czy zapisujemy od najstarszego czy najmłodczego (najważniejszego czy najmniej znaczącego).

Różne procesory mogą używać różnych typów zapisu. Zwykle urządzenia używają #Little-endian, natomiast w ruchu sieciowym używane jest #Big-Endian, stąd przy otworzeniu socketów wymagana jest translacja adresu na odpowieni format.

