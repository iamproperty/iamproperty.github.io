export const setStatus = function (milestoneElement: Element): void {
  const status = milestoneElement.dataset.status;

  if(!status) {
    return;
  }

  const milestoneWrap = milestoneElement.shadowRoot.querySelector('.milestone-wrap')
  const statusTag = document.createElement('span');
  statusTag.setAttribute('part', 'status');
  statusTag.classList.add('milestone-status');
  statusTag.innerHTML = `${status} Step`;
  
  if(status === 'Current') {
    milestoneElement.classList.add('current');
  }

  milestoneWrap.insertAdjacentElement('afterbegin', statusTag)
}

export const getMilestoneTasks = function (milestoneElement: Element): void {
  const taskWrap = milestoneElement.shadowRoot.querySelector('.task-wrap');  
  const tasks = milestoneElement.dataset.items ? JSON.parse(milestoneElement.dataset.items) : [];

  if(!tasks.length) {
    return;
  }

  tasks.forEach(task => {
    const taskItem = document.createElement('details');
    const taskName = document.createElement('summary');
    const detailsWrap = document.createElement('div');
    const taskDescription = document.createElement('p');
      
    detailsWrap.classList.add('task-details');
       
    taskName.innerHTML = task.name;

    if (task.date_completed) {
      taskName.classList.add('complete');
    }

    taskItem.appendChild(taskName);

    if (task.description) {
      taskDescription.innerHTML = task.description;
      detailsWrap.appendChild(taskDescription)
    }

    if (task.actions.length) {
      detailsWrap.appendChild(getSubtasks(task.actions, taskName));
    }

    taskItem.appendChild(detailsWrap);

    taskWrap.insertAdjacentElement('beforeend', taskItem)

  });

  milestoneElement.appendChild(taskWrap)
}

const getSubtasks = function (actions: Array, taskName: Element): void {
    const actionsWrap = document.createElement('ul');
    const totalCount = actions.length;
    const completed = actions.filter((action) => action.date_completed);
    const completedCount = completed.length || 0;

    if (totalCount < 1) {
      return;
    }

    taskName.innerHTML += ` (${completedCount}/${totalCount})`;

    actions.forEach(action => {
      const actionItem = document.createElement('li');
        const actionCompletedDate = document.createElement('span');

      if(action.date_completed) {
        actionItem.classList.add('complete')

        actionCompletedDate.classList.add('action-date');
        actionCompletedDate.innerHTML = action.date_completed;
      } 

      actionItem.innerHTML = action.action;

      actionItem.appendChild(actionCompletedDate);

      actionsWrap.appendChild(actionItem);
    });

    return actionsWrap;
}

const milestone = function (milestoneElement: Element): void {
  setStatus(milestoneElement)
  getMilestoneTasks(milestoneElement);
};

export default milestone;
