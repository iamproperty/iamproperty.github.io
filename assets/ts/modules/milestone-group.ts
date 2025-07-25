export const showFuture = function (milestoneGroupElement: Element): void {
  const futureToggle = milestoneGroupElement.dataset.showAllToggle;

  if (!futureToggle) {
    return;
  }

  const toggleBtn = document.createElement('button');
  toggleBtn.innerHTML = 'Show next steps';
  toggleBtn.classList.add('btn', 'btn-tertiary', 'show-all-toggle');

  milestoneGroupElement.appendChild(toggleBtn)

  toggleBtn.addEventListener('click', () => {
    if(milestoneGroupElement.classList.contains('show-all')) {
      toggleBtn.innerHTML = 'Show next steps';

      milestoneGroupElement.classList.remove('show-all');
      toggleInteractionEvent('hide-future-items', milestoneGroupElement)
    } else {
      toggleBtn.innerHTML = 'Hide next steps';

      milestoneGroupElement.classList.add('show-all');
      toggleInteractionEvent('show-future-items', milestoneGroupElement)
    }

  });

}

const toggleInteractionEvent = (eventName, element) => {
  const customEvent = new CustomEvent(eventName, {});

  element.dispatchEvent(customEvent);
}


const milestoneGroup = function (milestoneGroupElement: Element): void {
  showFuture(milestoneGroupElement);
};

export default milestoneGroup;
