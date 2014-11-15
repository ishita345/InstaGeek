import urllib,json
import re
from pprint import pprint

def linkedin(url,allblogs):
    response = urllib.urlopen(url);
    data = json.loads(response.read())
    #allblogs = []
    for result in data["results"]:
        blog ={ }
        blog['title'] = result["article_title_link/_text"]
        blog['url'] = result["read_more_link"]
        blog['date']=result["date_date/_source"]
        blog['tags']=result["tag_link_list/_text"]
        if not isinstance(blog['tags'], list):
            blog['tags']=[result["tag_link_list/_text"]]
        blog['company']= "linkedin"
       # print(result["username_link/_text"])      #Name of person
       # print(result["text_1"])                   #Designation
        allblogs.append(blog)
    #return allblogs

def facebook(url,allblogs):
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    #allblogs = []
    for result in data["results"]:
        blog={}
        blog['title'] = result["link_1/_text"]
        blog['url'] = result["link_1"]
        blog['date']=result["text_3"]
        blog['tags'] = result["uicollapsedlistmiddot_text_list"]
        if not isinstance(blog['tags'], list):
            blog['tags'] = [result["uicollapsedlistmiddot_text_list"]]
        blog['company'] = "facebook"
        #print(result["text_1"])                 #Name of person
        #print(result["text_2"])                 #Designation
        allblogs.append(blog)
    #return allblogs

def twitter(url, allblogs):
    response = urllib.urlopen(url)
    data = json.loads(response.read())
#    allblogs = []
    for result in data["results"]:
        blog={}
        blog['title']=result["link_1/_text"]
        blog['url']=result["link_1"]
        blog['date']=result["date_text"]
        #print(result["html_1"])                 #Name of person
        tags = re.sub('/tags/', '',result["links_link/_source"])
        blog['tags'] = tags
        if not isinstance(blog['tags'], list):
            blog['tags'] = [tags]
        blog['company'] ="twitter"
        allblogs.append(blog)
    #return allblogs

def main(companies):
    company_list = companies.split(",")
    allblogs= []
    for company in company_list:
        if company == "linkedin":
            url ="https://api.import.io/store/data/0fa7dfad-144e-41d1-bd5f-cdfdc1d8ff20/_query?input/webpage/url=http%3A%2F%2Fengineering.linkedin.com%2Fblog&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            linkedin(url,allblogs);

        if company == "facebook":
            url = "https://api.import.io/store/data/76817775-bd57-4b75-8ffb-193a18d4b4a4/_query?input/webpage/url=https%3A%2F%2Fcode.facebook.com%2Fposts%2F&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            facebook(url,allblogs);

        if company == "twitter":
            url="https://api.import.io/store/data/53745b3c-b0c8-464a-872d-4a2d2446f0ee/_query?input/webpage/url=https%3A%2F%2Fblog.twitter.com%2Fengineering&_user=ff472fbc-7f37-459c-8960-0ffa35680dd4&_apikey=qe6rYhu1LR4n6Ib5tUFibaosAkWTdgSH72MkkJy9LrsSG7AiuRf74wWmUN4z3yG7shyGU1%2FnmQn09TmQX3albQ%3D%3D"
            twitter(url, allblogs)

    print json.dumps(allblogs)
    return allblogs
#main("linkedin,facebook")
