import letterInfo from "../js/solution1";

import exempleMock from "./mock_data";



describe("Get user with posts", () => {
  it("Deve retornar usuários com os seus respectivos posts", () => {
    const user = letterInfo

    expect(user).toEqual(exempleMock);
  });
});