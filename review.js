const variable = 'ini string'
const integer = 1092
const boolean = true

const objek = {
    variable: 'ini string',
    integer: 12091,
    boolean: true
}

const array = ['strs', 12313, true, Object]

array.map((data,index) => {
    console.log(`no ${index+1} ${data}`)
    console.log('---------------------')
})