// creating constant variables
const numberbutton = document.querySelectorAll('.number')
const operationbutton = document.querySelectorAll('.operator')
const equalsbutton = document.querySelector('.equal')
const deletbutton = document.querySelector('.delletall')
const privelement = document.querySelector('.previousop')
const curentelement = document.querySelector('.currentop')

numberbutton.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendnumber(button.innerText)
        Calculator.updatescreen()
    })
});

operationbutton.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.chooseopration(button.innerText)
        Calculator.updatescreen()
    })
});

equalsbutton.addEventListener('click', button => {
    Calculator.calculate()
    Calculator.updatescreen()
})
deletbutton.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updatescreen()
})



class calculator {
    constructor(privelement, curentelement) {
        this.privelement = privelement
        this.curentelement = curentelement
        this.clear()
    }
    clear() {
        this.curentoprand = ""
        this.previousoprand = ""
        this.operation = undefined
    }
    delet() {

    }
    appendnumber(number) {
        this.curentoprand = this.curentoprand.toString() + number.toString()

    }
    chooseopration(operation) {
        if (this.previousoprand !== '') {
            this.calculate()
        }
        this.operation = operation
        this.previousoprand = this.curentoprand.toString() + operation.toString()
        this.curentoprand = ""

    }
    calculate() {
        let result;
        const x = parseFloat(this.previousoprand)
        const y = parseFloat(this.curentoprand)
        const z = 2


        switch (this.operation) {
            case '+':
                result = x + y
                break;
            case '-':
                result = x - y
                break;
            case '/':
                result = x / y
                break;
            case '*':
                result = x * y
                break;
            case '^':
                result = Math.pow(x, y)
                break;
            case 'Min':
                result = Math.min(x, y)
                break;
            case 'Max':
                result = Math.max(x, y)
                break;

            case 'sqr':
                result = Math.sqrt(x, z)
                break;


            default:
                return;
        }

        this.curentoprand = result
        this.operation = undefined
        this.previousoprand = ''


    }
    updatescreen() {
        this.curentelement.innerText = this.curentoprand
        this.privelement.innerText = this.previousoprand

    }


}
const Calculator = new calculator(privelement, curentelement)