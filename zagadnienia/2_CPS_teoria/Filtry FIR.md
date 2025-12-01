# #FIR - finite impulse response
## Filtr który trwa ileś próbek (czasu) , nastepnie jest zerami
### Filtr można reprezentować zgodnie z [[LTI#Opis systemów| 4-ma postaciami]]
### $$y[n] = \sum_{k = 0}^{M-1} b_{k} \cdot u[n-k],$$
## Dla dziedziny $Z$
## $$s_{wy} (z) = H(z)s_{we} \to H(z) = \frac{s_{wy}(z)}{s_{we}(z)} = \sum^{M-1}_{{k=0}}h_{k}\cdot z^{-k}, ~~z = re^{j2\pi f_{norm}}, r = 1$$

### $M$ - długość filtra && numer parametów
### $M-1$ - stopnień filtra
### $b_{k}$ - filter coef

# #własności
- Filtry FIR są zawsze stabilne - mają M-1 biegunów w $z=0$.

# #zastosowanie 
- #### Filtr chodząca średnia (low-pass) - sumuje obecny i poprzednie sygnały zwracając średnią
#### $$ y[n] = \frac{1}{M} \sum_{k=0}^{M-1} u[n-k],~~b_{k} = \frac{1}{M}~for~k=0,~\dots,~M-1.$$
- #### Odpowiedź częstotliwościowa sygnału:
#### $$H(\Omega ) = \frac{1}{M} \sum_{k=0}^{M-1} e^{-j\Omega k} ~~= ~~   \frac{1}{M} \sum_{k=0}^{M-1} e^{(-j\Omega) ^k} ~~=~~ H(\Omega) =\frac{1}{M} \frac{(1-e^{-j\Omega M})}{1-e^{-j\Omega}}, ~~\Omega = \frac{f}{max(f)} $$
- #### LowPass, HighPass, BandPass, BandStop, MultiBand 
### afiniczne itp, do doczytania


# #Projektowanie 
![[Pasted image 20251013140915.png]]
![[Pasted image 20251013140923.png]]![[Pasted image 20251013140942.png]]

---
# #WYKŁADY
[[FIR_wyklad_cz1.pdf]]
[[FIR_wyklad_cz2.pdf]]
[[FIR_zadania.pdf]]
