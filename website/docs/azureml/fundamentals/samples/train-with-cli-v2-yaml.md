---
id: train-with-cli-v2-yaml
---

# モデル学習 (CLI v2 + YAML)

## コマンド
Azure ML CLI v2 を利用します。予め作成した YAML ファイルを引数にしてコマンドを実行します。

```bash
az ml job create --file train-model.yml
```

## コード
### YAML
実験の設定を YAML ファイルに記述します。

**train-model.yml**

```yaml
$schema: https://azuremlschemas.azureedge.net/latest/commandJob.schema.json
code: ../src/model
command: >-
  python train.py --reg_rate ${{inputs.reg_rate}} --training_data ${{inputs.training_data}}
inputs:
  training_data:
    type: uri_folder
    path: azureml:diabetes-folder@latest
  reg_rate: 0.01
environment: azureml:AzureML-sklearn-0.24-ubuntu18.04-py37-cpu@latest
compute: azureml:cpu-cluster
experiment_name: train-model
description: train model using Logistic Regressions
```

### Python
`model` フォルダ配下に 2 つの Python スクリプト `train.py`, `helper.py` がある想定です。

**train.py**

```python
import argparse

import mlflow
from helper import get_csvs_df
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split


# define functions
def main(args):
    # TO DO: enable autologging
    mlflow.autolog()

    # read data
    df = get_csvs_df(args.training_data)

    # split data
    X_train, X_test, y_train, y_test = split_data(df)

    # train model
    train_model(args.reg_rate, X_train, X_test, y_train, y_test)


# split data
def split_data(df):
    X, y = (
        df[
            [
                "Pregnancies",
                "PlasmaGlucose",
                "DiastolicBloodPressure",
                "TricepsThickness",
                "SerumInsulin",
                "BMI",
                "DiabetesPedigree",
                "Age",
            ]
        ].values,
        df["Diabetic"].values,
    )
    return train_test_split(X, y, test_size=0.30, random_state=0)


def train_model(reg_rate, X_train, X_test, y_train, y_test):
    # train model
    LogisticRegression(C=1 / reg_rate, solver="liblinear").fit(X_train, y_train)


def parse_args():
    # setup arg parser
    parser = argparse.ArgumentParser()

    # add arguments
    parser.add_argument("--training_data", dest="training_data", type=str)
    parser.add_argument("--reg_rate", dest="reg_rate", type=float, default=0.01)

    # parse args
    args = parser.parse_args()

    # return args
    return args


# run script
if __name__ == "__main__":
    # add space in logs
    print("\n\n")
    print("*" * 60)

    # parse args
    args = parse_args()

    # run main function
    main(args)

    # add space in logs
    print("*" * 60)
    print("\n\n")
```

**helper.py**

```python
import glob
import os

import pandas as pd


def get_csvs_df(path):
    if not os.path.exists(path):
        raise RuntimeError(f"Cannot use non-existent path provided: {path}")
    csv_files = glob.glob(f"{path}/*.csv")
    if not csv_files:
        raise RuntimeError(f"No CSV files found in provided data path: {path}")
    return pd.concat((pd.read_csv(f) for f in csv_files), sort=False)
```


## 参考情報
- [CLI (v2) のインストールと設定](https://docs.microsoft.com/ja-JP/azure/machine-learning/how-to-configure-cli?tabs=public)
- [CLI (v2) を使用したモデルをトレーニングする](https://docs.microsoft.com/ja-jp/azure/machine-learning/how-to-train-cli)
- [Azure Machine Learning examples](https://github.com/Azure/azureml-examples)