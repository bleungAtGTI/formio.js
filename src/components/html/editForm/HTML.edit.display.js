export default [
  {
    key: 'label',
    ignore: true
  },
  {
    key: 'tableView',
    ignore: true
  },
  {
    key: 'labelPosition',
    ignore: true
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'description',
    ignore: true
  },
  {
    key: 'tooltip',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'disabled',
    ignore: true
  },
  {
    key: 'alwaysEnabled',
    ignore: true
  },
  {
    key: 'tabindex',
    ignore: true
  },
  {
    type: 'textarea',
    input: true,
    editor: 'quill',
    rows: 10,
    as: 'html',
    label: 'Content',
    tooltip: 'The content of this HTML element.',
    defaultValue: '<div class="well">Content</div>',
    key: 'content',
    weight: 80
  },
];
