print( "Hello World!" )

itens  = [1, 2, 2, 3, 1, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10, 10, 18, 19, 20, 20]
print(list(dict.fromkeys(itens)))

def sum1(a, b):
    return a + b    

result = sum1(5, 10)
print(f"O resultado da soma é: {result}")

def multiply(a, b):
    return a * b

resolut = multiply(5, 10)
print(f"O resultado da multiplicação é: {resolut}")