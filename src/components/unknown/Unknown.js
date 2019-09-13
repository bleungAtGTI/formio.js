import Component from '../_classes/component/Component';

export default class UnknownComponent extends Component {
  static schema() {
    return {
      type: 'custom',
      key: 'custom',
      protected: false,
      persistent: true
    };
  }

  static get builderInfo() {
    return null;
  }

  get defaultSchema() {
    return UnknownComponent.schema();
  }
}
