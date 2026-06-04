
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
  } else if (status === 'dev') {
    return 'wider-colour-17';
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
  else if (status === 'dev') {
    return 'Dev only';
  }

  return status;
}

export function getStatusDesc(status:string):string {

  if (status === 'deprecated') {
    return 'Deprecated and will not be supported in future releases.';
  }
  else if (status === 'alpha') {
    return 'Early stage of development; no design or requirements defined.';
  }
  else if (status === 'beta') {
    return 'Later stage of development with with designs and requirements defined.';
  }
  else if (status === 'qa') {
    return 'Has been developed and is pending quality assurance checks; functional and device testing needed.';
  }
  else if (status === 'stable') {
    return 'Stable and released with the version number that it was released in.';
  }
  else if (status === 'dev') {
    return 'This component was created to purely house some functionality and is not visible to the user.';
  }

  return status;
}
