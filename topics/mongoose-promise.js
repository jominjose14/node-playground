require('../task-manager/src/db/mongoose');
const User = require('../task-manager/src/models/user');
const Task = require('../task-manager/src/models/task');

// User.findByIdAndUpdate('64b6e8e361050e6d52f4dd27', { age: 3 })
//     .then(user => {
//         console.log(user);
//         return User.countDocuments({ age: 3 });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(console.error);

// Task.findByIdAndDelete('64b6eb4e8828869e9971c61a')
//     .then(task => {
//         console.log(task);
//         return Task.countDocuments({ completed: false });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(console.error);

const deleteAndCountTasks = async () => {
    const deletedTask = await Task.findByIdAndDelete('64b70192ea64f63d67e1bbc1');
    console.log(deletedTask);

    const count = await Task.countDocuments({ completed: false });
    console.log(count);
}

deleteAndCountTasks();