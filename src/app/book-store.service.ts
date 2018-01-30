import { Injectable } from '@angular/core';
import { Book } from './book';
import { Jsonp } from '@angular/http';

@Injectable()
export class BookStoreService {

    BOOKS: Book[];

    sBOOKS = [
        {
            "course": "4 inf",
            "group": 3,
            "name": "Mis Números 2. Matemáticas para infantil",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1527.9",
            "price": 6.16
        },
        {
            "course": "4 inf",
            "group": 4,
            "name": "Mis Números 3. Matemáticas para infantil",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1528.6",
            "price": 6.16
        },
        {
            "course": "5 inf",
            "group": 6,
            "name": "Mis números 6",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1530.9",
            "price": 6.16
        },
        {
            "course": "1Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.2017.4",
            "price": 30.67
        },
        {
            "course": "1Pri",
            "group": 2,
            "name": "Cuadernos de matemáticas 1ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1738.9",
            "price": 8.02
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Cuadernos de matemáticas 2ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1739.6",
            "price": 8.02
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Cuadernos de matemáticas 3ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1740.2",
            "price": 8.02
        },
        {
            "course": "1Pri",
            "group": 3,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8538.2",
            "price": 30.67
        },
        {
            "course": "1Pri",
            "group": 4,
            "name": "Ciències naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7950.0",
            "price": 22.18
        },
        {
            "course": "1Pri",
            "group": 5,
            "name": "Ciències socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7952.4",
            "price": 22.18
        },
        {
            "course": "1Pri",
            "group": 6,
            "name": "Lecturas La Nave de los Libros",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.294.6988.2",
            "price": 23.16
        },
        {
            "course": "1Pri",
            "group": 7,
            "name": "Música",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7636.3",
            "price": 22.41
        },
        {
            "course": "1Pri",
            "group": 8,
            "name": "Quadern música",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7637.0",
            "price": 7.07
        },
        {
            "course": "2Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.2547.6",
            "price": 30.67
        },
        {
            "course": "2Pri",
            "group": 2,
            "name": "Cuadernos de matemáticas 1ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1793.8",
            "price": 8.02
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Cuadernos de matemáticas 2ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1794.5",
            "price": 8.02
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Cuadernos de matemáticas 3ºTrim",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1795.2",
            "price": 8.02
        },
        {
            "course": "2Pri",
            "group": 3,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8563.4",
            "price": 30.67
        },
        {
            "course": "2Pri",
            "group": 4,
            "name": "Ciències Naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7967.8",
            "price": 22.18
        },
        {
            "course": "2Pri",
            "group": 5,
            "name": "Ciències Socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7971.5",
            "price": 22.18
        },
        {
            "course": "2Pri",
            "group": 6,
            "name": "Lecturas La Nave de los Libros",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.0114.2",
            "price": 23.16
        },
        {
            "course": "2Pri",
            "group": 7,
            "name": "Música",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7904.3",
            "price": 22.41
        },
        {
            "course": "2Pri",
            "group": 8,
            "name": "Quadern música",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7905.0",
            "price": 7.07
        },
        {
            "course": "3Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1286.5",
            "price": 30.67
        },
        {
            "course": "3Pri",
            "group": 2,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7976.0",
            "price": 30.67
        },
        {
            "course": "3Pri",
            "group": 3,
            "name": "Ciències naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8367.8",
            "price": 22.18
        },
        {
            "course": "3Pri",
            "group": 4,
            "name": "Ciències socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8338.8",
            "price": 22.18
        },
        {
            "course": "3Pri",
            "group": 5,
            "name": "Lecturas La Nave de los Libros",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1123.3",
            "price": 23.16
        },
        {
            "course": "3Pri",
            "group": 6,
            "name": "Música.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7638.7",
            "price": 22.41
        },
        {
            "course": "4Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.830.5609.7",
            "price": 30.67
        },
        {
            "course": "4Pri",
            "group": 2,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8302.9",
            "price": 30.67
        },
        {
            "course": "4Pri",
            "group": 3,
            "name": "Ciències Naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8358.6",
            "price": 22.18
        },
        {
            "course": "4Pri",
            "group": 4,
            "name": "Ciències Socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8902.1",
            "price": 22.18
        },
        {
            "course": "4Pri",
            "group": 5,
            "name": "Lecturas La Nave de los Libros",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1127.1",
            "price": 23.16
        },
        {
            "course": "4Pri",
            "group": 6,
            "name": "Música.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7907.4",
            "price": 22.41
        },
        {
            "course": "5Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.1066.3",
            "price": 30.67
        },
        {
            "course": "5Pri",
            "group": 2,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7881.7",
            "price": 30.67
        },
        {
            "course": "5Pri",
            "group": 3,
            "name": "Ciències Naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8392.0",
            "price": 22.18
        },
        {
            "course": "5Pri",
            "group": 4,
            "name": "Ciències Socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8960.1",
            "price": 22.18
        },
        {
            "course": "5Pri",
            "group": 5,
            "name": "Música.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7900.5",
            "price": 22.41
        },
        {
            "course": "6Pri",
            "group": 1,
            "name": "Matemáticas.",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.3033.3",
            "price": 30.67
        },
        {
            "course": "6Pri",
            "group": 2,
            "name": "Llengua valenciana.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8551.1",
            "price": 30.67
        },
        {
            "course": "6Pri",
            "group": 3,
            "name": "Ciències Naturals.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8488.0",
            "price": 22.18
        },
        {
            "course": "6Pri",
            "group": 4,
            "name": "Ciències Socials.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8607.5",
            "price": 22.18
        },
        {
            "course": "6Pri",
            "group": 5,
            "name": "Música.",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7910.4",
            "price": 22.41
        },
        {
            "course": "1ESO",
            "group": 1,
            "name": "Llengua i literatura",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7926.5",
            "price": 32.84
        },
        {
            "course": "1ESO",
            "group": 2,
            "name": "Geografia i història",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8334.0",
            "price": 33.87
        },
        {
            "course": "2ESO",
            "group": 1,
            "name": "Llengua i literatura",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8291.6",
            "price": 32.84
        },
        {
            "course": "2ESO",
            "group": 2,
            "name": "Geografia i història",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8812.3",
            "price": 33.87
        },
        {
            "course": "2ESO",
            "group": 3,
            "name": "Educació plàstica i visual nivell 1. Serie crea",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.904.7204.0",
            "price": 32.36
        },
        {
            "course": "3ESO",
            "group": 1,
            "name": "Llengua i literatura",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.980.7925.8",
            "price": 32.84
        },
        {
            "course": "3ESO",
            "group": 2,
            "name": "Geografia e Historia",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8353.1",
            "price": 33.87
        },
        {
            "course": "3ESO",
            "group": 3,
            "name": "Educació plàstica i visual nivell 2. Serie crea",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.904.7221.7",
            "price": 32.36
        },
        {
            "course": "4ESO",
            "group": 1,
            "name": "Llengua i literatura",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8313.5",
            "price": 32.84
        },
        {
            "course": "4ESO",
            "group": 2,
            "name": "Geografia e Historia",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.905.8200.8",
            "price": 33.87
        },
        {
            "course": "4ESO",
            "group": 3,
            "name": "Educació plàstica i visual 4º. Serie crea",
            "editorial": "SANTILLANA",
            "lang": "V",
            "ISBN": "978.84.904.7900.1",
            "price": 32.36
        },
        {
            "course": "4ESO",
            "group": 14,
            "name": "Economia",
            "editorial": "SANTILLANA",
            "lang": "C",
            "ISBN": "978.84.680.2835.4",
            "price": 31.76
        },
        {
            "course": "3 Inf",
            "group": 2,
            "name": "Retos 3 años 1º Trimestre",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.2876.2",
            "price": 68
        },
        {
            "course": "3 Inf",
            "group": 3,
            "name": "Retos 3 años 2º Trimestre",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.2877.9",
            "price": 68
        },
        {
            "course": "3 Inf",
            "group": 4,
            "name": "Reptes 3 anys 3r Trimestre",
            "editorial": "ANAYA",
            "lang": "V",
            "ISBN": "978.84.698.3009.3",
            "price": 68
        },
        {
            "course": "3 Inf",
            "group": 5,
            "name": "Grafomotricidad Monstruosa 1",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.2984.4",
            "price": 6
        },
        {
            "course": "3 Inf",
            "group": 6,
            "name": "Grafomotricidad Monstruosa 2",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.2985.1",
            "price": 6
        },
        {
            "course": "3 Inf",
            "group": 7,
            "name": "Tic Tic Tac Matemáticas",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.2987.5",
            "price": 8
        },
        {
            "course": "1Pri",
            "group": 9,
            "name": "Lengua castellana. Aprender es crecer",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.4527.3",
            "price": 23
        },
        {
            "course": "1Pri",
            "group": 10,
            "name": "Cuadernos de lengua 1ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.4528.0",
            "price": 5
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Cuadernos de lengua 2ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.4529.7",
            "price": 5
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Cuadernos de lengua 3ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.4530.3",
            "price": 5
        },
        {
            "course": "2Pri",
            "group": 9,
            "name": "Lengua castellana. Aprender es crecer.",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.7395.5",
            "price": 23
        },
        {
            "course": "2Pri",
            "group": 10,
            "name": "Cuadernos de lengua 1ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.7396.2",
            "price": 5
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Cuadernos de lengua 2ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.7397.9",
            "price": 5
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Cuadernos de lengua 3ºTrim",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.7398.6",
            "price": 5
        },
        {
            "course": "3Pri",
            "group": 7,
            "name": "Lengua castellana",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.4763.5",
            "price": 23
        },
        {
            "course": "4Pri",
            "group": 7,
            "name": "Lengua Castellana.",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.7755.7",
            "price": 23
        },
        {
            "course": "5Pri",
            "group": 6,
            "name": "Lengua Castellana.",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.3292.1",
            "price": 23
        },
        {
            "course": "6Pri",
            "group": 6,
            "name": "Lengua Castellana.",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.3298.3",
            "price": 23
        },
        {
            "course": "6Pri",
            "group": 7,
            "name": "Ortografía – paso a paso. Cuaderno nº16",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.667.1784.6",
            "price": 4
        },
        {
            "course": "6Pri",
            "group":0,
            "name": "Ortografía – paso a paso. Cuaderno nº17",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.667.1785.4",
            "price": 4
        },
        {
            "course": "6Pri",
            "group":0,
            "name": "Ortografía – paso a paso. Cuaderno nº18",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.667.1786.1",
            "price": 4
        },
        {
            "course": "1ESO",
            "group": 3,
            "name": "Lengua y literatura",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.678.5070.3",
            "price": 24
        },
        {
            "course": "1ESO",
            "group": 4,
            "name": "Biología i geología",
            "editorial": "ANAYA",
            "lang": "V",
            "ISBN": "978.84.678.5151.9",
            "price": 24
        },
        {
            "course": "2ESO",
            "group": 4,
            "name": "Lengua y literatura",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.1420.8",
            "price": 24
        },
        {
            "course": "3ESO",
            "group": 4,
            "name": "Biologia i geologia.",
            "editorial": "ANAYA",
            "lang": "V",
            "ISBN": "978.84.678.5302.5",
            "price": 24
        },
        {
            "course": "4ESO",
            "group": 4,
            "name": "Biologia y Geologia",
            "editorial": "ANAYA",
            "lang": "V",
            "ISBN": "978.84.698.1211.2",
            "price": 24
        },
        {
            "course": "4ESO",
            "group": 5,
            "name": "Iniciación a la actividad emprendedora y empresarial.",
            "editorial": "ANAYA",
            "lang": "C",
            "ISBN": "978.84.698.1157.3",
            "price": 24
        },
        {
            "course": "3 Inf",
            "group": 1,
            "name": "Religión católica 3 años",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3202.4",
            "price": 15
        },
        {
            "course": "3 Inf",
            "group": 8,
            "name": "Lectoescritura 1",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3252.9",
            "price": 9
        },
        {
            "course": "4 inf",
            "group": 1,
            "name": "Inglés. Oxford Splash",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.940.2516.4",
            "price": 21
        },
        {
            "course": "4 inf",
            "group": 2,
            "name": "Religión católica. 4 años.Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3203.1",
            "price": 15
        },
        {
            "course": "4 inf",
            "group": 5,
            "name": "Lectoescritura 2. Creceletras. Montessori",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3240.6",
            "price": 12
        },
        {
            "course": "4 inf",
            "group": 6,
            "name": "Lectoescritura 3. Creceletras. Montessori",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3241.3",
            "price": 12
        },
        {
            "course": "4 inf",
            "group": 7,
            "name": "Grafismes. Minitribu 4",
            "editorial": "TEIDE",
            "lang": "V",
            "ISBN": "978.84.307.1273.1",
            "price": 8
        },
        {
            "course": "4 inf",
            "group": 8,
            "name": "Lengua 4 años. Minitribu",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.1195.6",
            "price": 29
        },
        {
            "course": "4 inf",
            "group": 9,
            "name": "Cóm soc? Minitribu 4. Descuberta de l'entorn",
            "editorial": "TEIDE",
            "lang": "V",
            "ISBN": "978.84.307.1261.8",
            "price": 9
        },
        {
            "course": "4 inf",
            "group": 10,
            "name": "Qué m'envolta. Minitribu 4",
            "editorial": "TEIDE",
            "lang": "V",
            "ISBN": "978.84.307.1258.8",
            "price": 9
        },
        {
            "course": "4 inf",
            "group": 11,
            "name": "Com em sent?Minitribu 4",
            "editorial": "TEIDE",
            "lang": "V",
            "ISBN": "978.84.307.1222.9",
            "price": 9
        },
        {
            "course": "5 inf",
            "group": 1,
            "name": "Lengua 5 años Minitribu",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.1214.4",
            "price": 29
        },
        {
            "course": "5 inf",
            "group": 2,
            "name": "Matemáticas 5 años Minitribu",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.1233.5",
            "price": 29
        },
        {
            "course": "5 inf",
            "group": 3,
            "name": "Cavernícolas Minitribu 5 años",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.1266.3",
            "price": 9
        },
        {
            "course": "5 inf",
            "group": 4,
            "name": "Cinco y medio operaciones",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.0982.3",
            "price": 4
        },
        {
            "course": "5 inf",
            "group": 5,
            "name": "Cinco y medio numeros",
            "editorial": "TEIDE",
            "lang": "C",
            "ISBN": "978.84.307.0973.1",
            "price": 4
        },
        {
            "course": "5 inf",
            "group": 7,
            "name": "Lectoescritura Montessori 3",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3241.3",
            "price": 11
        },
        {
            "course": "5 inf",
            "group": 8,
            "name": "Lectoescritura Montessori 4",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3242.0",
            "price": 11
        },
        {
            "course": "5 inf",
            "group": 9,
            "name": "Lectoescritura Montessori 5",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3243.7",
            "price": 11
        },
        {
            "course": "5 inf",
            "group": 10,
            "name": "Religión católica Educación infantil 5 años",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.3204.8",
            "price": 15
        },
        {
            "course": "5 inf",
            "group": 11,
            "name": "Inglés. OXFOD SPLASH",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.940.2518.8",
            "price": 21
        },
        {
            "course": "1Pri",
            "group": 11,
            "name": "Religión católica 1.Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1707.6",
            "price": 29
        },
        {
            "course": "1Pri",
            "group": 12,
            "name": "Explorers 1. Class book. C. Covill",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0994.7",
            "price": 22
        },
        {
            "course": "1Pri",
            "group": 13,
            "name": "Explorers 1.  Activity book. C. Covill",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0857.5",
            "price": 15
        },
        {
            "course": "1Pri",
            "group": 14,
            "name": "Plástica. Arts and crafts 2. Module 1",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.8258.7",
            "price": 10
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Plástica. Arts and crafts 2. Module 2",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.8259.4",
            "price": 10
        },
        {
            "course": "1Pri",
            "group":0,
            "name": "Plástica. Arts and crafts 2. Module 3",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.8260.0",
            "price": 10
        },
        {
            "course": "2Pri",
            "group": 11,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1708.3",
            "price": 29
        },
        {
            "course": "2Pri",
            "group": 12,
            "name": "Explorers 2. Class book. C. Conill",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0995.4",
            "price": 22
        },
        {
            "course": "2Pri",
            "group": 13,
            "name": "Explorers 2. Activity book. C. Conill",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0875.9",
            "price": 15
        },
        {
            "course": "2Pri",
            "group": 14,
            "name": "Plástica. Arts and crafts 2. Module 1",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.9219.7",
            "price": 10
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Plástica. Arts and crafts 2. Module 2",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.9220.3",
            "price": 10
        },
        {
            "course": "2Pri",
            "group":0,
            "name": "Plástica. Arts and crafts 2. Module 3",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.9221.0",
            "price": 10
        },
        {
            "course": "3Pri",
            "group": 8,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1709.0",
            "price": 29
        },
        {
            "course": "3Pri",
            "group": 9,
            "name": "Inglés: explorers 3 class book.  Nina lauder",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0996.1",
            "price": 22
        },
        {
            "course": "3Pri",
            "group": 10,
            "name": "Inglés: explorers 3  activity book.  Nina lauder",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0893.3",
            "price": 18
        },
        {
            "course": "3Pri",
            "group": 11,
            "name": "Plástica. Think do learn arts &crafts",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.8361.4",
            "price": 23
        },
        {
            "course": "4Pri",
            "group": 8,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1710.6",
            "price": 29
        },
        {
            "course": "4Pri",
            "group": 9,
            "name": "Inglés: explorers 4 class book. Suzanne Torres",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0997.8",
            "price": 22
        },
        {
            "course": "4Pri",
            "group": 10,
            "name": "Inglés : explorers 4 activity book. Suzanne Torres",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0909.1",
            "price": 18
        },
        {
            "course": "4Pri",
            "group": 11,
            "name": "Plástica. Think do learn arts &crafts",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.9238.8",
            "price": 23
        },
        {
            "course": "5Pri",
            "group": 7,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1711.3",
            "price": 29
        },
        {
            "course": "5Pri",
            "group": 8,
            "name": "Inglés: “Great Explorers” Class book 5.",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.2049.3",
            "price": 22
        },
        {
            "course": "5Pri",
            "group": 9,
            "name": "Inglés: : “Great Explorers” Activity  book. 5",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0778.3",
            "price": 18
        },
        {
            "course": "5Pri",
            "group": 10,
            "name": "Plástica. Think do learn arts &crafts",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.8366.9",
            "price": 24
        },
        {
            "course": "6Pri",
            "group": 8,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1712.0",
            "price": 29
        },
        {
            "course": "6Pri",
            "group": 9,
            "name": "Inglés: “ Great Explorers  Class book 6.",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.2050.9",
            "price": 22
        },
        {
            "course": "6Pri",
            "group": 10,
            "name": "Inglés: Great Explorers  Activity  book 6.",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.945.0798.1",
            "price": 18
        },
        {
            "course": "6Pri",
            "group": 11,
            "name": "Plástica. Think do learn arts &crafts",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.84.673.9239.5",
            "price": 24
        },
        {
            "course": "1ESO",
            "group": 5,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.2433.3",
            "price": 32
        },
        {
            "course": "1ESO",
            "group": 6,
            "name": "Matemàtiques",
            "editorial": "OXFORD",
            "lang": "V",
            "ISBN": "978.84.673.7543.5",
            "price": 32
        },
        {
            "course": "1ESO",
            "group": 7,
            "name": "Inglés: English plus. Student’s Book 1",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.947.0049.8",
            "price": 29
        },
        {
            "course": "1ESO",
            "group": 8,
            "name": "Inglés: English plus. Workbook 1",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.4773.5",
            "price": 20
        },
        {
            "course": "1ESO",
            "group": 9,
            "name": "Tecnología. Estructuras",
            "editorial": "OXFORD",
            "lang": "C",
            "ISBN": "978.84.673.5965.7",
            "price": 8
        },
        {
            "course": "2ESO",
            "group": 5,
            "name": "Física y Química",
            "editorial": "EDEBE",
            "lang": "V",
            "ISBN": "978.84.834.8372.5",
            "price": 41
        },
        {
            "course": "2ESO",
            "group": 6,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1734.2",
            "price": 32
        },
        {
            "course": "2ESO",
            "group": 7,
            "name": "Matemàtiques",
            "editorial": "OXFORD",
            "lang": "V",
            "ISBN": "978.01.905.0098.6",
            "price": 32
        },
        {
            "course": "2ESO",
            "group": 8,
            "name": "Inglés: English plus. Student’s Book 2",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.0.19.484815.2",
            "price": 29
        },
        {
            "course": "2ESO",
            "group": 9,
            "name": "Inglés: English plus. Workbook 2",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.4776.6",
            "price": 20
        },
        {
            "course": "2ESO",
            "group": 10,
            "name": "Tecnología. Mecanismos",
            "editorial": "OXFORD",
            "lang": "C",
            "ISBN": "978.84.673.6402.6",
            "price": 8
        },
        {
            "course": "3ESO",
            "group": 5,
            "name": "Lengua y literatura",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.2063.2",
            "price": 41
        },
        {
            "course": "3ESO",
            "group": 6,
            "name": "Religión católica. Zain",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.2111.0",
            "price": 32
        },
        {
            "course": "3ESO",
            "group": 7,
            "name": "Física i química.",
            "editorial": "EDEBE",
            "lang": "V",
            "ISBN": "978.84.834.8473.9",
            "price": 41
        },
        {
            "course": "3ESO",
            "group": 8,
            "name": "Matemàtiques. Acadèmiques.",
            "editorial": "OXFORD",
            "lang": "V",
            "ISBN": "978.84.673.7546.6",
            "price": 32
        },
        {
            "course": "3ESO",
            "group": 9,
            "name": "Inglés: English plus. Student’s Book 3",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.0.19.484829.9",
            "price": 29
        },
        {
            "course": "3ESO",
            "group": 10,
            "name": "Inglés: English plus. Workbook 3",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.4779.7",
            "price": 20
        },
        {
            "course": "3ESO",
            "group": 11,
            "name": "Iniciación a la actividad emprendedora y empresarial.",
            "editorial": "BRUÑO",
            "lang": "C",
            "ISBN": "978.84.696.0931.6",
            "price": 23
        },
        {
            "course": "3ESO",
            "group": 12,
            "name": "Tecnología. Circuitos eléctricos y electrónicos",
            "editorial": "OXFORD",
            "lang": "C",
            "ISBN": "978.84.673.6418.7",
            "price": 8
        },
        {
            "course": "4ESO",
            "group": 6,
            "name": "Lengua y literatura",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1844.8",
            "price": 43
        },
        {
            "course": "4ESO",
            "group": 7,
            "name": "Física i química",
            "editorial": "EDEBE",
            "lang": "V",
            "ISBN": "978.84.834.8373.2",
            "price": 41
        },
        {
            "course": "4ESO",
            "group": 8,
            "name": "Religión católica 4",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1727.4",
            "price": 32
        },
        {
            "course": "4ESO",
            "group": 9,
            "name": "Matemàtiques orientades a les ensenyances académiques",
            "editorial": "OXFORD",
            "lang": "V",
            "ISBN": "978.01.905.0106.8",
            "price": 32
        },
        {
            "course": "4ESO",
            "group": 10,
            "name": "Matemàtiques orientades a les ensenyances aplicades",
            "editorial": "OXFORD",
            "lang": "V",
            "ISBN": "978.01.905.0114.3",
            "price": 32
        },
        {
            "course": "4ESO",
            "group": 11,
            "name": "Inglés: English plus. Student’s Book 4",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "978.01.948.4841.1",
            "price": 29
        },
        {
            "course": "4ESO",
            "group": 12,
            "name": "Inglés: English plus. Workbook 4",
            "editorial": "OXFORD",
            "lang": "I",
            "ISBN": "987.01.948.4782.7",
            "price": 20
        },
        {
            "course": "4ESO",
            "group": 13,
            "name": "Latin",
            "editorial": "EDEBE",
            "lang": "C",
            "ISBN": "978.84.683.1653.6",
            "price": 41
        }
    ]

    constructor(private jsonp: Jsonp) {
        jsonp.request('https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/webtask-sample?callback=JSONP_CALLBACK').toPromise()
            .then(res=>{ console.log(res); return res.text()})
            .catch(e=>console.error(e))



        var count = 1;
        this.BOOKS = this.sBOOKS.map(b =>
            new Book(
                count++,
                b.group,
                b.name,
                b.editorial,
                b.ISBN,
                b.course,
                b.lang,
                b.price
            )).sort((a,b)=>a.group>b.group?1:b.group>a.group?-1:0)

    }

    getBooks(): Promise<Book[]> {
        console.log(this.BOOKS);
        return Promise.resolve(this.BOOKS);
    }

}
