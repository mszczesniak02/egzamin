> [!warning] # 1. Analiza obwodów.
>> [!danger] ## 1.1. Prawa Kirchhoffa i metody analizy (węzłowa, oczkowa).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Zastosowanie transformaty Laplace’a do rozwiązywania stanów nieustalonych. Transmitancja, wykresy Bodego. Aproksymacja nieliniowych charakterystyk w pobliżu punktu pracy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Model małosygnałowy elementu aktywnego.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Zasada superpozycji w analizie układów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.5. Równoważność opisu obwodów w dziedzinie czasu, częstotliwości i Laplace’a.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Symulacja układów analogowych.
>> [!danger] ## 2.1. Ogólna zasada działania symulatora (np. Spice), rodzaje analiz i zakres ich stosowalności.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.2. Od czego zależy wiarygodność rezultatów symulacji?
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Jakie zjawiska/problemy występujące w realnych układach są trudne/niemożliwe do wiarygodnej symulacji?
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Pomiary w układach elektronicznych.
>> [!danger] ## 3.1. Podstawowe zasady budowy i działania elektronicznych przyrządów pomiarowych, wykorzystanie multimetru i oscyloskopu cyfrowego w pomiarach układów elektronicznych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Wpływ ograniczeń przyrządów pomiarowych na wykonywane pomiary (np.: skończone rezystancje wewnętrzne, ograniczenie pasma, efekt aliasingu).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Błędy i niepewność w pomiarach, sposoby szacowania niepewności.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Dioda półprzewodnikowa.
>> [!danger] ## 4.1. Budowa złącza pn - materiały (półprzewodniki domieszkowane).
>>> [!question]- #### Złącze P-N, rodzaje i zastosowania diod 
>>>> [!quote] Dyfuzja nośników: elektrony z obszaru N i dziury z obszaru P dyfundują do środka złącza, gdzie rekombinują.Warstwa zaporowa (depletion region): powstaje obszar pozbawiony swobodnych nośników, z polem elektrycznym przeciwdziałającym dalszej dyfuzji.Polaryzacja:Przewodzenie (polaryzacja wprost): napięcie dodatnie na P względem N → warstwa zaporowa maleje → prąd płynie Zaporowa: napięcie ujemne na P względem N → warstwa zaporowa rośnie → prąd nie płynie. **Dioda prostownicza**	Przewodzi prąd w jednym kierunku	Prostowniki AC/DC, zasilacze**Dioda Zenera**	Przewodzi wstecznie powyżej napięcia Zenera	Stabilizacja napięcia, zabezpieczenia**Dioda LED**	Emituje światło przy przewodzeniu	Oświetlenie, sygnalizacja**Dioda Schottky’ego**	Niskie napięcie przewodzenia, szybka	Zasilacze impulsowe, RF**Dioda tunelowa**	Efekt tunelowy, nieliniowa charakterystyka	Oscylatory, układy mikrofalowe**Dioda lawinowa**	Przewodzi przy przebiciu lawinowym	Detektory, zabezpieczenia**Dioda PIN**	Gruba warstwa nie domieszkowana (I)	RF, mikrofalowe przełączniki**Fotodioda**	Generuje prąd pod wpływem światła	Czujniki światła, detektory optyczne
>
>> [!danger] ## 4.2. Przepływ prądu przez złącze pn dla polaryzacji przewodzącej i zaporowej.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Parametry i ch-ki diod: prostowniczej, stabilizacyjnej, LED itd.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.4. Wpływ temperatury.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Tranzystor bipolarny i unipolarny.
>> [!danger] ## 5.1. Budowa, zasada działania, konfiguracja pracy, właściwości.
>>> [!question]- #### budowa tranzystora bjt, stany pracy, praca jako wzmacniacz
>>>> [!quote] to element półprzewodnikowy sterowany prądem, składający się z trzech warstw domieszkowanego półprzewodnika i dwóch złączy P-N. Jego działanie opiera się na transporcie nośników ładunku (elektronów i dziur) przez wszystkie trzy warstwy **Budowa** Emiter (E): Obszar bardzo silnie domieszkowany ($N^{++}$ w NPN). Jego zadaniem jest "wstrzykiwanie" (emisja) ogromnej liczby nośników większościowych do bazy.Baza (B): Obszar środkowy, bardzo cienki (rzędu mikrometrów) i słabo domieszkowany ($P^-$ w NPN). To elektroda sterująca.Kolektor (C): Obszar umiarkowanie domieszkowany ($N$), zazwyczaj największy fizycznie (aby odprowadzać ciepło). Jego zadaniem jest zbieranie nośników, które przebyły bazę. Stany pracy tranzystora BJT to stan odcięcia (Cut-off) gdy złącze baza–emiter jest spolaryzowane zaporowo i brak prądu kolektora czyli tranzystor jest wyłączony, stan aktywny (Active) gdy złącze baza–emiter jest spolaryzowane wprost a baza–kolektor zaporowo i prąd kolektora zależy od prądu bazy zgodnie z zależnością IC≈β⋅IBI_C \approx \beta \cdot I_B co stanowi tryb wzmacniający, stan nasycenia (Saturation) gdy oba złącza są spolaryzowane wprost i tranzystor przewodzi maksymalny prąd działając jak klucz włączony oraz stan zaporowy (Reverse-active) gdy polaryzacje są odwrócone względem stanu aktywnego co daje małe wzmocnienie i jest rzadko używane. Jako wzmacniacz : Zasada działania tranzystora BJT polega na tym że niewielki prąd bazy steruje dużym prądem kolektora, wzmocnienie prądowe opisuje zależność β=ICIB\beta = \frac{I_C}{I_B}, wzmocnienie napięciowe wynika z rezystancji obciążenia w kolektorze, konfiguracje wzmacniające obejmują OE (Common Emitter) dający duże wzmocnienie napięciowe i odwrócenie fazy, OB (Common Base) charakteryzujący się dużą szybkością i stosowany w układach RF oraz OC (Common Collector, wtórnik) zapewniający wzmocnienie prądowe bez wzmocnienia napięciowego i niski opór wyjściowy.
>
>> [!danger] ## 5.2. Tranzystor aktywny, tranzystor jako klucz.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Parametry i charakterystyki.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Modele i parametry wielkosygnałowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.5. Modele i parametry małosygnałowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.6. Wpływ temperatury, metody kompensacji skutków zmian temperatury w układach elektronicznych, pojęcie rezystancji termicznej.
>>> [!question]- #### Efekt millera, wzmocnienie a pasmo
>>>> [!quote] Jeśli wzmacniacz ma wzmocnienie napięciowe GV, mała zmiana napięcia na wejściu tranzystora powoduje na kolektorze zmianę GV razy większą i odwróconą.  W efekcie źródło sygnału „widzi” przez Ccb prąd większy o czynnik (GV + 1), tak jakby Ccb był podłączony z bazy do masy. Dlatego przy wyznaczaniu częstotliwości granicznej wejścia można zastąpić Ccb kondensatorem równoważnym Ccb(GV + 1) do masy.  Ten wzrost pojemności to efekt Millera: typowe ~4 pF może wyglądać od strony wejścia jak kilkaset pF.  $$C_{Miller} = C_{pasożytnicza} \cdot (1 + |A_v|)$$ Wzmocnienie napięciowe AvA_v im większe tym silniejszy efekt Millera pasmo przenoszenia ograniczone przez częstotliwość graniczną fgr≈12πRweCwef_{gr} \approx \frac{1}{2\pi R_{we} C_{we}} gdzie RweR_{we} to rezystancja wejściowa w praktyce wzmacniacz o dużym wzmocnieniu ma mniejsze pasmo bo efekt Millera rozciąga pojemność wejściową. Zwiększona pojemność wejściowa powoduje większą stałą czasową Rwe⋅CweR_{we} \cdot C_{we} co obniża częstotliwość graniczną fgrf_{gr} i sprawia że wzmacniacz o dużym wzmocnieniu napięciowym traci możliwość pracy przy wysokich częstotliwościach.


> [!warning] # 6. Układy RC i ich rola w obwodach elektronicznych.
>> [!danger] ## 6.1. Układ podstawowy i złożony RC (jeden kondensator, więcej niż 1 rezystor) oraz jego odpowiedź na skok jednostkowy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Przykłady zastosowań układów RC o charakterze różniczkującym i całkującym.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Określanie stałej czasowej złożonych układów RC oraz częstotliwości granicznych w dziedzinie AC.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Wzmacniacze różnicowe.
>> [!danger] ## 7.1. Cel i obszar zastosowań, proste schematy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Wzmacniacz różnicowy z obciążeniem aktywnym lustrem prądowym.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Sygnał sumacyjny i różnicowy, czynniki poprawiające CMRR wzmacniacza różnicowego.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Wzmacniacze operacyjne.
>> [!danger] ## 8.1. Parametry wzmacniaczy operacyjnych.
>>> [!question]- #### klasy wzmacniacy (zalety wady, zniekształcenia skrośne w klasie B, punkt pracy w danej klasie)
>>>> [!quote] Klasa A - tranzystor przewodzi przez cały cykl sygnału, brak zniekształceń skrośnych i bardzo liniowa praca, najwyższa jakość dźwięku, bardzo mała sprawność, duże straty mocy używają audiofile. Klasa B- jeden tranzystor NPN przewodzi dodanią połówke sygnału a drugi PNP ujemną, Ma dużą sprawność i znikomy pobór mocy w spoczynku, generuje zniekształcenia skrośne czyli problem z fizyki półprzewodników aby tranzystor krzemowy przewodził napięcie baza-emiter musi przekroczyć 0.7V Gdy sygnał przechodzi przez 0 (np z +0.5V do -0.5V) to sygnał jest za mały żeby włączyć górny tranzystor i za duży żeby dolny, wieć powstaje martwa strefa, więc sinus ma płaskie schodki w okolicach 0 i brzmi słabo, Klasa AB - modyfikacja klasy B bez tych zniekształceń skrośnych. Wstępnie polaryzuje się bazy tranzystorów małym napięciem żeby tranzystory nie miały tego schodka co poprawia przaejście i poprawia sprawność (ok 50-70% ma wtedy), Klasa C jest używana do układów wielkiej częstotliwość w RF. Klasa D - używa się jako cyfrowego przełącznika PWM, czyli albo jest ON albo OFF, duża sprawność i mały pobór mocy. 
>
>> [!danger] ## 8.2. Definicje i modelowanie „nieidealności” wzmacniacza, np. napięcia niezrównoważenia, prądów polaryzacji, szumów itd.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Typowe układy aplikacyjne wzmacniaczy operacyjnych.
>>> [!question]- #### Wzmacniacz operacyjny - czym jest, budowa, parametry idealnego, zastosowania liniowe, narysować WO
>>>> [!quote] układ scalony służący do wzmacniania sygnałów elektrycznych i realizacji operacji matematycznych (sumowanie, całkowanie, różniczkowanie). Budowa Wejście Nieodwracające ($V_+$ / Non-Inverting): Sygnał podany na to wejście pojawia się na wyjściu w tej samej fazie.Wejście Odwracające ($V_-$ / Inverting): Sygnał podany na to wejście pojawia się na wyjściu odwrócony w fazie o $180^\circ$.Wyjście ($V_{out}$): Wyjście sygnałowe o niskiej impedancji.Zasilanie ($+V_{CC}$ i $-V_{EE}$): Zazwyczaj symetryczne (np. $\pm 15V$), choć możliwe jest zasilanie pojedyncze. Vout = A*(V+ - V-) (Mam nadzieję że nie chodzi mu u wyjaśnianie na bjt). Właściwości:1Bardzo duże wzmocnienie napięciowe (powyżej 10 000 V/V = 80 dB)2Wzmocnienie prądu stałego3Duża rezystancja wejściowa (MΩ)4Mała rezystancja wyjściowa (Ω) Zastosowania liniowe: A. Wzmacniacz Odwracający (Inverting Amplifier) B Wzmacniacz nieodwracający CWtórnik D sumator odwracający Rf
>
>> [!danger] ## 8.4. Pojęcie pola wzmocnienia (GBW).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 9. Sprzężenie zwrotne w układach i systemach elektronicznych.
>> [!danger] ## 9.1. Cel stosowania sprzężenie, kiedy stosuje się ujemne, a kiedy dodatnie sprzężenie zwrotne?
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.2. Problem stabilności układów ze sprzężeniem, kryteria stabilności.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 10. Pętla synchronizacji fazowej PLL.
>> [!danger] ## 10.1. Schemat blokowy i zasada działania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.2. Powielanie/dzielenie częstotliwości w PLL.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.3. Różne rozwiązania układu komparatora fazy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 10.4. Zakres chwytania i zakres śledzenia pętli.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
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



> [!warning] # 11. Regulatory napięcia (liniowy i nieliniowy).
>> [!danger] ## 11.1. Budowa i zasada działania prostych regulatorów z diodą Zenera oraz z elementem aktywnym (tranzystor, wzmacniacz operacyjny).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.2. Kluczowe parametry: napięcie odniesienia, wzmocnienie pętli, tętnienia, sprawność i stabilność temperaturowa.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.3. Zasada działania regulatorów typu buck, boost, buck–boost – przełączanie energii w elementach indukcyjnych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.4. Znaczenie modulacji PWM, filtracji LC oraz parametrów takich jak sprawność, tętnienia i zakres regulacji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 11.5. Znaczenie kompensacji częstotliwościowej dla stabilności układu regulacji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
