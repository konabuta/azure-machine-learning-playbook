"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3987],{8575:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"mlflow-category","metadata":{"permalink":"/azure-machine-learning-playbook/blog/mlflow-category","editUrl":"https://github.com/konabuta/azure-machine-learning-playbook/blog/2022-07-20-mlflow-category.md","source":"@site/blog/2022-07-20-mlflow-category.md","title":"MLflow Autolog with Category type for LightGBM","description":"Introduction","date":"2022-07-20T00:00:00.000Z","formattedDate":"2022\u5e747\u670820\u65e5","tags":[{"label":"mlflow","permalink":"/azure-machine-learning-playbook/blog/tags/mlflow"},{"label":"scikit-learn","permalink":"/azure-machine-learning-playbook/blog/tags/scikit-learn"},{"label":"lightgbm","permalink":"/azure-machine-learning-playbook/blog/tags/lightgbm"}],"readingTime":0.865,"truncated":false,"authors":[{"name":"Keita","title":"Senior Customer Engineer for AI/ML @Microsoft"}],"frontMatter":{"slug":"mlflow-category","title":"MLflow Autolog with Category type for LightGBM","authors":{"name":"Keita","title":"Senior Customer Engineer for AI/ML @Microsoft"},"tags":["mlflow","scikit-learn","lightgbm"]},"nextItem":{"title":"Welcome","permalink":"/azure-machine-learning-playbook/blog/welcome"}},"content":"## Introduction\\n\\n## Preparation\\n### Library\\n\\n```python\\nimport pandas as pd\\nimport lightgbm as lgb\\n```\\n\\n### Data\\n\\n```python\\nbase_df = pd.read_csv(\'../artifacts/sample-data/Titanic.csv\')\\nprint(base_df.dtypes) # check the data type of each column\\n```\\n\\n### MLflow Experiment\\n\\n```python\\nimport mlflow\\n\\nmlflow.set_tracking_uri(\\"./mlflowwork\\")\\nmlflow.set_experiment(experiment_name = \\"mlflow-autolog-category-lightgbm\\")\\nexperiment = mlflow.get_experiment_by_name(\\"mlflow-autolog-category-lightgbm\\")\\n```\\n\\n### DataFrameMapper\\n\\n```python\\nfrom sklearn_pandas import DataFrameMapper\\nfrom sklearn.preprocessing import FunctionTransformer\\n\\ndef to_category(x):\\n    return x.astype(\'category\')\\n\\ncategorical = [\'Embarked\', \'Sex\']\\nnumerical = [\'Pclass\', \'Age\', \'SibSp\', \'Parch\', \'Fare\']\\ntrans = FunctionTransformer(to_category)\\n\\nmapper = DataFrameMapper([([col], trans) for col in categorical], input_df=True, df_out=True, default=None)\\n```\\n\\n\\n## Scikit-learn Pipeline\\n\\n```python\\nmodel_pipeline = Pipeline(\\n    steps=[\\n        (\'preprocess\', mapper), \\n        (\'model\', lgb.LGBMClassifier())]\\n    )\\n```\\n\\n## MLflow Autolog\\n\\n```python\\nwith mlflow.start_run(experiment_id=experiment.experiment_id):\\n    \\n    mlflow.sklearn.autolog()\\n\\n    from sklearn.model_selection import train_test_split\\n    from sklearn.linear_model import LogisticRegression\\n    from sklearn.pipeline import Pipeline\\n    from sklearn.preprocessing import MinMaxScaler\\n\\n    cols = [\'Pclass\', \'Age\', \'SibSp\', \'Parch\', \'Fare\', \'Embarked\', \'Sex\', \'Survived\']\\n    df = base_df[cols].dropna().copy()\\n\\n    X_train, X_test, y_train, y_test = train_test_split(df.drop(\'Survived\', axis=1), df[\'Survived\'], test_size=0.3, random_state=123)\\n    model_pipeline = Pipeline(\\n        steps=[\\n            (\'preprocess\', mapper), \\n            (\'model\', lgb.LGBMClassifier())]\\n        )\\n    # fit model\\n    model_pipeline.fit(X_train, y_train)\\n\\n```\\n\\n## MLflow UI\\n\\n\\n```bash\\nmlflow ui  --backend-store-uri ./mlflowwork\\n```\\n\\n## Summary"},{"id":"welcome","metadata":{"permalink":"/azure-machine-learning-playbook/blog/welcome","editUrl":"https://github.com/konabuta/azure-machine-learning-playbook/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/azure-machine-learning-playbook/blog/tags/facebook"},{"label":"hello","permalink":"/azure-machine-learning-playbook/blog/tags/hello"},{"label":"docusaurus","permalink":"/azure-machine-learning-playbook/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"MLflow Autolog with Category type for LightGBM","permalink":"/azure-machine-learning-playbook/blog/mlflow-category"},"nextItem":{"title":"MDX Blog Post","permalink":"/azure-machine-learning-playbook/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/azure-machine-learning-playbook/blog/mdx-blog-post","editUrl":"https://github.com/konabuta/azure-machine-learning-playbook/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"docusaurus","permalink":"/azure-machine-learning-playbook/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/azure-machine-learning-playbook/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/azure-machine-learning-playbook/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/azure-machine-learning-playbook/blog/long-blog-post","editUrl":"https://github.com/konabuta/azure-machine-learning-playbook/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"2019\u5e745\u670829\u65e5","tags":[{"label":"hello","permalink":"/azure-machine-learning-playbook/blog/tags/hello"},{"label":"docusaurus","permalink":"/azure-machine-learning-playbook/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/azure-machine-learning-playbook/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/azure-machine-learning-playbook/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/azure-machine-learning-playbook/blog/first-blog-post","editUrl":"https://github.com/konabuta/azure-machine-learning-playbook/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"hola","permalink":"/azure-machine-learning-playbook/blog/tags/hola"},{"label":"docusaurus","permalink":"/azure-machine-learning-playbook/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/azure-machine-learning-playbook/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);