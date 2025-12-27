
import React from 'react';

export const BRAND_NAME = "L'Elégance";

export const CATEGORIES = [
  "New In", "Fashion", "Beauty", "Sale", "Journal"
];

export const PRODUCTS: any[] = [
  {
    id: 'p1',
    name: 'Classic Trench Coat',
    price: 129.00,
    category: 'fashion',
    tag: 'New',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKdQ2mAmXwwPBZgGXTRyoe41tHX3bG2Rtz0Uls0R0tfyU8wP2Is6V4kKC5AXuH4p5mhPb-1-fPbM9419PE3aRnt38YCd_56PjmAfwlSww-FEOI07oL4d2zNkDmZsW38c8SKJ2QDXs5UO1p51UaAzvjK8FtaUaoHvY6DIioBn0zQfl1Mf5S2KYBISjZ7VP9xIw9A9Oh4NIV-3aFPmbMucCqQgHqEFsr0EMfs4n3ksG5L2aBpX6HKlh3gYtefCXGAQglk_rzZkHO70p'
  },
  {
    id: 'p2',
    name: 'Rose & Oud Parfum',
    price: 85.00,
    category: 'beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx8vzP5LA5z-TAgQi22OEYhxc1I_TjzYiD3tGnhNPD96vjjmC-ACEbh_5FZsCMwKtc1NO9NwloSXwJkDqD62Lf2CinUXeL8kmyMJE3R6reQx5oo0rJXd8MXFJSK2DG2-fuGgZuJ_EQCZewklzNcu479myDbQyIVd75xam46Wi0nSOloP9S1VIMVAY8w1GbLKf5TDVo1cjv2vxVZv12xMDUTPMw2u7gI6hgntme4cJ7WMrMOmMtS49S_E8LBypNkM3jdAUJwlawsK0P'
  },
  {
    id: 'p3',
    name: 'Silk Satin Blouse',
    price: 68.00,
    category: 'fashion',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbA-NO5g29TqoSRmPNIw_kvkzzoohHoCiy4m6KtM-hDYekZwCA0T1dTIF2xw5ZulmyvYJgk9tb-7R_-zZWxM2VW2vABBFPjlY_uodRCrHNm7hqefgtRO10XPQD-F9VbbzU8x_wi9OBuM20f6SO3FO0lhWZfzb_4-JQCzCIUrtpxZm6cI6xjttmwVD15GZImjYC9-xK-ADUBuwJ-RdrHuE6qJvVqt5deW8tVacMOfNY_MeTyVWoNsfSgt2HwrgKR_-mxnlGOcIpOXCF'
  },
  {
    id: 'p4',
    name: 'Radiance Serum',
    price: 45.00,
    category: 'beauty',
    tag: 'Hot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgWC4LBMMTxKFsin3qaHNEWnAqCp2nZpEVpSVDd7IXzDIRMidCCJJ7p_sezNNnkELXyORos9uDIWCbOFInaGeJoL8Vvwi_63vtXTSs2dBJ_lgpIukJvFv-f4MbwAFiMmWhyzni8rbvZlHGHkMBXJC1HdRYdQ61zyth4Dc-Is1oJfhFiwS2JXgTC-Tev4fu354EzrPFQOpay05xLWutsdfGuC66OGcnN6pfyWL_QSOHw8gsFLa5fZ68x1Ue_brvoujXqJNGDVUoyic9'
  }
];

export const LogoIcon = () => (
  <div className="size-8 flex items-center justify-center text-primary">
    <span className="material-symbols-outlined !text-3xl">local_mall</span>
  </div>
);

export const AdminIcon = () => (
    <div className="size-8 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined !text-3xl">storefront</span>
    </div>
  );
