var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var tricer = txt.replace('Velociraptor', dinosaur.toUpperCase());

console.log(tricer);
console.log(tricer.slice(0, tricer.length/2));
