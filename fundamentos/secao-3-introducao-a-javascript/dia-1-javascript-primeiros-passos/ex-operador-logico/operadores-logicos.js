const currentHour = 14;
let weekDay = 'segunda-feira';

console.log('hoje é ' + weekDay);
console.log('e agora sao ' + currentHour + ' horas');

let hourMessage;
let weekMessage;

weekDayMessage(weekDay);
currentHourMessage(currentHour);

function weekDayMessage() {
    if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
        weekMessage = 'Oba, mais um dia de aprendizado na Trybe!';
    }
    else {
        weekMessage = 'FINALMENTE, descanso merecido!';
    }
}

function currentHourMessage() {
    if (currentHour >= 22) {
        hourMessage = "Nâo deveríamos comer nada, é hora de dormir";
    }
    else if (currentHour >= 18 && currentHour < 22) {
        hourMessage = "Rango da noite, vamo jantar :D";
    }
    else if (currentHour >= 14 && currentHour < 18) {
        hourMessage = "Vamos fazer um bolo pro café da tarde?";
    }
    else if (currentHour >= 11 && currentHour < 14) {
        hourMessage = 'HORA DO ALMOÇO!';
    }
    else {
        hourMessage = "Hmmm, cheiro de café recém-passado...";
    }
}

console.log(weekMessage);
console.log(hourMessage);
