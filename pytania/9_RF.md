> [!warning] # 1. Model i parametry linii transmisyjnej.
>>>[!question]- #### Modulacje cyfrowe BPSK, FSK, QAM
>>>>[!quote] - **BPSK (Binary Phase Shift Keying)** – modulacja z przesunięciem fazy binarnej. Każdy bit (0 lub 1) reprezentowany jest przez zmianę fazy nośnej o 180°.**FSK (Frequency Shift Keying)** – modulacja z przesunięciem częstotliwości. Bit „0” i „1” kodowane są różnymi częstotliwościami sygnału nośnego.**QAM (Quadrature Amplitude Modulation)** – modulacja kwadraturowa amplitudy. Łączy zmianę amplitudy i fazy, co pozwala przesyłać wiele bitów w jednym symbolu.
>
>> [!danger] ## 1.1. Model zastępczy linii: elementy R, L, C, G.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Impedancja charakterystyczna i współczynnik odbicia, parametry rozproszenia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Stała propagacji, prędkość propagacji sygnału.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Straty w linii transmisyjnej (tłumienie, dyspersja).
>>> [!question]- #### Linia długa, parametry linii transmisyjnej - wzory, jednostki
>>>> [!quote] Linia długa to linia transmisyjna, w której długość przewodów jest porównywalna z długością fali sygnału. Jej opis wymaga parametrów rozłożonych: rezystancji, indukcyjności, pojemności i konduktancji, podawanych w jednostkach na metr. Rezystancja jednostkowa 𝑅 – [Ω/m] Straty energii w przewodach (ciepło).Indukcyjność jednostkowa 𝐿 – [H/m] Pole magnetyczne wokół przewodów.Pojemność jednostkowa 𝐶– [F/m] Pojemność między przewodami.Konduktancja jednostkowa 𝐺– [S/m] Upływność przez izolację między przewodami. wzór : $$Z_0 = \sqrt{\frac{R' + j\omega L'}{G' + j\omega C'}}$$ Impedancja falowa$Z_0$$\Omega$$\sqrt{L'/C'}$Prędkość fazowa$v_p$$m/s$$1/\sqrt{L'C'}$Współczynnik odbicia$\Gamma$-$(Z_L - Z_0) / (Z_L + Z_0)$
>
>> [!danger] ## 1.5. Dopasowanie impedancyjne z wykorzystaniem wykresu Smitha.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Budżet mocy w łączu komunikacyjnym i radarowym.
>> [!danger] ## 2.1. Definicja budżetu mocy i jego znaczenie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.2. Straty propagacyjne w wolnej przestrzeni.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Zyski i straty elementów systemu (anteny, kable, wzmacniacze).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.4. Równanie bilansu mocy dla systemów komunikacyjnych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.5. Równanie radarowe i parametry wpływające na zasięg radaru.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Parametry wzmacniaczy mikrofalowych.
>> [!danger] ## 3.1. Wzmocnienie mocy w układach mikrofalowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Model unilateralny i bilateralny wzmacniacza.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Parametry nieliniowe wzmacniaczy.
>>> [!question]- #### nieliniowość we wzmacniaczach mikrofalowych - TOI, THD, punkt kompresji
>>>> [!quote] Wzmacniacze mocy często pracują w poblizu nasycenia, co prowadzi do nieliniowości i zniekształceń sygnału. Parametry które to opisują to punkty kompresji,toi i THD. **Punkt Kompresji 1dB** - jest to moc wyjściowa, przy której rzeczywiste wzmocnienie wzmacniacza spada o 1 dB w stosunku do wzmocnienia w warunkach małego sygnału. Oznacza to  górny limit mocy, przy której wzmacniacz może być uznany za w miarę liniowy. **Punkty Przecięcia Trzeciego Rzędu(TOI - Third-Order Intercept Point)** - to teoretyczna moc wejściowa lub wyjściowa, przy której moc podstawowej harmonicznej zrównałaby się z mocą składowych intermodulacyjnych trzeciego rzędu im wyższy TOI, tym wzmacniacz lepiej radzi sobie z silnymi sygnałami i mniej generuje zniekształceń intermodulacyjnych **Współczynnik Mocy Kanałów Sąsiednich(THD - Total Harmonic Distortion)** - jest to miara określająca ile mocy szumu i zniekształceń wypływa z pasma używanego kanału do sąsiednich kanałów - jak bardzo wzmacniacz brudzi sygnał. THD = pierw(P2+P3+...)/P1
>
>> [!danger] ## 3.4. Szumy własne i współczynnik szumów (NF).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.5. Metody oceny stabilności wzmacniacza.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Propagacja fal radiowych.
>> [!danger] ## 4.1. Propagacja w wolnej przestrzeni (model Friisa).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. Odbicia, dyfrakcja i wielodrogowość.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Propagacja troposferyczna i jonosferyczna.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.4. Tłumienie sygnału przez atmosferę, deszcz, przeszkody.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.5. Modele propagacyjne w radiokomunikacji (Okumura-Hata, COST-231).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Modulacje cyfrowe.
>> [!danger] ## 5.1. Modulacja amplitudy: ASK.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Modulacja częstotliwości: FSK.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Modulacje fazowe: BPSK, QPSK.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Kwadraturowe modulacje amplitudowe: N-QAM.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.5. Zastosowania i porównanie efektywności modulacji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Metody dostępu do kanału transmisyjnego.
>
>>>[!question]- #### Kanał transmisyjny (co to jest, parametry)
>>>>[!quote] Fizyczne lub logiczne(kanał rozmowy w GSM który jest wydzielany programowo) medium które przenosi informację w postaci sygnału. Może to być przewód, przestrzeń wolna ( fala radiowa) w teori informacji(Shannona) jest traktowany jako system który przekształca sygnał wejściowy na sygnał wyjściowy dodając zakłócenia i ograniczenia. Parametry : pasmo przenoszenia (czyli jakie częstotliwości jest w stanie przenosić bez zniekształceń), tłumienie(czyli spadek mocy sygnału w miare przemieszczania się przez tunel), SNR (stosunek sygnału do szumu) SNR(dB) = 10log10(Psygnału/Pszumu) IM WYŻSZY SNR TYM LEPIEJ! , przepływowość - maksymalna ilość informacji w jednostce czasu (bps,Mbps), BER - bit erro rate czyli prawodpodobieństwo przekłamania bitu, opóźnienie(czas od nadajnika do odbiornika obviously). PS rodzaje zakłóceń szum biały - losowy ruch elektronów w przewodzie, przesłuchy - sygnał z jednego kabla do drugiego, zniekształcenia liniowe i nieliniowe - wynikające z niedoskonałości fizycznych miediom.
>
>>
>>>[!question]- #### Opisać cyfrową komunikację bezprzewodową. Co się dzieje z sygnałem jeśli zwiekszymy pasmo
>>>>[!quote] Proces przesyłania ciągu bitów z pkt A do B za pomocą fali elektromagnetycznej która rozchodzi się w przestrzeni. Etapy przesyłu to 1źródło danych(ciąg bitow) 2Kodowanie źródła- kompresja i korekcja błędów 3Modulacja cyfrowa-zamiana bitów na sygnał nośny 4Kanał transmisyjny - przestań radiowa w której są tłumienia i zakłócenia 5 Demodulacja i dekodowanie 6 odbiornik czyli rekonstrukcja danych. Parametry to - Pasmo kanału, SNR, przepustowość - maksymalna szybkość transmisji wg równania Shannona: C = B * log2(1+S/N) : C=przepustowość, B=pasmo, S/N- sygnał do szumu. **Gdy zwiększymy pasmo** z równania wyżej im więsze pasmo tym większa maks szybkość transmisji.(podwojone pasmo to wiecej bitow na sekunde poleci), zwiększy się wymaganie SNR bo im większe pasmo tym większy szum termiczny, przy zwiększeniu pasma spada SNR, szerokopasmowe sygnały częsciej ulegają wielodrogowości (odbicia od przeszkód) dlatego stosuje się OFDM które dzieli szerokie pasmo na wiele wąskich podkanałów
>
>> [!danger] ## 6.1. FDMA (Frequency Division Multiple Access).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. TDMA (Time Division Multiple Access).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. CDMA (Code Division Multiple Access).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.4. OFDMA (Orthogonal Frequency Division Multiple Access).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.5. Random Access (np. ALOHA, CSMA).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>[!warning] # Modulacje cyfrowe
>>[!danger] ## modulacje amplitudy & częstotliwośći
>>>[!question]- #### Ask vs fsk (Frankowski)
>>>>[!quote] Odpowiedźjak starczy czasu
>>
>>>[!question]- #### Modulacje cyfrowe ASK i FSK i jak wpływa na nie szum amplitudowy (Kołodziej)
>>>>[!quote] Odpowiedźjak starczy czasu
>>
>>>[!question]- #### Modulacje cyfrowe ASK i FSK i jak wpływa na nie szum amplitudowy (Kołodziej)
>>>>[!quote] Odpowiedźjak starczy czasu
>>
>>>[!question]- #### Modulacje ASK FSK, co warunkuje poziomy modulacji (krzak)
>>>>[!quote] Odpowiedźjak starczy czasu
>>
>>>[!question]- #### BPSK,QPSK, N-QAM, konstelacje (krzak)
>>>>[!quote] Odpowiedź jak starczy czasu

> [!warning] # 7. Podstawowe parametry anten.
>> [!danger] ## 7.1. Zysk anteny (gain).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Charakterystyka promieniowania anteny.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Impedancja wejściowa i dopasowanie anteny.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.4. Polaryzacja anteny.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.5. Fazowany szyk antenowy, układy formowania wiązki.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Radary.
>> [!danger] ## 8.1. Radar z falą ciągłą CW.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Pomiar prędkości i odległości radarem z falą ciągłą.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Czynniki wpływające na zasięg pracy radaru.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.4. Budowa radaru FMCW.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.5. Sposób pomiaru parametrów obiektu z wykorzystaniem radaru FMCW.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 9. Komponenty systemów radiowych.
>> [!danger] ## 9.1. Przemiana częstotliwości.
>>> [!question]- #### techniki rozpraszania widma /Rozpraszanie widma, jak się to robi i po co
>>>> [!quote] Techiki rozpraszania widma polegają na zmianie sygnału wąskopasmowego w szerokopasmowy co zwiększy odporność na zakłócenia, poprawia bezpieczeństwo transmisji i umożliwia współdzielenie pasma przez wielu użytkowników. DSSS(direct sequence spread spectrium) - sekwencja bezpośrednia - w starym gps, mnożymy każdy bit informacji użytecznej przez bardzo szybką sekwencję zer i jedynek zwaną kodem rozpraszającym (Kod PN - pseudo Noise) pojedyńczy impuls to chip. sygnał zajmuje szerokie pasmo a odbiornik znający sekwencję może go odtworzyć. FHSS(Frequency hopping spread spectrum) - bloothoth i wojskowe radia. Sygnał zmienia pasma częstotliwości w paśmie zgodnie z peudolosową sekwencją. bloothoth z pasmem 2.4GHz jest podzielony na 79 kanały i zmienia kanał 1600 razy na sekundę
>
>> [!danger] ## 9.2. Częstotliwość pośrednia i częstotliwości lustrzane.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.3. Budowa i zasada działania analizatora widma.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.4. Podstawowe bloki funkcjonalne w technice mikrofalowej (sprzęgacze, dzielniki, transformatory).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 9.5. Porównanie symulacji obwodowych i polowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

>[!warning] # Parametry transmisji
>>[!danger] ## Laser
>>>[!question]- #### Jak dziala laser? (Frankowski)
>>>>[!quote] jak starczy czasu


>[!warning] # Przesył danych
>>[!danger] ## Modulacja, szum, warstwy Iso osi
>>>[!question]- #### proces przesyłu sygnału od nadajnika do odbiornika (Krzak)
>>>>[!quote] Aby sygnał mógł być wysłany należy go odpowiednio przygotować, więc:
>>>> Jeżeli nasz sygnał stanowi cyfrowe bajty gotowe to transmisji, należy odpowiednio skonfigurować czy dodajemy redundantne bity do transmisji. 
>>>> Kolejnym krokiem jest odpowiednia modulacja sygnału wedle określonej normy, trzeba wiedzieć jakie jest medium transmisyjne. Dajmy na to, że chcemy wysłać coś przez wifi, trzeba odpowiednio wybrać kanał transmisyjny, wybrać modulację -  modulacją mogłoby być QAM16, w paśmie 2.4GHz, trzeba więc odpowiednio zmodulować sygnał, przemnożyć go przez nośną w paśmie. 
>>>>
>>>> Gdy już antena nadaje, w przestrzeni sygnał sumuje się z szumem, zakłóceniami oraz jest tłumiony. Taki sygnał musi zostać odebrany, wykryty przez antenę, która wykona procesy odwrotne do nadawczych.


>[!warning] # Komponenty systemów radiowych
>>[!danger] ## Wzmacniacz mikrofaowy
>>>[!question]- #### Parametry liniowe i nieliniowe wzm. Mikrofalowych (Kołodziej)
>>>>[!quote] Odpowiedź


>[!warning] # Podstawowe parametry anyen
>>[!danger] ## Zysk, charakterystyk,a impednacja, polaryzacja
>>>[!question]- #### Parametry anten (Kołodziej)
>>>>[!quote] Odpowiedź jak starczyczasu

