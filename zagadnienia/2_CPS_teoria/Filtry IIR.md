# #IIR Infinite impulse Response 
### Filtry posiadające pętle zwrotną, może zajśc niestabilność
![[Pasted image 20251013142408.png]]

W ten sposób powstają porzadne filtry, odpowiedniki aktywnych filtrów analogowych i.o Chebyshev, Bessel, Buttweworth
Filtr nie jest liniowy, zmienia fazę, jak i zwykłe analogowe filtry 

## #Definicja 
## $$s^{wy}(m) = \sum_{n=0}^{M}b_{n}s^{we}(m-n) - \sum_{n=1}^{N}a_{n}s^{wy}(m-n) $$
## $$H(z) = \frac{\sum^{M}_{n=0} b_{n}z^{-n}}{1+\sum^{N}_{n=1} a_{n}z^{-n}}$$


# #Stabilność filtru
### Filtr **IIR** jest stabilny, gdy
- ###  isnieją stałe ograniczające sygnały filtrów
- ![[Pasted image 20251013143930.png]]
- gdy w granicy dąży do zera - stabilność asymptotyczna

### Warunek [[Filtry IIR#Stabilność filtru | stabilności filtru IIR]]:
#### Jeżeli wszystkie zera wielomianu charakterystycznego znajdują się wewnątrz koła jednostkowego: $$P(z) = z^N + \sum^{N}_{n=1} a_{z} z^{N-1}, ~~ |z_{n}| < 1$$
![[Pasted image 20251013144532.png]]
## #Podstawienie Płaszczyzny Z na S :D
# $$z = \frac{1+s}{1-s} \to s = \frac{z-1}{z+1}, ~~~~gdy ~~|z| < 1$$
# #Projektowanie IIR:
![[Pasted image 20251013144909.png]]


![[Pasted image 20251013145220.png]]

![[Pasted image 20251013145236.png]]

