import urllib,json
import re
from pprint import pprint
def linkedin(url):
    response = urllib.urlopen(url);
    data = json.loads(response.read())
    for result in data["results"]:
        print(result["article_title_link/_text"]) #Title
        print(result["read_more_link"])           #URL
        print(result["date_date/_source"])        #Date
    #    print(result["username_link/_text"])      #Name of person
    #    print(result["text_1"])                   #Designation
        print(result["tag_link_list/_text"])      #Tags
        print("\n")

def facebook(url):
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    for result in data["results"]:
        print(result["link_1/_text"])           #Title
        print(result["link_1"])                 #URL
        print(result["text_3"])                 #Date
    #    print(result["text_1"])                 #Name of person
    #    print(result["text_2"])                 #Designation
        print(result["uicollapsedlistmiddot_text_list"]) #Tags
        print("\n")

def twitter(url):
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    for result in data["results"]:
        print(result["link_1/_text"])           #Title
        print(result["link_1"])                 #URL
        print(result["date_text"])              #Date
    #    print(result["html_1"])                 #Name of person
        tags = re.sub('/tags/', '',result["links_link/_source"])
        print(tags)     #Tags
        print("\n")

def main(companies):
    company_list = companies.split(",")
    for company in company_list:
        if company == "linkedin":
            url ="https://api.import.io/store/data/0fa7dfad-144e-41d1-bd5f-cdfdc1d8ff20/_query?input/webpage/url=http%3A%2F%2Fengineering.linkedin.com%2Fblog&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            linkedin(url);

        if company == "facebook":
            url = "https://api.import.io/store/data/76817775-bd57-4b75-8ffb-193a18d4b4a4/_query?input/webpage/url=https%3A%2F%2Fcode.facebook.com%2Fposts%2F&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            facebook(url)

        if company == "twitter":
            url="https://api.import.io/store/data/53745b3c-b0c8-464a-872d-4a2d2446f0ee/_query?input/webpage/url=https%3A%2F%2Fblog.twitter.com%2Fengineering&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            twitter(url)


#main("linkedin")
