import { Options } from './options';
import { CatalogDevice } from '../catalog-device/catalog-device';
export class CustomerDevice {
    options: Options;
    // must have a catalogDevice to instantiate CustomerDevice
    constructor(public catalogDevice: CatalogDevice) {
        this.options = new Options();
    }
}
