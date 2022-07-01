/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  azuremlSidebar: [
    'azureml-front',
    {
      type: 'category',
      label: 'AzureML - Fundamentals',
      items:[
        {
          type: 'autogenerated',
          dirName: 'azureml/fundamentals',
        }
      ]
    },
    {
      type: 'category',
      label: 'AzureML - Enterprise Deployment',
      items:[
        {
          type: 'autogenerated',
          dirName: 'azureml/enterprise-deployment',
        }
      ]
    },
    {
      type: 'category',
      label: 'AzureML - MLOps',
      items:[
        {
          type: 'autogenerated',
          dirName: 'azureml/mlops',
        }
      ]
    },
    {
      type: 'category',
      label: 'AzureML - Responsible AI',
      items:[
        {
          type: 'autogenerated',
          dirName: 'azureml/responsible-ai',
        }
      ]
    },
  ],

  tutorialSidebar:[
    {
      type: 'category',
      label: 'Docusaurus - Tutorials',
      items:[
        {
          type: 'autogenerated',
          dirName: 'docusaurus-tutorials',
        }
      ]
    },
  ]

};

module.exports = sidebars;
