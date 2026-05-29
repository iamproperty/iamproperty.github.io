export const generateList = (routes:any, path:string) => {
  
  return routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === path) {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = path + '/' + route.path;
          route.title = route.name;
          route.status = route.meta.status || 'alpha';
          route.jira = route.meta.jira;
          route.ver = route.meta.ver;
          route.content = '';
          acc.push(route);
        }
        return acc;
      }, []);

      arr = children;
    }
    return arr;
  }, {});
}