import {wenn} from "../src";

test('truthy values execute the dann function', done => {
  wenn(true).dann(() => {
    done();
  })
});

test('falsy values execute the sonst function', done => {
  wenn(false).dann(() => {}).sonst(() => {
    done();
  })
});

