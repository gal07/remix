import type {LoaderFunctionArgs}
from "@remix-run/node"; // or cloudflare/deno
import {json} from "@remix-run/node"; // or cloudflare/deno
// import escapeHtml from "escape-html";

type Userslist = {
    id?: Number;
    alamat?: string;
    nama_lengkap?: string;
    phone?: string;
    email?: string;
};

type Productlist = {
    idproduk?: any;
    imageList?: any;
    barcode?: any;
    nama_produk?: any;
    nama_kategori?: any;
    pidr?: any;
    qty?: any;
    berat?: any;
};

type createUser = {
    nama_depan?: any;
    nama_belakang?: any;
    email?: any;
    phone?: any;
    alamat?: any;
};

const apiUrl = "http://localhost:4001/api/";
const key = {
    "x-api-key": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hX2RlcGFuIjoiYm9yYWgiLCJuYW1hX2Jlb" +
            "GFrYW5nIjoiYW1kYW4iLCJlbWFpbCI6ImJvcmFoQGdtLmNvbSIsInBob25lIjoiNjI4NzcxMjM2MTI" +
            "zIiwic3RhdHVzIjoxLCJyZWdfc291cmNlIjoiZWNjcy1pZCIsImlhdCI6MTcwMTA3OTE1OH0.mSOQE" +
            "QTel5RI8HpcCc_G3Vc-mrun12V9UN8knyv3ltG_wJp6xk6LXU_ILZ0uMFNN-1Fyy1jEq_scK3rAjzU" +
            "l0_yPSFoSVUIp6sAYsvWputS7mA9prmnJSjiGOPiCySiIngazVkGSsgxeMK_aDm8fzqYAmbmNSgttT" +
            "bx3QoLRWxpvJJMgMBxVk9mNWVwTEi-yj3Ox_z-GYf3-a1Wyk-5MX9QqolP-hVqTbtqeMP5U0T08P07" +
            "nNUGcVqCuCNnJpCS-rhsPoIJJB2DBN1iNJGv1YOMqkIEeAIzTOjzCOc45NHygJ2ePXSzUT0JMFclaC" +
            "obJ1aib5ovSKb68vcxJ8O0xK1thRjJUs5p3vBidcttv_uw7e5pU_sythN5RpOFV0YrTACfvu2lYUCA" +
            "eE6h_Yq_fkT_Pj62D_WtvR9W1a_Vem6nkZcQzWR4T7PSAXPecr2-d5SAhQDIlWFcEAJZEdpNdACRR6" +
            "kt79h5ucYZyU3Sx5GCqYUAeEL9chyHY_xA-6FSov4oJjWvv3ESlj7TLJaTonaUImEqOZhABnShGtSq" +
            "UqsBm69c3WoHeUs-UHNODaY7gfDLvSkGKAm4_9UG4WTr91k3APpaFFcSxA7vIqcgYqnprF-zYqKhV8" +
            "D8Ae5Q_tvISY5WUAA_4Gm77LkoXJ8KEWwIAExSca-_BHFvl-NozGiQ"
}

export async function getUsers() {
    const path = 'customer?page=1&limit=1000';
    const res = await fetch(apiUrl + path, {headers: key});
    const data = await res.json();
    const result = data
        .data
        .map((record : Userslist) => {
            return {id: record.id, alamat: record.alamat, nama_lengkap: record.nama_lengkap, phone: record.phone, email: record.email}
        });
    return json({result})
}

export async function getProduct() {
    const path = 'product?page=1&limit=1000';
    const res = await fetch(apiUrl + path, {headers: key});
    const data = await res.json();
    const result = data
        .data
        .map((record : Productlist) => {
            return {
                id: record.idproduk,
                image: record.imageList,
                barcode: record.barcode,
                product_name: record.nama_produk,
                category: record.nama_kategori,
                price: record.pidr,
                stock: record.qty,
                weight: record.berat
            }
        });

    return json({result})
}

export async function createUsers(body: any){
    const path = 'customer/';
    const res = await fetch(apiUrl + path, {
        headers: key,
        body: JSON.stringify(body),
        method:"POST"
    });
    const data = await res.json();
    return data;
}
