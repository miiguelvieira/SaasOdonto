print("Voltando para o python, vamos relembrar alguns conceitos básicos.")
print("preciso lembrar da formula = Espaços iniciais: Altura - i e Caracteres: 2 * i - 1")

qtd = int(input("Digite a altura da pirâmide: "))

for i in range(1, qtd + 1):
    print(" " * (qtd - i) + "*" * (2 * i - 1))
