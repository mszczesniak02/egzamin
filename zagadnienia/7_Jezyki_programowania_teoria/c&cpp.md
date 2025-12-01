# #Primitive_types
![[Pasted image 20251012110025.png]]

# #Operators && #operations
![[Pasted image 20251012110203.png]]
# #bit_manipulation:
## find in mask,
## flip bits, 
## reverse bits,
## check bit,
## set bit,
## reset bit
# #variable_initiations 
```c
#include <stdlib.h>
#include <stdio.h>
int main(){
printf("duoa");
return 0;
}
```


# #arrays && #dynamic_arrays && #memory(c && c++)
```cpp
#include <stdint.h>
#include <stdio.h>
#include <iostream>

#define MAX_NAME 64
typedef struct Data{
	char name[MAX_NAME];
	uint64_t id;
} data_t;

int main(void){
/* C style dynamic allocaction */
	size_t amount = 10;
	data_t* v = (data_t*)malloc(sizeof(data_t) * amount); 
	(v == NULL) ? printf("bad allocation.\n") : printf("V allocated.\n");
	
	/*C++ style allocation*/
	data_t* var = new data_t[amount];
	(var == nullptr) ? printf("bad allocation.\n") : printf("Var allocated.\n");
	
	free(v);
	delete[] var;
	printf("v & var de-allocated.\n");
return 0;
}
```

![[Pasted image 20251012111747.png]]

# #do_while


# #try-catch


# #functions


# #lambdas


# #callbacks


# #return_types


# #c_std #cpp_std


# #concurrent 


# #FreeRTOS


# #compilation


# #atomics


# #smart-pointers