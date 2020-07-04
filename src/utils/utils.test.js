import {extendObject} from "./utils.js";

it(`extendObject function should extend object`, () => {

  expect(extendObject({name: `Alice`}, {age: 42})).toEqual({
    name: `Alice`,
    age: 42
  });

});
