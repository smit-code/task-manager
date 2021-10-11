const router = require("express").Router();

const taskControllers = require("../controllers/tasks");

router.get("/", taskControllers.getAllTasks);
router.post("/", taskControllers.createTask);
router.get("/:id", taskControllers.getTask);
router.put("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);

module.exports = router;
