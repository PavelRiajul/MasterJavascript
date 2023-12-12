//1 Topic
//How javascript work overview

console.log(this)
console.log(window)
console.log(firstName)
var firstName = "Riajul"
//var firstName = .'riajul'// . holo early error code first a early error check korbe
//How javascript code execute?
//javascript code kivabe execution hoi ba kivabe kaj kore .kiki step follow kore 2 step
//1)compile 2)code execute
//1st step=> javascript code compile(translate) kore. compile/compilation amader all code akbar dekhe.tarpor source code theke bytecode/machin code a ropantor kore
//1)compile ?
//compilation phase 3  parts
//(1)Tokenizing/Lexing => amra jee code lekhe oigolage small small code a tokra/vag kore. are ae small small vag korake bole Token  (2)Parsing => amra jee code small small akare vag korsi oitar akta jinish holo Abstrac syntex Tree(AST).AST ke help se amader code  exucutable formated a amader code Generate hoy .jar jonno amra code excuite korte pari (3)Code generation

//2)code Execute....
//code Execution pehse-
// Javascript a joto gola code ase sob gola code exceution context er maddome excute hoy. manee code excute
//korar jonno  amader execution context create korte hobe. fists a je execution context create korse oita ke amra bolo (Global Excution context)


//...
//arekta jinish
//Ecmascript =>1)Early Error chacking  2)Detarmining Apropiat scope for variable (DASV)
//EcmaScript er orginaldocument a kono jaigatee bola hoi nai/mention kore na  code kivabe compile kore.but
//Ecmascript ki official documentation a lekhse (code early Error hoi kina).mane holo code execution er agee
//kono Error hoikina exm=> syntexError,refrenceerreo etc.

//2)Appropiat scope =>  amra joto variable define korbo kon/ki ki scope er maddome execute hoy.
//Exm=> var firstName = "riajul"
//firstName kon jaiga theke asese .firstName ki kono (function)? theke aese. jodi na asche tahole firstName (Global memory/Global scope) theke aese

//...
//(1)=>Early Error chacking  (2)=> DASV  --> ae 2 ta kaj korar jonno amader ki  (code Parsing/pars) korte hobe. all code execution korar agee code parsing/pars korte hobe.parse korar jonno amader code ko compile korte hobe. compile kivabe orbo tar kono opinion bole nae EcmaScript a


//...
//browser chai amader code kivabe optimize korte pare. tar jonno  amader code compiler/reCompile executite kore. 

//..
// sob kothar conclution holo
// amader code 1st line execution er agee  amader code complie hobe.