# Próbkowanie - proces zamiany sygnału ciągłego w czasie na dyskretny w czasie [^1]

## Teoria o próbkowaniu (Nyquist-Shannon sampling theorem)
##  #Częstotliwość_próbkowania musi wynosić co najmniej dwukrotność maksymalnej (największej ) częstotliwości próbkowanego sygnału, aby móc poprawnie odtworzyć sygnał   $$\frac{1}{T_{s}} = f_{s} \geq 2 \cdot f_{max} $$
## #Częstotliwość_Nyquista - połowa częstotliwości próbkowania $f_{n} = \frac{1}{2}~f_{s}$.
### jest ona używana do pokazania limitu przy pokazie widma sygnału (nie ma sensu pokazywać poza $f_{n}$ )


## Funkcja (whitteker'a) odtwarzająca sygnał 
![[Pasted image 20251010234311.png]]

# #Resampling - nadpróbkowanie i podpróbkowanie, decymator, interpolator

![[Pasted image 20251010233433.png]]

![[Pasted image 20251010233445.png]]

# #Zmiana_częstotliwości_sygnału

![[Pasted image 20251010233508.png]]


## #Nadpróbkowanie ( up-sampling ) - dokładanie do spróbkowanego sygnału dodatkowych próbek o większej częstotliwości ( wstawiane między próbki wartości ).
Zazwyczaj wstawiane są albo zera (zero-order-hold) albo interpolowano wartości między dwiema próbkami.

![[Pasted image 20251010233225.png]]

## #Podpróbkowanie ( down-sampling ) -  sygnał próbkowany jest zbyt wolny w porównaniu do oryginału, powstaje [[Próbkowanie sygnałów#Aliasing | Aliasing]] . Nie da się poprawnie odróżnić wysokich częstotliwości.
Można stosować w przypadku, gdy sygnał dolnoprzepustowy jest wystarczająco reprezentatywny, nie tracimy zbyt dużo informacji, kompresja
Brana jest co Któraś tam próbka

![[Pasted image 20251010233403.png]]



# #Aliasing - sygnał który został spróbkowany niespełniając [[Próbkowanie sygnałów#Teoria o próbkowaniu (Nyquist-Shannon sampling theorem)| twierdzenia o próbkowaniu]]. 
## Przejawia się złą interpretacją sygnału wysoko częstotliwościowego (większego od [[Próbkowanie sygnałów#Częstotliwość_Nyquista - połowa częstotliwości próbkowania $f_{n} = frac{1}{2}~f_{s}$. | częstotliwości Nyquista]])

## Aliasing w dziedzinie czasu
![[Pasted image 20251010234103.png]]

## Aliasing w dziedzinie częstotliwości
![[Pasted image 20251010234142.png]]


# #Błąd_kwantyzacji
dupa



[^1]: Sampling wikipedia  https://en.wikipedia.org/wiki/Sampling_(signal_processing)
