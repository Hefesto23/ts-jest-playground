jest.mock('uuid', () => ({ v1: () => 'v1-123', v4: () => undefined  }));
jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  // mockar toda a classe
  // Utils: class {  // retornando uma classe 'mockada'
  //   public static generateUUIDWithPattern(): string {
  //     return 'id-' + uuid.v1();
  //   }
  // },
  timesTwo: () => 20
}));

import * as uuid from 'uuid';
import { Utils, timesTwo } from './utils';
describe('mocking modules tests', () => {

  afterEach(() => {
    // limpar todos os mocks
    jest.clearAllMocks();
  });

  afterAll(() => {
    // restaurar todos os mocks para os valores originais
    jest.restoreAllMocks();
  })
  it('deve retornar undefined para o mock do uuid.v4 ', () => {
    expect(uuid.v4()).toBeUndefined();
  });

  it('deve retornar o valor do mock no método v1', () => {
    expect(uuid.v1()).toBe('v1-123');
  });
  it('deve retornar undefined para o mock do uuid.v4 ', () => {
    const result = Utils.generateUUIDWithPattern();
    expect(result).toEqual('id-v1-123');
  });

  it('deve retornar o valor do mock no método timesTwo', () => {
    const result = timesTwo(4);
    expect(result).toEqual(20);
  });

  it('deve retornar o valor real da funcionalidade do Utils', () => {
    const result = Utils.toUpperCase('banana');
    expect(result).toEqual('BANANA');
  });

  it('deve retornar o valor do mock no método returnDate', () => {
    // Para classes utilizar o spyOn
    jest.spyOn(Utils, 'returnDate').mockImplementation(() => '01/01/1970, 12:00:00 AM');
    const result = Utils.returnDate();
    expect(result).toEqual('01/01/1970, 12:00:00 AM');
  });
});