# #STFT - Short time Fourier Transform [^1]
#  $$X(\tau, \omega ) = \int_{-\infty}^{\infty} x(t) \cdot \omega(t-\tau)  \cdot e^{-j \omega t}dt$$
### Po prostu przemnozenie wartości punktu przez wartośc okna w czasie
# #DSTFT - Discreate STFT  $$X[n] = \sum_{n=0}^{N} x[n] \cdot \omega[n-m]\cdot e^{-j\omega n}$$
### Mnożenie wartości w spróbkowanych przez wartości okna


# #zastosowanie 
### Obserwacja częstotliwości w sygnału o zmiennym czasie poprzez analizowanie małych okien sygnałów
![[Pasted image 20251013130714.png]]

Ten sam efekt można uzyskać relizując [[Kompresja sygnałów#transformacja falkowa [ 3] - warto się zapoznać | transformatę falkową]]. Różnica w złozoności obliczeniowej oraz "podziale" rozdzielczości.
Transformata falkowa pokazuje niższe częstotliwości jako dłuższe czasowo sygnalu (tak jak gruba struna, która drga dłużej niz cienka), odpowiednio reprezentując to na spektrogramie
![[Pasted image 20251013130951.png]]


# #Windowing
![[Pasted image 20251013131318.png]]
## #leakage - wycieki sygnału
![[Pasted image 20251013131334.png]]
#### Sygnał który nie jest okresowy ( jest nieokresowo przycięty do analizy:  DFT przyjmując założenie że sygnał jest okresowy, powtarza go ). 
#### Brak zastosowania odpowiedniego okna może skutkować złą reprezentacją widmową
![[Pasted image 20251013131602.png]]


## #stosowanie okien - zależności
![[Pasted image 20251013131613.png]]

### Zależności:
- im równiejsze (amplitudowo) boczne listki względem głównego listka, tym większa szansa na wyciek
	- im równiejsze (amplitudowo) boczne listki względem głównego listka, tym większa szansa na wyciek
	- **Wąski główny listek**: Lepsza separacja składowych spektralnych
	- - **Kompromis**: Okna prostokątne mają najwęższy główny listek, ale najwyższe listki boczne

- Im wyższe listki boczne → tym większy wyciek spektralny (spectral leakage)
	- **Wysokie listki boczne**: Energia z jednej częstotliwości "wycieka" do sąsiednich pasm
	-  **Niskie listki boczne**: Lepsze tłumienie składowych pozapasmowych
	- **Przykład**: Okno prostokątne ma listki boczne ~-13dB, Hamming ~-43dB
- Im wyższe listki boczne → tym mniejsze tłumienie sygnału w czasie
	- **Wysokie listki boczne** = **słabe tłumienie czasowe** = lepsze zachowanie przejściowe
	- **Niskie listki boczne** = **silne tłumienie czasowe** = gorsze zachowanie przejściowe
	- **Fizyczny sens**: Silne kształtowanie okna w czasie wpływa na odpowiedź częstotliwościową
- Im płaściejszy szczyt głównego listka → tym dokładniejszy odczyt amplitudy
	-  **Płaski szczyt** (pochodna ≈ 0): Mała wrażliwość na dokładną lokalizację częstotliwości
	- **Ostry szczyt**: Duże błędy amplitudowe przy małych przesunięciach częstotliwości
	- **Praktyczne znaczenie**: Ważne przy analizie sygnałów niestacjonarnych

# #Windows 

| Okno            | Główny listek | Listki boczne     | Zastosowanie          |
| --------------- | ------------- | ----------------- | --------------------- |
| **Prostokątne** | Najwęższy     | Najwyższe (-13dB) | Sygnały przejściowe   |
| **Hamming**     | Średni        | Średnie (-43dB)   | Uniwersalne           |
| **Hanning**     | Średni        | Niskie (-32dB)    | Analiza widmowa       |
| **Blackman**    | Najszerszy    | Najniższe (-58dB) | Precyzyjna analiza    |
| **Kaiser**      | Regulowane    | Regulowane        | Projektowanie filtrów |
- **Rozdzielczość częstotliwościowa** → okno prostokątne
- **Minimalizacja wycieku** → okno Blackman
- **Kompromis** → okno Hamming/Hanning
- **Dokładność amplitudowa** → okna z płaskim szczytem

### #widmo
  ![[Pasted image 20251013132429.png]]



[^1]: https://en.wikipedia.org/wiki/Short-time_Fourier_transform
	
