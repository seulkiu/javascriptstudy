export function powerOn(){
    message : "Power On";
}

export function powerOff(){
    message : "Power Off";
}

export class apple{
    constructor(modelName, price, purpose) {
        this.modelName = modelName;
        this.price = price;
        this.purpose = purpose;
    }
    getModelName(){
        return this.modelName;
    }
}