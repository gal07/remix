import type {LoaderFunctionArgs}
from "@remix-run/node"; // or cloudflare/deno
import {json} from "@remix-run/node"; // or cloudflare/deno
// import escapeHtml from "escape-html";

export type Userslist = {
    id?: Number;
    alamat?: string;
    nama_lengkap?: string;
    nama_depan?: string;
    nama_belakang?: string;
    phone?: string;
    email?: string;

};

type UserListCheckout = {
    id?: Number;
    nama_lengkap?: string;
}

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

const apiUrl = "http://104.248.159.190:4001/api/";
const key = {
    "x-api-key": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTM2LCJuYW1hX2RlcGFuIjoiUFQgQmFuZGFyIEJlbmlrIiwibmFtYV9iZWxha2FuZyI6IlN1a3NlcyBNYWttdXIiLCJlbWFpbCI6ImFkbWluLmJlbmlrQGVjY3MuY2VudGVyIiwicGhvbmUiOiIxMTExMTExMSIsInN0YXR1cyI6MSwicmVnX3NvdXJjZSI6ImVjY3MtaWQiLCJjb21wYW55X2lkIjoxODcsImlhdCI6MTcwMzgyMDQxMX0.uF59QNOyAIu79c_JMeRxhpLGthH13WJTraSlxVcYBAHGVPsRp53eDWoht3lS5GI1LkFZsTiBUBFz5K_X-jZSBRMtMEhLW-kB2oOkurlDb9OGOzZ_lTUE8h_xzswEmyA3_OrTS1GsczA1zQJjWc4o-CKqhMl3-PCYWcwR8lW8esjW4TIt95oqVW4bFVRemZnZueKauMueIVboTa_5j2XwgPnRS1uYqJH6Mk6mth9aiVIhHMGPalL-vGenNngPuJVcHDe1bDaxmEtxYlT2TSanhk_8LrURziIc8n8V__qdbsispvvyr-DOwUueHhGfQLxnwo7ug4_RgtbpXXckrFxgwEL-ntHMTjMQ7T79VmnUv1EUuQ6jJvwo12Am7ARJaYXXuj29LkI_5EwgfaIPNhNJeyJ5ImHXLSfq3B_kf5217oIBBxrH8Dn2xwoonha7dA-SJF96IQTSKtm7gBEJxGAVNs4KxZYv44VTvodNKrYf1H9mQp4vvEGL5kS_vIW9j29CVi2yleV0iwqqWw2wOFLVQ1RGNla-D8G_oonrBXIEtUngTB9Pb2yJQjQoGlRT4bstz6ytE2ryxnNMdDZN0o86AgTOeRSosd8R6qGhBHdepWKFa6NGWesKx3m5aGSRAJv2JseOuWqGTP0GnJKSQ4g8jOCBT_j73JL1sTVSuoyTtF4"
}

export async function getUsers(secret : any) {
    const path = 'customer?page=1&limit=200';
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret}});
    const data = await res.json();
    const result = data
        .data
        .map((record : Userslist) => {
            return {
                id: record.id,
                alamat: record.alamat,
                nama_lengkap: record.nama_lengkap,
                nama_depan: record.nama_depan,
                nama_belakang: record.nama_belakang,
                phone: record.phone,
                email: record.email
            }
        });
    return json({result})
}

export async function getUserDetail(secret : any,id : number) {
    const path = 'customer/detail/' + id;
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret}});
    const data = await res.json();
    const result = data
        .data
        .map((record : Userslist) => {
            return {id: record.id, alamat: record.alamat, nama_lengkap: record.nama_lengkap, phone: record.phone, email: record.email}
        });
    return json({result})
}

export async function getProduct(secret : any) {
    const path = 'product?page=1&limit=200';
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret}});
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

export async function getProducts(search = "",page = 1) {
    const path = 'product?page=' + page +(search != "" ? '&search='+search:'') + '&limit=8';
    const res = await fetch(apiUrl + path, {headers: key});
    const data = await res.json();
    const result = data.data
        ? data
        : {}
    console.log(path);
    
    return json({result})
}

export async function getPayments(secret: any) {
    const path = 'order/list_payment';
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret}});
    const data = await res.json();
    const result = data.data
        ? data
        : {}
    
    return json({result})
}

export async function createUsers(secret: any,body : any) {

    const path = 'customer/';
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        body: JSON.stringify(body),
        method: "POST"
    });
    const data = await res.json();
    return data;
}

export async function updateUsers(secret: any,id : number, body : any) {
    console.log(JSON.stringify(body));
    const path = 'customer/update/' + id;
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        body: JSON.stringify(body),
        method: "POST"
    });
    const data = await res.json();
    return data;
}

export async function deleteUsers(secret: any,id : number) {
    const path = 'customer/delete/' + id;
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        method: "DELETE"
    });
    const data = await res.json();
    return data;
}

export async function getTransaction(secret: any,search="",page:any,limit:any,id : number = 0) {
    const path = 'order' + (id == 0 ? '?page='+page+'&limit='+limit+'&search='+search+'':'/'+id);
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        method: "GET"
    });
    const data = await res.json();
    return data;
}

export async function createTransaction(body : any,secret: any) {
    const path = 'order/create';
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        body: body,
        method: "POST"
    });
    const data = await res.json();    
    return data;
}

export async function authLogin(body : any) {

    const path = 'auth/login';
    const res = await fetch(apiUrl + path, {
        body: new URLSearchParams({
            'email': body.email,
            'password': body.password,
        }),
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    });
    const data = await res.json();
    return data;
    
}