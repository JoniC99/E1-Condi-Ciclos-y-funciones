//1.

const ParImpar = (PI)=>{
    if (PI % 2 === 0){
        console.log ('Par');
    } else{
        console.log ('Impar');
    }
}
 

ParImpar(2)
ParImpar(3)
ParImpar(12)
ParImpar(15)



//2. 

function mayorMenor (mm1 , mm2){
    if ( mm1 > mm2){
        console.log (mm1,'Es mayor que', mm2);
    }  else if ( mm1 < mm2){
        console.log ( mm1 ,'Es menor que ', mm2);
    } else { 
        console.log (mm1,'y', mm2,'son iguales');
    }
 }
    


mayorMenor(25,6)
mayorMenor(15,30)
mayorMenor(3,3)


//3.

const Multi5 = (x5)=>{
    if ( x5 % 5 === 0){
        console.log( x5,'Es multiplo de 5');
    } else {
        console.log( x5,'No es multiplo de 5')
    }
}

Multi5(5)
Multi5(13)
Multi5(7)

//4.

function impriNum (IN){
    for ( let i = 0; i <= IN; i++) {
        console.log(i);
    }
}

impriNum(5) 

//5.

function impriPala ( palabra, numero){
    for ( let i = 0; i < numero; i++) {
        console.log(palabra);
    }
}

impriPala('hermano', 3);

 //6.

function impriArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

const miArray = [1,2,4,6,9]
impriArray (miArray);


//7.


function arrayNoelement (array){
    if ( array.length === 10){
        for( let i = 0; i <array.length; i++)
            if (i !== 4){
                console.log(array[i]);
            }
    }
}

const Miarray = [0,1,2,3,4,5,6,7,8,9,]
arrayNoelement( Miarray);

//8.


function impriMultipli (array, por){
    if( typeof por === 'number'){
        for (let i = 0; i < array.length; i++){
            console.log (array[i] * por);
        }
    }
}

const mIarray = [1,2,3,4,8,6,7,12,9,10];
const mipor = 4;
 impriMultipli (mIarray, mipor);
