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

const apiUrl = "http://localhost:4001/api/";
const key = {
    "x-api-key": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4LCJuYW1hX2RlcGFuIjoiU29kaWsiL" +
            "CJuYW1hX2JlbGFrYW5nIjoiSmF5YW1hbnMiLCJlbWFpbCI6InNvamF5QGdtLmNvbSIsInBob25lIjo" +
            "iNjI4NzcxMjYzNjEyMyIsInN0YXR1cyI6MSwicmVnX3NvdXJjZSI6ImVjY3MtaWQiLCJjb21wYW55X" +
            "2lkIjoyMTcsImlhdCI6MTcwMjg5MzQwNX0.o0QadIloGprWBWDFqJUsIEQQgewR0XzH4-40IwrxeFx" +
            "dO3sqg9AhJWpZPS8l2VAih2vt2gbkJHEmRNs1ePipXU4SwFf4a_TA7zR9xkXim_LejVghkUa8KAh_q" +
            "TUOJ2x34Y4K1Qd6HKN3F-LOU6dtUyIovPjhor8VGZtUrAmz2eTTsYrFkrRc7KZg_rxf0-KQNs7FxjQ" +
            "ADebMuVunvmFi2Iehi64aNQZyCzMFGNbSvAdLEeJ3mH6SnNVzZFA1tUGH1GbiDPe-7U8XPOsDIRJVO" +
            "u1Dw2a2Lh4Jz81F5kHYTGIVvluRdGPbt4HTcyr-ek6iJa7kERFL3Q842q6Ej7pKEoKadfVzYgoWccw" +
            "cwNGrtHl5mgdYmu2b6t65ShvnSYN43pqk6IqbAmySDqEu6qAu9Yq5nhQgU6LA69kfNuJDiiixJ5PS8" +
            "y0zS6kFTtU309YwJg4oDmTXZRPT9ccTjiETQ_0HOIXR2LzgnUYByJLrAXv84lafl4ZStAVZGnw0Li6" +
            "xyHgy0_dYM7FZgXMKer00Dn-bJPWaH8dhuztP5HpN6wRYw4XLtAEYEJFGSj038vMrlDtbSPLFC31_d" +
            "2YcwU_Wyp-FQmJeJKD88Sd3g7ruYht3Q25qVraFK2K1jcd5BNKjVfImnSwXdMt99qSLn9xkfiYiDt7" +
            "4lu416ol_0nrfWwM"
}

export async function getUsers() {
    const path = 'customer?page=1&limit=200';
    const res = await fetch(apiUrl + path, {headers: key});
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

export async function getUserDetail(id : number) {
    const path = 'customer/detail/' + id;
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
    const path = 'product?page=1&limit=200';
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

export async function getProducts(search = false,page = 1) {
    const path = 'product?page=' + (search != false ? 'search='+search:'') + page + '&limit=8';
    const res = await fetch(apiUrl + path, {headers: key});
    const data = await res.json();
    const result = data.data
        ? data
        : {}
    return json({result})
}

export async function createUsers(body : any) {

    const path = 'customer/';
    const res = await fetch(apiUrl + path, {
        headers: key,
        body: JSON.stringify(body),
        method: "POST"
    });
    const data = await res.json();
    return data;
}

export async function updateUsers(id : number, body : any) {
    console.log(JSON.stringify(body));
    const path = 'customer/update/' + id;
    const res = await fetch(apiUrl + path, {
        headers: key,
        body: JSON.stringify(body),
        method: "POST"
    });
    const data = await res.json();
    return data;
}

export async function deleteUsers(id : number) {
    const path = 'customer/delete/' + id;
    const res = await fetch(apiUrl + path, {
        headers: key,
        method: "DELETE"
    });
    const data = await res.json();
    return data;
}

export async function getTransaction(id : number = 0) {
    const path = 'order' + (id == 0 ? '':'/'+id);
    const res = await fetch(apiUrl + path, {
        headers: key,
        method: "GET"
    });
    const data = await res.json();
    return data;
}

export async function createTransaction(body : any) {
    const path = 'order/create';
    const res = await fetch(apiUrl + path, {
        headers: key,
        body: body,
        method: "POST"
    });
    const data = await res.json();
    return data;
}
