// sow koro 1- 50 number projonto
// kono number ke 3 diye vag gele tumi 'foo ' dekhao
// kono number ke 5 diye vag gele tumi 'bar ' dekhao
// kono number ke 3 abong 5 diye vag gele tumi 'foobar ' dekhao

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Foobar')
    }
    else if(i % 3 === 0){
        console.log('foo')
    }
    else if(i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i)
    }

}