const videoSupport = async (body): void => {
  if (document.querySelector('.youtube-link[data-youtube]') && !document.body.classList.contains('youtubeLoaded')) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loaded = await loadYouTubeScripts();
  }
  setTimeout(async () => {
    if (document.querySelector('.youtube-link[data-youtube]') && !document.body.classList.contains('youtubeLoaded')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const loaded = await loadYouTubeScripts();
    }
  }, '2000');

  body.addEventListener('click', async (event) => {
    let target = (event.target as HTMLElement).closest<HTMLElement>('.youtube-link[data-youtube]');

    if (!target) {
      target = (event.target as HTMLElement).closest<HTMLElement>('.vimeo-link[data-vimeo]');
    }

    if (target && target.hasAttribute('data-youtube')) {
      event.preventDefault();

      if (!document.body.classList.contains('youtubeLoaded')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const loaded = await loadYouTubeScripts();
      }

      const link_id = 'youtube-' + target.getAttribute('data-youtube');

      if (!document.getElementById(`${link_id}-dialog`)) {
        document.body.insertAdjacentHTML(
          'beforeend',
          `<dialog id="${link_id}-dialog"><div class="embed" id="${link_id}"></div></dialog>`
        );
      }

      const dialog = document.getElementById(`${link_id}-dialog`);
      const embed = document.getElementById(link_id);

      const customEvent = new CustomEvent('play-video', {
        detail: { 'Video Type': 'YoutTube', ID: target.getAttribute('data-youtube') },
      });
      target.dispatchEvent(customEvent);
      window.dataLayer.push(customEvent.detail);

      createYoutTubeVideo(embed, target.getAttribute('data-youtube'));
      dialog.showModal();

      dialog.addEventListener('close', () => {
        if (
          window.player[embed.getAttribute('id')] &&
          typeof window.player[embed.getAttribute('id')].pauseVideo == 'function'
        ) {
          window.player[embed.getAttribute('id')].pauseVideo();
        }

        const customEvent = new CustomEvent('close-video', {
          detail: { 'Video Type': 'YoutTube', ID: target.getAttribute('data-youtube') },
        });
        target.dispatchEvent(customEvent);
        window.dataLayer.push(customEvent.detail);
      });
    } else if (target && target.hasAttribute('data-vimeo')) {
      event.preventDefault();

      const link_id = 'vimeo-' + target.getAttribute('data-youtube');

      if (!document.getElementById(`${link_id}-dialog`)) {
        document.body.insertAdjacentHTML(
          'beforeend',
          `<dialog id="${link_id}-dialog"><div class="embed" id="${link_id}"></div></dialog>`
        );
      }

      const dialog = document.getElementById(`${link_id}-dialog`);
      const embed = document.getElementById(link_id);

      const videoId = target.getAttribute('data-vimeo');

      const customEvent = new CustomEvent('play-video', {
        detail: { 'Video Type': 'Vimeo', ID: videoId },
      });
      target.dispatchEvent(customEvent);
      window.dataLayer.push(customEvent.detail);

      if (!embed.querySelector('iframe'))
        embed.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;

      dialog.showModal();

      dialog.addEventListener('close', () => {
        embed.innerHTML = ``; // Remove the video since we cant pause it

        const customEvent = new CustomEvent('close-video', {
          detail: { 'Video Type': 'Vimeo', ID: target.getAttribute('data-vimeo') },
        });
        target.dispatchEvent(customEvent);
        window.dataLayer.push(customEvent.detail);
      });
    }
  });
};

export const loadYouTubeScripts = async (): any => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function (): any {
      // This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      document.body.classList.add('youtubeLoaded');
      resolve(true);
    };
    image.onerror = function (): any {
      reject(false);
    };
    image.src = 'https://youtube.com/favicon.ico';
  });
};

export const createYoutTubeVideo = async (target, video_id): void | boolean => {
  if (typeof window.player == 'undefined') {
    window.player = [];
  }

  const link_id = target.getAttribute('id');

  if (typeof window.player[link_id] != 'undefined' && typeof window.player[link_id].pauseVideo == 'function') {
    window.player[link_id].playVideo();

    return false;
  }

  // This function creates an <iframe> (and YouTube player) after the API code downloads.
  //function onYouTubeIframeAPIReady() {

  window.player[link_id] = new YT.Player(link_id, {
    height: '100%',
    width: '100%',
    videoId: video_id,
    playerVars: {
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
  //}
  //onYouTubeIframeAPIReady();

  // The API will call this function when the video player is ready.
  function onPlayerReady(event): void {
    // Play the video straight away
    event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  // The function indicates that when playing a video (state=1)
  let done = false;
  function onPlayerStateChange(event): void {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      const link = document.getElementById(link_id);
      link.classList.add('player-ready');

      done = true;
    }
  }
};

export default videoSupport;
