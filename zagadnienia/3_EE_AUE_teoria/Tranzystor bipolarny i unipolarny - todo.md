
---
>[!danger] # Spis Treści
> budowa, zasada działania, tryby pracy
>tranzystor aktywny, jako klucz
> parametry i chki
>modele mało i wielkosygnałowe
> wpływ temeratury, kompensacja, rezystancja termiczna

---


>[!warning] # Podstawowe rodzaje tranzystorów
>
>>[!important] ## BJT - bipolar junction transistor
>> ![[Pasted image 20251205132512.png|500]]
>> Emiter, baza i kolektor, mają różne domieszkowanie, największe E >> B >> K, przez to ich struktura nie jest symetryczna, nie mozna ich wsadzic na odwrót, bez zmiany bety w aktywnym trybie działania.
>> Tryb aktywny jest osiągany przy polaryzacji "forward" w kierunku przewodzenia dla $V_{BE}$ oraz zaporowodo dla $V_{BC}$. Ponieważ "forward" przepycha elektorny do bazy, one rekombinują z dziurami, ale przez domieszkowanie, jest ich więcej niż dziur w emiterze, powoduje to powstanie wielu wolnych elektornów. 
>>W bazie, polaryzacja zaporowa sprawia, że powstaje bariera zubożała potencjału, czyli dla nośników więkoszśćiowych stanowi to barierę, no ale ładunami więkoszśćiowymi dla pn są dziury, więc elektrony, po dotarciu do "ściany" zaporowej, są zabierane i przypieszane przez silne pole elektryczne, zabierając elektrony i przesyłajac je kolektora. W efekcie, prąd bazy pozwala 
>>![[Pasted image 20251205135313.png|500]]
>
>>[!important] ## FET - field effect transistor
>> 
>>>[!faq] ### JFET - struktura PN ale dziwna
>>>![[Pasted image 20251205151944.png|500]]
>>>
>>> Polaryzacja bramki zaporowa, gdy zmniejszamy napięcie, tranzystor coraz bardziej się zatyka, może działać jako rezystor sterowany napięciem, jest bardzo wrażliwy na elektrostatyke, ruchy ręką nad nim zmieniają mu rezystancję (dren źródło), natomiast bramka działa jak złącze dioda.
>>>
>>>![[Pasted image 20251205152202.png|500]]
>>>
>>
>>>[!faq] ### MOSFET - metal oxide semidoncutor FET
>>> Zasada działania
>>> - Brak napięcia - cutoff, odcięcie
>>> - napięcie $V_{GS}$ - tworzy kanał n po osiągnięciu $V_T$, tryb actywny/ nienasycony, ohmowy ( triode )
>>> - Zwiększając napięcie $V_DS$ - zaczyna płynąć prąd $I_D$,    ale przy zwiększaniu napięcia drenu, kanał zwiększa warstwę zaporową, kanał się pomniejsza, mimo że prad się zwiększa. Po zamknięciu się kanału, większe zmiany w $V_{DS}$ nie zmieniają (nie poprawiają ) płynącego prądu. Większego się nie da osiągnąć, mamy nasycenie, saturation. Tworząc duże pole między warstwą zaporową, nośniki mogą przyspieszyć i się przebić przez warstwę
>>> Budowa:
>>>![[Pasted image 20251205114743.png]]
>>> - źródło(Sourse), bramka(Gate), dren(Drain), podłoże(bulk / base)
>>> - szerokość i długość bramki jest kluczowa. Im większa szerokość, tym więcej równolegle prądu może płynąć, 
>>> - przepływ nośników zachodzi miedzy źródłem a drenem
>>> - budowa jest symetryczna, dren a źródło to umowna różnica, dziury do elektronów, czyli dla NFET - z drenu do źródła. dla PFET odwrotnie
>>> - Gdy przyłożymy napięcie do bramki, (baza uziemiona, ten sam potencjał zerowy ma $V_GS$, dodatnie napięcie na Gate przyciąga elektrony ( w NMOS), tworząc kanał N na "górze", między źródłem a drenem, czyli przekroczenie napięcia $V_{Threshold}$ ).
>>> -   ![[Pasted image 20251205132458.png|500]]

---

>[!info] # Konfiguracje:
>
>>[!bug] ## CE - common emiter (Wspólny Emiter)
>> Najpopularniejsza konfiguracja. Emiter jest dołączony do masy (lub wspólnego punktu odniesienia).
>> *   **Cechy:**
>>     *   Duże wzmocnienie napięciowe i prądowe (największe wzmocnienie mocy).
>>     *   **Odwraca fazę** sygnału wyjściowego o 180 stopni względem wejścia.
>>     *   Średnia rezystancja wejściowa i wyjściowa.
>> *   **Zastosowanie:**
>>     *   Uniwersalne wzmacniacze sygnałów.
>>     *   Klucze tranzystorowe (praca dwustanowa: włącz/wyłącz).
>
>>[!bug] ## CC - common collector (Wspólny Kolektor)
>> Znany jako **wtórnik emiterowy**. Kolektor jest zazwyczaj podłączony bezpośrednio do zasilania (dla sygnałów zmiennych jest to masa). Sygnał wyjściowy odbieramy z emitera.
>> *   **Cechy:**
>>     *   Wzmocnienie napięciowe bliskie jedności ($K_u \approx 1$).
>>     *   Duże wzmocnienie prądowe.
>>     *   **Bardzo duża rezystancja wejściowa** i **bardzo mała rezystancja wyjściowa**.
>>     *   Nie odwraca fazy.
>> *   **Zastosowanie:**
>>     *   **Bufor napięciowy** (separacja źródła sygnału od obciążenia).
>>     *   Dopasowanie impedancji (np. podłączenie mikrofonu o wysokiej impedancji do wzmacniacza o niskiej impedancji).
>
>>[!bug] ## CB - common base (Wspólna Baza)
>> Baza jest uziemiona dla sygnałów zmiennych. Sygnał podajemy na emiter, odbieramy z kolektora.
>> *   **Cechy:**
>>     *   Dobre właściwości częstotliwościowe (szerokie pasmo).
>>     *   Wzmocnienie prądowe mniejsze od 1 ($\alpha < 1$).
>>     *   Duże wzmocnienie napięciowe.
>>     *   Bardzo mała rezystancja wejściowa, duża wyjściowa.
>>     *   Nie odwraca fazy.
>> *   **Zastosowanie:**
>>     *   Wzmacniacze wielkiej częstotliwości (w.cz.).
>>     *   Układy wejściowe odbiorników radiowych.

---

>[!example] # Parametry i charakterystyki
>
>>[!quote] ## Charakterystyki statyczne (dla układu WE)
>> 1.  **Wejściowa ($I_B = f(V_{BE})$):** Wygląda jak charakterystyka diody. Prąd bazy zaczyna płynąć dopiero po przekroczeniu napięcia progowego (ok. 0.6-0.7V dla krzemu).
>> 2.  **Wyjściowa ($I_C = f(V_{CE})$ przy stałym $I_B$):**
>>     *   **Obszar nasycenia:** Dla małych $V_{CE}$ (ok. 0.2V), prąd rośnie liniowo. Tranzystor działa jak zamknięty klucz.
>>     *   **Obszar aktywny:** Prąd $I_C$ jest prawie stały (lekko rośnie) i zależy głównie od prądu bazy ($I_C = \beta I_B$). Tutaj tranzystor działa jak wzmacniacz.
>>     *   **Obszar odcięcia:** Gdy $I_B = 0$, prąd $I_C$ nie płynie (tranzystor wyłączony).
>>     *   **Obszar przebicia:** Przy zbyt dużym $V_{CE}$ następuje lawinowy wzrost prądu i zniszczenie elementu.
>
>>[!quote] ## Kluczowe parametry
>> *   **$\beta$ (hFE):** Współczynnik wzmocnienia prądowego w układzie WE ($I_C / I_B$). Zazwyczaj 100-300.
>> *   **$\alpha$:** Współczynnik wzmocnienia prądowego w układzie WB ($I_C / I_E$). Bliski 1 (np. 0.99). Związek: $\beta = \alpha / (1-\alpha)$.
>> *   **$f_T$ (Częstotliwość graniczna):** Częstotliwość, przy której wzmocnienie prądowe spada do 1.

---

>[!example] # Modele tranzystora
>
>>[!tip] ## Modele wielkosygnałowe (DC)
>> Służą do analizy punktu pracy (polaryzacji) i pracy jako klucz (włącz/wyłącz).
>> *   **Model Ebersa-Molla:** Opisuje tranzystor za pomocą dwóch diod i dwóch źródeł prądowych sterowanych prądem. Pozwala analizować wszystkie stany pracy (aktywny, nasycenie, odcięcie).
>> *   **Uproszczony model do obliczeń DC (tryb aktywny):**
>>     *   Złącze Baza-Emiter to dioda ($V_{BE} \approx 0.7V$).
>>     *   Złącze Kolektor-Baza to sterowane źródło prądowe ($I_C = \beta I_B$).
>
>>[!tip] ## Modele małosygnałowe (AC)
>> Służą do analizy wzmacniaczy dla małych sygnałów zmiennych (traktujemy punkt pracy jako stały).
>> *   **Model Hybrydowy $\pi$ (Giacoletto):** Najpopularniejszy dla średnich częstotliwości.
>>     *   **$r_\pi$ (rezystancja wejściowa):** Opór widziany od strony bazy. $r_\pi = \beta \cdot r_e = \beta \frac{V_T}{I_C}$.
>>     *   **$g_m$ (transkonduktancja):** Jak bardzo zmiana napięcia $V_{BE}$ wpływa na prąd $I_C$. $g_m = \frac{I_C}{V_T} \approx 40 \cdot I_C$.
>>     *   **$r_o$ (rezystancja wyjściowa):** Odpowiada za efekt Early'ego (lekkie nachylenie ch-ki wyjściowej).
>> *   **Model T:** Często używany w układach z Wtórnikiem Emiterowym lub Wspólną Bazą. Używa parametru $r_e$ (rezystancja emitera).

---

>[!example] # Wpływ temperatury i termika
>
>>[!failure] ## Wpływ temperatury na parametry
>> Tranzystory są bardzo wrażliwe na temperaturę. Wzrost temperatury powoduje:
>> 1.  **Spadek napięcia $V_{BE}$:** O ok. **-2.2 mV/°C**. Przy stałym napięciu na bazie, mniejsze wymagane $V_{BE}$ oznacza, że tranzystor "otwiera się bardziej" i płynie większy prąd.
>> 2.  **Wzrost współczynnika $\beta$:** Wzmocnienie rośnie z temperaturą.
>> 3.  **Wzrost prądu zerowego:** Prądy upływu rosną wykładniczo.
>>
>> **Zagrożenie - Ucieczka termiczna (Thermal Runaway):**
>> Wzrost temp -> Wzrost $I_C$ -> Wzrost mocy traconej ($P = U \cdot I$) -> Dalszy wzrost temp -> Dalszy wzrost $I_C$... Aż do spalenia elementu.
>
>>[!success] ## Kompensacja temperaturowa
>> Aby ustabilizować punkt pracy, stosuje się ujemne sprzężenie zwrotne:
>> *   **Rezystor w emiterze ($R_E$):** Najskuteczniejsza metoda. Jeśli $I_C$ rośnie (przez temperaturę), to rośnie spadek napięcia na $R_E$. To podnosi potencjał emitera, co zmniejsza napięcie $V_{BE}$ (bo $V_{BE} = V_B - V_E$). Mniejsze $V_{BE}$ przymyka tranzystor i stabilizuje prąd.
>> *   **Dioda kompensacyjna:** Włączenie diody w obwód polaryzacji bazy. Dioda ma taki sam współczynnik temperaturowy jak złącze B-E tranzystora, więc zmiany się znosem.
>
>>[!info] ## Rezystancja termiczna ($R_{th}$)
>> Parametr określający, jak trudno ciepłu uciec z wnętrza tranzystora (złącza) do otoczenia.
>> *   Wzór: $T_j = T_a + P \cdot R_{th(j-a)}$
>>     *   $T_j$: Temperatura złącza (max zazwyczaj 150°C lub 175°C).
>>     *   $T_a$: Temperatura otoczenia.
>>     *   $P$: Moc tracona w tranzystorze.
>>     *   $R_{th(j-a)}$: Rezystancja termiczna złącze-otoczenie (suma rezystancji złącze-obudowa i obudowa-radiator-otoczenie).
>> *   Im mniejsza rezystancja termiczna (np. duży radiator), tym chłodniejszy tranzystor przy tej samej mocy.

---

>[!abstract] # Kluczowe parametry małosygnałowe (BJT vs MOSFET)
>
>>[!example] ## Transkonduktancja ($g_m$)
>> Miara tego, jak zmiana napięcia sterującego wpływa na prąd wyjściowy. "Siła" tranzystora.
>> *   **BJT ($g_m = \frac{\partial I_C}{\partial V_{BE}}$):**
>>     *   $g_m = \frac{I_C}{V_T}$ (gdzie $V_T \approx 26mV$).
>>     *   Zależy liniowo od prądu polaryzacji $I_C$.
>>     *   Jest zazwyczaj **duża** (np. dla 1mA -> $g_m \approx 40mS$).
>> *   **MOSFET ($g_m = \frac{\partial I_D}{\partial V_{GS}}$):**
>>     *   $g_m = \sqrt{2 \mu C_{ox} \frac{W}{L} I_D} = \frac{2I_D}{V_{GS} - V_{th}}$.
>>     *   Zależy od pierwiastka z prądu $I_D$ (w nasyceniu).
>>     *   Jest zazwyczaj **mniejsza** niż w BJT przy tym samym prądzie.
>
>>[!example] ## Rezystancja wyjściowa ($r_o$)
>> Rezystancja dynamiczna widziana od strony wyjścia (Kolektora / Drenu). Wynika z niedoskonałości tranzystora.
>> *   **BJT (Efekt Early'ego):**
>>     *   $r_o = \frac{V_A}{I_C}$ (gdzie $V_A$ to napięcie Early'ego).
>>     *   Ogranicza maksymalne wzmocnienie jednego stopnia.
>> *   **MOSFET (Modulacja długości kanału - CLM):**
>>     *   $r_o = \frac{1}{\lambda I_D} \approx \frac{V_E L}{I_D}$.
>>     *   Zależy od długości kanału $L$ (im dłuższy kanał, tym większe $r_o$).
>
>>[!example] ## Rezystancja wejściowa
>> *   **BJT ($r_\pi$):**
>>     *   $r_\pi = \frac{\beta}{g_m} = \frac{\beta V_T}{I_C}$.
>>     *   Jest skończona (kilo-omy), co oznacza, że sterowanie pobiera prąd.
>> *   **MOSFET:**
>>     *   Dla niskich częstotliwości $R_{in} \approx \infty$ (izolowana bramka).
>>     *   Nie pobiera prądu sterującego (statycznie).
>
>>[!example] ## Wzmocnienie napięciowe własne (Intrinsic Gain)
>> Maksymalne wzmocnienie, jakie można uzyskać z jednego tranzystora (obciążonego idealnym źródłem prądowym).
>> *   $A_0 = g_m \cdot r_o$
>> *   Dla BJT: $A_0 = \frac{V_A}{V_T}$ (zazwyczaj 2000-5000 V/V).
>> *   Dla MOSFET: $A_0 = \frac{2}{\lambda (V_{GS}-V_{th})}$ (zazwyczaj niższe, 20-100 V/V). 




[^1]: razavi electronics tutorial lectures
