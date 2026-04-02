print("Voltando para o python, vamos relembrar alguns conceitos básicos.")
print("preciso lembrar da formula = Espaços iniciais: Altura - i e Caracteres: 2 * i - 1")

qtd = int(input("Digite a altura da pirâmide: "))

for i in range(1, qtd + 1):
    print(" " * (qtd - i) + "*" * (2 * i - 1))


print("primeiro ele printa ' ' Espaço vazio Vezes a altura - i que começa em 1, depois ele printa o ' * '  vezes 2 * i que ainda é 1 - 1 que é 0, depois ele volta para o começo do loop e printa ' ' vezes a altura - i que agora é 2, depois ele printa ' * ' vezes 2 * i que agora é 2 - 1 que é 1, e assim por diante até chegar na altura digitada.    ")
print("o que provavelmente seja o dobro do valor selecionado -1, ou seja, se eu digitar 5, ele vai printar 9 asteriscos na última linha, porque 2 * 5 - 1 é igual a 9.    ")