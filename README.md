# Cadastro de Carro

**RF** => Requisitos Funcionais
[] Deve ser possível cadastrar um novo carro.
[] Deve ser possível listar todas as categorias.

**RNF** => Requisitos não Funcionais
[]

**RN** => Regras de negócios
[] Não deve ser possível cadastrar um carro com uma placa já existente.
[] Não deve ser possível alterar a placa de um carro já cadastrado.
[] O carro deve ser cadastrado, por padrão com disponibilidade.
[] O usuário responsável pelo cadastro deve ser um usuário administrador. 

# Listagem de Carro

**RF** => Requisitos Funcionais
[] Deve ser possível listar todos os carros disponíveis.
[] Deve ser Possível listar todos os carros pelo nome da categoria.
[] Deve ser Possível listar todos os carros pelo nome da marca.
[] Deve ser Possível listar todos os carros pelo nome da carro.

**RNF** => Requisitos não Funcionais
[]

**RN** => Regras de negócios
[] O usuário não precisar esta logado no sistema.
[] Não deve ser possível alterar a placa de um carro já cadastrado.

# Cadastro de especificações no carro

# Cadastro de imagens do carro

**RF** => Requisitos Funcionais
[] Deve ser possível cadastrar a imagem do carro.
[] Deve ser possível lista todos os carros.

**RNF** => Requisitos não Funcionais
[] Utilizar o moulter para upload dos arquivos

**RN** => Regras de negócios
[] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de agendamento do alugel carro

**RF** => Requisitos Funcionais
[] Deve ser possível cadastrar um alugel.
[] Deve ser possível lista todos os alugel.

**RNF** => Requisitos não Funcionais
[] Utilizar o moulter para upload dos arquivos

**RN** => Regras de negócios
[] o aluguel deve ter uma duração de 24 horas.
[] O usuário deve poder cadastrar un novo alugel caso já exista um aberto para o mesmo usuário.
[] O usuário deve poder cadastrar un novo alugel caso já exista um aberto para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.