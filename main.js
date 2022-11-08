//Creamos un contador de ID
let IdCounter = 0;
//Creamos una variable que jalará el valor del input text
const input = document.querySelector('input[type="text"]');

//Del formulario userInput cada vez que se haga un submit capturamos el evento
userInput.addEventListener('submit', (event)=>{
    //Le ponemos event.preventDefault para evitar que borre el input text y se pueda seguir usando
    event.preventDefault();
    //Llamamos a la función addTask para agregar tarea
    addTask();
});

//Creamos la función addTask
let addTask = ()=>{
    //Contador de id se suma así mismo cada vez que se llama a la función
    IdCounter++;

    //Almacenamos el valor del input type text(lo que escribimos) en la variable newValue
    let newValue = input.value;

    //En el contenedor llamado list agregamos el contenido con un string template dentro de backtick
    //Reemplazamos el ID y el VALOR por nuestras variables
    list.innerHTML += `
    <div id="${IdCounter}" class="task-container">
                <label>
                    <input type="checkbox">
                    ${newValue}
                </label>
                <img src="./images/bin.png" class="closeBtn">
            </div>
            `
}