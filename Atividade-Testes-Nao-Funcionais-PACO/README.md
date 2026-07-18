# 📚 Atividade Avaliativa – Checklist de Testes Não Funcionais

## Sistema Fictício: Plataforma de Agendamento de Consultas (PACO)

A PACO é uma plataforma web destinada ao agendamento e gerenciamento de consultas médicas.

## ✅ Checklist de Testes Não Funcionais

| Categoria              | O que será verificado                                                                       | Risco Associado                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **⚡ Performance**      | Verificar se o sistema suporta múltiplos usuários simultaneamente durante horários de pico. | Lentidão, indisponibilidade do sistema e insatisfação dos usuários.           |
| **⚡ Performance**      | Validar o tempo de carregamento das páginas de login, busca de médicos e agendamento.       | Tempo excessivo de resposta pode levar ao abandono do sistema.                |
| **⚡ Performance**      | Testar o comportamento do sistema ao realizar diversos agendamentos simultâneos.            | Possibilidade de falhas no registro de consultas e inconsistência de dados.   |
| **⚡ Performance**      | Avaliar o consumo de recursos (CPU e memória) durante o uso intenso.                        | Queda de desempenho e interrupção dos serviços.                               |
| **🔒 Segurança**       | Verificar se apenas usuários autenticados conseguem agendar consultas.                      | Acesso indevido às funcionalidades do sistema.                                |
| **🔒 Segurança**       | Validar a proteção dos dados pessoais dos usuários.                                         | Vazamento de informações sensíveis e problemas legais.                        |
| **🔒 Segurança**       | Testar políticas de senha e autenticação.                                                   | Contas comprometidas por senhas fracas.                                       |
| **🔒 Segurança**       | Verificar se sessões expiradas impedem acessos não autorizados.                             | Uso indevido da conta por terceiros.                                          |
| **🔒 Segurança**       | Avaliar possíveis vulnerabilidades (SQL Injection e XSS).                                   | Comprometimento da aplicação e do banco de dados.                             |
| **🎨 Usabilidade**     | Verificar se a interface é intuitiva para realizar agendamentos.                            | Dificuldade de uso e aumento de erros dos usuários.                           |
| **🎨 Usabilidade**     | Validar a navegação em desktop, tablet e celular.                                           | Experiência inconsistente entre dispositivos.                                 |
| **🎨 Usabilidade**     | Avaliar a clareza das mensagens de erro e confirmação.                                      | Usuários podem não compreender o que ocorreu durante a operação.              |
| **🎨 Usabilidade**     | Verificar a acessibilidade dos elementos da interface (botões, menus e formulários).        | Exclusão de usuários com necessidades específicas.                            |
| **📱 Compatibilidade** | Testar o funcionamento nos principais navegadores (Chrome, Edge e Firefox).                 | Funcionalidades podem não funcionar corretamente em determinados navegadores. |
| **📱 Compatibilidade** | Validar a adaptação da interface em diferentes resoluções de tela.                          | Problemas de layout e dificuldade de utilização em alguns dispositivos.       |

---

## 📝 Conclusão

Os testes não funcionais são essenciais para garantir a qualidade da Plataforma de Agendamento de Consultas (PACO). A avaliação de performance, segurança, usabilidade e compatibilidade permite identificar riscos que podem impactar diretamente a experiência do usuário, a confiabilidade do sistema e a proteção dos dados pessoais.

---

<div align="center">

✨ Alyson Veríssimo 

📘 Curso: Teste de Software
📅 17 de julho de 2026

</div>

