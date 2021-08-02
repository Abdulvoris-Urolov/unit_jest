//Sonlarni test qilish - mutlaq qiymati
module.exports.absolute = function (number) {
    return (number >= 0) ? number : -number;
}
//Matnlarni test qilish 
module.exports.salom = function(name){
    return 'Assalomu alaykum, ' + name;
}
//qatorlarni test qilish
module.exports.getCurrencies = function() {
    return ['UZB', 'RUS', 'ENG'];
} 
//Obyectlarni test qilish
module.exports.getProduct = function(productId){
    return { id: productId, title:"banana", price: 2 };
}