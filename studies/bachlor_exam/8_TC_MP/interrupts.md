
---
# Spis Treści

Kontroler przerwań (NVIC)
Tablica wektorów przerwań
Procedury obsługi przerwań (ISR)
Priorytety przerwań i ich hierarchia
Stos procesora w obsłudze przerwań
Mechanizmy maskowania i obsługi wyjątków [^1]

---

## #NVIC - Nested Vectored Interrupt Controller
NVIC to struktura przechowywująca przerwania oraz ich poziom priorytetu. Można ją edytować, co pozwala na tworzenie specjalnych przerwań oraz umożliwenia ich obługi, w dodatku nadania odpowiedniego priotytetu
![[Pasted image 20251115141226.png]]

---
## Tablica wektorów przerwań [^2] [^3]

Wektor w pamięci który zaczyna się na zerowum adresie danych. Posiada on zestaw instrukcji do których program skacze przy krykryciu przerwania.


---

## Procedury obsługi przerwań ( #ISR )
ISR to interrupt service routine, czyli funkcja callback, która jest wykonywana przez wykrycie odpowiedniej flagi w rejestrze przerwań. 
![[Pasted image 20251115142021.png|720]]

---

## Priorytety przerwań i ich hierarchia

Im niższy status priotytetu tym ważniejszy on jest. Jeżeli mniej ważny zostanie przerwny przez ważniejszy, to ważniejszy zostanie wykonany do końca, potem wróci on do poprzedniego Interrupt'a (Wskaźnik na stos przechowywuje ostatnie miejsce do którego należy powrócić)

Jeżeli o tym samym prorutecie, najpierw skończy ten, który zaczął, potem przejdzie do innego przerwania
![[Pasted image 20251115135846.png|720]]
Systemowe oraz takie bez maski mają priorytet ujemny, który oznacza wykonanie przez wszystkimi tymi "własnymi" interruptami


---

## #Stos procesora w obsłudze przerwań
![[Pasted image 20251115140215.png]]

Stos podczas normalnej pracy, gdy następuje przerwanie zapisuje ówczesny stan wykonanego zadania, następnie przechodzi do obsługi przewrania, odpowienio dokłada na stos instrukcję którą należy wykonać do obsługi przerwania, nastepnie ustawia odpowienie flagi sugerujace koniec wykonywania obłsugi, nastepnie powraca do zadania sprzed przerwania.


---


## Mechanizmy maskowania i obsługi wyjątków
Zamaskowane przerwanie to takie, które może zostać zignorowane poprzez ustawienie maski rejestru ( #IMR), pozwalając tym samym na tymczasowe odrzucenie sygnału przerwania.

Można to wykorzustać np. do odrzucenia innego przerwania o tym innym priorytecie podczas gdy wykonujemy operację odczytu danych, i nie chcemy by zostało to przerwane.



---

[^1]: https://www.sciencedirect.com/topics/computer-science/maskable-interrupt

[^2]: https://www.sciencedirect.com/topics/engineering/interrupt-vector-table

[^3]: https://developer.arm.com/documentation/den0013/0400/Exception-Handling/Exception-priorities/The-Vector-table
