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
    
    //El textbox lo borramos dándole un valor vacío
            input.value = '';
    
            //Creamos una funciçon llamada updateStats
            updateStats();
};

list.addEventListener('click', (event)=>{
    if (event.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if (event.srcElement.nodeName == 'IMG') {
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${checkbox.length}</p>`
}

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}