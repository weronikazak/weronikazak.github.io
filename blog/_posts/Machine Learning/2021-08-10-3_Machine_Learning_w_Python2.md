---
layout: post
title:  "Machine Learning with Python, Part 2"
date:   2021-04-22 16:10:35 +0100
tags:
- machine learning
description: "Coding in Python with focus on machine learning algorithms and techniques. Decision Trees, Random Forest, Ensemble Learning, CGBoost, Support Vector Machines."
image: 'images/posts/Machine Learning/mlpython2/8.PNG'

---

### Decision Tree

![image.PNG](/images/posts/Machine Learning/mlpython2/1.PNG)

![image.PNG](/images/posts/Machine Learning/mlpython2/2.PNG)


```python
import numpy as no
import pandas as pd
from sklearn import tree

df = pd.read_csv("data/PastHires.csv")
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Years Experience</th>
      <th>Employed?</th>
      <th>Previous employers</th>
      <th>Level of Education</th>
      <th>Top-tier school</th>
      <th>Interned</th>
      <th>Hired</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>10</td>
      <td>Y</td>
      <td>4</td>
      <td>BS</td>
      <td>N</td>
      <td>N</td>
      <td>Y</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>N</td>
      <td>0</td>
      <td>BS</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7</td>
      <td>N</td>
      <td>6</td>
      <td>BS</td>
      <td>N</td>
      <td>N</td>
      <td>N</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2</td>
      <td>Y</td>
      <td>1</td>
      <td>MS</td>
      <td>Y</td>
      <td>N</td>
      <td>Y</td>
    </tr>
    <tr>
      <th>4</th>
      <td>20</td>
      <td>N</td>
      <td>2</td>
      <td>PhD</td>
      <td>Y</td>
      <td>N</td>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>




```python
d = {"Y":1, "N":0}
df["Hired"] = df["Hired"].map(d)
df["Hired"]
```




    0     1
    1     1
    2     0
    3     1
    4     0
    5     1
    6     1
    7     1
    8     1
    9     0
    10    0
    11    1
    12    1
    Name: Hired, dtype: int64




```python
df["Employed?"] = df["Employed?"].map(d)
df["Top-tier school"] = df["Top-tier school"].map(d)
df["Interned"] = df["Interned"].map(d)
```


```python
d = {"BS":0, "MS":1, "PhD":2}
df["Level of Education"] = df["Level of Education"].map(d)
```


```python
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Years Experience</th>
      <th>Employed?</th>
      <th>Previous employers</th>
      <th>Level of Education</th>
      <th>Top-tier school</th>
      <th>Interned</th>
      <th>Hired</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>10</td>
      <td>1</td>
      <td>4</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7</td>
      <td>0</td>
      <td>6</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>20</td>
      <td>0</td>
      <td>2</td>
      <td>2</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>




```python
features = list(df.columns[:6])
features
```




    ['Years Experience',
     'Employed?',
     'Previous employers',
     'Level of Education',
     'Top-tier school',
     'Interned']




```python
y = df["Hired"]
X = df[features]

clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, y)
```


```python
from IPython.display import Image
from sklearn.externals.six import StringIO
import pydotplus as pydot
```


```python
# !pip install pydotplus
```


```python
# dot_data = StringIO()
# tree.export_graphviz(clf, out_file=dot_data, feature_names=features)
# graph = pydot.graph_from_dot_data(dot_data.getvalue())
# Image(graph.create_png())
```


```python
from sklearn.ensemble import RandomForestClassifier
import numpy as np

clf = RandomForestClassifier(n_estimators = 10)
clf = clf.fit(X, y)
```


```python
clf.predict(np.array([10, 1, 4, 0, 0, 0]).reshape(1, -1))
```




    array([1], dtype=int64)




```python
clf.predict(np.array([10, 0, 4, 0, 0, 0]).reshape(1, -1))
```




    array([0], dtype=int64)



### Ensemble Learning

Random Forests was an example of ensemble learning.

It just means we use models to try and solve the same roblem, and let them vote on the results.

![image.PNG](/images/posts/Machine Learning/mlpython2/3.PNG)

![image.PNG](/images/posts/Machine Learning/mlpython2/4.PNG)

### CGBoost

eXtreme Gradient Boosted Trees

Remember, boosting is an ensemble method
    - each tree boosts attributes that let to misclassifications of previous tree

More facts:
    - routinely winds Kaggle competitions
    - easy to use and fast

![image.PNG](/images/posts/Machine Learning/mlpython2/5.PNG)

![image.PNG](/images/posts/Machine Learning/mlpython2/6.PNG)


```python
from sklearn.datasets import load_iris

iris = load_iris()

numSamples, numFeatures = iris.data.shape
```


```python
numSamples, numFeatures
```




    (150, 4)




```python
iris.target_names
```




    array(['setosa', 'versicolor', 'virginica'], dtype='<U10')




```python
from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=1)
# with random_state=0, the accuracy_score is equal 1.0
```


```python
import xgboost as xgb

train = xgb.DMatrix(X_train, label=Y_train)
test = xgb.DMatrix(X_test, label=Y_test)
```


```python
param = {
    "max_depth":3,
    "eta":0.3,
    "objective":"multi:softmax",
    "num_class":3
}

epochs=10
```


```python
model = xgb.train(param, train, epochs)
```


```python
predictions = model.predict(test)
predictions
```




    array([0., 1., 1., 0., 2., 1., 2., 0., 0., 2., 1., 0., 2., 1., 1., 0., 1.,
           1., 0., 0., 1., 1., 2., 0., 2., 1., 0., 0., 1., 2.], dtype=float32)




```python
from sklearn.metrics import accuracy_score

accuracy_score(Y_test, predictions)
```




    0.9666666666666667



### Support Vector Machines

![image.PNG](/images/posts/Machine Learning/mlpython2/6.PNG)

The important point is that SVM's employ some advanced mathematical trickery to cluster data, and it can handle datasets with lots of features.

It's also fairly expensive - the "kernel trick" is the only thing that makes it possible.

![image.PNG](/images/posts/Machine Learning/mlpython2/7.PNG)


```python
def createClusteredData(N, k):
    np.random.seed(2020)
    pointsPerCluster = float(N)/k
    X, y = [], []
    for i in range(k):
        incomeCentroid = np.random.uniform(2000., 200000.)
        ageCentroid = np.random.uniform(20.0, 70.)
        for j in range(int(pointsPerCluster)):
            X.append([np.random.normal(incomeCentroid, 10000.), 
                      np.random.normal(ageCentroid, 2.0)])
            y.append(i)
    X = np.array(X)
    y = np.array(y)
    return X, y
```


```python
from pylab import *
from sklearn.preprocessing import MinMaxScaler
```


```python
(X, y) = createClusteredData(100, 4)

plt.figure(figsize=(8, 6))
plt.scatter(X[:, 0], X[:, 1], c=y.astype(np.float))
plt.show()
```


![png](/images/posts/Machine Learning/mlpython2/output_39_0.png)



```python
scaling = MinMaxScaler(feature_range=(-1, 1)).fit(X)
X = scaling.transform(X)

plt.figure(figsize=(8, 6))
plt.scatter(X[:, 0], X[:, 1], c=y.astype(np.float))
plt.show()
```


![png](/images/posts/Machine Learning/mlpython2/output_40_0.png)



```python
from sklearn import svm, datasets

C = 1.0
svc = svm.SVC(kernel="linear", C=C).fit(X, y)
```


```python
def plotPredictions(clf):
    # create a dense grid of points to sample
    xx, yy = np.meshgrid(np.arange(-1, 1, .001),
                        np.arange(-1, 1, .001))
    # convert to Numpy arrays
    npx = xx.ravel()
    npy = yy.ravel()
    
    # convert to aa list of 2D (income, age) points
    samplePoints = np.c_[npx, npy]
    
    # Generte predicted labels (cluster numbers) for each point
    Z = clf.predict(samplePoints)
    
    plt.figure(figsize=(8, 6))
    Z = Z.reshape(xx.shape) # reshape results to match xx dimension
    plt.contourf(xx, yy, Z, cmap=plt.cm.Paired, alpha=0.8) # draw the contour
    plt.scatter(X[:, 0], X[:, 1], c=y.astype(np.float))
    plt.show()
```


```python
plotPredictions(svc)
```


![png](/images/posts/Machine Learning/mlpython2/output_43_0.png)



```python
svc.predict(scaling.transform([[20000, 40]]))
```




    array([2])




```python
svc.predict(scaling.transform([[5000, 65]]))
```




    array([1])

