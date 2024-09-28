const fs = require('fs');
const filePath = "/tasks.json";


const loadTasks = () => {
    try{
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(error){
        return []
    }
}


const saveTasks = (tasks) => {
    
}


const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(tasks);
    saveTasks(tasks);
}


const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}

else if(command === "list"){
    listTasks();
} else if(command === "remove"){
    removeTasks(parseInt(argument));
}