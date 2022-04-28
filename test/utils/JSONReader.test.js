const JSONReader = require('../../lib/utils/JSONReader')

describe("Prueba de unidad de para JSONReader", () => {
    test('1) Leyendo un archivo con lista vacía', () => {
        const explorer = JSONReader.readJsonFile('./test/data/explorers_2.test.json')
        expect(explorer.length).toBe(0);
    });
    test('2) Leyendo un archivo en blanco', () => {
        const explorer = JSONReader.readJsonFile('./test/data/explorers_4.test.json')
        expect(explorer).toBe('Archivo en blanco');
    });
})