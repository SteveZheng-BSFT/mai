import { Detail } from './detail';
import { Variant } from './variant';
import { CompatibleProducts } from './compatible-products';

export class BrowseDevice {

    public productCode: string;
    public name: string;
    public slug: string;
    public description: string;
    public category: string;
    public subcategory: string;
    public brand: string;
    public height: number;
    public width: number;
    public length: number;
    public weight: number;
    public details: Detail[];
    public defaultVariant: number;
    public variants: Variant[];
    public compatibleProducts: CompatibleProducts[];

    constructor() {}
}
