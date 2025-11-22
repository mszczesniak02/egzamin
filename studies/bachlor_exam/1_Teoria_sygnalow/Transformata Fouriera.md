# #FT 

Sposób na przekształcenie sygnału z dziedziny czasu do dziedziny pulsacji ()
$$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(t)\, e^{-i \omega t} \, dt$$
Dzięki tej analizie możemy dokładnie badać sygnał na dwóch wykresach:
- amplitudowym (amplituda[V] lub moc[dB] ) 
- fazowym (kąt przesunięcia zazwyczaj [rad] / [°])


# #WarunkiDirichleta
Warunki wystarczające żeby funkcję można było FT lub IFT
1) funkcja jest monotoniczna i ograniczona w przedziale
2) funkcja powinna być na ogół ciągła (idk czy wystarczy ale myśle że tak)
# #IFT
Jest to operator matematyczny pozwalający na rekonstrukcję funkcji $f(t)$ w dziedzinie czasu (lub przestrzeni) na podstawie jej reprezentacji widmowej $F(\omega)$
$$f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega)\, e^{i \omega t} \, d\omega$$
# #Własności
- __Liniowość (Linearity):__ Transformata jest operatorem liniowym.

$$a \cdot x(t) + b \cdot y(t) \longleftrightarrow a \cdot X(\omega) + b \cdot Y(\omega)$$
- __Twierdzenie o przesunięciu w czasie (Time Shifting):__ Przesunięcie argumentu funkcji w czasie skutkuje liniową zmianą fazy w dziedzinie częstotliwości. Moduł widma pozostaje niezmieniony.

$$x(t - t_0) \longleftrightarrow X(\omega) e^{-j\omega t_0}$$
- **Twierdzenie o splocie (Convolution Theorem):** Splot dwóch funkcji w dziedzinie czasu odpowiada iloczynowi ich transformat w dziedzinie częstotliwości.

- **Twierdzenie Parsevala (Zachowanie energii):** Energia sygnału jest niezmienna niezależnie od dziedziny
# #DFT
Jest to przekształcenie odwzorowujące skończony ciąg próbek sygnału (dyskretny czas) w ciąg próbek widma (dyskretna częstotliwość)
$$X[k] = \sum_{n=0}^{N-1} x[n] \cdot e^{-j \frac{2\pi}{N} kn}$$
Umożliwia analizę częstotliwościową tak jak FT
# #FFT

Algorytmy optymalizacyjne służące do efektywniejszego przekształcania sygnału.

Zamiast przeliczać wszystkie próbki po kolei, FFT wykorzystuje symetrie i powtarzalność współczynników DFT, co pozwala dzielić obliczenia na mniejsze fragmenty.
![[Pasted image 20251122164000.png]]
 (swoją drogą ktoś na prezentacji zrobił szare tło żeby wzory z chata się nie rzucały w oczy XD)
# #IFFT
Matematycznie operacja ta jest niemal symetryczna do FFT, z dwoma różnicami w definicji sumy:

-  Wykładnik funkcji bazowej ma znak przeciwny ($e^{j \dots}$ zamiast $e^{-j \dots}$).
    
- Wynik jest skalowany przez czynnik normalizacyjny $1/N$.
- $$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] \cdot e^{j \frac{2\pi}{N} kn}$$