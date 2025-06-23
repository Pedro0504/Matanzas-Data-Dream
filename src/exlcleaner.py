import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import statsmodels.api as sm

xl = pd.read_excel("./complete.xlsx")
dt = pd.DataFrame(xl)
df = pd.DataFrame(xl)
df['Precio']= df['Precio'].astype(str).str.replace(' ', '')
df['Precio'] = pd.to_numeric(df['Precio'], errors = 'coerce')
"""

x = df['Año']

y = df['Precio']

plt.figure(figsize=(16,12))
for barrio in df['Barrio']:
    data_barrio = df[df['Barrio']==barrio]
    plt.plot(data_barrio['Año'], data_barrio['Precio'], label = barrio, alpha=0.6)

handles, labels = plt.gca().get_legend_handles_labels()
labeled = dict(zip(labels, handles))
plt.title('Diferencia de precios de viviendas por barrio (2013-2025)')
plt.legend(labeled.values(),labeled.keys(),title = 'Barrio', bbox_to_anchor=(1.05, 1), loc= 'upper left')
plt.xlabel('Año')
plt.ylabel('Precio')
plt.grid(True)
plt.tight_layout()
#plt.savefig('diferencias de precios por barrio.png', dpi= 300, bbox_inches='tight')

#plt.show()

var = df['Precio'].var()
sta = df['Precio'].std()
print("Varianza: ", var)
print("Desviación estandar: ", sta)
frec_a = df['Barrio'].value_counts()

frec_rel = df['Barrio'].value_counts(normalize= True)*100
tabla_frec = pd.DataFrame({'Frec_Abs':frec_a, 'Frec_Rel': frec_rel.round(2)})
#print(tabla_frec.head())
plt.figure(figsize=(12, 8))
tabla_frec['Frec_Rel'].plot(kind= 'bar', edgecolor = 'black')
plt.ylabel('Frecuencia relativa del Barrio (%)')
plt.xticks(rotation = 70)

plt.show()

dcb = df[['Barrio', 'Precio','Año']]
dcb_25 = dcb[dcb['Año']==2025]

dcb_mean = dcb_25.groupby('Barrio')['Precio'].mean().reset_index()
print(dcb_mean)
#print(dcb_mean.index)
print(dcb_mean.columns)
print(type(dcb_mean))
x,y = dcb_mean['Barrio'], dcb_mean['Precio']
plt.figure(figsize = (12,10))
plt.bar(x, y)
plt.xticks(rotation = 70)
plt.xlabel("Barrios")
plt.ylabel("Media precios en 2025(USD)")
plt.show()

dfr = pd.read_excel("./restnt.xlsx")
dfr = pd.DataFrame(dfr)
print(dfr.head())
rest_barrio = dfr[['Barrio', 'Capital']]
rest_barrio_gp = rest_barrio.groupby(['Barrio', 'Capital']).size().unstack()

rest_barrio_gp.plot(kind='barh', figsize=(12,8))
print(rest_barrio_gp.head())
plt.xlabel('Cantidad de negocios gastronómicos')
plt.show()

dfh = pd.read_excel('./hostal.xlsx')
dfh_dt = pd.DataFrame(dfh)

dfh_gp = dfh_dt.groupby(['Barrio', 'Capital']).size().unstack()
print(dfh_gp.head())
dfh_gp.plot(kind='barh', figsize=(12,8))

plt.xlabel('Cantidad de hostales')
plt.show()

dfcb = df.groupby('Barrio')['Total'].mean().reset_index()
print(dfcb)
plt.barh(dfcb['Barrio'], dfcb['Total'])
plt.xlabel("Cantidad de cuartos y baños")

plt.show()

dc_13 = df[['Barrio','Precio','Año']]
print(dc_13)
dcb_13 = dc_13[dc_13['Año']<=2020]
print(dcb_13)
dcb_mean_13 = dcb_13.groupby('Barrio')['Precio'].mean().reset_index()
print(dcb_mean_13)
#print(dcb_mean.index)
x,y = dcb_mean_13['Barrio'], dcb_mean_13['Precio']
plt.figure(figsize = (12,10))
plt.bar(x, y)
plt.xticks(rotation = 70)

plt.show()

dc_24 = df[['Barrio','Precio','Año']]
print(dc_24)
dcb_24 = dc_24[(dc_24['Año']>=2021)&(dc_24['Año']<=2025)]
print(dcb_24)
dcb_mean_24 = dcb_24.groupby('Barrio')['Precio'].mean().reset_index()
print(dcb_mean_24)
#print(dcb_mean.index)
x,y = dcb_mean_24['Barrio'], dcb_mean_24['Precio']
plt.figure(figsize = (12,10))
plt.bar(x, y)
plt.xticks(rotation = 70)
plt.ylabel("Media precios entre 2021-2025(USD)")

plt.show()

#Media de precios solo en 2025
dc_13 = df[['Barrio','Precio','Año']]
print(dc_13)
dcb_13 = dc_13[dc_13['Año']==2025]
print(dcb_13)
dcb_mean_13 = dcb_13.groupby('Barrio')['Precio'].mean().reset_index()
print(dcb_mean_13)
#print(dcb_mean.index)
x,y = dcb_mean_13['Barrio'], dcb_mean_13['Precio']
plt.figure(figsize = (12,10))
plt.bar(x, y)
plt.xlabel("Barrios")
plt.ylabel("Media de precios en 2025 (USD)")
plt.xticks(rotation = 70)

plt.show()


#Desviación estandar
df_13 = df[(df['Año']>=2013)&(df['Año']<=2020)]
df_Nar = df_13[df_13['Barrio']=='Naranjal']
#print(df_Nar[['Año', 'Consejo Popular', 'Precio']])
df_std_13 = df_13.groupby('Consejo Popular')['Precio'].std().reset_index()
#print(df_std_13)
df_std_13.plot(x= 'Consejo Popular', y = 'Precio', kind='bar', figsize=(10,8), legend=False)
plt.xticks(rotation=70)
plt.show()
df_25 = df[(df['Año']>=2021)&(df['Año']<=2025)]
df_Nar = df_25[df_25['Barrio']=='Naranjal']
#print(df_Nar[['Año', 'Consejo Popular', 'Precio']])
df_std_25 = df_25.groupby('Consejo Popular')['Precio'].std().reset_index()
print(df_std_25)
df_std_25.plot(x= 'Consejo Popular', y = 'Precio', kind='bar', figsize=(10,8), legend=False)
plt.xticks(rotation=70)
plt.show()


#Coeficiente de varianción
df_mean_cp = df_25.groupby('Consejo Popular')['Precio'].mean().reset_index()
df_std_25['Media']= df_mean_cp['Precio']
print(df_mean_cp)
print(df_std_25)
df_std_25['CV']= (df_std_25['Precio']/df_std_25['Media'])*100
print(df_std_25)
df_std_25.to_excel('Coeficiente de variación.xlsx')

dt_mean_year = df[['Año', 'Precio']]
evo_mean = dt_mean_year.groupby('Año')['Precio'].mean().reset_index()
print(evo_mean)
evo_mean.plot(x= 'Año', y='Precio', kind='line', figsize=(10,8), legend=False)
plt.show()


#Cálculo de precio por extensión
df_ext = df[['Total', 'Precio']]
df_ext_gp = df_ext.groupby('Total')['Precio'].mean().reset_index()
print(df_ext_gp)
df_ext_gp.plot(x='Total',y= 'Precio', kind='barh', legend= False)
plt.xlabel('Cantidad de habitaciones y baños')
plt.ylabel('Precio')
plt.show()
"""

#Value counts for every Consejo Popular

df_vc = df['Consejo Popular'].value_counts()
df_vc.to_excel('Cantidad de muestras por barrio.xlsx')
print(df_vc)

#vamos a intentar realizar una regresion lineal
df_reg = df[['Año','Precio', 'Barrio', 'Cuartos', 'Baños']]
df_reg_25 = df_reg[df_reg['Año']==2025]
#print(df_reg_25)
df_reg_25 = pd.get_dummies(df_reg_25, columns=['Barrio'], drop_first=True)


#variables independientes
X = df_reg_25[['Cuartos','Baños'] +[col for col in df_reg_25.columns if 'Barrio_' in col]]
X = sm.add_constant(X)
X = X.astype(float)

#variable dependiente
y = df_reg_25['Precio']

#print(y)
#ajustar modelo
modelo = sm.OLS(y,X).fit()

#ver resultados
print(modelo.summary())
