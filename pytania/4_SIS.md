> [!warning] # 1. Podstawy transmisji danych.
>> [!danger] ## 1.1. Transmisja synchroniczna – zegar, ramkowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Transmisja asynchroniczna – bity start/stop, ramka.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Odtwarzanie zegara – wyodrębnianie sygnału zegarowego z przesyłanych danych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Kodowanie kanałowe / złamanie kodowe – wykrywanie i korekcja błędów, redundancja, Bit stuffing – wstrzykiwanie bitów kontrolnych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.5. BER (Bit Error Rate) – wskaźnik jakości, niezawodność, wpływ zakłóceń.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.6. Transmisja różnicowa – z, odporność na zakłócenia.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Protokoły komunikacji międzyukładowej.
>> [!danger] ## 2.1. UART – transmisja szeregowa, prostota, niski koszt.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.2. SPI – master–slave, duża szybkość, wiele linii.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. I2C – dwie linie, adresowanie urządzeń, niska prędkość.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.4. CAN – odporność na zakłócenia, priorytety, motoryzacja.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.5. USB – host–device, plug & play, zasilanie urządzeń.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Siedmiowarstwowy model ISO/OSI.
>>
>>>[!question]- #### ISO/OSI (zajebiste pytanie takie nie za precyzyjne)
>>>>[!quote] 1warstwa fizyczna - przesyła bity 0 i 1 przez medium np ethernet lub rs232, 2warstwa łącza danych - zapewnia bezbłędną transmisje ramek, 3sieciowa - adresowanie, określa optymalne ścieżki przez sieć np IP, 4ICMP, transportowa - zapewnia niezawodną komunikację między aplikacjami i segmentuje dane/kontroluje przepływ np TCP UDP, 5Sesji Zarządzanie nawiązywaniem utrzymywaniem i kończeniem sesji np logowanie do serwera zdalnego, zdalne wywoływanie procedur(remote procedure call), 6prezentacji - konwersja danych między różnymi formatami, szyfrowanie danych i kompresja np JPEG,MPEG,ASCII , 7Aplikacji - zapewnia interfejs między użytkownikiem a siecią i komunikacja między aplikacjami np HTTP,FTP,DNS
>
>> [!danger] ## 3.1. Warstwa fizyczna – sygnały, media transmisyjne, standardy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Warstwa łącza danych – ramki, MAC, adresowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Warstwa sieciowa – trasowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.4. Warstwa transportowa – kontrola błędów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.5. Warstwy wyższe – sesja, prezentacja, aplikacja.
>>> [!question]- #### Model ISO/OSI funkcje warstw, enkapsulacja danych, NAS w LTE
>>>> [!quote] Model ISO opisywałem wcześniej. Enkapsulacja danych to mechanizm umieszczenia jednostki danych z wyżej strefy w polu danych jednostki niższej warstywy, Polega na obudowywaniu danych z warstwy wyższej nagłówkami warstwy niższej. (jak rosyjka matrioszka cnie) W L4 dodaje strumień bajtów(HTTP), dzieli go na kawałki i dodaje nagłówek TCP(porty) to jest segment, L3(IP)traktuje cały pakiet TCP jako 'dane' dokleja nagłowek IP to jest pakiet, L2 (Ethernet, LTE MAC) traktuje cały pakiet IP jako dane dokleja nagłówek MAC i sume kontrolną i to jest ramka, L1 fizycznie zmienia ramkę na sygnał radiowy lub elektryczny. Warstwa niższa nie rozumie danych warstwy wyżej. NAS(Non Acces Stratum) w LTE - Najwyższa warstwa płaszczyzny sterowania w protokole LTE, która działa bezpośrednio między telefonem a rdzeniem sieci, zarządza mobilnością, sesją i bezpieczeństwem. Przekazuje wiadomości przez warstwę RRC(Radio resourfce control) ale sam nie zajmuije się radiowym przenoszeniem danych

> [!warning] # 4. Sygnalizacja w systemach telekomunikacyjnych.
>> [!danger] ## 4.1. Synchronizacja i sygnalizacja w sieciach. Modulacja impulsowo-kodowa.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.2. VoIP: SIP, H.323.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. Tryb połączeniowy, tryb bezpołączeniowy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Sieci szerokopasmowe.
>> [!danger] ## 5.1. Architektura, przepustowość.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. Klasy ruchu, usługi multimedialne z QoS.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. IP/MPLS – standardowe technologie transportowe.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Dostępowe technologie szerokopasmowe (last mile) xDSL, GPON.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.5. Sieci optyczne w standardzie OTN.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Sieci komórkowe.
>> [!danger] ## 6.1. Architektura, podział pasma.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Generacje sieci.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Technik wielodostępu i współdzielenia zasobów radiowych.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Sieci optyczne.
>> [!danger] ## 7.1. Światłowód – całkowite wewnętrzne odbicie, pasmo, zasięg.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Transmisja jednomodowa a wielomodowa.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. WDM (Wavelength Division Multiplexing).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.4. Elementy sieci – nadajnik (laser/LED), wzmacniacze.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
