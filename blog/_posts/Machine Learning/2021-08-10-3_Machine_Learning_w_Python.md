---
layout: post
title:  "Machine Learning with Python, Part 1"
date:   2021-04-21 16:10:35 +0100
categories: 
- machine learning
description: "Coding in Python with focus on machine learning algorithms and techniques. Train / test split, Bayesian Methods, Naive Bayes, K-Means Clustering, Entropy."
image: 'images/posts/Machine Learning/mlpython/kmeans.png'

---

### Train / Test split


```python
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(2020)
```


```python
pageSpeed = np.random.normal(3.0, 1.0, 100)
purchaseAmount = np.random.normal(50.0, 30.0, 100)

plt.scatter(pageSpeed, purchaseAmount)
plt.show()
```


![png](/images/posts/Machine Learning/mlpython/output_2_0.png)



```python
trainX = pageSpeed[:80]
testX = pageSpeed[80:]

trainy = purchaseAmount[:80]
testy = purchaseAmount[80:]
```


```python
plt.scatter(trainX, trainy)
plt.show()
```


![png](/images/posts/Machine Learning/mlpython/output_4_0.png)



```python
x = np.array(trainX)
y = np.array(trainy)

p4 = np.poly1d(np.polyfit(x, y, 8))
```


```python
xp = np.linspace(0, 7, 100)
axes = plt.axes()
axes.set_xlim([0, 7])
axes.set_ylim([0, 200])
plt.scatter(x, y)
plt.plot(xp, p4(xp), c="r")
plt.show()
```


![png](/images/posts/Machine Learning/mlpython/output_6_0.png)



```python
testx = np.array(testX)
testy = np.array(testy)

axes = plt.axes()
axes.set_xlim([0, 7])
axes.set_ylim([0, 200])
plt.scatter(testx, testy)
plt.plot(xp, p4(xp), c="r")
plt.show()
```


![png](/images/posts/Machine Learning/mlpython/output_7_0.png)



```python
from sklearn.metrics import r2_score

r2 = r2_score(testy, p4(testx))
r2
```




    -0.12120962193840445




```python
r2 = r2_score(np.array(trainy), p4(np.array(trainX)))
r2
```




    0.055981669130389156



### Bayesian Methods

![image.png](/images/posts/Machine Learning/mlpython/1.png)

![image.png](/images/posts/Machine Learning/mlpython/2.png)

### Naive Bayes


```python
import os
import io
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pandas as pd
```


```python
def readFiles(path):
    for r, dirname, filenames in os.walk(path):
        for filename in filenames:
            path = os.path.join(r, filename)
            
            inBody = False
            lines = []
            f = io.open(path, 'r', encoding="latin1")
            for line in f:
                if inBody:
                    lines.append(line)
                elif line =="\n":
                    inBody = True
            f.close()
            message = '\n'.join(lines)
            yield message

def dfFromDirectory(path, classification):
    rows = []
    for message in readFiles(path):
        rows.append({"message":message, "class":classification})
    
    return pd.DataFrame(rows)
```


```python
df = pd.DataFrame({"message":[], "class":[]})
df = df.append(dfFromDirectory("emails/spam", "spam"))
df = df.append(dfFromDirectory("emails/ham", "ham"))
df
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
      <th>message</th>
      <th>class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Tr...</td>
      <td>spam</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1) Fight The Risk of Cancer!\n\nhttp://www.adc...</td>
      <td>spam</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1) Fight The Risk of Cancer!\n\nhttp://www.adc...</td>
      <td>spam</td>
    </tr>
    <tr>
      <th>3</th>
      <td>##############################################...</td>
      <td>spam</td>
    </tr>
    <tr>
      <th>4</th>
      <td>I thought you might like these:\n\n1) Slim Dow...</td>
      <td>spam</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>2495</th>
      <td>Man killed 'trying to surf' on Tube train \n\n...</td>
      <td>ham</td>
    </tr>
    <tr>
      <th>2496</th>
      <td>Hi Gianni,\n\n\n\nA very good resource for thi...</td>
      <td>ham</td>
    </tr>
    <tr>
      <th>2497</th>
      <td>Gianni Ponzi wrote:\n\n&gt; I have a prob when tr...</td>
      <td>ham</td>
    </tr>
    <tr>
      <th>2498</th>
      <td>Neale Pickett &lt;neale@woozle.org&gt; writes:\n\n\n...</td>
      <td>ham</td>
    </tr>
    <tr>
      <th>2499</th>
      <td>\n\nHi,\n\n\n\nI think you need to give us a l...</td>
      <td>ham</td>
    </tr>
  </tbody>
</table>
<p>3000 rows × 2 columns</p>
</div>




```python
vectorizer = CountVectorizer()
counts = vectorizer.fit_transform(df["message"].values)
```


```python
classifier = MultinomialNB()
targets = df["class"].values
classifier.fit(counts, targets)
```




    MultinomialNB(alpha=1.0, class_prior=None, fit_prior=True)




```python
examples = ["DISCOUNT ON THE NEWEST GUCCI FASHION", "Hi, wassup, are yu free tomorrow?"]
example_counts = vectorizer.transform(examples)
predictions = classifier.predict(example_counts)
predictions
```




    array(['spam', 'ham'], dtype='<U4')



### K-Means Clustering

![image.png](/images/posts/Machine Learning/mlpython/3.png)


```python
def createClusteredData(N, k):
    np.random.seed(2020)
    pointsPerCluster = float(N)/k
    X = []
    for i in range(k):
        incomeCentroid = np.random.uniform(2000., 200000.)
        ageCentroid = np.random.uniform(20.0, 70.)
        for j in range(int(pointsPerCluster)):
            X.append([np.random.normal(incomeCentroid, 10000.), 
                      np.random.normal(ageCentroid, 2.0)])
    X = np.array(X)
    return X
```


```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import scale

data = createClusteredData(100, 5)

model = KMeans(n_clusters=5)
model = model.fit(scale(data))
```


```python
model.labels_
```




    array([4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 3, 3,
           3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
           2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 1, 1, 1,
           1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1])




```python
plt.figure(figsize=(8, 6))
plt.scatter(data[:, 0], data[:, 1], c=model.labels_.astype(np.float))
plt.show()
```


![png](/images/posts/Machine Learning/mlpython/output_25_0.png)


### Entropy

![image.png](/images/posts/Machine Learning/mlpython/4.png)

![image.png](/images/posts/Machine Learning/mlpython/5.png)
