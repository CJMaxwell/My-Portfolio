import expect from "expect";
import { Password } from "../../helpers";

describe("Password helper class", () => {
  describe("Hash Password", () => {
    it("expects a hashed password", async () => {
      const password = "Howareyou";
      const hashedPassword = await Password.hash(password);

      expect(hashedPassword.length).toBeGreaterThan(password.length);
    });
  });

  describe("Compare Password", () => {
    it("expects a boolean", async () => {
      const password = "Howareyou";
      const hashedPassword = await Password.hash(password);
      const bool = await Password.compare(password, hashedPassword);

      expect(bool).toBe(true);
    });

    it("expects a boolean", async () => {
      const wrongPassword = "Hellowrete342";
      const password = "Howareyou";
      const hashedPassword = await Password.hash(password);
      const bool = await Password.compare(wrongPassword, hashedPassword);

      expect(bool).toBe(false);
    });
  });
});
