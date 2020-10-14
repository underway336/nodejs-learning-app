const fs = require("fs");

fs.readFile("db/hello.txt", "utf8", function(error,data){
                
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
fs.readFile("db/goodbye.txt", "utf8", function(error,data){
                
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});

//читает файл.txt из db