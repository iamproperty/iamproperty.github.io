type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

function createDataLayer(): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Pageview",
    pageTitle: document.title,
  });

  document.addEventListener("click", (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>("[open] summary");

    if (target) {
      window.dataLayer.push({
        event: "closeDetails",
        detailsTitle: target.textContent || "",
      });
    } else {
      const summary = (event.target as HTMLElement).closest<HTMLElement>("summary");
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>("button");

      if (summary) {
        window.dataLayer.push({
          event: "openDetails",
          detailsTitle: summary.textContent || "",
        });
      }

      if (link) {
        window.dataLayer.push({
          event: "linkClicked",
          linkText: link.hasAttribute("title") ? link.getAttribute("title") || "" : link.textContent || "",
          class: link.hasAttribute("class") ? link.getAttribute("class") || "" : "",
          href: link.getAttribute("href") || "",
        });
      }

      if (button) {
        window.dataLayer.push({
          event: "buttonClicked",
          buttonText: button.textContent || "",
          class: button.hasAttribute("class") ? button.getAttribute("class") || "" : "",
        });
      }
    }
  });
}

export default createDataLayer;