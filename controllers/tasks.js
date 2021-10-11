const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createTask = async (req, res) => {
  const name = req.body.name;
  const completed = req.body.completed;
  try {
    const task = new Task({
      name: name,
      completed: completed,
    });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json("Task not found!!!");
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json("Task not found!!");
    }
    res.status(200).json("Task removed successfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
};
