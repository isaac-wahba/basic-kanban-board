const { useState } = React;

const INITIAL_TASKS = [
{
  id: 0,
  boardId: 'ToDo',
  title: 'Task A' },

{
  id: 1,
  boardId: 'ToDo',
  title: 'Task B' },

{
  id: 2,
  boardId: 'In Progress',
  title: 'Task C' }];



function Task({ title, moveUp, moveDown, moveLeft, moveRight }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "task" }, /*#__PURE__*/
    React.createElement("div", null, title), /*#__PURE__*/
    React.createElement("button", { onClick: moveUp }, "\u21E7"), /*#__PURE__*/
    React.createElement("button", { onClick: moveDown }, "\u21E9"), /*#__PURE__*/
    React.createElement("button", { onClick: moveLeft }, "\u21E6"), /*#__PURE__*/
    React.createElement("button", { onClick: moveRight }, "\u21E8")));


}

function List({ title, tasks, onMoveTask }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "list" }, /*#__PURE__*/
    React.createElement("h3", null, title),
    tasks.map((task, index) => /*#__PURE__*/
    React.createElement(Task, {
      key: task.id,
      title: task.title,
      moveUp: () => onMoveTask(task.id, 'up'),
      moveDown: () => onMoveTask(task.id, 'down'),
      moveLeft: () => onMoveTask(task.id, 'left'),
      moveRight: () => onMoveTask(task.id, 'right') }))));




}

function Board() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleMoveTask = (taskId, direction) => {
    // Implement task movement logic here
    console.log(`Move task ${taskId} ${direction}`);
  };

  const lists = ['ToDo', 'In Progress', 'Done'];

  return /*#__PURE__*/(
    React.createElement("div", { className: "board" },
    lists.map((list) => /*#__PURE__*/
    React.createElement(List, {
      key: list,
      title: list,
      tasks: tasks.filter(task => task.boardId === list),
      onMoveTask: handleMoveTask }))));




}

function App() {
  return /*#__PURE__*/React.createElement(Board, null);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));