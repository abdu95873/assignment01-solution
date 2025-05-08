What are some differences between interfaces and types in TypeScript?

Introduction:

To make types more reliable and powerful, TypeScript offers two strong tools — interface and type. In this blog, we’ll learn in simple English what interface and type are, how they are used, and when to choose which one.



What is an Interface?

An interface in TypeScript is a structure that defines how an object should look and helps keep the type safe. We usually use interface when we want to define the structure of an object or a class.


# Interface for a Simple Object:

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Rahim",
  age: 25,
};

# Using Interface in Class:

interface Person {
  name: string;
  speak(): void;
}

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

# Optional Property:

interface Product {
  name: string;
  price?: number; // optional
}

const item: Product = { name: "Laptop" };

# Function Type Interface:

interface AddFunc {
  (a: number, b: number): number;
}

const add: AddFunc = (x, y) => x + y;

# Extending Interface:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Tommy",
  breed: "Labrador"
};





What is a type?

In TypeScript, type can define not only objects, but also primitives, functions, literals, tuples, unions/intersections, and even conditional or recursive types.

# Object Type:

type User = {
  name: string;
  age: number;
};

# Union Type:

type ID = string | number;

# Intersection Type:

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

# Tuple Type:

type Point = [number, number];

# Primitive Type:

type Username = string;
type Count = number;
type IsActive = boolean;

# Function Type:

type Greet = (name: string) => string;

# Literal Type:

type Direction = 'left' | 'right' | 'up' | 'down';

# Mapped Type:

type User = {
  name: string;
  age: number;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

# Conditional Type:

type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"

# Recursive Type:

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };




 Interface vs Type:

* If you only want to define the structure of an object or class —  use interface.

* If you need complex type systems like union, intersection, tuple, literal or conditional types —  use type.

* If you need reusability, extension, and inheritance — interface is more readable and scalable.

* If you need flexible and advanced typing — go with type.




Conclusion:

In TypeScript, both interface and type have their own use cases. If you want to work with object and class structures, use interface. But if you need advanced type manipulation, then type is the right choice. Using both wisely in real projects can make your code cleaner and easier to manage.



//////////////////////////////////////////////



Explain the difference between any, unknown, and never types in TypeScript.




Introduction:
In TypeScript, any, unknown, and never types are used in different situations where you may not know what value a variable will hold or whether a value will be returned. Each of these types serves a specific purpose, and understanding the differences is important to write safer and more maintainable code.

any Type:
Use any type when you don't know what type a variable will be and need complete flexibility. A variable with any type can hold any kind of value — string, number, object, etc. However, it's often better to avoid using it too much because it does not provide type safety.


let data: any = 5;
data = "hello";
data.toUpperCase(); // No error


In short:

* Can hold any type of value.

* Can be used without type checks.

* Useful for temporary or unknown values, but lacks type safety.


unknown Type:
Use the unknown type when you don’t know the variable's type but want to maintain type safety. It can hold any value, but it is safer than any because you must check the type before using it.


let input: unknown = "world";

// input.toUpperCase(); // This will cause an error

if (typeof input === "string") {
  console.log(input.toUpperCase());
}


In short:

* Can hold any type of value.

* Type check is mandatory before usage.

* Ensures safe handling with proper type checking.



never Type:
The never type is used in error handling or logic where no value will ever be returned. A variable with the never type cannot hold any value.


function crash(): never {
  throw new Error("Something went wrong");
}

function endless(): never {
  while (true) {}
}


In short:

* Cannot hold any value.

* No type checks needed.

* Used in functions or code blocks that never return anything.




Conclusion:
In TypeScript, the any type gives full flexibility but lacks type safety. The unknown type ensures type safety by requiring a type check before use. On the other hand, the never type is used for functions that never return a value, such as error handling or infinite loops.