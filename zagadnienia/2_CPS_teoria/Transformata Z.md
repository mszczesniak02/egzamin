# #Transformata_Z - odpowiednik [[Laplace#Transformata_laplace - transformata stworzona do zamiany równań różniczkowych na algebraiczne | Laplace'a]] stosowane do układów dyskretnych (cyfrowych)
# Zamienia sygnał dyskretny w czasie (sekwencja, array) do wartości w płaszczyźnie zespolonej
# Rozkład w płaszczyźnie $Z$, dookoła okręgu jednostkowego. (dla ciągłej jest to  płaszczyzna $S$)



## Lewa strona domeny $S$ mapowana jest w środku okręgu, prawa część poza okrąg [^2].

### Zmienna zespolona $z = r \cdot e^{j \pi f}$
### $$F(z) = \sum_{k=-\infty}^{\infty} f(kT) z^{-k}$$


# #Zbieżność #ROC - region of convergence (defines whether Z-transform exists) [^3]
## $$X(z) = \sum^{\infty}_{n=-\infty} x[n] z^{-n}$$, $$ROC = |x[n]z^{-n}| <\infty $$ jeżeli spełniona jest zależnośc powyższa, transformata istnieje

### [[Transformata Z#Zbieżność ROC - region of convergence (defines whether Z-transform exists)| ROC ]] nie może zawierać się w żadnnych biegunach, musi być zbieżna.
![[Pasted image 20251013093052.png]]

### Możliwe, że dla $z=0 ~||~ z = \infty$, należy policzyć granicę 



# #Własności [^1]
- Liniowość,
- Przesunięcie w dziedzinie czasu
- transformata sumy
- transformata różnicy,
- splot
- twierdzenie o początku i końcowej wartości



# #Zastosowania
- projektowanie filtrów,
- analiza systemów
- takie same zastosowania jak dla [[Laplace | transformaty Laplace'a]]


# Związek z Fourierem

# $$\sum_{n=-\infty}^{\infty} x[n] e^{-j \omega n } \to \sum_{n=-\infty}^{\infty} x(nT) e^{-j 2 \pi f n T } = DTFT   $$


---
[^1]: https://pl.wikipedia.org/wiki/Transformacja_Z
	

[^2]:  BI-liniowość https://en.wikipedia.org/wiki/Bilinear_transform

[^3]: https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Signal_Processing_and_Modeling/Signals_and_Systems_(Baraniuk_et_al.)/12%3A_Z-Transform_and_Discrete_Time_System_Design/12.06%3A_Region_of_Convergence_for_the_Z-Transform
	
