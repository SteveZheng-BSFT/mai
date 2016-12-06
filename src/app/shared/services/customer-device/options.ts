export class Options {
    public ownerName: string;
    public ICCid: string;
    public IMEI: string;
    public paymentPlan: {};
    public insurancePlan: {};
    public dataPlan: {};
    public numberPlan: {};
    constructor() {
        this.ownerName = 'not set';
        this.IMEI = 'not set';
        this.ICCid = 'not set';
        this.paymentPlan = {};
        this.insurancePlan = {};
        this.dataPlan = {};
        this.numberPlan = {};
    }
}
