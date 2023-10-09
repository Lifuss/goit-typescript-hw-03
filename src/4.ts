class Key {
  constructor(private signature: number) {}
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(protected key: Key, public door: boolean) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key, false);
  }
  openDoor(key: Key): void {
    // я думаю що щось напартачив з рандомом, адже завжди буде одинакові значення, бо екземпляр класу key один
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}
function randomNumber(): number {
  return Math.floor(Math.random() * 10);
}

const key = new Key(randomNumber());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
