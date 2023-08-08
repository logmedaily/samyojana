const Samyojana = require('@logmedaily/samyojana');

describe('Samyojana Class', () => {
    let samyojana;

    let warnSpy;

    beforeEach(() => {
        samyojana = new Samyojana();
        warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        samyojana.initialize({
            info: console.log,
            success: console.log,
            error: console.error,
            warning: console.warn
        });
    });

    afterEach(() => {
        warnSpy.mockRestore();
    });


    test('Should register an action', () => {
        const actionName = 'testAction';
        const actionFunction = () => 'test';
        samyojana.register(actionName, actionFunction);
        expect(samyojana.actions.hasOwnProperty(actionName)).toBe(true);
    });

    test('Should process a registered action', () => {
        const actionName = 'calculate';
        const actionFunction = (data) => data * 2;
        samyojana.register(actionName, actionFunction);
        const result = samyojana.process(1, actionName, 5);
        expect(result).toBe(10);
    });

    test('Should fail to process an unregistered action', () => {
        const actionName = 'unregisteredAction';
        expect(() => samyojana.process(2, actionName, 'data')).toThrowError(
            /Action 'unregisteredAction' is not registered/
        );
    });

    test('Should fail to process a registered action with incorrect data', () => {
        const actionName = 'calculate';
        const actionFunction = (data) => {
            if (typeof data !== 'number') {
                throw new Error('Input data must be a number.');
            }
            return data * 2;
        };
        samyojana.register(actionName, actionFunction);
        expect(() => samyojana.process(3, actionName, 'invalid data')).toThrowError(
            /Input data must be a number/
        );
    });

    test('Should unregister an action', () => {
        const actionName = 'testAction2';
        const actionFunction = () => 'test';
        samyojana.register(actionName, actionFunction);
        samyojana.unregister(actionName);
        expect(samyojana.actions.hasOwnProperty(actionName)).toBe(false);
    });

    test('Should warn when unregistering an unregistered action', () => {
        const actionName = 'unregisteredAction';
        samyojana.unregister(actionName);
        expect(warnSpy).toHaveBeenCalledWith(`Action '${actionName}' is not registered.`);
    });

});
