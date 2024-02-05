function findAdress(obj){
    const street = obj.street || "__";
    const house = obj.house || "__";
    const socity = obj.socity || "__";

    const str = street + "," + house + "," + socity;

    return str;
}

console.log(findAdress({stree:10, socity:"Eart Perfect"}))