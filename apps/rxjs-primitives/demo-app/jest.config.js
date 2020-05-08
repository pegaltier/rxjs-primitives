module.exports = {
  name: 'rxjs-primitives-demo-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/rxjs-primitives/demo-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
