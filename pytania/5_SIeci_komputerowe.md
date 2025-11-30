> [!warning] # 1. Protokoły przewodowych sieci lokalnych (Ethernet, IEEE 802.3).
>> [!danger] ## 1.1. Zasada realizacji transmisji ramek Ethernet.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.2. Metoda dostępu do medium CSMA/CD.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.3. Wykrywanie i obsługa kolizji w sieci.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.4. Mechanizm back-off i jego znaczenie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 1.5. Rozwój Ethernetu: od 10 Mb/s do 1 Gb/s.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 2. Protokoły bezprzewodowych sieci lokalnych (Wi-Fi, IEEE 802.11).
>> [!danger] ## 2.1. Zasada realizacji transmisji z rezerwacją i bez rezerwacji kanału.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.2. Proces rywalizacji stacji o dostęp do medium.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.3. Funkcja koordynacji DCF (Distributed Coordination Function).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.4. Funkcja koordynacji PCF (Point Coordination Function).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 2.5. Standardy IEEE 802.11 a ewolucja Wi-Fi (a/b/g/n/ac/ax).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 3. Protokół IPv4.
>> [!danger] ## 3.1. Adresacja urządzeń i sieci w IPv4.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.2. Klasy adresowe i ich zastosowanie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.3. Maski sieci i obliczanie podsieci.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.4. Translacja adresów NAT i jej rola.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 3.5. VLSM (Variable Length Subnet Mask) i optymalizacja adresacji.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 4. Protokoły warstw wyższych w sieci Internet.
>> [!danger] ## 4.1. TCP – niezawodna transmisja i kontrola połączeń.
>>> [!question]- #### TCP i UDP porównanie
>>>> [!quote] **TCP** działa w warstwie transportowej modelu sieciowego. Jest to protokół połączeniowy („connection-oriented”) – wymaga zestawienia połączenia przed przesłaniem danych. Zapewnia
nadzór nad przesyłaniem danych: nadawca i odbiorca współpracują, by dane dotarły poprawnie.Zastosowania: tam, gdzie konieczne jest, by wszystkie dane dotarły i były we właściwej kolejności (poczta elektroniczna, transfer plików).**Zestawienie połączenia** – przed rozpoczęciem transmisji ustalana jest sesja, by nadawca i odbiorca byli zsynchronizowani.**Numery sekwencyjne** – segmenty danych są numerowane, co pozwala odbiorcy złożyć je we właściwej kolejności.**Potwierdzenia odbioru (ACK)** – odbiorca informuje nadawcę, które segmenty dotarły, nadawca może retransmitować utracone.**Kontrola przepływu** – nadawca dostosowuje tempo wysyłania danych do możliwości odbiorcy, by uniknąć jego przeciążenia.**Zakończenie połączenia** – po przesłaniu danych połączenie jest zamykane, by zwolnić zasoby.  **UDP (User Datagram Protocol)** to prosty protokół transportowy, używany w Internecie do przesyłania danych.W odróżnieniu od TCP, UDP jest bezpołączeniowy – nie ustala wcześniej połączenia między nadawcą a odbiorcą.Każdy pakiet (datagram) jest wysyłany niezależnie, bez potwierdzania dostarczenia.Nagłówek zawiera: port źródłowy i docelowy, informację o długości wraz z danymi oraz sumę kontrolną.UDP nie dba o kolejność pakietów ani ich ponowne wysłanie, jeśli zaginą - dzięki temu działa szybciej, ale kosztem niezawodności
>
>> [!danger] ## 4.2. UDP – prosty protokół bezpołączeniowy.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.3. DHCP – dynamiczne przydzielanie adresów IP.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 4.4. DNS – system nazw domenowych.
>>> [!question]- #### DNS - czym jest protokół, jak działa, zapytania do serwerów DNS, rekurencja
>>>> [!quote] jest fundament działania Internetu. **DNS (Domain Name System)** to rozproszona, hierarchiczna baza danych, która mapuje czytelne dla człowieka nazwy domenowe (np. `google.pl`) na adresy IP (np. `142.250.185.195`), zrozumiałe dla maszyn.  Protokół: działa w warstwie aplikacji TCP/IP, zwykle na porcie UDP 53 (czasem TCP 53). 1Użytkownik wpisuje adres domeny w przeglądarce.2Resolver DNS (np. serwer ISP) otrzymuje zapytanie.3Jeśli nie zna odpowiedzi, kontaktuje się z serwerami:4Root DNS → wskazuje serwery TLD (np. .com).5TLD DNS → wskazuje serwery domeny drugiego poziomu.6Autorytatywny DNS → zwraca ostateczny adres IP.7Resolver przekazuje wynik klientowi i zapisuje go w cache. **Zapytanie Rekurencyjne (Recursive Query):** Klient wymusza na serwerze DNS (Resolwerze) uzyskanie ostatecznej odpowiedzi. Serwer ten komunikuje się z innymi serwerami w imieniu klienta, a następnie zwraca kompletny wynik lub informację o błędzie (np. `NXDOMAIN`). Obciążenie procesem rozwiązywania spoczywa na serwerze. **Zapytanie Iteracyjne (Iterative Query):** Klient żąda od serwera najlepszej odpowiedzi, jaką ten aktualnie posiada. Jeśli serwer nie zna ostatecznego adresu IP, zwraca **referencję (Referral)** – listę adresów serwerów nazw (NS) dla domeny niższego poziomu (bliższej poszukiwanej nazwie). Klient (w tym przypadku Resolwer Rekurencyjny działający jako klient wobec innych serwerów) musi samodzielnie odpytać wskazane serwery.
>
>> [!danger] ## 4.5. Różnice i zastosowania TCP i UDP w praktyce.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 5. Urządzenia w sieciach komputerowych: switche i rutery.
>> [!danger] ## 5.1. Zasada działania switcha Ethernet.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.2. VLAN – segmentacja sieci logicznej.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.3. Protokół STP (Spanning Tree Protocol).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.4. Zasada działania rutera i rola w routingu.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 5.5. Różnice między przełącznikiem a routerem.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 6. Protokoły routingu.
>> [!danger] ## 6.1. Routing statyczny – konfiguracja i zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.2. Routing dynamiczny – podstawy i znaczenie.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.3. Protokół RIP – algorytm wektora odległości.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.4. Protokół EIGRP – hybrydowy mechanizm routingu.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 6.5. Protokół OSPF – algorytm stanu łącza i hierarchia obszarów.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 7. Okablowanie strukturalne.
>> [!danger] ## 7.1. Elementy składowe systemu okablowania strukturalnego (gniazda, patch panele, krosy).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.2. Kategorie kabli miedzianych (Cat5e, Cat6, Cat6a, Cat7, Cat8).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.3. Okablowanie światłowodowe – rodzaje włókien i zastosowania.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 7.4. Standardy okablowania (TIA/EIA-568, ISO/IEC 11801).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź

> [!warning] # 8. Protokół IPv6.
>> [!danger] ## 8.1. Struktura adresu IPv6 i zapis w postaci skróconej.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.2. Typy adresów IPv6 (unicast, multicast, anycast).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.3. Mechanizmy autokonfiguracji (SLAAC, DHCPv6).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.4. Nagłówek IPv6 i różnice względem IPv4.
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
>
>> [!danger] ## 8.5. Przejścia i współdziałanie IPv4/IPv6 (dual stack, tunneling, translacja).
>>> [!question]- #### Pytanie
>>>> [!quote] Odpowiedź
