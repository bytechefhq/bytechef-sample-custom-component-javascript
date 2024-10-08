definition = {
  name: 'sampleCustomComponentJavaScript',
  title: 'Sample custom component title',
  description: 'Sample custom component description.',
  version: 1,
  actions: [
    {
      name: 'sampleAction1',
      title: 'Sample action 1',
      perform: () => {
        console.log('Sample action 1');

        return 'Sample action 1';
      }
    }
  ]
}