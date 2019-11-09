import {JA, NEIN} from "../src/index";

test('JA is true', () => {
    expect(JA).toStrictEqual(true);
});

test('NEIN is false', () => {
    expect(NEIN).toStrictEqual(false);
});
