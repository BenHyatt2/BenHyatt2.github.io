#Obtain the link to the most recent press release
website = "https://www.whitehouse.gov/briefing-room/presidential-actions/"
source=requests.get(website).text
soup=BeautifulSoup(source,'html5lib')
link=soup.find('a',class_='news-item__title acctext--con').get('href')

#Only for testing (to see if other elements work)!
#links=soup.findAll('a',class_='news-item__title acctext--con')
#n=0
#for element in links:
#  if(n==4):
#    link=element.get('href')
#  n=n+1

#Get text from newest release
source=requests.get(link).text
soup=BeautifulSoup(source,'html5lib')
body=soup.find("section", { "class" : "body-content" }) #This class is where the content is stored
children = body.findChildren("p",attrs={'class': None}, recursive=True) #If the paragraph has a class, then it's just Biden's signature
str=""
for child in children:
    str=str+child.getText()
str=" ".join(str.split()) #Remove extra tabs and whitespace
print(str)
