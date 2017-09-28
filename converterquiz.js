var value = process.argv[2];;
var source = process.argv[3];
var convertto = process.argv[5];

console.log(value, source, convertto);
if(source == 'm') {
    console.log(`Your solution is  ${value*100}`);
}
if(source == 'm' && convertto == 'mm') {
    console.log(`Your solution is ${value*1000}`);
}
if(source == 'cm' && convertto == 'm') {
    console.log(`Your solution is ${value/100}`);
}
if(source == 'cm' && convertto == 'mm') {
    console.log(`Your solution is ${value*10}`);
}
if(source == 'mm' && convertto == 'cm') {
    console.log(`Your solution is ${value/10}`);
}
if(source == 'mm' && convertto == 'm') {
    console.log(`Your solution is ${value/1000}`);
}
if(source == 'kg' && convertto == 'g') {
    console.log(`Your solution is ${value*1000}`);
}
if(source == 'g' && convertto == 'kg') {
    console.log(`Your solution is ${value/1000}`);
}

var measurements = ['m','cm','mm','kg','g'];
var potency = ['1000','10','1','100','1'];

var value1 = process.argv[2];;
var source1 = process.argv[3];
var convertto1 = process.argv[5];
var calc1;
var calc2;

for(i=0; i<measurements.length; i++) {
    if(source1 == measurements[i]) {
        calc1 = potency[i];
    }
    if(convertto1 == measurements[i]) {
        calc2 = potency[i];
    }
}
if(calc1/calc2 >= 0) {
    console.log(`Your solution is ${value1*(calc1/calc2)}`);
}
if(calc1/calc2 <= 0) {
    console.log(`Your solution is ${value1/(calc1/calc2)}`);
}