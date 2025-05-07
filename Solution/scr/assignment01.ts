


function formatString(input: string, toUpper: boolean = true): string {

    return toUpper ? input.toUpperCase() : input.toLowerCase();
}


const Task1output1 = formatString("Hello");
const Task1output2 = formatString("Hello", true);
const Task1output3 = formatString("Hello", false);
console.log(Task1output1);
console.log(Task1output2);
console.log(Task1output3);





//


type Books = {
    title: string;
    rating: number
}

function filterByRating(items: Books[]): Books[] {
    return items.filter(item => item.rating >= 4);
}


const items = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
]

const Task2output1 = console.log(filterByRating(items))




//

function concatenateArrays<T>(...arrays: T[][]): T[] {

    return ([] as T[]).concat(...arrays);
}

const Task3output1 = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
const Task3output2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

console.log(Task3output1);
console.log(Task3output2);



//


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        return (`Make:${this.make}, year${this.year}`);
    }
}


class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        return (`Model:${this.model}`)
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");
const Task4output1 = myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
const Task4output2 = myCar.getModel();  // Output: "Model: Corolla"
console.log(Task4output1);
console.log(Task4output2);





//

function processValue(value: string | number) {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
}

console.log(processValue("hello")); // Output: 5
console.log(processValue(10));      // Output: 20


//



interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((max, product) => product.price > max.price ? product : max
    );

}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }


//

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
   if(day>=Day.Monday && day<=Day.Friday){
    return "Weekday";
   }else{
    return "Weekend";
   }
    }


console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"


//



async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((res, rej)=>{
        setTimeout(() => {
            if(n>=0){
                res (n*n)
            }else{
                rej(new Error("Negative number not allowed")); 
   
    
            }
        }, 1000);
    })

}


squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed


