// *************************************
// ****        SLOT MACHINE         ****
// *************************************

export class SlotMachine {
  private coins: number = 0;

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  play(): void {
    ++this.coins;
    let machineResults: boolean[] = [];
    for (let i = 0; i < 3; i++) {
      machineResults.push(this.generateRandomBoolean());
    }

    const isAllTrue = machineResults.every((result) => result === true);

    if (isAllTrue) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      return console.log(`Good luck next time!!`);
    }
  }
}


const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
