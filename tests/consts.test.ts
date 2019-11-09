import {JA, NEIN, NULL} from "../src/index";

test('JA is true', () => {
    expect(JA).toStrictEqual(true);
});

test('NEIN is false', () => {
    expect(NEIN).toStrictEqual(false);
});

test('NULL is 0 and not null', () => {
    expect(NULL).not.toBeNull();
    expect(NULL).toStrictEqual(0);
});
