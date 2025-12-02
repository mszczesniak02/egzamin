
>[!warning] # Dioda półprzewodnikowa
>>[!danger] ## Złączne PN, podstawowe użycia diody
>>>[!question]- #### Diody, narysować prostownik jednopołówkowy (Krehlik)
>>>>[!quote] Dyfuzja nośników: elektrony z obszaru N i dziury z obszaru P dyfundują do środka złącza, gdzie rekombinują.Warstwa zaporowa (depletion region): powstaje obszar pozbawiony swobodnych nośników, z polem elektrycznym przeciwdziałającym dalszej dyfuzji.Polaryzacja:Przewodzenie (polaryzacja wprost): napięcie dodatnie na P względem N → warstwa zaporowa maleje → prąd płynie Zaporowa: napięcie ujemne na P względem N → warstwa zaporowa rośnie → prąd nie płynie. **Dioda prostownicza** Przewodzi prąd w jednym kierunku Prostowniki AC/DC, zasilacze**Dioda Zenera** Przewodzi wstecznie powyżej napięcia Zenera Stabilizacja napięcia, zabezpieczenia**Dioda LED** Emituje światło przy przewodzeniu Oświetlenie, sygnalizacja**Dioda Schottky’ego** Niskie napięcie przewodzenia, szybka Zasilacze impulsowe, RF**Dioda tunelowa** Efekt tunelowy, nieliniowa charakterystyka Oscylatory, układy mikrofalowe**Dioda lawinowa** Przewodzi przy przebiciu lawinowym Detektory, zabezpieczenia**Dioda PIN** Gruba warstwa nie domieszkowana (I) RF, mikrofalowe przełączniki**Fotodioda** Generuje prąd pod wpływem światła Czujniki światła, detektory optyczne
>>>> 
>>>> Prostownik jednopołówkowy do dioda która w jedną strone blokuje przepływ prądu, połączona szeregowo z rezystorem
>>
>>>[!question]- #### diody (Krzak)
>>>>[!quote] Dyfuzja nośników: elektrony z obszaru N i dziury z obszaru P dyfundują do środka złącza, gdzie rekombinują.Warstwa zaporowa (depletion region): powstaje obszar pozbawiony swobodnych nośników, z polem elektrycznym przeciwdziałającym dalszej dyfuzji.Polaryzacja:Przewodzenie (polaryzacja wprost): napięcie dodatnie na P względem N → warstwa zaporowa maleje → prąd płynie Zaporowa: napięcie ujemne na P względem N → warstwa zaporowa rośnie → prąd nie płynie. **Dioda prostownicza** Przewodzi prąd w jednym kierunku Prostowniki AC/DC, zasilacze**Dioda Zenera** Przewodzi wstecznie powyżej napięcia Zenera Stabilizacja napięcia, zabezpieczenia**Dioda LED** Emituje światło przy przewodzeniu Oświetlenie, sygnalizacja**Dioda Schottky’ego** Niskie napięcie przewodzenia, szybka Zasilacze impulsowe, RF**Dioda tunelowa** Efekt tunelowy, nieliniowa charakterystyka Oscylatory, układy mikrofalowe**Dioda lawinowa** Przewodzi przy przebiciu lawinowym Detektory, zabezpieczenia**Dioda PIN** Gruba warstwa nie domieszkowana (I) RF, mikrofalowe przełączniki**Fotodioda** Generuje prąd pod wpływem światła Czujniki światła, detektory optyczne
>>>> 
>>>>
>>
>>>[!question]- #### Przyczyny nieliniowości w układach elektronicznych (jak powstają, na co wpływają, widmo harmonicznych, THD) (Ziętek)
>>>>[!quote] Odpowiedź
>>
>>>[!question]- #### na jakie elementy wpływa temperetura, na jakie parametry (Ziętek)
>>>>[!quote] Na wszystkie elementy wpływa temperatura, w szczególności na półprzewodniki. 
>>>> 
>>>> Rezystory grzeją się, jako ich główna funkcja, czyli ograniczenie prądu, a zgromadzona w nich energia jest oddawana w postaci temperatury, zaleznośc R(t) = R_0 (1 + alfa(t-t_0)), gdzie r0 to nominalna rezystancja, alfa to wpsółczunnik materiałowy, a t_0 temperatura referencyjna dla metalu o wspolczunniku alfa
>>>> MOSFETy - napięcie progowe V_T maleje wraz ze wzrotstem temperatury, im cieplej, łatwiej się włącza ( przy niższym V), rezustancja kanału rośnie ze wzrostem kanału, czyli spada ruchliwość (połączenie równoległe pozwoli równomiernie rozłożyć prąd między tranzystorami)
>>>>BJT - Wzmocnienie prądowe wzrasta ze wzrostem temperatury (spada rezystancja im większa temperatura, im cieplej, tym lepiej przewodzi, ale większe prądy, więc się może spalić )
>>>> Cewki i transformatory - indukcja nasycenia maleje ze wzrostem temperatury - przy osiągnięciu nasycenia. Wiedząc że V = L di/dt -> V/L = di/dt, czyli nagła zmiana L do spowoduje nieskończenie wielkie napięcie. Nagła zmiana może zajść, jeżeli przy dużej temperaturze  rdzeń się nasyci, spadnie drastycznie przenikalność w polu magnetycznym, co za tym idzie, cewka staje się drutem, bo L = N^2 * A * u/(L), gdzie u to przenikalność, N ilość zwojów, A powierzchnia, L długość. Więc może się odłożyć wielkie napięcie. 
>>
>>>[!question]- #### Dioda, domieszkowanie, charakterystyka, przebiegi, co niszczy diodę  (Grechot)
>>>>[!quote] Dyfuzja nośników: elektrony z obszaru N i dziury z obszaru P dyfundują do środka złącza, gdzie rekombinują.Warstwa zaporowa (depletion region): powstaje obszar pozbawiony swobodnych nośników, z polem elektrycznym przeciwdziałającym dalszej dyfuzji.Polaryzacja:Przewodzenie (polaryzacja wprost): napięcie dodatnie na P względem N → warstwa zaporowa maleje → prąd płynie Zaporowa: napięcie ujemne na P względem N → warstwa zaporowa rośnie → prąd nie płynie. **Dioda prostownicza** Przewodzi prąd w jednym kierunku Prostowniki AC/DC, zasilacze**Dioda Zenera** Przewodzi wstecznie powyżej napięcia Zenera Stabilizacja napięcia, zabezpieczenia**Dioda LED** Emituje światło przy przewodzeniu Oświetlenie, sygnalizacja**Dioda Schottky’ego** Niskie napięcie przewodzenia, szybka Zasilacze impulsowe, RF**Dioda tunelowa** Efekt tunelowy, nieliniowa charakterystyka Oscylatory, układy mikrofalowe**Dioda lawinowa** Przewodzi przy przebiciu lawinowym Detektory, zabezpieczenia**Dioda PIN** Gruba warstwa nie domieszkowana (I) RF, mikrofalowe przełączniki**Fotodioda** Generuje prąd pod wpływem światła Czujniki światła, detektory optyczne
>>>> 
>>>> Diodę niszczy przebicie, czyli zbyt duże przyłożone napięcie, w polaryzacji zaporowej, przebicie sprawia lawinowy wzrost nośników, co za tym idzie wzrost prądu i ostatecznie temperatury bo prąd płynie.  
>>>> Im większa temperatura półprzewodnika, tym mniejsza rezystancja, im mniejsza rezyustancja tym większy prąd, więc może się spalić.



>[!warning] # Elementy elektroniczne
>>[!danger] ## Elementy pasywne
>>>[!question]- #### Ogniwa termoelektryczne Peltiera (Ziętek)
>>>>[!quote] Raz o tym słyszałem i nawet nie ze studiów, badziew
>>>> Jest to układ elektroniczny, który za sprawą zjawiska termoelektrycznego (peltier i seeback) pozwala zamienić różnice temperatur na spadek napięcia. i odwrotnie, chłodzeni i grzanie sterowane napięciem. 
>>>>  
>>>> Po ogrzaniu jeden strony, elektrony zwiększają energię kinetyczną dyfundują w kierunku gradientu temperatury.  zwyższej do niższej 
>>>> Gdy mówimy o wytwarzaniu napięcia zmianą tempratury, to efekt Seebecka, jeżeli odwrotnie, to efekt Peltiera.
>>>> Moduł peltiera to połączone szeregowo przeciwne półprzewoniki w strukturze, pozwalające na tworzenie różnicy temperatur w oparciu o dostarczaną energię.



