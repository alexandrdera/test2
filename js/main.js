//Входные json данные
var JSON_data = '[{"cost":"35", "title":"Notebook", "description":"MSI Leopard"},{"cost":"25", "title":"Samsung", "description":"R528"},{"cost":"15", "title":"HP", "description":"Povilion"}]';

$("#show_more").on('click', function() {
    var last_item = $("div.items").last(); //получаем последний блок списка товаров
    item = JSON.parse(JSON_data); //читаем объекты из строки в формате JSON

    item.forEach(element => {
        
        //Используем шабон new_item для вставки новых товаров
        var new_item = "<div class='item'><div class='cost'>"+ element.cost + 
        "</div><div class='title'>"+ element.title +
        "</div><div class='description'>"+ element.description +
        "</div></div><hr>"
    
        last_item.append(new_item); //добавляем новые товары в конец списка
    });
});

  
