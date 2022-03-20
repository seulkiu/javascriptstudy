import { Electronics } from "./module";
class Phone extends Electronics {
    constructor(modelName, price, purpose, network){
        super(modelName, price, purpose);
        this.network = network;
    }

    setNetwork(network) {
        this.network = network;
    }

    getNetwork(){
        return this.network;
    }

    call(){
        console.log("통화중입니다.");
    }
}

let phone = new Phone("iphon12pro", "150만원", "다용도", "5g");
phone.powerOn();
phone.call();