/*Q21 - They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/

interface item {
    name: string
    price: number
    contact: number
}
// creat two object
const book: item ={
    name: 'HARDY BOY'
    price: 800,
    contact: 256365644
    }

    const friut: item={
        name: 'apple'
        price: 2225525552,
        contact: 45684568
    }
    console.log(` book name: ${book.name}, price: $${book.price} contact no ${book.contact} `)
    console.log(` vendour name: ${friut.name}, contact  no ${friut.price} contact no ${friut.contact}`)

    