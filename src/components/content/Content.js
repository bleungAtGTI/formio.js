import Component from '../_classes/component/Component';

export default class ContentComponent extends Component {
  static schema(...extend) {
    return Component.schema({
      label: 'Content',
      type: 'content',
      key: 'content',
      input: false,
      html: ''
    }, ...extend);
  }

  static get builderInfo() {
    return null;
  }

  get defaultSchema() {
    return ContentComponent.schema();
  }

  get content() {
    return this.component.html ? this.interpolate(this.component.html, { data: this.data, row: this.row }) : '';
  }

  render() {
    return super.render(this.renderTemplate('html', {
      tag: 'div',
      attrs: [],
      content: this.content,
    }));
  }

  attach(element) {
    this.loadRefs(element, { html: 'single' });
    if (this.component.refreshOnChange) {
      this.on('change', () => {
        if (this.refs.html) {
          this.setContent(this.refs.html, this.content);
        }
      }, true);
    }
    return super.attach(element);
  }

  get emptyValue() {
    return '';
  }
}
