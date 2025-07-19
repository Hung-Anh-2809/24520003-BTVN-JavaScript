function Nhap()
{
    const n = parseInt(prompt('Nhap so luong: '));
    let numbers = [];
    for (let i = 0; i < n; i++)
    {
        const inputValue = parseInt(prompt(`Nhap phan tu thu ${i + 1}: `));
        numbers.push(inputValue);
    }
    return numbers;
}

function mangChan(numbers)
{
    return numbers.filter(num => num % 2 === 0);
}

function soLonNhat(numbers)
{
    return Math.max(...numbers);
}

function mangLonHonKhong(numbers)
{
    return numbers.filter(num => num > 0);
}

const numbers = Nhap();

const evenNumbers = mangChan(numbers);
const maxElement = soLonNhat(numbers);
const positiveNumbers = mangLonHonKhong(numbers);

console.log(`Mang: ${numbers}`);
console.log(`Cac so chan: ${evenNumbers}`);
console.log(`So lon nhat: ${maxElement}`);
console.log(`Mang chua cac so lon hon 0: ${positiveNumbers}`);