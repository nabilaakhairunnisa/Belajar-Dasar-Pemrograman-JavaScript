class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = chassisNumber;
    }
   
    //Get: Nilai yang didapatkan dari properti
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    //Set: Cara menetapkan nilai tersebut
    set chassisNumber(chassisNumber) {
      console.log('tidak dapat diubah');
    }
  }
   
  const car1 = new Car('BMW', 'red', 200, 10);

  console.log(car1.chassisNumber);
  //ubah nilai chassisNumber jadi 20
  car1.chassisNumber = 20;
  console.log(car1.chassisNumber);