
---

# Spis treści:
- ALU
- Rejestry ogólne i specjalne
- Stos i podprogramy
- Kontroler przerwań i DMA
- Magistrale systemowe i peryferyjne
- Kontroler pamięci i zarządzanie dostepnem
- Rodzaje instrukcji maszynowych oraz tryby adresowania

---

## #ALU - arithmetic logic unit
Główna jednostka odpowiadająca za liczenie w systemach elektroniczych z jakimś liczeniem.

Odpowiada za operacje arytmetyczne, bitwise, intereger.

Dane wejściowe na których przeprowadzane są operację nazywają się ***operandem*** oraz operacja która ma być wykonana zwie się ***opcode'n***. [^1]
Status danych odpowiada flagom które towarzyszą operacji, np flaga C (carry-over)

![[Pasted image 20251115182457.png| 500]]

### Statusy:
- Carry-out - borrowing from subtraction
- Zero - all output is $0$
- Negative - if output is negative
- Overflow - if exceeds integer range 
- Parity - if even or odd number of bits (1's)

### Operacje bitwise:
- AND
- OR
- XOR
- One's complement - maska
### Operacje shiftowe:
- >>, << rotate, rotete through carry


## Architektura komputera:
- Von Neuman
- ![[Pasted image 20251115183422.png|350]]
- Harvard
 ![[Pasted image 20251115183406.png| 500]]



---

## Rejestry ogólne i specjalne [^2]




---



## #Stos oraz #podprogramy

Stos to pamięć pokroju #FIFO, 


---
## Kontroler przerwań i #DMA


---

## Magistrale systemowe i peryferyjne

---

## Kontroler pamięci i zarządzenie dostępme

---

## Rodzaje instrukcji maszynowych i tryby adresowania


---


[^1]: https://en.wikipedia.org/wiki/Arithmetic_logic_unit

[^2]: https://en.wikipedia.org/wiki/Processor_register
