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
    {
      type: "category",
      label: "Fundamentals",
      items: [
        "azureml/fundamentals/azure-ai",
        "azureml/fundamentals/azureml-basic",
        "azureml/fundamentals/azureml-resources-assets",
        "azureml/fundamentals/azureml-author",
        "azureml/fundamentals/azureml-api",
        {
          type: "category",
          label: "サンプル",
          link: { type: "generated-index" },
          collapsed: true,
          items: ["azureml/fundamentals/samples/train-with-cli-v2-yaml"],
        },
      ],
    },
    {
      type: "category",
      label: "Platform",
      collapsed: false,
      items: [
        "azureml/platform/select-ai-services",
        "azureml/platform/workspace-design",
        "azureml/platform/compute",
        "azureml/platform/datasource",
        "azureml/platform/network-security",
        "azureml/platform/auth",
        "azureml/platform/system-monitoring",
        "azureml/platform/cost-management",
      ],
      // items:[
      //     'azureml/platform/azureml-compute',
      //     'azureml/platform/select-ai-services',
      // ]
    },
    {
      type: "category",
      label: "MLOps",
      collapsed: false,
      items: [
        "azureml/mlops/mlops-concept",
        "azureml/mlops/mlops-practice",
        // 'azureml/mlops/ml-lifecycle',
        {
          type: "category",
          label: "MLOps 成熟度",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "azureml/mlops/mlops-maturity-concept",
            "azureml/mlops/mlops-maturity-azureml",
          ],
        },
        "azureml/mlops/notebook-to-job",
        // {
        //   type: 'category',
        //   label: 'MLOps の技術',
        //   link:{type: 'generated-index'},
        //   collapsed: true,
        //   items:[
        //     'azureml/mlops/mlops-dev-method',
        //     'azureml/mlops/mlops-architecture'
        //   ]
        // },
        // 'azureml/mlops/mlops-security',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Accerelation',
    //   items:[
    //     {
    //       type: 'autogenerated',
    //       dirName: 'azureml/acceleration',
    //     }
    //   ]
    // },
    {
      type: "category",
      label: "Responsible AI",
      collapsed: false,
      items: [
        "azureml/responsible-ai/rai-concept",
        //"azureml/responsible-ai/rai-tech-debugging",
        {
          type: "category",
          label: "モデルのデバッグ・アセスメント",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "azureml/responsible-ai/rai-interpretability-explainability",
            "azureml/responsible-ai/rai-counterfactual-explanation",
            "azureml/responsible-ai/rai-toolbox-for-debug",
          ],
        },
        "azureml/responsible-ai/rai-tech-security-privacy",
      ],
    },
  ],

  tutorialSidebar: [
    {
      type: "category",
      label: "Docusaurus - Tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "docusaurus-tutorials",
        },
      ],
    },
  ],
  fta: [
    {
      type: "category",
      label: "FasTrack for Azure",
      items: ["fta/fastrack-for-azure-aiml", "fta/ftalive"],
    },
  ],
};

module.exports = sidebars;
