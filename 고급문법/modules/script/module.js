export class Electronics{
    constructor(modelName, price, purpose) {
        this.modelName = modelName;
        this.price = price;
        this.purpose = purpose;
    }
    getModelName(){
        return this.modelName;
    }
    powerOn(){
        console.log("Power On")
    }
}