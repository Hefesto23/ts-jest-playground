import { calculateStringChar, executeCbWithMsg, MathOperations, toUpperCase } from './my-functions';
describe('my-functions tests', () => {
  
  describe('Stubs e Triple AAA', () => {
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
      // Arrange(Preparação)
      const sut = toUpperCase;
      const expected = 'TESTE'

      // Act (Ação)
      const actual = sut('teste');

      // Assert (Asserções)
      expect(actual).toBe(expected);
    });
       // ************ STUBS *************************
   it('deve retornar contagem de caracteres de uma string', () => {
       // Arrange
       const expected = 4;
       const sut = calculateStringChar;
       // Stub objetos incompletos de teste
       /* Um stub é um objeto simples que substitui um objeto complexo em um sistema para fins de teste. Em um ambiente de teste, você pode usar um stub para simular o comportamento de um objeto existente ou para fornecer uma interface de teste para um objeto que ainda não foi implementado. */
       const someInfoStubs = {
         lowercase: 'casa',
         characters: ['c', 'a', 's', 'a'],
       }
       // Act
       const actual = sut(someInfoStubs as any);
       // Assert
       expect(actual).toBe(expected);
    });
  })
  
  describe('Mocks', () => {
    // ************ Mocks *************************
    // Os testes unitários devem ser independentes e para isso o valor dos 
    // mocks deve ser reinicializado a cada teste
    beforeEach(() => {
      jest.clearAllMocks();
    })

    it('deve retornar a contagem de vezes que um mock foi chamado e o que foi chamado', () => {
      /* O Mock simula seu comportamento verificando se um ou mais métodos foram ou não chamados, a ordem de chamadas destes métodos, se esses métodos foram chamados com os argumentos certos, e quantas vezes foram chamados. */
      // Preparo
      const myCbFunction = jest.fn();
      
      // Ação
      executeCbWithMsg(myCbFunction);

      // Asserções
      expect(myCbFunction).toHaveBeenCalled();
      expect(myCbFunction).toHaveBeenCalledTimes(1);
      expect(myCbFunction).toHaveBeenCalledWith('Hello World');
    });
  });

  describe('Spies', () => {
    // ************ Spies *************************
    /* Spies não é um conceito tão comum quanto Mocks ou Stubs. Spy pode ser definido como um tipo de combinação de um Mock com um Stub. Mas não apenas isso, spies também permitem gravar as chamadas para o método “espionado”, além de outras informações. 
    Spies são utilizados para verificar o comportamento de MÉTODOS DE UMA CLASSE.
    */
    let sut: MathOperations; 
    beforeEach(() => {
      sut = new MathOperations();
    })

    afterEach(() => {
      jest.clearAllMocks();
    })  
    it('Deve espiar a classe de adição', () => {
      jest.spyOn(sut, 'add');

      sut.add(21, 4);
      sut.add(23, 5);

      expect(sut.add).toHaveBeenCalledTimes(2);

      expect(sut.add).toHaveBeenCalledWith(21, 4);
      expect(sut.add).toHaveBeenCalledWith(23, 5);
    })
    
    it('Deve espiar a classe de multiplicação', () => {
      jest.spyOn(sut, 'multiply').mockImplementationOnce(() => 6);

      const result = sut.multiply(1, 4); // 4
      sut.multiply(2, 5); // 10
      sut.multiply(2, 3); // 6
      expect(sut.multiply).toHaveBeenCalledTimes(3);

      expect(sut.multiply).toHaveBeenCalledWith(1, 4);
      expect(sut.multiply).toHaveBeenCalledWith(2, 5);
      expect(result).toBe(6);
    })
   })


})