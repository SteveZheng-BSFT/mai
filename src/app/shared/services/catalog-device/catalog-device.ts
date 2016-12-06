import { Detail } from './detail';
import { CompatibleProducts } from './compatible-products';
import { Feature } from './feature';

export class CatalogDevice {

  public productCode: string;
  public sku: string;
  public imageURL: string;
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
  public detail: Detail[];
  public defaultVariant: number;
  public colorName: string;
  public colorHex: string;
  public inventory: number;
  public capacity: string;
  public currency: string;
  public currencyString: string;
  public price: number;
  public financePrice: number;
  public financeTerm: number;
  public protection: number;
  public dataPay: number;
  public dataUnlimited: number;
  public status: string;
  public availabilityDate: string;
  public compatibleProducts: CompatibleProducts[];
  public feature: Feature;

  constructor() {}
}
