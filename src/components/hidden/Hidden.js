import Input from '../_classes/input/Input';

export default class HiddenComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'hidden',
      tableView: false,
      inputType: 'hidden'
    }, ...extend);
  }

  static get builderInfo() {
    return null;
  }

  get defaultSchema() {
    return HiddenComponent.schema();
  }

  get inputInfo() {
    const info = super.elementInfo();
    info.type = 'input';
    info.attr.type = 'hidden';
    info.changeEvent = 'change';
    return info;
  }

  labelIsHidden() {
    return true;
  }

  get emptyValue() {
    return '';
  }

  setValue(value, flags) {
    return this.updateValue(value, flags);
  }

  getValue() {
    return this.dataValue;
  }
}
