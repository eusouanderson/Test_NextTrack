📦 Docker Compose: Serviço de Banco de Dados PostgreSQL
Este arquivo docker-compose.yml define um serviço chamado db, utilizando a imagem oficial do PostgreSQL na versão 15. Ele é utilizado como banco de dados para a aplicação Contact API.

🔧 Serviços
db
Responsável por executar o container do PostgreSQL.

yaml
Copiar
Editar
services:
db:
image: postgres:15
container_name: pg-contact-api
restart: always
environment:
POSTGRES_USER: usuario
POSTGRES_PASSWORD: senha123
POSTGRES_DB: contactdb
ports: - "5432:5432"
volumes: - pgdata:/var/lib/postgresql/data
📌 Explicação dos campos:
Campo Descrição
image Define a imagem Docker a ser usada. Neste caso, postgres:15, que é a imagem oficial do PostgreSQL versão 15.
container_name Nome fixo atribuído ao container (pg-contact-api). Isso facilita a referência manual ao container.
restart: always Garante que o container será reiniciado automaticamente caso falhe ou após reinicialização do sistema.
environment Define variáveis de ambiente utilizadas na configuração inicial do banco de dados:

- POSTGRES_USER: Nome do usuário administrador do banco (aqui: usuario).
- POSTGRES_PASSWORD: Senha do usuário (senha123).
- POSTGRES_DB: Nome do banco de dados a ser criado na inicialização (contactdb).
  ports Mapeia a porta interna 5432 do container para a porta 5432 do host, permitindo conexões externas.
  volumes Define um volume Docker nomeado (pgdata) para persistir os dados do banco de dados mesmo após o container ser removido.

💾 Volumes
yaml
Copiar
Editar
volumes:
pgdata:
Explicação:
O volume nomeado pgdata é montado no caminho /var/lib/postgresql/data dentro do container.

Essa é a pasta onde o PostgreSQL armazena seus dados.

Ao usar volumes, os dados persistem mesmo que o container seja removido ou recriado.

🚀 Como usar
Subir o container:
bash
Copiar
Editar
docker-compose up -d
Parar e remover os containers:
bash
Copiar
Editar
docker-compose down
Verificar logs:
bash
Copiar
Editar
docker logs -f pg-contact-api
✅ Requisitos
Docker

Docker Compose

📂 Estrutura esperada
arduino
Copiar
Editar
project-root/
├── docker-compose.yml
└── ... (outros arquivos do projeto)
🧪 Testando conexão
Você pode testar a conexão com um cliente PostgreSQL, como psql, DBeaver, ou TablePlus, usando os seguintes dados:

Campo Valor
Host localhost
Porta 5432
Banco contactdb
Usuário usuario
Senha senha123
