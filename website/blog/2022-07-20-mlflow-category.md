---
slug: mlflow-category
title: MLflow Autolog with Category type for LightGBM
authors:
  name: Keita
  title: Senior Customer Engineer for AI/ML @Microsoft
tags: [mlflow, scikit-learn, lightgbm]
---

## Introduction

## Preparation
### Library

```python
import pandas as pd
import lightgbm as lgb
```

### Data

```python
base_df = pd.read_csv('../artifacts/sample-data/Titanic.csv')
print(base_df.dtypes) # check the data type of each column
```

### MLflow Experiment

```python
import mlflow

mlflow.set_tracking_uri("./mlflowwork")
mlflow.set_experiment(experiment_name = "mlflow-autolog-category-lightgbm")
experiment = mlflow.get_experiment_by_name("mlflow-autolog-category-lightgbm")
```

### DataFrameMapper

```python
from sklearn_pandas import DataFrameMapper
from sklearn.preprocessing import FunctionTransformer

def to_category(x):
    return x.astype('category')

categorical = ['Embarked', 'Sex']
numerical = ['Pclass', 'Age', 'SibSp', 'Parch', 'Fare']
trans = FunctionTransformer(to_category)

mapper = DataFrameMapper([([col], trans) for col in categorical], input_df=True, df_out=True, default=None)
```


## Scikit-learn Pipeline

```python
model_pipeline = Pipeline(
    steps=[
        ('preprocess', mapper), 
        ('model', lgb.LGBMClassifier())]
    )
```

## MLflow Autolog

```python
with mlflow.start_run(experiment_id=experiment.experiment_id):
    
    mlflow.sklearn.autolog()

    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.pipeline import Pipeline
    from sklearn.preprocessing import MinMaxScaler

    cols = ['Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked', 'Sex', 'Survived']
    df = base_df[cols].dropna().copy()

    X_train, X_test, y_train, y_test = train_test_split(df.drop('Survived', axis=1), df['Survived'], test_size=0.3, random_state=123)
    model_pipeline = Pipeline(
        steps=[
            ('preprocess', mapper), 
            ('model', lgb.LGBMClassifier())]
        )
    # fit model
    model_pipeline.fit(X_train, y_train)

```

## MLflow UI


```bash
mlflow ui  --backend-store-uri ./mlflowwork
```

## Summary