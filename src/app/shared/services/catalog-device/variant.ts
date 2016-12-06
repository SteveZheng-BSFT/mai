import { DeviceImages } from './device-images';

export class Variant {

    public skuCode: string;
    public images: DeviceImages;
    public colorName: string;
    public colorHex: string;
    public inventory: number;
    public capacity: string;
    public currency: string;
    public currencyString: string;
    public price: number;
    public financePrice: number;
    public financeTerm: number;
    public status: string;
    public availabilityDate: string;

    constructor() {}

}
