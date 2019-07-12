 function Mash(){
     string = getHome();
     string2 = getChildrenCount();
     string3 = getCar();
   console.log("You will live in a" + " " + string + " " + "and you will have"+ " " + string2 +" " + "kids! and you’ll drive a " + " "+ string3)
 }
 Mash();

function getHome(){
 let homeList= ["Mansion","Apartment", "Shack", "House"]
 homeList.push(process.argv[2])
 let aHome = Math.random()*homeList.length
 let integer = Math.floor(aHome);
 
 console.log(homeList);
return homeList[integer];


} 
function getChildrenCount(){
    let Count = Math.random() * 100 ;
    final = Math.floor(Count);
    if (final * 2 < process.argv[3]){
        return process.argv[3];
    }
    else if (final * 2 > process.argv[3]){
        return final
    }
    else{return process.argv[3]}
}

function getCar(){
    let Cars = ["lambo","convertible", "box with wheels", "shoppingCart"];
    Cars.push(process.argv[4]);
   let Vehicle = Math.random()*Cars.length;
 let Ride  = Math.floor(Vehicle);
 return Cars[Ride];
}