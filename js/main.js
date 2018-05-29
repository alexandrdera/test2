//Входные json данные
var JSON_data = '{"cost":"35", "title":"Notebook", "description":"MSI Leopard"}';

$("#show_more").on('click', function() {
    var last_item = $("div.items").last(); //получаем последний блок списка товаров
    item = JSON.parse(JSON_data); //читаем объекты из строки в формате JSON

    //Используем шабон new_item для вставки новых товаров
    var new_item = "<div class='item'><div class='cost'>"+ item.cost + 
    "</div><div class='title'>"+ item.title +
    "</div><div class='description'>"+ item.description +
    "</div></div>"

    last_item.append(new_item); //добавляем новые товары в конец списка
});

  
