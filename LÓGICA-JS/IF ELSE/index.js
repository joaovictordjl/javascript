// Entre 0 e 12hrs
// Entre 12 e 19
// Entre 19h e 00

//IF PODE SER EXECUTADO SOZINHO
//ELSE PRECISA DE UM IF ANTES
//PODE TER VÁRIOS ELSE IFS 
//SÓ PODE TER UM ELSE

const hora = 23;

if (hora >= 0 && hora <= 12) {
    console.log(`Bom dia, ja são ${hora} horas`);
} else if (hora > 12 && hora <=18) {
    console.log(`Boa Tarde, ja são ${hora} horas`);
} else {
    console.log(`Boa noite, já são ${hora} horas`);
}

/**
 * Quando tiver várias condições, analisa a primeira condição verdadeira e finaliza as verificações, mesmo se houver mais condições abaixo
 */