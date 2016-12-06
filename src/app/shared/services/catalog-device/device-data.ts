
import { CatalogDevice } from './catalog-device';

export const DEVICEDATA: CatalogDevice[] = [

    {
        productCode: 'TESTPHONES',
        sku: '1234',
        imageURL: 'galaxy.jsp',
        name: 'Galaxy S7',
        slug: 'test-galaxy-s7-modesto',
        description: 'The Samsung Galaxy S7 is a smartphone.',
        category: 'device',
        subcategory: '',
        brand: 'Samsung',
        height: 0,
        width: 0,
        length: 0,
        weight: 0,
        detail: [
            {
                heading: 'Processor',
                content: 'Qualcomm &reg; Snapdragon &trade; 820 Quad Core processor \r(MSM8996, Quad-Core, 2.15GHz + 1.6GHz)'
            },
            {
                heading: 'Camera',
                content: '12 MP'
            },
            {
                heading: 'Screen',
                content: '5.1 &ldquo; Quad HD, Super Amoled, 577 PPI; Full Touch Bar'
            },
            {
                heading: 'Network',
                content: 'CDMA 1X and EvDO Rev 0/RevA; LTE (Domestic) B13, B4, B2, B5'
            },
            {
                heading: 'Global Network',
                content: 'LTE (Global) B3, B7, B20; GSM Quad B5, B8, B3, B2 (850/900/1800/1900Mhz) UMTS Quad ' +
                'B5, B8, B2, B1 (850, 900, 1900, 2100 MHz); TDS CDMA 34, 39 TDD LTE 38, 39, 40, CAT 4 / CAT 6 / (CAT 9 capable)'
            },
            {
                heading: 'Battery',
                content: '3,000mAH, Non-removable'
            },
            {
                heading: 'Storage',
                content: 'RAM 4G, Flash 32GB (Actual formatted capacity is less), Removable microSD up to 200GB (sold separately)'
            },
            {
                heading: 'Operating System',
                content: 'Android Marshmallow (6.0.1)'
            },
            {
                heading: 'Colors',
                content: 'Black Onyx or Gold Platinum'
            }
        ],
        defaultVariant: 0,
        colorName: 'Black Onyx',
        colorHex: '#000000',
        inventory: 99881,
        capacity: '32 GB',
        currency: 'USD',
        currencyString: '$',
        price: 672,
        financePrice: 32,
        financeTerm: 24,
        protection: 12,
        dataPay: 12,
        dataUnlimited: 65,
        status: 'AVAILABLE',
        availabilityDate: '',
        compatibleProducts: [
            {
                productCode: 'TESTACCESSORIES',
                brand: 'Modesto',
                name: 'Test Accessory'
            }
        ],
        feature:
            {
                price: true,
                plan: false,
                insurance: true
            }
    },

    {
        productCode: 'TESTPHONES',
        sku: '5678',
        imageURL: 'iphone.jsp',
        name: 'iPhone S7',
        slug: 'test-iphone-s7-modesto',
        description: 'The iPhone S7 is a smartphone',
        category: 'device',
        subcategory: '',
        brand: 'Acme',
        height: 0,
        width: 0,
        length: 0,
        weight: 0,
        detail: [
            {
                heading: 'Processor',
                content: 'Qualcomm &reg; Snapdragon &trade; 820 Quad Core processor \r(MSM8996, Quad-Core, 2.15GHz + 1.6GHz)'
            },
            {
                heading: 'Camera',
                content: '12 MP'
            },
            {
                heading: 'Screen',
                content: '5.1 &ldquo; Quad HD, Super Amoled, 577 PPI; Full Touch Bar'
            },
            {
                heading: 'Network',
                content: 'CDMA 1X and EvDO Rev 0/RevA; LTE (Domestic) B13, B4, B2, B5'
            },
            {
                heading: 'Global Network',
                content: 'LTE (Global) B3, B7, B20; GSM Quad B5, B8, B3, B2 (850/900/1800/1900Mhz) UMTS Quad ' +
                'B5, B8, B2, B1 (850, 900, 1900, 2100 MHz); TDS CDMA 34, 39 TDD LTE 38, 39, 40, CAT 4 / CAT 6 / (CAT 9 capable)'
            },
            {
                heading: 'Battery',
                content: '3,000mAH, Non-removable'
            },
            {
                heading: 'Storage',
                content: 'RAM 4G, Flash 32GB (Actual formatted capacity is less), Removable microSD up to 200GB (sold separately)'
            },
            {
                heading: 'Operating System',
                content: 'Android Marshmallow (6.0.1)'
            },
            {
                heading: 'Colors',
                content: 'Black Onyx or Gold Platinum'
            }
        ],
        defaultVariant: 0,
        colorName: 'Black Onyx',
        colorHex: '#000000',
        inventory: 99881,
        capacity: '32 GB',
        currency: 'USD',
        currencyString: '$',
        price: 672,
        financePrice: 32,
        financeTerm: 24,
        protection: 12,
        dataPay: 12,
        dataUnlimited: 65,
        status: 'AVAILABLE',
        availabilityDate: '',
        compatibleProducts: [
            {
                productCode: 'TESTACCESSORIES',
                brand: 'Modesto',
                name: 'Test Accessory'
            }
        ],
        feature:
        {
            price: true,
            plan: false,
            insurance: true
        }
    }
];
