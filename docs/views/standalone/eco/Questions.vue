<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Search from '@/components/Search/Search.vue';


const props = defineProps({
question: String,
dataSsoSubject: String,
dataProduct: String,
});

const question = ref(props.question);

const mode = 'dev';

const subject = props.dataSsoSubject;
const product = props.dataProduct;

watch(() => props.question, (newQuestion) => {
  question.value = newQuestion;
});

onMounted(async () => {

  const questions = document.querySelector('#questions');

  await loadUserData(mode, subject, product).then((data) => {
    if (!data.attributes) return false;

    setDisabledLinks(questions, data);

    console.log('hi', questions, data);

    return true;
  });
});


const loadUserData = async (mode, subject, product): any => {
  const ajaxURL =
    mode != 'dev'
      ? 'https://api.sso.iamproperty.group/navigation/access-context'
      : 'https://api.dev.sso.iamproperty.group/navigation/access-context';

  try {
    const response = await fetch(ajaxURL, {
      method: 'post',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'navigation-access-context-request',
          attributes: {
            subject: subject,
            requestingProduct: product,
            navigationSchemaVersion: '2026-04-16',
          },
        },
      }),
    });

    const json = await response.json();
    const data = json.data ? json.data : json;
    return data;
  } catch (error) {
    if (error?.name === 'AbortError') {
      return true;
    }
    console.log(error);
    return 'There has been a problem. Please try again in a few moments.';
  }
};

const setDisabledLinks = (component, data): void => {
  const elements = component.querySelectorAll('[data-product][data-feature]');

  elements.forEach((element) => {
    element.setAttribute('data-is-enabled', 'false');

    if (data.attributes.features[element.getAttribute('data-product')]) {
      const isEnabled = data.attributes.features[element.getAttribute('data-product')].includes(
        element.getAttribute('data-feature')
      );

      element.setAttribute('data-is-enabled', isEnabled);
    }
  });

  elements.forEach((element) => {
    const isEnabled = element.getAttribute('data-is-enabled') === 'true';
    if (!isEnabled && element.getAttribute('data-disabled')) {

      element.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        let a= document.createElement('a');
        a.target= '_blank';
        a.href= element.getAttribute('data-disabled');
        a.click();

      });
    }
  });
};

</script>
<template>

  <div class="insights-panel bg-primary">

    <div class="text-center">

      <div class="brand brand--insights p-1">
        <svg viewBox="0 0 600 130" preserveAspectRatio="xMinYMid meet">
          <title>iam property insights</title>
        <defs xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clippath">
            <path
              d="M44.36,16.04C21.42,16.04,2.81,34.65,2.81,57.59s18.6,41.55,41.55,41.55,41.55-18.6,41.55-41.55-18.6-41.55-41.55-41.55ZM60.28,73.51c-8.79,8.79-23.04,8.79-31.83,0-8.79-8.79-8.79-23.04,0-31.83,8.79-8.79,23.04-8.79,31.83,0,8.79,8.79,8.79,23.04,0,31.83Z"
            />
          </clipPath>
        </defs>

        <g style="clip-path: url(#clippath); display: block;">
          <foreignObject class="logoBack" x="0" y="0" width="88" height="130">
            <div class="one-gradient" xmlns="http://www.w3.org/1999/xhtml"></div>
          </foreignObject>
        </g>

        <path d="M204.65,69.03c0,1.48-.11,2.85-.23,4.22-.23,1.82-1.37,2.62-3.08,2.62h-38.09c2.05,6.73,7.41,9.47,13.34,9.47,3.19,0,6.39-1.14,8.44-2.85,1.14-.91,2.05-1.48,3.54-1.48l10.95-.11c2.05,0,3.19,1.37,2.28,3.19-4.45,9.92-13.8,15.05-25.43,15.05-18.93,0-31.02-13.11-31.02-30.11s12.54-30.11,30.56-30.11c16.65,0,28.74,12.89,28.74,30.11ZM175.8,54.09c-6.39,0-10.83,2.97-12.66,8.78h24.52c-1.82-6.61-6.84-8.78-11.86-8.78Z" />
        <path d="M141.74,61.39v33.3c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-31.82c0-5.7-3.31-8.21-7.64-8.21-5.13,0-8.32,2.85-8.32,9.58v30.45c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-51.32c0-1.82,1.03-2.85,2.85-2.85h11.4c1.82,0,2.85,1.03,2.85,2.85v2.39c2.62-3.88,7.53-6.84,14.83-6.84,10.61,0,18.25,8.21,18.25,22.47Z"/>

        <path d="M236.15,94.27v-51.21c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v51.22c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85h0Z"/>
        <path d="M236.15,30.54v-10.24c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v10.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85Z"/>
        <path d="M311.42,61.04v33.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-31.76c0-5.69-3.28-8.2-7.58-8.2-5.09,0-8.26,2.85-8.26,9.56v30.39c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-51.22c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v2.39c2.6-3.87,7.47-6.83,14.72-6.83,10.53,0,18.11,8.2,18.11,22.42Z"/>
        <path d="M363.26,80.05c0,13.09-11.09,18.67-23.54,18.67-11.55,0-21.96-5.24-23.32-17.3-.23-1.94.9-2.96,2.72-2.96h11.09c1.7,0,2.27.91,3.06,2.39.9,1.94,3.06,3.07,6.45,3.07,4.75,0,6.57-1.59,6.57-3.87,0-8.2-29.55-.68-29.55-22.76,0-12.86,11.1-18.67,22.98-18.67,10.53,0,20.83,5.24,22.19,17.3.23,1.93-.9,2.96-2.72,2.96h-11.09c-1.7,0-2.27-.91-3.06-2.5-.79-1.82-2.72-2.96-5.32-2.96-4.19,0-6,1.59-6,3.87,0,8.42,29.54.57,29.54,22.76Z"/>
        <path d="M369.49,30.54v-10.24c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v10.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85Z"/>
        <path d="M369.49,94.27v-51.21c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v51.22c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85h0Z"/>
        <path d="M453.02,43.06v51.22c0,19.12-15.28,27.2-29.09,27.2s-26.83-6.6-28.53-20.26c-.11-1.93,1.02-2.96,2.83-2.96h11.43c1.7,0,2.49.91,3.06,2.5,1.25,3.41,4.98,5.69,11.21,5.69,7.58,0,12.57-4.1,12.57-12.18v-5.12c-3.74,4.44-9.4,7.28-17.32,7.28-14.83,0-27.05-13.09-27.05-28.91s12.23-28.91,27.05-28.91c7.92,0,13.58,2.85,17.32,7.28v-2.85c0-1.82,1.02-2.85,2.83-2.85h10.87c1.81,0,2.83,1.02,2.83,2.85ZM436.5,67.53c0-7.85-5.66-13.2-13.7-13.2s-13.7,5.35-13.7,13.2,5.66,13.2,13.7,13.2,13.7-5.35,13.7-13.2Z"/>
        <path d="M511.32,61.04v33.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-31.76c0-5.69-3.28-8.2-7.58-8.2-5.09,0-8.26,2.85-8.26,9.56v30.39c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85V20.29c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v25.16c2.6-3.87,7.47-6.83,14.72-6.83,10.53,0,18.11,8.2,18.11,22.42Z"/>
        <path d="M548.9,43.06v10.7c0,1.82-1.02,2.85-2.83,2.85h-6.23v37.68c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-37.68h-6.23c-1.81,0-2.83-1.02-2.83-2.85v-10.7c0-1.82,1.02-2.85,2.83-2.85h6.23v-15.37c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v15.37h6.23c1.81,0,2.83,1.02,2.83,2.85Z"/>
        <path d="M597.12,80.05c0,13.09-11.09,18.67-23.55,18.67-11.55,0-21.96-5.24-23.32-17.3-.23-1.94.91-2.96,2.72-2.96h11.1c1.7,0,2.26.91,3.05,2.39.91,1.94,3.06,3.07,6.45,3.07,4.76,0,6.57-1.59,6.57-3.87,0-8.2-29.54-.68-29.54-22.76,0-12.86,11.09-18.67,22.98-18.67,10.53,0,20.83,5.24,22.19,17.3.23,1.93-.91,2.96-2.72,2.96h-11.09c-1.7,0-2.26-.91-3.05-2.5-.79-1.82-2.72-2.96-5.32-2.96-4.19,0-6,1.59-6,3.87,0,8.42,29.55.57,29.55,22.76Z"/>
      </svg>
      </div>
      <p class="strapline pb-3">Turn everyday data into smarter decisions. Win more instructions, retain customers, improve performance and grow your business.</p>

      <Search id="question-search" class="search--stylised mb-4" @option-selected="(event) => {$router.push({ path: '/standalone/hub-question', query: { question: event.detail.value } }) }">
        <input id="question" type="text" name="question" autocomplete="off" aria-autocomplete="none" list="questions" placeholder="Show me..." :value="question" />
        <datalist id="questions" slot="datalist">
          <div class="optgroup" value="Win:">


            <option data-product="mtk" data-feature="marketAppraisalsOverview" data-disabled="https://iamproperty.com/ecosystem/marketing-toolkit/" title="To unlock this insight you’ll need the Marketing Toolkit - click the insight to find out more">Show me stock currently on market most likely to switch</option>
            <option>Show me predicted movers not yet on the market</option>
            <option>Show me Market Appraisals carried out, but not yet on market</option>
          </div>
          <option>Show me properties that could be suitable for auction</option>
          <option>Show me current vendor conveyancing opportunities still to convert</option>
          <option>Show me properties that could be suitable for Sale Ready based on client circumstances</option>
          <option>Show me properties likely to complete within the next 28 days</option>
        </datalist>
      </Search>

    </div>

  </div>
</template>
<style scoped lang="scss">

.insights-panel {

  --colour-info: rgb(84 255 255);

  background: var(--colour-info);
  border-radius: 1rem;
  outline: 2px solid white;

  min-height: 10rem;
  margin-bottom: -5rem;

  padding-inline: 2rem;

      grid-column: col-1-start / col-12-end;

  background-image:
    radial-gradient(
      ellipse 90% 190% at 0% 0%,
      var(--colour-primary) 15%,
      transparent 80%
    ),
    radial-gradient(
      ellipse 90% 190% at 100% 100%,
      var(--colour-primary) 15%,
      transparent 80%
    ),
    linear-gradient(var(--colour-info), var(--colour-info)) !important;

  .strapline {
    max-width: 45rem;
  }

  .brand--insights {
    font-size: 6rem;
  }
}

.search--stylised {
  max-width: 40rem;
  margin: 0 auto;
}

#question {

  background: transparent;
  color: inherit!important;
  color-scheme: dark!important;



}

#question-search {

  --search-suffix-color: var(--colour-white) !important;
  background: transparent;
  color: var(--colour-white) !important;
}

#question-search {
  color-scheme: light;

  //  background:
 //   radial-gradient(circle at 20% 30%, #00a8c6, transparent 35%),
  //  radial-gradient(circle at 80% 70%, #c76cff, transparent 40%),
  //  #eef2f5;

}


#question-search::part(clear-search) {

  color: var(--colour-white) !important;
}

#question-search::part(clear-search):is(:hover, :focus) {

  color: var(--colour-primary-theme) !important;
}


#question {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    180deg,
    rgb(0 49 60 / 5%),
    rgb(255 255 255 / 20%)
  );
  backdrop-filter: blur(1.5rem);
  border-radius: 1.5rem;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.1), inset 0 0 1.5rem 0.5rem rgba(0, 49, 60, 0.1);

  position: relative;


  padding: 1px;
}


@layer elements {


:is(.dropdown, datalist, select) option[data-product][data-feature]:not([data-is-enabled=true]) {
  padding-left: 2rem !important;
}
:is(.dropdown, datalist, select) option[data-product][data-feature]:not([data-is-enabled=true]):before {
  content: "\f023";
  font-family: var(--fa-family, var(--fa-style-family, "Font Awesome 7 Pro"));
  padding-right: .5em;
  position: absolute;
  left: 1rem;
  font-weight: 700;
}

}
</style>
