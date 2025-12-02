

>[!warning] # Delta Diraca, Próbkowanie
>>[!danger] ## Twierdzenie Shannona, aliasing, transformaty fouriera
>>>[!question]- #### Próbkowanie, delta Diraca, twierdzenie Shannona, alissing (Grochot)
>>>>[!quote] Próbkowanie to proces, którego zadaniem jest uzyskanie z sygnału ciągłego w czasie sygnalu dyskretnego. Realizowane jest to (w idealnym świecie ) poprzez okresowy pomiar wartości amplitudy sygnału funkcją delty Diraca.
>>>> 
>>>> Delta Diraca to dystrybucja, nie funkcja ( bo nie spełnia kryterium funkcji), której powierzchnia (całka z delty diraca) wynosi zawsze 1, natomiast jej "span" (amplituda) w miejsach niezerowych wynosi nieskończoność. 
>>>> Jej własności pozwalając reprezentwoać sygnał impulsowy, o nieskończonej amplitudzie, a po transformacjach (Fourer / Laplace), odpowiada jedynce, przez co liczenie transformat z nią sprowadza się do mnożenia przez 1.
>>>> Delta Diraca jest liniowa, można ją skalować, jest również symetryczna
>>>>
>>>> Próbkowanie jest realizowane co stały okres funkcją grzebieniową (d.diraca co interwał).
>>>> Pozwala to uzyskać punkty odpowiadające wartości sygnałów w danym miejscu w czasie.
>>>> Najwazniejszym podczas próbkowania jest właśnie interwał z jakim to robimy. Musi być on na tyle duży, by nie doprowadzić do błędnego odczytu, co doprowadzi do złej rekonstrukcji sygnału.
>>>> Częstotliwośc próbkowania, czyli ów interwał musi być większy od dwukrotności największej częstotliwości sygnału pierownego (tego który chcemy spróbkować), by spełnić kryterium Shannona, dzięki któremu możliwa jest poprawna rekonstrukcja sygnału.
>>>> W przypadku niespełnienia kryterium Shannona, powstanie aliasing, czyli ( i tutaj narysować trzeba też) sygnał pierwotny zmienia się szybciej, niż go próbkujemy, przez to nie jesteśmy w stanie zobaczyć wszystkich zmian, co może doporowadzić do utraty zawartości sygnału. Jeżeli jest to dźwięk, to np. można utracić głębię głosu, spłaszczyć go i doprowadzić do tego, że nie bedzie wyraźnie go słuchać.
>>>>
>>>> Rekonstrukcja to możliwość odtworzenia sygnału z jego spróbowanej formy za pomocą użycia funkcji sinc(x) = sinx/x, gdy dla kazdej próbki przetworzymy go przez sinc, (oraz dodamy jej wartości dla każdej innej próbki, lepiej narysować ) to wynikowo otrzymamy poprawnie odtworzony sygnał pierwotny (pod warunkiem spełnienia tw.Shannona).
>>>>
>>>> Aliasing przejawia się (w dziedzienie t)  zbyt wolnym "dopasowaniem" sygnału, natomiast w dziedzinie f, nachodzącymi się zakresami (też narysować), co powoduje ich sumowanie, w efekcie zwiększenie pasma potrzebnego do wysłania sygnału.






>[!warning] # Transformata Fouriera, splot
>>[!danger] ##  FT, FFT, DFT, splot
>>>[!question]- #### transformata Fouriera, co to, po co, jak wygląda sygnał po (Krehlik)
>>>>[!quote] Transformata Fouriera to narzędzie stosowane do analizy zawartości różnych częstotliwości w danym sygnale.
>>>> Można rozróżnić wariant dla sygnałów analogowych (czyli takich, które w dowonym miejscu (zakresie mogą przyjąć dowolną wartość ))(FT) oraz dyskretnych (cyfrowych, takich które mają ograniczoną precyzję (rozdzielność), a nieskończonej dokładności nie ma).
>>>>
>>>> TF matematycznie jest całką oznaczoną w granicach [-inf- : + inf], której składową jest wartość sygnału w czasie pomnożona z liczbą zespoloną. Działa ona dzięki temu, że przy wykryciu (nałożeniu się ) częstotliwości z pierwotnego sygnału oraz sygnału z liczby zespolonej, funckje sinus i cosinus wykrywają zera, i jedynki, czyli gdy "trafią" w jakąś częśtotliwość, ich wartości nie są zerowe (dla cos (0) = 1, sin(pi/2) = 1).
>>>>
>>>> Rozróżniamy transformatę na FT (analogowe) i DFT (dyskretną). Również transformata Laplace'a to specjalny "case" FT, tyle że zamiast granic -inf +inf, uzywamy [0 : +inf], odpowiadającej za analize równania "od zdarzenia do końca czasu".
>>>> 
>>>> Sygnał wyjściowy FT jest liczbą zespoloną, z której można uzyskać wykresy w funkcji częstotliwości f/omega, fazowy oraz amplitudowy. Takowy sygnał, jezeli operujemy na funkcjach "piertownych", czyli np. k sin(af + p), gdzie a,k,p to jakieś współczynniki ustalone, to uzyskamy sygnał po transofrmacje, w przypadku sinusa, byłby to delta Diraca z ograniczoną amplitudą.
>>>>
>>>> Ciekawą własnością FT jest związek częstotliwości i czasu, mianowicie można łatwo zamienić operację splotu w dziedzinie czasu na mnożenie transformat w dziedzinie częstotliwości, pozwalając na usprawnienie liczenia.
>>>>
>>>> Typowy wykres w dziedzinie f dla FT{ square(Tt)  } , gdzie T to okres (czyli w czasie kwadrat z -T/2 do T/2) odpowiada sygnałowi 2T*Sinc(T/pi)*, gdzie miejsca zerowe są wielokrotnością T/pi (symetrycznie)
>>>>
>>>> Dodatkowe własności, które warto opisać: zasada Parseval ( zachowanie/równoważność energii (czyli sygnał do kwadratu) w czasie i częstotliwości ), symetria Hermitowska (samosprzężenie: dla f rzeczywistego: f(-x)*  <=FT=> f(x')* , dla f zespolonego: f(-x)* <=FT=> -f(x')*.
>>>> 
>>>> Można narysować wykresy np. dla sinusa w ramach odpowiedzi





>[!warning] # Próbkowanie 
>>[!danger] ## Aliasing, twierdzenie Shannona
>>>[!question]- #### aliasing (Krehlik)
>>>>[!quote] Aliasing to sytuacja która zachodzi w przypadku niespełnienia tw, Shannona. Przejawia się tym, że w reprezentowanym sygnałe powstają artefakty, w obrazach np linie okręgów na tle jednolitej ściany, bądź w dźwięku jako niewyraźna mowa, spłaszczenie dźwięku.
>>>> 
>>>> Aby aliasing mógł zajść, potrzeba jest rekonstrukcja sygnału, czyli odwtorzenie pierwotnego sygnału z jego spróbkowanych wartości. Realizowane jest to za pomocą funkcji sinc() dla każdej próbki (tu narysować trzeba). Jeżeli poprawnie dopasujemy częstotliwość próbkowania, aliasingu nie będzie.
>>>>
>>>> Aliasing w dziedzinie f przejawia się nachodzącymi się przedziałami (trzeba narysować), które potem się sumują, tworząc sztucznie częstotliwości sygnału, których nie ma w oryginalnym sygnale. Ponieważ operujemy na sygnale dyskretnym, to przez własności sprzężenia ( mnozenie  w f to splot w t i na odwrót) nasz sygnał powtarza się cyklicznie w dziedzinie częstotliwości ). Aby temu zaradzić ( powtarzającym się sygnałom oraz efektu aliasingu) stosuje się filtry dolnoprzepustowe, które pozwalają wyciszyć i usunąć składowe wysokoczęstotliwościowe z sygnału.
>>> 
>>
>>>[!question]- #### Aliasing (Frankowski)
>>>>[!quote]  Aliasing to sytuacja która zachodzi w przypadku niespełnienia tw, Shannona. Przejawia się tym, że w reprezentowanym sygnałe powstają artefakty, w obrazach np linie okręgów na tle jednolitej ściany, bądź w dźwięku jako niewyraźna mowa, spłaszczenie dźwięku.
>>>> 
>>>> Aby aliasing mógł zajść, potrzeba jest rekonstrukcja sygnału, czyli odwtorzenie pierwotnego sygnału z jego spróbkowanych wartości. Realizowane jest to za pomocą funkcji sinc() dla każdej próbki (tu narysować trzeba). Jeżeli poprawnie dopasujemy częstotliwość próbkowania, aliasingu nie będzie.
>>>>
>>>> Aliasing w dziedzinie f przejawia się nachodzącymi się przedziałami (trzeba narysować), które potem się sumują, tworząc sztucznie częstotliwości sygnału, których nie ma w oryginalnym sygnale. Ponieważ operujemy na sygnale dyskretnym, to przez własności sprzężenia ( mnozenie  w f to splot w t i na odwrót) nasz sygnał powtarza się cyklicznie w dziedzinie częstotliwości ). Aby temu zaradzić ( powtarzającym się sygnałom oraz efektu aliasingu) stosuje się filtry dolnoprzepustowe, które pozwalają wyciszyć i usunąć składowe wysokoczęstotliwościowe z sygnału.
>>> 


---

[^1]: jakiś link testowy: https://github.com/mszczesniak02/egzamin
