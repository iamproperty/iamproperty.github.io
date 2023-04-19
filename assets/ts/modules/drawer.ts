// @ts-nocheck
const drawer = (element) => {

  const observer = new IntersectionObserver( 

    function([e]){
      e.target.classList.toggle("in-view", e.intersectionRatio > 0)
      document.getElementById('showDrawer').checked = false
    },
    { threshold: [1] }
  );

  const el = document.getElementById('drawer-end')
  observer.observe(el);
}

export default drawer