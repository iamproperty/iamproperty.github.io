
export function getStatusColour(status:string):string {
  if (status === 'deprecated') {
    return 'bg-danger';
  } else if (status === 'alpha') {
    return 'wider-colour-9';
  } else if (status === 'beta') {
    return 'wider-colour-7';
  } else if (status === 'stable') {
    return 'bg-success';
  } else if (status === 'qa') {
    return 'bg-info';
  }

  return 'wider-colour-1';
}

export function getStatusTitle(status:string):string {
  
  if (status === 'deprecated') {
    return 'Deprecated';
  }
  else if (status === 'qa') {
    return 'QA To Do';
  }
  else if (status === 'stable') {
    return 'Stable';
  }

  return status;
}