let resultado = 'aprovada';

switch (resultado) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovado!');
        break;
    case'reprovado':
        console.log('Você foi reprovado!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera!');
        break;
    default:
        console.log('Informação incorreta!');
}