class uber{
    constructor(drivername,arrivingtime,place){
        this.drivername=drivername,
        this.arrivingtime=arrivingtime
        this.place=place
    }

    calculatePrice(distance) {
        const basePrice = 120
        const pricePerKilometer = 35

        return basePrice + pricePerKilometer * distance
      }

    getdrivername(){
        return this.drivername
    }
    getarrivingtime(){
        return this.arrivingtime
    }
    getplace(){
        return this.place
    }
}
const uber1=new uber("satish",2000,"2:30","tamilnadu")
console.log(uber1)
console.log(uber1.calculatePrice(10))