import SelectComponent from '../select/Select';

export default class ResourceComponent extends SelectComponent {
  static schema(...extend) {
    return SelectComponent.schema({
      type: 'resource',
      label: 'Resource',
      key: 'resource',
      dataSrc: 'resource',
      resource: '',
      project: '',
      template: '<span>{{ item.data }}</span>',
    }, ...extend);
  }

  static get builderInfo() {
    return null;
  }

  init() {
    super.init();
    this.component.dataSrc = 'resource';
    this.component.data = {
      resource: this.component.resource,
    };
  }

  get defaultSchema() {
    return ResourceComponent.schema();
  }
}
