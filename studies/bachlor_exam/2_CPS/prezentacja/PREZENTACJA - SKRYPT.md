## Podstawowe zagadnienia - próbkowanie:
### Próbkowanie -
to proces przetworzenia sygnału ciagłego (w czasie) na dyskretny.
Częstotliwość próbkowania $f_{p}=\frac{1}{\Delta t}$, odwrotność to okres próbkowania
Interwał próbkowania co jednostkę okresu próbkowania

po co to robione?
aplikacje gdzie to jest robione



## Twierdzenie Shannona -
Jeżeli spełnimy warunki: 
- próbki pobierane w odstępnie czasu $\Delta t$ takich, by $f_{p}\geq 2f_{max}$ .
 Jeżeli są spełnione to sygnał spróbkowany można odtworzyć funkcją szeregiem sinc()
f nyqiista Inaczej mówiąc, częstotliwość Nyquista jest równa **połowie częstotliwości próbkowania** - maksymalna [częstotliwość](https://pl.wikipedia.org/wiki/Cz%C4%99stotliwo%C5%9B%C4%87 "Częstotliwość") składowych [widmowych](https://pl.wikipedia.org/wiki/Widmo_akustyczne "Widmo akustyczne") sygnału poddawanego procesowi [próbkowania](https://pl.wikipedia.org/wiki/Pr%C3%B3bkowanie "Próbkowanie"), które mogą zostać odtworzone z ciągu próbek bez zniekształceń




## Aliasing - 
Zbyt mała częstotliwość próbkowania (niespełnienie warunku slajdu poprzedniego) powoduje braki w sygnale

niespełniony warunek f_s > 2* fmax
zły odczyt, pominiecie wysokich czestotliwości, niepoprawnie odebransy sygnał, fałszywe komponenty
jeżeli zakres B nachodzi na siebie, sumuje się pasmo.
filtr anty aliasing
oversampling ? decymacja? 

# FT: szybki rys przed DFT

# DFT:
założenie że sygnał jest okresowy, stąd w widmie powtarzają się harmoniczne sygnału + mnozenie w czasie (dirac + dane) daje splot w częstotliwości

# FFT:


## OKNA CZASOWE:
Chcąć odtworzyć dźwięk sygnału, głupiio robić analize całości naraz, lepiej byłoby pociąć na kawałki czasowe, następnie zrobić analize

Jak wybrać odpowienie okno do sygnału
Wszystko to kompromis,
im wyższy główny "pik / listek", tym lepsza rozdzielność częstotliwośćiowa, ale występują gorsze przecieki - wyższe listki boczne
niskie listki boczne - szeroka główna loba, gorsza rozdzielczość

- Chcesz rozdzielić bliskie, podobnie silne tony: prostokątne (jeśli koherentne próbkowanie) lub Hamming (nieco niższe listki niż Hann) — pamiętaj o ryzyku przecieków.
- Chcesz wykryć słaby ton obok silnego (duża dynamika): Blackman–Harris / Nuttall / Chebyshev (niski poziom bocznych listków), nawet kosztem rozdzielczości.
- Chcesz poprawić rozdzielczość bez zmiany okna: zwiększ N (dłuższa ramka) → mniejsza Δf. To najskuteczniejsza dźwignia.
- Ogólna analiza/STFT: Hann (dobry kompromis, dobre własności rekonstrukcji przy overlap‑add).

Im większy listek główny, tym mniejsza rozdzielczość, czyli mniej dokładniej rozróżnimy bliskie częstotliwośći,
im większe listki boczne, tym większe przecieki

Do wykrywania słabych linii obok silnych linii, niskie listki boczne, blackam-harris
lepsze rozdzielanie bliskich tonów - węższy główny listek
do dokładnej amplitudy flat-top, 

- „Spłaszczony” szczyt odpowiedzi częstotliwościowej: współczynniki okna (suma kosinusów) są dobrane tak, aby kilka pierwszych pochodnych modułu widma w 0 było bliskie zeru. W efekcie szczyt głównej loby jest szeroki i prawie płaski, więc maksymalna wartość prążka ma prawie tę samą wysokość dla różnych położeń częstotliwości między binami.


# SPLOT:
To mnożenie dwóch sygnałów, co daje 3ci sygnał
Aby go osiągnąc należy odwórić jeden sygnał, przemnożyc jego wartości (nachodzace się oraz dodać sumę wypadkową)
odczyt od dołu

### Splot liniowy dla ustalonej ilości sekwencji (rzeczy w wektorze)

## Splot kołowy -> zawija się co N
overlap add / save ? moze coś wspomnieć o tym


## Transformata Z



To operator, pozwalający opisać transformate FOuriera za pomocą zmiennej zespolonej.
Dzięki temu pozwala zamieniać równania różniczkowe na algebraiczne.
Pozwala łatwiej działanie systemu - analizować stabilność oraz szukać biegunów 

Region zbiezności to płaszczyzna Z





Układ określamy za stabilny gdy ROC zawiera się w okręgu jednostkowym
