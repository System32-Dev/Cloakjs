class TabCloak {
  constructor(config) {
    this.config = config;
    this.originalTitle = document.title;
  }

  async title() {
    var url = location.protocol + "//textance.herokuapp.com/title/" + this.config.url;
    var response = await fetch(url);
    var title = await response.text();
    return title;
  }

  favicon() {
    var url = `${location.protocol}//www.google.com/s2/favicons?domain=${this.config.url}&sz=128`;
    return url;
  }

  main() {
    // Favicon
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = this.favicon();
    // Title
    document.title = this.title();
    return {
      title: await this.title(),
      favicon: this.favicon()
    }
  }
}
