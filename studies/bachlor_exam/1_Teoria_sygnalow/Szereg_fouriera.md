# #Definicja
### Funkcja $f(t)$ jest okresowa z okresem $2T$, jest całkowalna w zakresie $[-T, T]$. 

### Dla powyższej funkcji definiujemy ciągi:
## $$a_{0} = \frac{1}{T} \int_{-T}^{T} f(t) dt$$
## $$a_{n} = \frac{1}{T} \int_{-T}^{T} f(t)\cos\left( \frac{n\pi t}{T} \right) dt $$
## $$b_{n} = \frac{1}{T} \int_{-T}^{T} f(t)\sin\left( \frac{n\pi t}{T} \right) dt $$
## Szereg Fouriera w postaci: $$\frac{a_{0}}{2} \sum^{\infty}_{n=1} ( a_{n}\cos\frac{n\pi t}{T} + b_{n} \sin \frac{n\pi t}{T}) $$
# #Parzystość
### Jeżeli $f(t)$ jest parzysta na przedziale $[-T, T]$, $b_{n} = 0$, występują same cosinusy
### Jeżeli $f(t)$ jest nieparzysta na przedziale $[-T, T]$, $a_{n} = 0$, występują same sinusy


# #Szereg_Fouriera_zespolony
## $$f(t) = \sum_{n = -\infty}^{\infty} c_{n} e^{jn \frac{\pi t}{T}}$$,
## $$c_{n} = \frac{1}{2T} \int_{-T}^{T} f(t)e^{jn\frac{\pi t}{T}}dt$$
# #zastosowanie
### Rozkład sygnału złożonego na harmoniczne fale sinusoidalne i cosinusoidalne. Założenie jest takie, że funkcja jest okresowa co $[-T,T]$ oraz jest ciągła w zakresie. Najlepiej jest przeskalować okres bądź przesunąć funkcję tak, by była ona w zakładanym zakresie

