# 📚 Atividade Avaliativa – Níveis de Teste

## Sistema Fictício: Sistema de Gerenciamento de Pedidos (SGP)

O SGP é uma aplicação web utilizada por clientes e administradores para realizar e gerenciar pedidos de produtos online.

## 📊 Classificação dos Testes

| Tipo de Teste              | Exemplo no SGP                                       | Justificativa                                                                                                                               |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **🧪 Teste Unitário**      | Cálculo automático do valor total do pedido.         | Verifica individualmente a função responsável pelo cálculo (quantidade × preço), garantindo que ela funcione corretamente de forma isolada. |
| **🧪 Teste Unitário**      | Validação de que o pedido possui pelo menos um item. | Testa apenas a regra de negócio responsável por impedir pedidos vazios.                                                                     |
| **🔗 Teste de Integração** | Integração com o banco de dados de produtos.         | Verifica se o sistema consegue consultar e recuperar corretamente as informações dos produtos.                                              |
| **🔗 Teste de Integração** | Integração com o serviço de autenticação.            | Garante que o login e a validação de usuários funcionem corretamente em conjunto com o serviço externo.                                     |
| **🔗 Teste de Integração** | Integração com o serviço de pedidos.                 | Confirma que os pedidos são enviados e registrados corretamente no sistema responsável.                                                     |
| **🖥️ Teste de Sistema**   | Cadastro e autenticação de usuários.                 | Avalia o funcionamento completo da funcionalidade, considerando interface, regras e integrações.                                            |
| **🖥️ Teste de Sistema**   | Adição e remoção de itens do carrinho.               | Verifica o comportamento da aplicação como um todo durante o gerenciamento do carrinho.                                                     |
| **🖥️ Teste de Sistema**   | Finalização do pedido com confirmação.               | Testa o fluxo completo do pedido, desde a seleção dos produtos até a confirmação.                                                           |
| **✅ Teste de Aceitação**   | Cliente realiza um pedido com sucesso.               | Valida se o sistema atende às necessidades e expectativas do usuário final.                                                                 |
| **✅ Teste de Aceitação**   | Usuário não autenticado tenta finalizar um pedido.   | Verifica se a regra de negócio é cumprida do ponto de vista do cliente.                                                                     |
| **✅ Teste de Aceitação**   | Pedido confirmado não pode ser alterado.             | Confirma que o comportamento esperado pelo negócio está sendo respeitado.                                                                   |

---

## 📝 Justificativa dos Níveis de Teste

* **Teste Unitário:** verifica pequenas partes do código, como funções e métodos isolados.
* **Teste de Integração:** valida a comunicação entre módulos, serviços e banco de dados.
* **Teste de Sistema:** avalia o funcionamento completo da aplicação em um ambiente semelhante ao de produção.
* **Teste de Aceitação:** confirma se o sistema atende aos requisitos e às expectativas do usuário e do negócio.

## 🎯 Conclusão

Cada nível de teste possui um objetivo específico. Os testes unitários garantem a qualidade das funções individuais, os testes de integração asseguram a comunicação entre componentes, os testes de sistema validam o comportamento completo da aplicação e os testes de aceitação confirmam que o produto atende às necessidades dos usuários e às regras de negócio estabelecidas.

---

<div align="center">

✨ Alyson Veríssimo ✨

"Transformando requisitos em qualidade."

📘 Curso: Teste de Software
📅 17 de julho de 2026

</div>
