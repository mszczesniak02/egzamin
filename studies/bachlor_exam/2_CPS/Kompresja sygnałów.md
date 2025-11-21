
---
# #Bezstratna
### Nie można żadnych bitów utracić, stosowana metoda entropii

## Kodowanie #Entropia [^1]
- Definiowana jako średnia bitów potrzebna do bezstratnego zakodowania komunikaji
- Wartość oczekiwana : $H = -\sum^{M}_{m = 1}~ p_{m} \log_{2}(p_{m})$, gdzie $p_{m}$ to prawdopodobieństwo wystąpienia komunikatu, a jej miarą jest ilość bitów



### #Sprawność kodowania:
entropia to dolna granica średniej liczby bitów wymaganych do reprezentacji komunikatów
### $$H_{w} = \sum_{m=1}^{M} b_{m} p_{m}$$, $$b_{m} - bits~to~encode,~~p_{m} ~-~prawdopodobieństwo~komunikatu$$
### $$\eta = \frac{H}{H_{w} }\cdot 100\%$$

## #VLC - variable length coding ( HUFFMAN) [^4]
![[Pasted image 20251013103214.png]]
Najczęsciej wystepujące symbole dostają najkrótszą reprezentację w bitach, najrzadsze pozostają w "szerokie"

## kodowanie #artytmetyczne [^5]

### kodowanie ciągów #RLC - run length coding


---
# #Stratna 


## Stosowane w kodowaniu sygnałów rzeczywistych,
## Odcinane składowe wysokoczęstotliwościowe, o ile niskie składowe są wystarczająco reprezentatywne


### #SQ - Scalar Quantization [^6]


# [[Próbkowanie sygnałów#Błąd_kwantyzacji| Błąd kwantyzacji]]


### kodowanie #transferowe [^7]


# #DCT - dyskretna transformata cosinusowa [^2]

| **ZALETY**                                                                                             | **WADY**                                               |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| współczynniki bliskie 0, zerowanie się ich po kwantyzacji,<br>mniej bitów bez dużego błędy kwantyzacji | nie ma perfekcyjnej rekonsturkcji                      |
| N wymiarów jako N transformat 1dno wymiarowych                                                         | stała wielkośc bloku,<br>oscylacje przy ostrych bokach |
| Sygnał jest zdekorelowany                                                                              | niezależność sygnału, mała redundancja ? chyba         |
### Zasada działania
podział na N-bitowe klocki (zwykle 8), na któruch później przeprwoadzana jest DCT. Osiągnięcie kompresji odbywa się poprzez nie wybieranie wszystkich składowych sygnału, lecz jakąs mniejszą ilość.
![[Pasted image 20251013111106.png]]


# transformacja falkowa [^3] - warto się zapoznać



# Przykładowe protokoły 

## Kompresja obrazów - JPEG [^8]
## Kompresja dźwięków - mp3 [^9]



---
[^1]: DOCZYTAĆ! https://en.wikipedia.org/wiki/Entropy_coding

[^2]: https://www.youtube.com/watch?v=FmW0vdEccZM&t=430s
	

[^3]: https://www.youtube.com/watch?v=jnxqHcObNK4&t=782s
	

[^4]: https://www.youtube.com/watch?v=iEm1NRyEe5c

[^5]: https://www.youtube.com/watch?v=ouYV3rBtrTI

[^6]: https://www.youtube.com/watch?v=NNH1oXTaV7A

[^7]: https://www.youtube.com/watch?v=YGaq2qgBjAk

[^8]: https://pl.wikipedia.org/wiki/JPEG

[^9]: https://en.wikipedia.org/wiki/MP3
