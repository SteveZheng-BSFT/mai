import { Injectable } from '@angular/core';
import { CustomerDevice } from './customer-device';
import { CatalogDevice } from '../catalog-device/catalog-device';

@Injectable()
export class CustomerDeviceService {
    private customerDevice: CustomerDevice;
    constructor() {
    }

    setCurrentCustomerDevice(catalogDevice: CatalogDevice, imei: string): void {
        this.customerDevice = new CustomerDevice(catalogDevice);
        this.customerDevice.options.IMEI = imei || this.customerDevice.options.IMEI;
    }
    getCurrentCustomerDevice(): CustomerDevice {
        return this.customerDevice;
    }
    setOwnerName(name: string): void {
        this.customerDevice.options.ownerName = name;
    }
    setICCid(ICCid: string): void {
        this.customerDevice.options.ICCid = ICCid;
    }
    setPaymentPlan(plan: {}): void {
        // use new or existed value
        Object.assign(this.customerDevice.options.paymentPlan, plan);
    }
    setInsurancePlan(plan: {}): void {
        // use new or existed value
        Object.assign(this.customerDevice.options.insurancePlan, plan);
    }
    setNumberPlan(plan: {}): void {
        // use new or existed value
        Object.assign(this.customerDevice.options.numberPlan, plan);
    }
    setDataPlan(plan: {}): void {
        // use new or existed value
        Object.assign(this.customerDevice.options.dataPlan, plan);
    }

    getPaymentPlan(): Object {
        return this.customerDevice.options.paymentPlan;
    }

    getInsurancePlan(): Object {
        return this.customerDevice.options.insurancePlan;
    }

    getNumberPlan(): Object {
        return this.customerDevice.options.numberPlan;
    }

    getDataPlan(): Object {
        return this.customerDevice.options.dataPlan;
    }

    // example: finally cause following obj to be submitted
    // customerDevice = {
    //     catalogDevice: {brand: 'Apple', sku: '123123', IMEI: '234234'},
    //     options:
    //         {   ownerName: 'testname',
    //             ICCid: '234455666666',
    //             paymentPlan: {'pay in full': '$400 at checkout'},
    //             insurancePlan: {'yes': '$12/month'},
    //             dataPlan: {'pay for use': '$12/gb'},
    //             numberPLan: {'keep number': '3123213'}
    //         }
    // };
}
