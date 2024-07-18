import { toUpperCase } from './my-functions';
describe('my-functions tests', () => {
  
  describe('Função toUpperCase ', () => {
    /* 
      O padrão de teste Triple A, também conhecido como Padrão de Teste Triple AAA, é uma estratégia de teste que segue os princípios do Desenvolvimento Orientado a Testes (TDD) e Desenvolvimento Orientado a Comportamento (BDD). É um framework para escrever testes que garante código de alta qualidade e fácil manutenção.

      O padrão de teste Triple A consiste em três componentes principais:

      Arrange: Este componente configura o estado inicial do sistema ou dos objetos sendo testados. Ele inclui qualquer preparação necessária, simulação ou preparação de dados.
      Act: Este componente executa a ação ou operação que está sendo testada. Ele simula a interação do usuário ou a execução do código sendo testado.
      Assert: Este componente verifica o resultado ou comportamento esperado do sistema ou dos objetos sendo testados. Ele verifica se o resultado real corresponde ao resultado esperado.
      O padrão de teste Triple A ajuda a escrever testes claros, concisos e fáceis de manter. Ele promove uma abordagem estruturada para testes, tornando mais fácil entender e depurar falhas nos testes.

      https://jestjs.io/docs/
    */
    it('deve retornar uma string maiúscula', () => {
      // Triple AAA: Arrange, Act, Assert
      // Arrange
      const sut = toUpperCase;
      const expected = 'TESTE'

      // Act
      const actual = sut('teste');

      // Assert
      expect(actual).toBe(expected);
    });
   })
  
})