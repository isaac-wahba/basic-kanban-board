const { useState } = React;

const INITIAL_TASKS = [
  {
    id: 0,
    boardId: 'ToDo',
    title: 'Task A',
  },
  {
    id: 1,
    boardId: 'ToDo',
    title: 'Task B',
  },
  {
    id: 2,
    boardId: 'In Progress',
    title: 'Task C',
  },
];

function Task({ title, moveUp, moveDown, moveLeft, moveRight }) {
  return (
    <div className='task'>
      <div>{title}</div>
      <button onClick={moveUp}>⇧</button>
      <button onClick={moveDown}>⇩</button>
      <button onClick={moveLeft}>⇦</button>
      <button onClick={moveRight}>⇨</button>
    </div>
  );
}

function List({ title, tasks, onMoveTask }) {
  return (
    <div className='list'>
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          moveUp={() => onMoveTask(task.id, 'up')}
          moveDown={() => onMoveTask(task.id, 'down')}
          moveLeft={() => onMoveTask(task.id, 'left')}
          moveRight={() => onMoveTask(task.id, 'right')}
        />
      ))}
    </div>
  );
}

function Board() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleMoveTask = (taskId, direction) => {
    // Implement task movement logic here
    console.log(`Move task ${taskId} ${direction}`);
  };

  const lists = ['ToDo', 'In Progress', 'Done'];

  return (
    <div className='board'>
      {lists.map(list => (
        <List
          key={list}
          title={list}
          tasks={tasks.filter(task => task.boardId === list)}
          onMoveTask={handleMoveTask}
        />
      ))}
    </div>
  );
}

function App() {
  return <Board />;
}

ReactDOM.render(<App />, document.getElementById('root'));