import { SlotMachine } from "./solution";

describe("SlotMachine", () => {
  it("should create an instance of SlotMachine", () => {
    const slotMachine = new SlotMachine();
    expect(slotMachine).toBeInstanceOf(SlotMachine);
  });

  it("should have a play method", () => {
    const slotMachine = new SlotMachine();
    expect(typeof slotMachine.play).toBe("function");
  });
});
