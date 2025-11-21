# #Analiza obwodów
- ### Prawa Kirhoffa
	- prądowe - suma prądów wpływających do węzła jest równa każdego natężenia prądu z każdego węzła
	- napięiciowe - napięcia w oczkach jest zawsze równe 0

## Metody rozwiązywania obwodów:


 - ***Metoda węzłowa***:  [^1]  ## $$V_{1} \left( \frac{1}{R_{1}} + \frac{1}{R^2} \right) = V_{s} \cdot \frac{1}{R_{1}} + I_{s}$$
![[Pasted image 20251016150905.png|720]]
Stosowanie do układów w których jest mało węzłów 

 - ***Prądy oczkowe*** [^2] 
 - Stosowanie: Opis prądów w oczku dla każdego oczka, odejmowanie gałęźi wspólnych
 - ![[Pasted image 20251016150836.png]]

- Superpozycja - zerowanie kolejnych źródeł, ostatecznie sumując wartości (źródła prądowe zwarcie, źródło napięciowe rozwarcie )
- Dwójnik zastępczy Thevenena & Nortona [^6]
![[Pasted image 20251016152428.png|720]]- 



## Stany nieustalone - używanie [[Laplace]] do obliczenia arytmetycznie równań różniczkowych [^3]
![[Pasted image 20251016151052.png]]


Rozwiązywanie klasycznymi metodami, wynik w ostateczny w postaci czasowej (powrót do znanych transformat tak, by nie musieć całkować zespolonych)
#Kwadrawowa metoda na ułamki, gdy tylko drugiego stopnioa

### Rysowanie wyrkesów używajac ch-yk #Wykres_Bodego

Skala logarytmiczna -> $20 \log_{10} (|X|)$$, przekształcenia  [[Liczby zespolone|liczb zespolonych]].

3dB - połowa mocy


20 db na dekadę, znaczenie [^4]

## Częstotliwości graniczne: -3dB na sygnale, [^5]
![[Pasted image 20251016151721.png]]


# Tworzenie [[Filtry analogowe | Filtrów analogowych ]] 




---
[^1]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=316

[^2]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=317
	

[^3]: https://web.engr.oregonstate.edu/~webbky/ENGR203_files/Section%204%20Laplace-Domain%20Circuit%20Analysis.pdf

[^4]: https://electronics.stackexchange.com/questions/427984/understanding-the-exact-meaning-of-db-decade-in-a-bode-plot
	

[^5]: https://oxeltech.de/analog-filters-design-guide/

[^6]: https://edupanda.org/pl/teoria/teoria-obwodow/metoda-thevenina
