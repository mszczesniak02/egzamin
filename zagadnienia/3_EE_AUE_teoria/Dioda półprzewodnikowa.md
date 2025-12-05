
>[!danger] # Spis treści
>- złącze PN
>- przepływ prądu przez złącze pn dla różnych polaryzacji
>- parametry i chki różnych diod
>- wpływ temperatury
---

---

>[!bug] # Złącze PN 
>>[!info] Złącze PN to połaczenie dwóch półprzewodników o różnych typach przewodnictwa ( nośnik ***p:dziursko***, ***n: elektron*** ) 
>>![[Pasted image 20251204170011.png|500]]
> 
> Atom ma określoną ilość elektronów, można je odpowienio wybić, następnie taki atom ma ich mniej, w ich miejsce można dodać domieszki, która odpowiednio wchodzi w te elementy
>
>
>>[!faq] # Domieszkowanie
>> Domieszkowanie to wprowadzanie obcych jonów/atomów do sieci krystalicznej metalu lub półprzewodnika. Stosowane w celu modyfikacji właściwości materiału. Są dwa rodzaje: typ n oraz typ p:
>> - donor(owe) () - atomy domieszki mają wyższą wartośc niż atom podstawowy, powstaje w paśmie energii wzbronionej pasmo donorowe, lepsze przewodnictwo, więcej elektronów chce oddać swój elektron  
>> - akceptor(owe) (p) - atomy  domieszki mają mniejszą ilość elektronów w atomie, więc powstaje pasmo poniżej dna pasma przewodnictwa
>>
>>![[Pasted image 20251204173623.png|500]]
>>
>> W przypadku domieszkowania atomem forsoru (Ph) - w sturkturę krystaliczną ( w środek) wprowadzony jest atom fosforu ( 5 elektronów walencyjnych), tworzy 8 połączeń z krzemem, ma jeden elektron wolny. Forsfor to typ N ( elektronowe)
>>
>> W przypadku domieszkowania atomem boron (B), ma tylko 3 elektrony, 4tech sąsiadów, więc struktura jest niepełna, boron chcę wziąć elektrona, by dokończyć więzy kowalencyjne. Jedyne co w strukturze może dać mu ten jeden elektron, to krzem który oddał jeden elektron, więc cała struktura staje się "niedojedzona"
>>
>
>>[!question] # Struktura atomowa - ilość połączeń między atomami jest ustalona, krzem Si ma 4 samemu ( elektrony walencyjne) (Si has 4 valence electrons), ale będąc w strukturze ma wspólne 8 elektronów z sąsiadami (wiązania kowalencyjne) (it can make covalent bonds) 
>>![[Pasted image 20251204171052.png]]
>> Te elektrony mogą zyskać tyle energii, by uciec z "orbit?", raczej wiązań kowalnecyjnych, stając się wolnym elektornem (n-, jest ujemnie naładowany), powstaje dziura w strukturze, atom staje się "net positive". Ilość wolnych elektronów jest mała, stąd półprzewodnik, metal ma dużo, przewodzi prad

---
>[!bug] # złącze PN - (p positive - nośnik więkoszościowy dziur, n - negative nośnik większościowy elektronów )
> Połączenie dwóch różnych typów materiałów, przeciwnie naładowanych spowoduje #dyfuzję, czyli ruch elektronów i dziur w celu zbalansowania z wysokich do niskich regionów koncentracji nośników
> ![[Pasted image 20251016154416.png|720]]
>>[!important]  # Polaryzacje złącza PN:
>>>[!faq] ## Brak polaryzacji 
>>> - w stanie gdy nie ma przyłożonego żadnego pola elektrycznego, nośniki bliskie złączenia przemieszczają się (***dyfundują***), co jest spowodowane różnicą koncentracji nośników - elektrony idą do struktury p, dziury idą do struktiury n, dochodzi do ***rekombinacji***, czyli "wyzerowanie" się braku elektrona z elektronem, w efekcie postaje struktura bez wolnych elektronów, nośniki się unieruchomiają. 
>>>
>>> Rekombinacja powoduje redukcję nośników po obu stronach struktury PN, co powoduje pozostawienie odsłoniętych jonów domieszek, a te jony tworzą pole elektryczne, które zapobiega dalszej dyfucji, przez co powstaje wartstwa zaporowa / zubożała.
>>> Przepływ nośników większościowych to prąd dyfuzyjny, natomiast prąd unoszenia, płynący w odwrotnym kierunku to ruch nośników mniejszościowych, ale za to b.małych.
>>> 
>>> Pole elektryczne stanowi barierę potencjału, którego wartość jest ustalana przez koncentrację domieszek i temperatury, napięcie w krzemie to $0.7V$
>>
>>>[!faq] # Polaryzacja zaporowa (reversed)($V_{+}~do~typu~N,~V_{+}~do~typu~P$)
>>> - Nośniki ujemne oraz dodatnie ze złącza są "wyciągane" przez napięcie zewnętrzne i pozostawiają  jony **odsłonięte**, które zwiększają warstwę zaporową.
>>> - Jeżeli zbyt duże napięcie zostanie podane na wyprowadzenie złącza, nastąpi **przebicie zenera **lub **przebicie lawinowe**, spowodowane zniszczeniem warstwy zaporowej. O ile nie nastąpi przegrzanie, to jest okej.
>>> - Pojemność złącza jest reprezentowana przez $C_{j}$, szerokość tego obszaru zależy od napięcia zewnętrznego, przez co może być regulowana napięciem w diodach pojemnościowych $$C_J = \frac{C_{j0}}{ (1 - \frac{U}{\phi_B} )^n}$$, gdzie $C_{j0}$ - pojemność przy zerowym napięcu, $/\phi_B$ - wartość bariery potencjału, n - wartośc zależna od rodzaju złącza. Istnieje również pojemność dyfuzyjna zwiazana z nośnikami mniejszosciowymi
>>
>>>[!faq] # Polaryzacja w kierunku przewodzenia (forward) ($V_{+}~do~typu~N,~V_{+}~do~typu~P$)
>>> - bariera potencjału jest zmiejszana o wartość zewnętrznego napięciu U, zmniejsza również szerokość obszaru zaporowego. Gdy U przekroczy $U_D=0.7~V$, obszar zaporowy znika i prąd dyfuzyjny płynie. Opisuje to równanie Shockley'a: $$I = I_{sat} \cdot (e^{\frac{qV}{kT}} - 1) = I_{sat} (e^{/frac{U}{U_T}} - 1)$$, gdzie U_T to 26mV dla krzemu, k to stała boltzmana

---
>[!bug] # Przebicia
>>[!quote] Przebicie Zenera - tunelowanie
>> występuje gdy mamy silne domieszkowanie, czyli mamy dużo upakowanych jonów, czyli warstwa zaporowa jest wąska. Pole elektryczne w wąskiej warstwie wyrywa elektrony z sąsiednik wiązań kowalencyjnych, następuje tunelowanie kwantowe, teleporting na drugą storne
>
>>[!warning] Przebicie lawinowe - (avalanche) jonizacja
>> Gdy wolny elektron wpada w warstwe zaporową, jest przyspieszany, zyskuje energie kinetyczną, uderza w sieć krystaliczną, wybija z innego atomu elektron, potem każdy kolejny wybija kolejny
---

>[!important] # Rodzaje diodów
>>[!quote] ## LED - light-emitting diode, **elektrolimunesencja**
>> - świeci gdy płynie przez nią prąd, w wyniku rekombinacji nośników wydzielane są fotony. Kolor diody jest zależny od poziomu energii wymaganej do przejścia z pasma walencyjnego do przewodzenia.
>> Białe światło to wiele kolorów w w jednym lub wykonanie z pomocą fosforu, który "przenosi" światło niebieskie emituje białe
>
>>[!quote] ## Zenera (Stabilizacyjna)
>> dioda służąca jako stabilizator napięcia, charakteryzuje sie określonym napięciem przebicia, po którego osiągnięciu przepuszcz prąd. Przebicie występuje jako przebicie Zenera, oraz przebicie lawinowe. W zależności od potrzeb, im bardziej domieszkowany, tym mniejsza warstwa zaporowa, bo więcej jonów przez domieszkowanie.
>
>>[!quote] ## Prostownicza
>> stosowana do prostowania prądu w zmiennych układach zasilania, najwazniejsze parametry takiej diody to prąd maksymalny, maksymalne napięcie wsteczne, raczej diody krzemowe, bo germanowa mają niższą temperaturę złącza i niższy dopuszczalny natężenie prądu. 
>
>>[!quote] ## Shotky
>> dioda której połączenie stanowi metal i półprzewodnik. Cechuje się niższym napięciem wstecznym, tym którego $V_T$ dla krzemu wynosi 0.7V, dla germanowej wynosi 0.15/45 V, pozwala na szybsze przełączanie.
>> - Działanie: nie ma złącza PN, ma barierę Schotkiego, nośnikami większościowymi, złącze ma bardzo małą pojemność ( mała ilość ładungo gromadzona )
>> -- taka dioda ma dużo większy prąd wsteczny (względem krzemowej), w dodatku rośnie szybko przy zmianach temperatury. Ma również niskie napięcie wsteczne (napięcie w pracy zaporowej które pozwala zeby nie płynął prąd )
>> - Zastosowanie w: Sample&Hold, w układach PV ( niska energia do włączenia się, mało ciepła, zapobiega rozładowaniu baterri przez panele w nocy), może zapobiegać nasyceniom tranzystorów (ogólnie "voltage Clamping")
>
>>[!quote] ## pojemnościowa - dioda która pozwala sterować pojemnością za pomocą napięcia poprzez zwiększanie warstwy zaporowej
>
>>[!quote] ## fotodioda - dioda która może pracować jako fotodetektor, gdy na powierzchnię złączna pm fotony padają, są absorbowane, po czym elektron jest przenoszony do pasma przewodnictwa, działa jak zwykład dioda.
>
>>[!quote] ## tunelowa
> dioda ze specyficzną chką, posiada ujemną rezystancję dynamiczną, związaną z efektem tunelowania, pozwala na szybkie przełączanie, nawet GHz.

---


>[!bug] # Temperatura 
> - Wzrost temperatury # Wzór Shocklay'a $$ I_{SAT} \cdot (e^{\frac{U}{U_T}}  -1),~~ U_T = \frac{kT}{q} $$, k - stała boltzmana, T - temp w kelwinach, q ładunek elementarny.
> - Wzrost temperatury w diodzie krzemowej odpowiada zmniejszeniu się rezystancji, co powoduje łatwiej płynący prąd
> - spadek rezystancji przy wzroście temperatury jest spowodowany energią którą dostarcza ciepło, zysk energii pozwala elektronom wybić się z pasma walencyjnego do pasma przewodnictwa łatwiem, tworząc parę elektron-dziura, wraz z ich powstaniem, zwiększa się ilość nośników, co odpowiada   zmianie potencjału złącza $V_{bi} = \frac{kT}{q} ln(\frac{N_A N_D}{n_i^2})$, n_i - koncentracja par elektron-dziura

---
[^1]: https://en.wikipedia.org/wiki/P%E2%80%93n_junction

[^2]: https://en.wikipedia.org/wiki/P%E2%80%93n_junction
