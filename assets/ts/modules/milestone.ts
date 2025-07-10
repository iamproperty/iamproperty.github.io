export const getMilestoneTasks = function (milestoneElement: Element): void {
  const taskWrap = milestoneElement.shadowRoot.querySelector('.task-wrap');  
  const tasks = JSON.parse(milestoneElement.dataset.items);

    tasks.forEach(task => {
      const taskItem = document.createElement('details');
      const taskName = document.createElement('summary');
      const taskDescription = document.createElement('p');
      
      taskName.innerHTML = task.name;
      taskDescription.innerHTML = task.description;

      taskItem.appendChild(taskName)
      taskItem.appendChild(taskDescription)

      if (task.actions.length) {
        taskItem.appendChild(getSubtasks(task.actions));
      }

      taskWrap.insertAdjacentElement('beforeend', taskItem)

    });

    console.log(taskWrap)

    milestoneElement.appendChild(taskWrap)


}

const getSubtasks = function (actions): void {
    const actionsWrap = document.createElement('ul');

    actions.forEach(action => {
      const actionItem = document.createElement('li');
      actionItem.innerHTML = action.action;

      actionsWrap.appendChild(actionItem);
    });

    return actionsWrap;
}

const milestone = function (milestoneElement: Element): void {
  getMilestoneTasks(milestoneElement);
};

export default milestone;
