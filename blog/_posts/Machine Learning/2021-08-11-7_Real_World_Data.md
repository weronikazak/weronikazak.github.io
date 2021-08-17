---
layout: post
title:  "Real World Data"
date:   2021-04-22 16:10:35 +0100
categories: 
- machine learning
description: "Coding in Python with focus on machine learning algorithms and techniques. Confusion Matrix, Measuring Classifiers, Precision, Recall, ROC Curve, Bias and Variance, K-Fold Validation, Outliers, Unbalanced Data, SMOTE, Binning, Transforming, Encoding, Normalization."
image: 'images/posts/Machine Learning/realdata/realdata.png'

---

### Confusion Matrix

<center>
<img src="/images/posts/Machine Learning/realdata/1.PNG">
</center>

### Measuring Classifiers

<center>
<img src="/images/posts/Machine Learning/realdata/2.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/3.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/4.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/5.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/6.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/7.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/9.PNG">
</center>

### Bias and Variance

**BIAS** is how far removed the mean of your predicted values is from the "real" answer.

**VARIANCE** is how scattered your predicted values are from the "real" answer.

<center>
<img src="/images/posts/Machine Learning/realdata/10.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/11.PNG">
</center>

1. low variance relative to these observations and high bias

2. high variance, low bias

<center>
<img src="/images/posts/Machine Learning/realdata/12.PNG">
</center>

Increasing K in **K-Nearest-Neighbors** decreases variance and increases bias (by averaging together more neighbors)

A single **decision tree** is prone to overfitting - high variance
- but a random forest decreases that variance

### K-Fold Cross Validation

- split your data into K randomly-assigned segments
- reserve one segment as your test data
- train on the combined remaining K-1 segments and measure performance against the test set
- repeat for each segment
- take the average of the K-squared scores


```python
import numpy as np
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn import datasets
from sklearn import svm

iris = datasets.load_iris()
```


```python
X_train, X_test, Y_train, Y_test = train_test_split(iris.data, iris.target, test_size=0.4, random_state=0) 

clf = svm.SVC(kernel="linear", C=1).fit(X_train, Y_train)

clf.score(X_test, Y_test)
```




    0.9666666666666667




```python
scores = cross_val_score(clf, iris.data, iris.target, cv=5)

scores
```




    array([0.96666667, 1.        , 0.96666667, 0.96666667, 1.        ])




```python
scores.mean()
```




    0.9800000000000001




```python
clf = svm.SVC(kernel="poly", C=1).fit(X_train, Y_train)

clf.score(X_test, Y_test)
```




    0.9



### Dealing with Outliers


```python
import matplotlib.pyplot as plt

incomes = np.random.normal(27000, 15000, 10000)
incomes = np.append(incomes, [1000000000])

plt.hist(incomes, 50)
plt.show()
```


![png](/images/posts/Machine Learning/realdata/output_25_0.png)



```python
incomes.mean()
```




    126959.41748252927




```python
def reject_outliers(data):
    u = np.median(data)
    s = np.std(data)
    filtered = [a for a in data if (u - 2 * s < a < u + 2 * s)]
    return filtered
```


```python
filtered = reject_outliers(incomes)

plt.hist(filtered, 50)
plt.show()
```


![png](/images/posts/Machine Learning/realdata/output_28_0.png)



```python
np.mean(filtered)
```




    26972.11342427752



<center>
<img src="/images/posts/Machine Learning/realdata/12.PNG">
</center>

### Data

<center>
<img src="/images/posts/Machine Learning/realdata/13.PNG">
</center>

#### OVERSAMPLING
Duplicate samples from the minrity class

Can be done at random

#### UNDERSAMPLING
Instead of creating more positive samples, remove negative ones

Throwing data away is usually not the best approach

<center>
<img src="/images/posts/Machine Learning/realdata/14.PNG">
</center>

<center>
<img src="/images/posts/Machine Learning/realdata/15.PNG">
</center>

### Binning

<center>
<img src="/images/posts/Machine Learning/realdata/16.PNG">
</center>

### Transforming

<center>
<img src="/images/posts/Machine Learning/realdata/17.PNG">
</center>

### Encoding

<center>
<img src="/images/posts/Machine Learning/realdata/18.PNG">
</center>

### Scaling / Normalization

<center>
<img src="/images/posts/Machine Learning/realdata/19.PNG">
</center>
