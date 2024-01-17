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

// const apiUrl = "http://104.248.159.190:4001/api/";
const apiUrl = "https://pos.jahesiiyuy.store/api/";

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

export async function getProducts(secret:any,search = "",page = 1,limit = 8,is_scan = 0) {
    const path = 'product?page=' + page +(search != "" ? '&search='+search:'') + '&limit='+limit+(is_scan == 1 ? "&is_scan=1":"");
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret}});
    const data = await res.json();
    return data
}

export async function getDataDashboard(secret:any,page = 1) {
    const path = 'dashboard?page=' + page + '&limit=10';
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret},method: "GET"});
    const data = await res.json();
    const result = data
        ? data
        : {}    
    return json({result})
}

export async function getPayments(secret: any) {
    const path = 'order/list_payment';
    const res = await fetch(apiUrl + path, {headers: {"x-api-key":secret},method: "GET"});
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

export async function changePayment(body : any,secret: any) {
    const path = 'order/change_payment';
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret},
        body: body,
        method: "POST"
    });
    const data = await res.json();    
    return data;
}

export async function simulatePay(body : any,secret: any) {    
    const path = 'order/simulate_payment';
    const res = await fetch(apiUrl + path, {
        headers: {"x-api-key":secret,"Content-Type":"application/json"},
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