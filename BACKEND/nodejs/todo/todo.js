

const fs = require("fs");

const filePath = "./tasks.json";

// load tasks from the JSON file
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task: task});
    saveTasks(tasks);
    console.log("Task added successfully !", task);
};

const listTasks = () => {
    const tasks = loadTasks();
    console.log(tasks);
};


const removeTask = (index) => {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log("Task removed");
};



// command-line arguments
const command = process.argv[2];
const argument = process.argv[3];

// command handling
if(command === "add")
{
    addTask(argument);
}
else if(command === "list")
{
    listTasks();
}
else if(command === "remove")
{
    removeTask(parseInt(argument));
}
else
{
    console.log("Command not found !");
} 