

let cars = [
    {
        model: `malibu`,
        company: `gm`,
        price: 32000,
        year: 2022,
        details: {
            color: `white`,
            wheels: 3,
            hatch: true,
            beaten: false,
            mileAge: 10000,
        }, 
    },
    {
        model: `gentra`,
        company: `gm`,
        price: 20000,
        year: 2020,
        details: {
            color: `black`,
            wheels: 4,
            hatch: true,
            beaten: false,
            mileAge: 1000,
        }, 
    },
    {
        model: `nexia 1.6`,
        company: `gm`,
        price: 8000,
        year: 2015,
        details: {
            color: `white`,
            wheels: 4,
            hatch: false,
            beaten: true,
            mileAge: 70000,
        }, 
    },
    {
        model: `Mercedes CLS 6.3`,
        company: `Mercedes Benz`,
        price: 50000,
        year: 2008,
        details: {
            color: `black`,
            wheels: 4,
            hatch: true,
            beaten: false,
            mileAge: 100000,
        }, 
    },
    {
        model: `Mercedes Gelik 6 x 6`,
        company: `Mercedes Benz`,
        price: 1250000,
        year: 2023,
        details: {
            color: `gold`,
            wheels: 12,
            hatch: true,
            beaten: false,
            mileAge: 2000,
        }, 
    },
    {
        model: `Жигули 2107`,
        company: `Lada`,
        price: 4000,
        year: 2008,
        details: {
            color: `white`,
            wheels: 4,
            hatch: false,
            beaten: true,
            mileAge: 700000,
        }, 
    },
    {
        model: `Cobalt`,
        company: `gm`,
        price: 15000,
        year: 2020,
        details: {
            color: `white`,
            wheels: 4,
            hatch: false,
            beaten: false,
            mileAge: 64000,
        }, 
    }, 
    {
        model: `Tahoe`,
        company: `gm`,
        price: 50000,
        year: 2023,
        details: {
            color: `black`,
            wheels: 4,
            hatch: true,
            beaten: false,
            mileAge: 400,
        }, 
    },

]


let vopros = prompt(`Сколько у вас есть денег чтобы мы предложили вам машину до этой цены`)

let mashini = []
cars.filter(item => {
    if(item.price <= vopros) {
        mashini.push(` model: ${item.model}, price: ${item.price}  \n`)
    } 
})

let otveti = alert('По вашей ценовой категории найдено вот эти машины ' + mashini)

let year_car = 2020

let falsecar = []

cars.filter(car => {
    if(car.year <= year_car) {
falsecar.push(`model: ${car.model}, year: ${car.year} ` )
    }
})
console.log(falsecar);





























// let from = prompt('from')
// let up = prompt('up')


// let result = []

// cars.forEach(car => {
//     if (car.price >= from && car.price <= up) {
//         result.push(`model: ${car.model}, price: ${car.price} \n`)
//     }
// })

// let findedCar = []


// let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")
// cars.filter((cars) => {
//     if (oneOfThem === cars.model) {
//         findedCar.push(cars.model)
//     }

// })
 
//     let pokupka = confirm(`Вы действитльно хотите купить машину?` + findedCar); 
//     let narx = prompt(`Введите сумму которая у вас есть `)
//     cars.filter(car => {
//         if (car.price >= narx) {
//             alert(`Поздравляю с покупкой`)
//         } else {
//             alert(`у тебя денег нету собака`)
//         }
//     })
//     if (pokupka === true) {
//         alert(`Поздравляю с покупкой`) 

//     } else {
//      alert(`Вы отклонили запрос на покупку автомобиля`)
//     }





