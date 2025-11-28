---
aliases:
  - TO
  - teoria obwodów
Date: 14.10.2025
---

---
>[!example] #  Spis treści:
>- Prawa Kirhoffa i analizy
>- Zastosowanie #laplace
>- Transmitancja, wykresy bodego, aproksymacja nieliniowych w punkcie pracy
>- model małosygnałowy
>- zasada superpozcji
>- równoważność układów w dziedzinach czasu i F
---

---
>[!danger] ## Prawa Kirhoffa
>- ##  ***Prądowe*** - suma natężeń prądów wpływających do węzła jest równa sumie wypływających prądów z węzła
>- ## ***Napięciowe***  -   w zamkniętym obwodzie, suma spadków napięć jest równa sumie sił elektromotorycznych występójących w obwodzie (Suma napięć w oczku  równa zeru)

>[!important] ## Metody analizy obwodów liniowych
>- Metoda prądów oczkowych [^7]
>- Metoda węzłowa [^8]
>- Metoda Thevenena [^9]
>- Metoda Nortona [^10]
>- Macierzowy odpowiednik

---
>[!faq] ## ***Zastosowanie  [[Laplace]] do obliczenia arytmetycznie równań różniczkowych ***[^3]

![[Pasted image 20251016151052.png]]

>[!faq] ### Do czego jest używany [[ Laplace|#Laplace]]:
>- Zamiana stanów nieustalonych ( stanów które zmieniają się w czasie, konkretniej w akcji która się dzieje w $t=0$ )
>- Metoda Galiasa
>- Obliczanie transmitancji układów, prezentacja odpowiedzi na impulse,
>- coś jeszcze do dopisania 


---
>[!warning] ## * #Transmitancja**

### Transmitancją nazywamy równanie wyjścia do wejścia systemu bądź układu $$H(\omega) = \frac{OUT(\omega)}{IN(\omega)}~\left[ \frac{V}{V} \right] $$

>[!important] ### Wykres Bode'go 
>![[Pasted image 20251127145727.png|720]]
>Wykres bodego opisuje charaktetystykę częstotliwościową logarytmiczną 
>>[!danger] #### Amplitudowa
>> oś y - $20 \log(|H(\omega)|)$
>> oś x - $\omega$
>
>>[!danger] #### Fazowa
>> oś y - $\phi(\omega)$
>> oś x - $\omega$
>
> ###  W Wykresie bodego mówimy o spadku na $-20dB / oktawę$, w przypadku w którym system przechodzi przez punkt $-3dB$, czyli spadek mocy o połowę. [^4]
>
>
>
> ###  Wspólny widok na wykres fazowy i amplitudowy pozwala okreslić stabilność układu, jego marginesy "bezpieczeństwa", po których przekroczeniu układ staje się generatorem

>[!danger] # ***KRYTERIUM #STABILNOŚCI UKŁADU*** 
> Znając charakterystykę Bodego można wyznaczyć stabilność i jego marginesy: [^12]
> $dB = 20 \log H(\omega)$,  
> crossover frequency - $\omega_{c}$ - value of $| \omega_{c} | = 0 dB$ - czyli gdzie w amplitudzie przechodzi przez $0$
> phase margin - - angle of the crossover frequency - o ile ponad $-180^{\circ}$ znajduje się wartość $\\omega_{c}$. 
> Gain Margin - - gdy kąt = 180 - jego wartość omegi przeniesiona na wykres amplitudy oraz dystans od wzmocnienia 0dB do własnie tego punktu   
>>[!important] Równanie stabilności ( układu Feedback)
>> # $$H(s) = \frac{G(s)}{1 + G(s)},$$ interpretacja:
>> Gdy  $G(s)$ wyniesie $-1$ ($\phi(\omega)=-180^{\circ}$) = -1, mianownik = 0, czylu układ dązy do nieskończoności, mamy niestabilność amplitudy (w idealnym świecie, realnie maksymalna "moc", )
>
> ![[Pasted image 20251127151552.png|720]]
## Częstotliwości graniczne:  [^5]
![[Pasted image 20251016151721.png]]

---
>[!warning] ## ***Aproksymacja*** w punkcie pracy oraz modele ***małosygnałowe*** ( i ***wielkosygnałowe***)
>- ***Aproksymacja*** w punkcie pracy jest powtrzebna, ponieważ systemy rzeczywiste nie są liniowe - jeżeli są to krzywe, w pewnym zakresie można je przybliżyć do linii o pewnym nachyleniu, na której poruszamy się jednostajnie
>- ***Model małosygnałowy*** odpowiada za przybliżenie działania urządzenia w pewnym zakresie małosygnałowym, czyli zmiany zachodzą w ograniczonym paśmie, po wyjściu z nich model nie będzie odpowienio przewidywał zachowania układu
>- Model średnio oraz wielkosygnałowy odpowiada analogicznie, innym pasmom ?
>- ![[Pasted image 20251127152826.png|720]]

---

>[!warning] ## Zasada superpozycji [^13]
> jest to zasada układów liniowych, która powoduje że możemy sobie osobno analizowac wpływ każdego elementu ( prądu i napięcia) osobno, bo potem addytywnie są one dodawane w jedną całość
>>[!quote] ### Odpowiedź obwodu elektrycznego lub jego gałęzi na kilka wymuszeń (pobudzeń) równa się sumie odpowiedzi (reakcji) na każde wymuszenie z osobna.
> Obwody pracujące w stanie ustalonym spełniaja zasadę syperpozycji.
> Obwody które są interpretowane w dziedzinie częstotliwośći również, pod warunkiem że działają w liniowym trybie (small sigmal approx, transformata #laplace'a).

---
# Równoważność układów w czasie oraz częstotliwości
Każdy układ można reprezentwoać w czasie i częstotliwości, tylko trzbea odpowienie transformacje przeprowadzić, raczej laplace'a

---

# #Dodatkowe:
- Mostki 
- Układy 
- sigma delta zamiana na teorie obwodów.



---
[^1]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=316

[^2]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=317
	

[^3]: https://web.engr.oregonstate.edu/~webbky/ENGR203_files/Section%204%20Laplace-Domain%20Circuit%20Analysis.pdf

[^4]: https://electronics.stackexchange.com/questions/427984/understanding-the-exact-meaning-of-db-decade-in-a-bode-plot
	

[^5]: https://oxeltech.de/analog-filters-design-guide/

[^6]: https://edupanda.org/pl/teoria/teoria-obwodow/metoda-thevenina

[^7]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=317

[^8]: https://esezam.okno.pw.edu.pl/mod/book/view.php?id=24&chapterid=316

[^9]: https://edupanda.org/pl/teoria/teoria-obwodow/metoda-thevenina
	

[^10]: https://edupanda.org/pl/teoria/teoria-obwodow/metoda-nortona

[^11]: Stabilność układu: https://www.youtube.com/watch?v=JNt8pgDigzs

[^12]: https://www.youtube.com/watch?v=JNt8pgDigzs

[^13]: https://www.allaboutcircuits.com/textbook/direct-current/chpt-10/superposition-theorem/
