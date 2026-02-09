// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.


function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str: string): string {
    return str.split('').reverse().join('')
}

console.log(capitalize('hello world'))
console.log(reverseString('hello world'))

// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, 
// в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту 
// и налога на примерных данных.

namespace Finance {
    export class LoanCalculator {
        constructor(
            public principal: number,
            public annualRate: number,
            public months: number
        ) {}

        calculateMonthlyPayment(): number {
            const monthlyRate = this.annualRate / 12 / 100
            return this.principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -this.months))
        }
    }

    export class TaxCalculator {
        constructor(public income: number, public taxRate: number) {}

        calculateTax(): number {
            return this.income * this.taxRate / 100
        }
    }
}

const loan = new Finance.LoanCalculator(100000, 12, 12)
console.log('Monthly Loan Payment:', loan.calculateMonthlyPayment().toFixed(2))

const tax = new Finance.TaxCalculator(50000, 13)
console.log('Income Tax:', tax.calculateTax().toFixed(2))



// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. 
// Внутри `Admin` создайте класс `AdminUser`, 
// который будет иметь свойства для имени, 
// email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(
                public name: string,
                public email: string,
                public isSuperAdmin = false
            ) {}

            grantSuperAdmin() {
                this.isSuperAdmin = true
            }

            revokeSuperAdmin() {
                this.isSuperAdmin = false
            }
        }
    }
}

const admin = new UserManagement.Admin.AdminUser('Sasha', 'sasha@mail.com')
console.log('Admin before:', admin)
admin.grantSuperAdmin()
console.log('Admin after granting super admin:', admin)
admin.revokeSuperAdmin()
console.log('Admin after revoking super admin:', admin)



// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

function generateFibonacci(limit: number): number[] {
    const result: number[] = [];
    let a = 0, b = 1
    while (a <= limit) {
        result.push(a),
        [a, b] = [b, a + b]
    }
    return result
}

function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = []
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i)
    }
    return primes;
}

console.log('Fibonacci up to 50:', generateFibonacci(50))
console.log('Primes up to 50:', generatePrimeNumbers(50))