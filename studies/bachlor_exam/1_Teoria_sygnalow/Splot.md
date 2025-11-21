# Splot (convolution) - działanie na dwóch sygnałach, zwracający 3ci sygnał

### Echo wytworzone w pokoju [^1] : 
Gdy krzyczymy  ( tworzymy impuls sygnału  ) w miejscu w którym następuje echo( Odpowiedź systemu na sygnał, np od ściany), 
chcąc dowiedzieć się jak wyglądała by lączna suma sygnałów w danymym momencie, można wykonać operację splotu mojego dźwięku (impulsu wejśćiowego) z echem (odpowiedzią systemu), które da właśnie całościowy sygnał w czasie w którym krzyczałem i wystepowało echo (dokładniej w czasie w którym byłoby to badane).

## Splot dla ciągłych funkcji
# $$ (f * g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t - \tau ) d\tau  $$
## Splot dla dyskretnych funkcji (danych): liniowy 
# $$ (f*g)[n] = h[n] = \sum_{m = 0}^{N} f[n-m] \cdot g[n]$$
## Splot kołowy - zawija splot do M tego elementu, 
# $$ (f*g)[n] = h[n] = \sum_{m = 0}^{N} f[n-m] \cdot g[n \% M], ~~ M < N$$
# Splot liniowy algorytm:



![[Pasted image 20251010153139.png]]

# Splot liniowy na kartce - algorytm:

![[Pasted image 20251010153031.png]]

# Splot kołowy na kartce
![[Pasted image 20251010153102.png]]



> [!NOTE] Pomocne linki
> https://pl.wikipedia.org/wiki/Splot_(analiza_matematyczna)
> https://en.wikipedia.org/wiki/Convolution
> https://sound.eti.pg.gda.pl/~greg/dsp/04-Splot.html
> 	https://betterexplained.com/articles/intuitive-convolution/
> 	https://betterexplained.com/articles/intuitive-convolution/
> 	https://www.youtube.com/watch?v=f-IINpceX6k deconvolution
> 	

[^1]: https://www.youtube.com/watch?v=qPkk483g0vQ
