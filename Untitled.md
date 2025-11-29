Dzień dobry Panie Profesorze,
wedle Pana zaleceń, zwiększyłem ilość danych treningowych do 11k oraz dodałem augmentacje i  dodałem ensemble również do klasyfikacji.

Początkowo wybrałem modele które działają w oparciu o różne techniki, 
dla segmentacji wybrałem unet(encoder resnet34 ) i segformer (encoder mit_b0), testowałem również Yolo, które Pan polecał, lepsze metryki uzyskuję w połączeniu yolo i unet.
Ensemble realizuje jako średnią arytmetyczną predykcji obu modeli.

Dla klasyfikacji podzieliłem dane algorytmem który zlicza z maski ilość px pęknięć i na podstawie % zawartości pęknięć do całego obrazu przypisuję mu klasę (brak pęknięcia, b.cienkie, cienkie, średnie, duże). Histogram pokazywał mi niezbalansowanie klas, najwięcej było cienkich, stąd próbowałem ustabilizować to dodając augmentacje dla mniej licznych klas oraz wybrałem funkcję start z wagami CrossEntropyLoss. 
Jako modele klasyfikacji wybrałem EfficientNet (b0) i convnext, poźniej porównam je jeszcze z Yolo, wybiorę lepszą kombinację do ensemble.

Miałem problem z uzyskaniem lepszych wyników dla segmentacji niż IoU>50%, ale z tego co przetestowałem to wina danych treningowych, bo pomyłkowo dodałem również dataset pęknięć w drogach i innych rzeczach. Gdy testowałem model na pojedynczym datasetcie to byłem w stanie uzyskać powyżej 70% IoU. 

Dla  modeli segmentacji przeprowadziłem grid search w celu dopasowania learning rate i batch size, dodatkowo wzorując się na pracach naukowych testowałem łączenie różnych funkcji strat, dla segmentacji najlepsze wydaje się być focal+dice loss oraz sam dice loss, jako że dane pęknięcia są mniejszą częścią maski niż jej tło. 

Przedstawię konkrente wykresy i dane do porównania wyszkolonych modeli w przyszłym tygodniu, bo jeszcze nie zrobiłem tuningu parametrów dla klasyfikacji.





Dzień dobry Panie Profesorze,

wedle Pana zaleceń zwiększyłem liczbę danych treningowych do 11k, dodałem augmentację oraz wdrożyłem ensemble również do klasyfikacji.

Początkowo wybrałem modele, które działają w oparciu o różne techniki. Dla segmentacji wybrałem U-Net (encoder ResNet34) i SegFormer (encoder mit_b0). Testowałem również YOLO, które Pan polecał , lepsze metryki uzyskuję w połączeniu YOLO i U-Net. Ensemble realizuję jako średnią arytmetyczną predykcji obu modeli.

Dla klasyfikacji podzieliłem dane algorytmem, który zlicza z maski liczbę pikseli pęknięć i na podstawie % zawartości pęknięć w całym obrazie przypisuje mu klasę (brak pęknięcia, b. cienkie, cienkie, średnie, duże). Histogram pokazywał niezbalansowanie klas (najwięcej było cienkich), stąd próbowałem ustabilizować to dodając augmentację dla mniej licznych klas oraz wybrałem funkcję strat z wagami CrossEntropyLoss. Jako modele klasyfikacji wybrałem EfficientNet (b0) i ConvNeXt. Później porównam je jeszcze z YOLO i wybiorę lepszą kombinację do ensemble.

Miałem problem z uzyskaniem dla segmentacji wyników lepszych niż IoU > 50%, ale z tego, co przetestowałem, to wina danych treningowych, bo pomyłkowo dodałem również dataset pęknięć w drogach i innych obiektach. Gdy testowałem model na pojedynczym datasecie, byłem w stanie uzyskać powyżej 70% IoU.

Dla modeli segmentacji przeprowadziłem grid search w celu dopasowania learning rate i batch size. Dodatkowo, wzorując się na pracach naukowych, testowałem łączenie różnych funkcji strat. Dla segmentacji najlepsze wydają się być Focal + Dice Loss oraz sam Dice Loss, jako że pęknięcia są mniejszą częścią maski niż tło.

Konkretne wykresy i dane do porównania wyszkolonych modeli przedstawię w przyszłym tygodniu, bo jeszcze nie zrobiłem tuningu parametrów dla klasyfikacji.

Z poważeniem,
Mateusz Szczęśniak