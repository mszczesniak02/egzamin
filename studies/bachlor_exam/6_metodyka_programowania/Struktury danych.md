---
Date: 14.10.2025
---
### Podstawowe typy danych: [[c&cpp#Primitive_types | Primitives w C&C++]], [[python#primitives | python]]

# #stack - stos
### Dane w strukturze #LIFO - Last-in, First-Out 
![[Pasted image 20251014111017.png|720]]

Rejestry w pamięci

# #heap - sterta
![[Pasted image 20251014111131.png|720]]

Struktury danych: tablice, listy, drzewa, stos, mapa  

---

# #circular_buffer [^1]

| ***CIRCULAR BUFFER*** [^2] - (circular queue, cyclic buffer, ring buffer)<br>Struktura służąca do buforowania strumieni danych, których <br>zapis i odczyt nie wymaga jednoczesnej operacji.<br>Pozwala to na "weegle room", gdy zapis jest szybszy niż zapis<br><br>Używane m.in do buforowania szeregowego wyjścia (UART), FIFO<br>zapiszę wejście, ale odczytam zaraz<br><br>WŁASNOŚCI:<br>WIELKOŚĆ BUFORA $N$,<br>BUFFER CAPACITY (LENGTH)<br>WRITE INDEX head<br>READ INDEX tail<br><br>MECHANIKA:<br>Zapisując przesuwamy wskaźnik zapisu w pamięci o jeden dalej<br>Gdy oczytujemy wartość, przesuwamy wskaźnik odczytu (jednocześnie<br>umożliwiając wpis nowych danych w miejsce odczytanej już danej)<br><br>Bufer pełny:  head +1 == tail<br>Bufor pusty:         head == tail<br><br>[^2]: <br> | ![[Pasted image 20251014111532.png]] |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                      |

```c
typedef struct ring{
	uint8_t *data;
	size_t head;
	size_t tail;
	size_t max;
} ring_t;

bool ring_is_full(ring_t * buff);
bool ring_is_empty(ring_t * buff);

ring_t * ring_init(uint8_t * data_buffer, size_t size); 
ring_t * ring_reset(ring_t * buff); // set buffer values to 0s.
ring_t * ring_deinit(ring_t * buff); // free memory

int ring_put_bit(ring_t * buff, uint8_t data);
int ring_get_bit(ring_t * buff, uint8_t* data);

int ring_put_stream(ring_t* buff, uint8_t* stream);
int ring_get_stream(ring_t* buff, uint8_t* stream);
```


# #queue - kolejka
| kolejka to struktura #FIFO , posiada metody **Enqueue** oraz *Dequeue*, które kolejno<br>służą do dodawania oraz odejmowania danych z kolejki<br><br>Może być implementowane za pomocą np. [[Struktury danych#circular_buffer [ 1] \| bufera kołowego]], czy [[Struktury danych#linked-list \| listy połączonej]].<br><br><br>Używane jako buffer do obsługi danych, <br>do schedulingu zadań<br><br>jest | ![[Pasted image 20251014114029.png]] |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
# Implementacja w C (todo)
> [!col]
> ```c
>typedef struct queue {
>	uint8_t *data;
>	uint8_t front;
>	uint8_t rear;
>	size_t size;
>} queue_t;
>
>queue_t queue_init(uint8_t *data, size_t size);
>void queue_deinit(queue_t *q);
>void queue_reset(queue_t *q);
>
>bool queue_is_empty(queue_t *q);
>bool queue_is_full(queue_t *q);
>
>int queue_enqueue(queue_t *q, uint8_t data);
>int queue_dequeue(queue_t *q, uint8_t *data);
>uint8_t queue_rear(queue_t *q);
>uint8_t queue_front(queue_t *q);
>```
> >[!col-md]
> > **reset** - empty the data buffer
> > 
> > **enqueue** - put data on the front, move elements right by 1
> >  
> > **dequeue** - pop the last element, move elements right by 1 
> > 
> > **front** - peek the first value in queue
> > 
> >   **rear** - peek the last value in queue


# #map - słownik [^2]


# #tree - drzewo [^3]

# #linked-list - [^4]

# #hash_table - [^5]

# #graph - [^6]

# #binary_tree - [^7]










[^1]: https://embeddedartistry.com/blog/2017/05/17/creating-a-circular-buffer-in-c-and-c/
	

[^2]: https://www.geeksforgeeks.org/dsa/introduction-to-map-data-structure/#what-is-map-data-structure

[^3]: https://www.geeksforgeeks.org/dsa/introduction-to-tree-data-structure/

[^4]: https://www.geeksforgeeks.org/dsa/linked-list-data-structure/

[^5]: https://en.wikipedia.org/wiki/Hash_table

[^6]: https://www.geeksforgeeks.org/dsa/graph-data-structure/

[^7]: https://www.geeksforgeeks.org/dsa/binary-tree-data-structure/
