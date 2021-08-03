---
layout: post
title:  "Predictive Models"
date:   2021-05-16 16:10:35 +0100
categories: "machine learning"
description: "TO WRITE."
image: 'images/blog/beginner.jpg'

---
### Linear Regression

![image.png](attachment:image.png)

Least squares minimizes the sum of squared errors

This is the same as maximizing the likelihood of observed data if you start thinking of the problem in terms of probabilities and probability distribution functions

Sometimes called "maximum likelihood estimation"


```python
import numpy as np
import matplotlib.pyplot as plt

pageSpeed = np.random.normal(3.0, 1.0, 1000)
purchaseAmount = 100 - (pageSpeed + np.random.normal(0, 0.1, 1000)) * 3

plt.scatter(pageSpeed, purchaseAmount)
plt.show()
```


![png](output_3_0.png)



```python
from scipy import stats

slope, intercept, r_value, p_value, std_err = stats.linregress(pageSpeed, purchaseAmount)
```

R squared value shows a really good fit


```python
r_value ** 2
```




    0.9902693736994506




```python
def predict(x):
    return slope * x + intercept

fitline = predict(pageSpeed)

plt.scatter(pageSpeed, purchaseAmount)
plt.plot(pageSpeed, fitline, c="r")
plt.show()
```


![png](output_7_0.png)


### Polynomial Regression


![image.png](attachment:image.png)

![image.png](attachment:image.png)


```python
np.random.seed(2020)

pageSpeed = np.random.normal(3.0, 1.0, 1000)
purchaseAmount = np.random.normal(50.0, 10.0, 1000) / pageSpeed

plt.scatter(pageSpeed, purchaseAmount)
plt.show()
```


![png](output_11_0.png)



```python
x = np.array(pageSpeed)
y = np.array(purchaseAmount)

p4 = np.poly1d(np.polyfit(x, y, 4))
```


```python
p4
```




    poly1d([   2.43355681,  -33.88400278,  168.02869346, -354.05850288,
            286.61089763])




```python
xp = np.linspace(0, 7, 100)
plt.scatter(x, y)
plt.plot(xp, p4(xp), c="r")
plt.show()
```


![png](output_14_0.png)



```python
from sklearn.metrics import r2_score

r2 = r2_score(y, p4(x))
r2
```




    0.6980067595161712



### Multiple regression

![image.png](attachment:image.png)

![image.png](attachment:image.png)


```python
import pandas as pd

df = pd.read_excel("http://cdn.sundog-soft.com/Udemy/DataScience/cars.xls")
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
      <th>Price</th>
      <th>Mileage</th>
      <th>Make</th>
      <th>Model</th>
      <th>Trim</th>
      <th>Type</th>
      <th>Cylinder</th>
      <th>Liter</th>
      <th>Doors</th>
      <th>Cruise</th>
      <th>Sound</th>
      <th>Leather</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>17314.103129</td>
      <td>8221</td>
      <td>Buick</td>
      <td>Century</td>
      <td>Sedan 4D</td>
      <td>Sedan</td>
      <td>6</td>
      <td>3.1</td>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>17542.036083</td>
      <td>9135</td>
      <td>Buick</td>
      <td>Century</td>
      <td>Sedan 4D</td>
      <td>Sedan</td>
      <td>6</td>
      <td>3.1</td>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>16218.847862</td>
      <td>13196</td>
      <td>Buick</td>
      <td>Century</td>
      <td>Sedan 4D</td>
      <td>Sedan</td>
      <td>6</td>
      <td>3.1</td>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>16336.913140</td>
      <td>16342</td>
      <td>Buick</td>
      <td>Century</td>
      <td>Sedan 4D</td>
      <td>Sedan</td>
      <td>6</td>
      <td>3.1</td>
      <td>4</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>16339.170324</td>
      <td>19832</td>
      <td>Buick</td>
      <td>Century</td>
      <td>Sedan 4D</td>
      <td>Sedan</td>
      <td>6</td>
      <td>3.1</td>
      <td>4</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>




```python
df1 = df[["Mileage", "Price"]]

bins = np.arange(0, 50000, 10000)
groups = df1.groupby(pd.cut(df1["Mileage"], bins)).mean()
```


```python
groups.head()
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
      <th>Mileage</th>
      <th>Price</th>
    </tr>
    <tr>
      <th>Mileage</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>(0, 10000]</th>
      <td>5588.629630</td>
      <td>24096.714451</td>
    </tr>
    <tr>
      <th>(10000, 20000]</th>
      <td>15898.496183</td>
      <td>21955.979607</td>
    </tr>
    <tr>
      <th>(20000, 30000]</th>
      <td>24114.407104</td>
      <td>20278.606252</td>
    </tr>
    <tr>
      <th>(30000, 40000]</th>
      <td>33610.338710</td>
      <td>19463.670267</td>
    </tr>
  </tbody>
</table>
</div>




```python
groups["Price"].plot.line()
```




    <matplotlib.axes._subplots.AxesSubplot at 0x292b9325488>




![png](output_22_1.png)



```python
import statsmodels.api as sm
from sklearn.preprocessing import StandardScaler

scale = StandardScaler()
```


```python
X = df[["Mileage", "Cylinder", "Doors"]]
y = df["Price"]
```


```python
X[["Mileage", "Cylinder", "Doors"]] = scale.fit_transform(
    X[["Mileage", "Cylinder", "Doors"]])
```

    R:\Work\Anacond\lib\site-packages\ipykernel_launcher.py:2: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      
    R:\Work\Anacond\lib\site-packages\pandas\core\indexing.py:965: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      self.obj[item] = s
    


```python
X
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
      <th>Mileage</th>
      <th>Cylinder</th>
      <th>Doors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>-1.417485</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-1.305902</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>2</th>
      <td>-0.810128</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>3</th>
      <td>-0.426058</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.000008</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>799</th>
      <td>-0.439853</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>800</th>
      <td>-0.089966</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>801</th>
      <td>0.079605</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>802</th>
      <td>0.750446</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
    <tr>
      <th>803</th>
      <td>1.932565</td>
      <td>0.52741</td>
      <td>0.556279</td>
    </tr>
  </tbody>
</table>
<p>804 rows × 3 columns</p>
</div>




```python
est = sm.OLS(y, X).fit()
est.summary()
```




<table class="simpletable">
<caption>OLS Regression Results</caption>
<tr>
  <th>Dep. Variable:</th>          <td>Price</td>      <th>  R-squared (uncentered):</th>      <td>   0.064</td> 
</tr>
<tr>
  <th>Model:</th>                   <td>OLS</td>       <th>  Adj. R-squared (uncentered):</th> <td>   0.060</td> 
</tr>
<tr>
  <th>Method:</th>             <td>Least Squares</td>  <th>  F-statistic:       </th>          <td>   18.11</td> 
</tr>
<tr>
  <th>Date:</th>             <td>Wed, 28 Oct 2020</td> <th>  Prob (F-statistic):</th>          <td>2.23e-11</td> 
</tr>
<tr>
  <th>Time:</th>                 <td>14:40:09</td>     <th>  Log-Likelihood:    </th>          <td> -9207.1</td> 
</tr>
<tr>
  <th>No. Observations:</th>      <td>   804</td>      <th>  AIC:               </th>          <td>1.842e+04</td>
</tr>
<tr>
  <th>Df Residuals:</th>          <td>   801</td>      <th>  BIC:               </th>          <td>1.843e+04</td>
</tr>
<tr>
  <th>Df Model:</th>              <td>     3</td>      <th>                     </th>              <td> </td>    
</tr>
<tr>
  <th>Covariance Type:</th>      <td>nonrobust</td>    <th>                     </th>              <td> </td>    
</tr>
</table>
<table class="simpletable">
<tr>
      <td></td>        <th>coef</th>     <th>std err</th>      <th>t</th>      <th>P>|t|</th>  <th>[0.025</th>    <th>0.975]</th>  
</tr>
<tr>
  <th>Mileage</th>  <td>-1272.3412</td> <td>  804.623</td> <td>   -1.581</td> <td> 0.114</td> <td>-2851.759</td> <td>  307.077</td>
</tr>
<tr>
  <th>Cylinder</th> <td> 5587.4472</td> <td>  804.509</td> <td>    6.945</td> <td> 0.000</td> <td> 4008.252</td> <td> 7166.642</td>
</tr>
<tr>
  <th>Doors</th>    <td>-1404.5513</td> <td>  804.275</td> <td>   -1.746</td> <td> 0.081</td> <td>-2983.288</td> <td>  174.185</td>
</tr>
</table>
<table class="simpletable">
<tr>
  <th>Omnibus:</th>       <td>157.913</td> <th>  Durbin-Watson:     </th> <td>   0.008</td>
</tr>
<tr>
  <th>Prob(Omnibus):</th> <td> 0.000</td>  <th>  Jarque-Bera (JB):  </th> <td> 257.529</td>
</tr>
<tr>
  <th>Skew:</th>          <td> 1.278</td>  <th>  Prob(JB):          </th> <td>1.20e-56</td>
</tr>
<tr>
  <th>Kurtosis:</th>      <td> 4.074</td>  <th>  Cond. No.          </th> <td>    1.03</td>
</tr>
</table><br/><br/>Warnings:<br/>[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.




```python
y.groupby(df.Doors).mean()
```




    Doors
    2    23807.135520
    4    20580.670749
    Name: Price, dtype: float64



Surprisingly more doors doesn't mean higher price.

So it's pretty useless as a predictor here.


```python
scaled = scale.transform([[45000, 8, 4]])
predicted = est.predict(scaled[0])
scaled, predicted
```




    (array([[3.07256589, 1.96971667, 0.55627894]]), array([6315.01330583]))



### Multi-Level Models

![image.png](attachment:image.png)

![image.png](attachment:image.png)


```python

```
