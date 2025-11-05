export const addColour = (tags: any) => {

  let i = 2;
  tags.value.forEach((item, index) => {
    if(document.querySelector(`[data-content="${item}"]`)){
      Array.from(document.querySelectorAll(`[data-content="${item}"]`)).forEach((tag)=>{

        tag.classList.add(`wider-colour-${i}`);
        
      });
      
        if(i > 20)
          i = 0;

        i++;
    }
  });
}

export const addDataContent = (tags: any) => {
  Array.from(document.querySelectorAll('iam-inline-edit .tag, iam-inline-edit .badge')).forEach((tag) => {

    tag.setAttribute('data-content', tag.textContent);

    if(!tags.value.includes(tag.textContent)){
      tags.value.push(tag.textContent);
      localStorage.setItem('tags',JSON.stringify(tags.value));
      console.log(tags.value);
    }
  });
}