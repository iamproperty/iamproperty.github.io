export const generateList = (routes: any, path: string) => {
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
          route.content = route.meta.desc;

          acc.push(routeToIndexCard(route, path + '/' + route.path, route.meta));
        }
        return acc;
      }, []);

      arr = children;
    }
    return arr;
  }, {});
};

export const routeToIndexCard = (route: any, path: string) => {


  const meta = route._meta || route.meta || {};
  const name = route.name || meta.name || '';

  return {
    link: path,
    title: name,
    status: meta.status || 'alpha',
    jira: meta.jira,
    ver: meta.ver,
    content: meta.desc || '',
  };
};



export const convertToStructured = (routes: any) => {

  const structuredRoutes = routes.reduce((acc: any, route: any) => {

    if(route.name != 'Home' && route.name != 'NotFound' && route.path != '') {

      if (route.children && route.children.length > 0) {
        const children = convertToStructured(route.children);

        acc[route.path.replace(/\//g, '')] = {
          _meta: { name: route.name, ...route.meta },
          ...children
        };
      }
      else {
        acc[route.path.replace(/\//g, '')] = {
          _meta: { name: route.name, ...route.meta }
        };

      }
    }

    return acc;
  }, {});

  return structuredRoutes;
};
